
# Header Editor Redirect
[Header Editor 2.2.0](https://www.ijidi.cn/crx-download/pkokmcnklmgbepioackopoknkdlhefjl-220.html)

Header Editor 可以用来
 
- 阻止请求
- 重定向请求
- 修改请求头 
- 修改响应头
 

比如通过资源重重定向解决 Captcha 验证码不显示问题：

匹配类型 网址前缀
匹配规则 https://www.google.com/recaptcha/api.js
重定向至 https://www.recaptcha.net/recaptcha/api.js

匹配类型 正则表达式
匹配规则 https://www.google.com/recaptcha/api.js(.*)
重定向至 https://www.recaptcha.net/recaptcha/api.js$1

下载 Header-Editor 2.2.0 crx 文件后, 打开Chrome浏览器扩展页面 (通过在地址栏输入 chrome://extensions/ 或通过Chrome菜单图标> 更多工具> 扩展图标), 然后拖放 crx 文件到 Chromer 扩展页面就可以安装了。如果出现 crx 文件头损坏不能安装的错误，请打开 Chrome 的开发者选项，或修改 crx 为 zip 文件并解压后安装。


