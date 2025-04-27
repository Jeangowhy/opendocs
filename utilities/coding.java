	import java.security.Key;
	import java.security.KeyFactory;
	import java.security.KeyPair;
	import java.security.KeyPairGenerator;
	import java.security.KeyStore;
	import java.security.KeyStoreException;
	import java.security.InvalidKeyException;
	import java.security.NoSuchAlgorithmException;
	import java.security.PrivateKey;
	import java.security.PublicKey;
	import java.security.Signature;
	import java.security.cert.Certificate;
	import java.security.cert.CertificateException;
	import java.security.cert.CertificateFactory;
	import java.security.interfaces.RSAPrivateKey;
	import java.security.interfaces.RSAPublicKey;
	import java.security.spec.PKCS8EncodedKeySpec;
	import java.security.spec.X509EncodedKeySpec;

	import java.io.File;
	import java.io.FileWriter;
	import java.io.FileReader;
	import java.io.FileInputStream;
	import java.io.FileNotFoundException;
	import java.io.FileOutputStream;
	import java.io.InputStream;
	import java.io.ObjectOutputStream;
	import java.io.ObjectInputStream;

	import java.util.HashMap;
	import java.util.Map;

	import javax.crypto.Cipher;
	import javax.crypto.KeyGenerator;
	import javax.crypto.SecretKey;

	import java.util.Base64;
	import java.util.regex.Pattern;
	import java.util.regex.Matcher;
	import java.util.regex.PatternSyntaxException;

	public class coding {

		static final String PATH_STORE = "./keys/Heartbleed.store";
		static final String STORE_ALIAS = "Heartbleed";
		static final String STORE_TYPE = "JCEKS";
		static final String STORE_PASS = "xxxxxx";
		static final String PATH_PRIVATE_KEY = "./keys/2048_private_key_pkcs8.pem";
		static final String PATH_PUBLIC_KEY  = "./keys/2048_public_key.pem";
		static final String PATH_CERTIFICATE = "./keys/Heartbleed.crt" ; // KeyTool导出的证书文件

		static public void main(String args[]) throws Exception {
			// keygen();
			// exportKeysFromStore();
			// 字符串定长拆分
			// log( String.join("|","abcdefghijklm".split("(?=(.{3})+(?!.))")) );
			// log( String.join("|","abcdefghijklm".split("(?<=\\G.{4})(?!$)")) );
			test();
		}

		static public void test() throws Exception {
			PrivateKey privateKey = getPrivateKey();
			PublicKey  publicKey  = getPublicKey();
			byte[] bytePrivate = privateKey.getEncoded();
			byte[] bytePublic = publicKey.getEncoded();
			String strPrivate = Base64.getEncoder().encodeToString(bytePrivate);
			String strPublic = Base64.getEncoder().encodeToString(bytePublic);
			// log("私钥("+ privateKey.getFormat() + ")\r\n" + strPrivate);
			// log("公钥("+ publicKey.getFormat() + ")\r\n" + strPublic );
			
			String content = "利用公钥加密，私钥解密做数据保密通信!";
			Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
			cipher.init(Cipher.ENCRYPT_MODE, publicKey); // 准备公钥加密
			byte[] result = cipher.doFinal(content.getBytes());
			String cipherText = Base64.getEncoder().encodeToString(result);
			log("密文:" + cipherText );
			// result = Base64.getDecoder().decode("填入PHP生成的密文(Base64编码)以解密");
			cipher.init(Cipher.DECRYPT_MODE, privateKey); // 准备私钥解密
			byte[] msg = cipher.doFinal(result);
			log("解密：" + new String(msg));
			log("原文：" + content);
			
			// 签名与验证
			String signature = sign(content);
			boolean isPass = verify(content, signature);
			log("\n预签："+content+"\n签名："+signature + "\n验证："+(isPass?"PASS":"FAIL") );

			// AES对称加密解密
			KeyGenerator aes = KeyGenerator.getInstance("aes");
			SecretKey key = aes.generateKey();
			Cipher aesCipher = Cipher.getInstance("aes");

			aesCipher.init(Cipher.ENCRYPT_MODE, key);
			byte[] aesResult = aesCipher.doFinal(content.getBytes());
			log("\nAES 加密: " + new String(Base64.getEncoder().encodeToString(aesResult)) );
			aesCipher.init(Cipher.DECRYPT_MODE, key);
			aesResult = aesCipher.doFinal(aesResult);
			log("AES 解密: " + new String(aesResult) );
		}

		public static String sign(String plainText) throws Exception {
			try {
				Signature signet = Signature.getInstance("SHA256withRSA");
				signet.initSign(getPrivateKey());
				signet.update(plainText.getBytes());
				return Base64.getEncoder().encodeToString(signet.sign());
			} catch (Exception e) {
				throw e; 
			}
		}

		public static boolean verify(String plainText, String signText) {
			try {
				byte[] signature = Base64.getDecoder().decode(signText);
				Signature sign = Signature.getInstance("SHA256withRSA");
				sign.initVerify(getPublicKey());
				sign.update(plainText.getBytes());
				return sign.verify(signature);
			} catch (Throwable e) {
				return false;
			}
		}

		private static void exportKeysFromStore() throws Exception {
			KeyPair keys = getKeyPairFromStore();
			PrivateKey privateKey = keys.getPrivate();
			PublicKey publicKey = keys.getPublic();
			byte[] bytePrivate = privateKey.getEncoded();
			byte[] bytePublic = publicKey.getEncoded();
			String base64Private = Base64.getEncoder().encodeToString(bytePrivate);
			String base64Public = Base64.getEncoder().encodeToString(bytePublic);
			base64Private = String.join("\r\n",base64Private.split("(?<=\\G.{64})(?!$)"));
			base64Public = String.join("\r\n",base64Public.split("(?<=\\G.{64})(?!$)"));
			log("私钥("+ privateKey.getFormat() +")\r\n" + base64Private);
			log("公钥("+ publicKey.getFormat() + ")\r\n" + base64Public );
			writeToFile(PATH_PRIVATE_KEY, base64Private, "-----BEGIN PRIVATE KEY-----\n", "-----END PRIVATE KEY-----");
			writeToFile(PATH_PUBLIC_KEY, base64Public, "-----BEGIN PUBLIC KEY-----\n", "-----END PUBLIC KEY-----");
		}

		private static KeyPair getKeyPairFromStore() throws Exception {
			char[] password = STORE_PASS.toCharArray();
			String storeType = "".equals(STORE_TYPE) ? KeyStore.getDefaultType() : STORE_TYPE;
			KeyStore keyStore = KeyStore.getInstance(storeType);
			InputStream file = new FileInputStream(PATH_STORE);
			keyStore.load(file, password);
			Key key = keyStore.getKey(STORE_ALIAS,password);
			if(key instanceof PrivateKey) {
				Certificate cert = keyStore.getCertificate(STORE_ALIAS);
				PublicKey publicKey = cert.getPublicKey();
				return new KeyPair(publicKey,(PrivateKey)key);
			}
			return null;
		}

		/**
		 * 读取base64编码的公钥文件并构造 PKCS#8 格式的私钥
		 * @return PublicKey
		 */
		public static PrivateKey getPrivateKey() throws Exception{
			String text = readFile(PATH_PRIVATE_KEY);
			text = text.replaceAll("\r|\n","").replace("-----BEGIN PRIVATE KEY-----","").replace("-----END PRIVATE KEY-----","");
			byte[] data = Base64.getDecoder().decode(text);
			PKCS8EncodedKeySpec pkcs8 = new PKCS8EncodedKeySpec(data);
			KeyFactory factory = KeyFactory.getInstance("RSA");
			PrivateKey key = factory.generatePrivate(pkcs8);
			return key;
		}

		/**
		 * 读取base64编码的公钥文件并构造X509EncodedKeySpec格式的公钥
		 * @return PublicKey
		 */
		public static PublicKey getPublicKey() throws Exception{
			String text = readFile(PATH_PUBLIC_KEY);
			text = text.replaceAll("\r|\n","").replace("-----BEGIN PUBLIC KEY-----","").replace("-----END PUBLIC KEY-----","");
			byte[] data = Base64.getDecoder().decode(text);
			X509EncodedKeySpec x509 = new X509EncodedKeySpec(data);
			KeyFactory factory = KeyFactory.getInstance("RSA");
			PublicKey key = factory.generatePublic(x509);
			return key;
		}

		private static PublicKey getPublicKeyFromCrt() throws CertificateException, FileNotFoundException {
			CertificateFactory factory = CertificateFactory.getInstance("X.509");
			FileInputStream file = new FileInputStream(PATH_CERTIFICATE);
			Certificate crt = factory.generateCertificate(file);
			PublicKey publicKey = crt.getPublicKey();
			return publicKey;
		}

		private static PrivateKey getPrivateKeyFromStore() throws Exception {
			String storeType = "".equals(STORE_TYPE) ? KeyStore.getDefaultType() : STORE_TYPE; ;
			char[] pw = STORE_PASS.toCharArray();
			KeyStore keyStore = KeyStore.getInstance(storeType);  
			InputStream file = new FileInputStream(PATH_STORE);  
			keyStore.load(file, pw);  
			// 由密钥库获取密钥的两种方式  
			// KeyStore.PrivateKeyEntry pkEntry = keyStore.getEntry(STORE_ALIAS, new KeyStore.PasswordProtection(pw));  
			// return pkEntry.getPrivateKey();  
			return (PrivateKey) keyStore.getKey(STORE_ALIAS, pw);  
		}

		public static void keygen() throws Exception{
			File k1 =new File(PATH_PRIVATE_KEY);    
			File k2 =new File(PATH_PUBLIC_KEY);    
			if( k1.exists() && k2.exists() && !k1.isDirectory()){
				log("Key file exists and return now...");
				return;
			}
			KeyPairGenerator keygen = KeyPairGenerator.getInstance("RSA");
			keygen.initialize(2048);
			KeyPair keyPair = keygen.generateKeyPair();
			PrivateKey privateKey = keyPair.getPrivate();
			PublicKey publicKey = keyPair.getPublic();
			byte[] bytePrivate = privateKey.getEncoded();
			byte[] bytePublic = publicKey.getEncoded();
			String base64Private = Base64.getEncoder().encodeToString(bytePrivate);
			String base64Public = Base64.getEncoder().encodeToString(bytePublic);
			base64Private = String.join("\r\n",base64Private.split("(?<=\\G.{64})(?!$)"));
			base64Public = String.join("\r\n",base64Public.split("(?<=\\G.{64})(?!$)"));
			writeToFile(PATH_PRIVATE_KEY, base64Private, "-----BEGIN PRIVATE KEY-----\n", "-----END PRIVATE KEY-----");
			writeToFile(PATH_PUBLIC_KEY, base64Public, "-----BEGIN PUBLIC KEY-----\n", "-----END PUBLIC KEY-----");
			log("私钥("+ privateKey.getFormat() +")\r\n" + base64Private);
			log("公钥("+ publicKey.getFormat() + ")\r\n" + base64Public );
			// hibernate(bytePrivate, PATH_PRIVATE_KEY);
			// hibernate(bytePrivate, PATH_PUBLIC_KEY);
		}

		private static void writeToFile(String path, String data, String header, String footer) throws Exception {
			FileWriter fw = new FileWriter(path);
			fw.write(header);
			fw.write(data);
			fw.write("\n");
			fw.write(footer);
			fw.close();
		}

		private static String readFile(String path) throws Exception{
			FileReader file = new FileReader(path);
			char[] buffer = new char[1024*1024];
			int size = file.read(buffer, 0, 1024*1024);
			// while( file.read(buffer, 0, 1024) )...
			return new String(buffer,0,size);
		}

		private static void hibernate(Object key, String path) throws Exception {
			try{
				FileOutputStream fo = new FileOutputStream(path);
				ObjectOutputStream oo = new ObjectOutputStream(fo);
				oo.writeObject(key);
				oo.flush();
				oo.close();
			}catch(Exception e){
				log(e.getMessage());
			}finally{
			}
		}

		private static Key restore(String path) throws Exception {
			try{
				FileInputStream fi = new FileInputStream(path);
				ObjectInputStream oi = new ObjectInputStream(fi);
				Key key = (Key)oi.readObject();
				oi.close();
				return key;
			}catch( Exception e){
				log(e.getMessage());
			}finally{
				return null;
			}
		}

		static public void log(String t){
			System.out.println(t);
		}
		
	}