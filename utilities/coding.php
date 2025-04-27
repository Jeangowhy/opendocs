<?php
exec('chcp 936');

date_default_timezone_set("Asia/Shanghai"); 

class Crypto{

	const KEYSIZE = 2048;
	const CONF = 'alipay/openssl/openssl.cnf';
	const PRIVATEKEY = "./keys/2048_private_key.pem";
	const PUBLICKEY  = "./keys/2048_public_key.pem";

	static function keygen(){
		// window系统要设置openssl环境变量或通过配置信息指定配置文件
		$conf = array(
		    'private_key_bits' => self::KEYSIZE,
		    'config' => self::CONF,
		);
		$res = openssl_pkey_new($conf);
		if( $res ) {
			$d= openssl_pkey_get_details($res);
			$pub = $d['key'];
			$bits = $d['bits'];
			$filepath = $bits.'_rsa_private_key.pem';
			openssl_pkey_export($res, $pri, null, $conf);
			openssl_pkey_export_to_file($res, $filepath, null, $conf);
			print_r(["private_key"=>$pri, "public_key"=>$pub, "keysize"=>$bits]);
		}else echo "openssl_pkey_new falls";
	}

	static function encrypt($msg, $key, $method="AES-128-CBC", $options=OPENSSL_RAW_DATA){
		$ivlen  = openssl_cipher_iv_length($method);
		$iv     = openssl_random_pseudo_bytes($ivlen);
		$cipher = openssl_encrypt($msg, $method, $key, $options, $iv);
		$hmac   = hash_hmac('sha256', $cipher, $key, $as_binary=true);
		$cipher = base64_encode( $iv.$hmac.$cipher );
		return $cipher;
	}

	static function decrypt($cipher, $key, $method="AES-128-CBC", $options=OPENSSL_RAW_DATA){
		$c       = base64_decode($cipher);
		$ivlen   = openssl_cipher_iv_length($method);
		$iv      = substr($c, 0, $ivlen);
		$hmac    = substr($c, $ivlen, $sha2len=32);
		$cipher  = substr($c, $ivlen+$sha2len);
		$msg     = openssl_decrypt($cipher, $method, $key, $options, $iv);
		$calcmac = hash_hmac('sha256', $cipher, $key, $as_binary=true);
		if( hash_equals($hmac, $calcmac) ) return $msg;//PHP 5.6+ timing attack safe comparison
		return false;
	}

	static function getPublicKey()
	{
		$pem = file_get_contents(self::PUBLICKEY);
		// $pem = chunk_split(base64_encode($pem),64,"\n"); // transfer to pem format
		// $pem = "-----BEGIN CERTIFICATE-----\n".$pem."-----END CERTIFICATE-----\n";
		$publicKey = openssl_pkey_get_public($pem);
		return $publicKey;
	}
	
	static function getPrivateKey()
	{
		$pem = file_get_contents(self::PRIVATEKEY);
		// $pem = chunk_split($pem,64,"\n"); // transfer to pem format
		// $pem = "-----BEGIN PRIVATE KEY-----\n".$pem."-----END PRIVATE KEY-----\n";
		$privateKey = openssl_pkey_get_private($pem);
		return $privateKey;
	}
	
	static function sign($msg, $algorithm=OPENSSL_ALGO_SHA256){
		$sign = "";
		$key = self::getPrivateKey();
		// OPENSSL_ALGO_SHA256 OPENSSL_ALGO_MD5 OPENSSL_ALGO_SHA1
		openssl_sign($msg, $sign, $key, $algorithm);
		$sign = base64_encode($sign);
		openssl_free_key($key);
		return $sign;
	}
	
	static function verify($msg, $sign, $algorithm=OPENSSL_ALGO_SHA256){
		$sign = base64_decode($sign);
		$key = self::getPublicKey();
		$result = openssl_verify($msg, $sign, $key, $algorithm);
		openssl_free_key($key);
		return $result;
	}

	static function publicEncrypt($source_data) {
		$data = "";
		$key = self::getPublicKey();
		$dataArray = str_split($source_data, self::KEYSIZE/8);
		foreach ($dataArray as $value) {
			$encryptedTemp = ""; 
			openssl_public_encrypt($value,$encryptedTemp,$key,OPENSSL_PKCS1_PADDING);
			$data .= $encryptedTemp;
		}
		openssl_free_key($key);
		return base64_encode($data);
	}
	
	static function privateDecrypt($eccryptData) {
		$decrypted = "";
		$decodeStr = base64_decode($eccryptData);
		$key = self::getPrivateKey();
		$enArray = str_split($decodeStr, self::KEYSIZE/8);

		foreach ($enArray as $va) {
			$decryptedTemp = "";
			openssl_private_decrypt($va,$decryptedTemp,$key,OPENSSL_PKCS1_PADDING);
			$decrypted .= $decryptedTemp;
		}
		openssl_free_key($key);
		return $decrypted;
	}

	static function privateEncrypt($source_data) {
		$data = "";
		$dataArray = str_split($source_data, self::KEYSIZE/8);
		$key = self::getPrivateKey();
		foreach ($dataArray as $value) {
			$encryptedTemp = ""; 
			openssl_private_encrypt($value,$encryptedTemp,$key,OPENSSL_PKCS1_PADDING);
			$data .= $encryptedTemp;
		}
		openssl_free_key($key);
		return base64_encode($data);
	}

	static function publicDecrypt($eccryptData) {
		$decrypted = "";
		$decodeStr = base64_decode($eccryptData);
		$key = self::getPublicKey();
		$enArray = str_split($decodeStr, self::KEYSIZE/8);

		foreach ($enArray as $va) {
			$decryptedTemp = "";
			openssl_public_decrypt($va,$decryptedTemp,$key,OPENSSL_PKCS1_PADDING);
			$decrypted .= $decryptedTemp;
		}
		openssl_free_key($key);
		return $decrypted;
	}
	
}

$plain  = "Some secret here for you ...";
$key    = openssl_random_pseudo_bytes(32);

$cipher = Crypto::encrypt($plain, $key);
$msg    = Crypto::decrypt($cipher, $key);
print_r(['明文'=>$plain, '密码'=>base64_encode($key), '解密'=>$msg, '密文'=>$cipher]);

$plain  = "利用公钥加密，私钥解密做数据保密通信!";
$cipher = Crypto::publicEncrypt($plain);
// $cipher = "填入Java生成的密文(Base64编码)以解密";
$msg    = Crypto::privateDecrypt($cipher);
print_r(['明文'=>$plain, '解密'=>$msg, '密文'=>$cipher]);

$plain  = "利用私钥加密，公钥解密可以做身份验证";
$cipher = Crypto::privateEncrypt($plain);
$msg    = Crypto::publicDecrypt($cipher);
print_r(['明文'=>$plain, '解密'=>$msg, '密文'=>$cipher]);

$msg    = 'a=123';
$sign   = Crypto::sign($msg);
$verify = Crypto::verify($msg, $sign);
print_r(['预签'=>$msg, '签名'=>$sign, '验证'=>$verify==1?"PASS":"FAIL"]);
