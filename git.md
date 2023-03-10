

## ð Github OAuth App å¼å
- https://vssue.js.org/guide/github.html#create-a-new-oauth-app
- https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user
- https://docs.github.com/en/developers/apps/scopes-for-oauth-apps
- https://github.com/settings/tokens
- https://docs.github.com/
- https://segmentfault.com/a/1190000019343851
- GitHub OAuth ç¬¬ä¸æ¹ç»å½ç¤ºä¾æç¨ http://www.ruanyifeng.com/blog/2019/04/github-oauth.html
- https://gitee.com/api/v5/oauth_doc#/

Github æä¾ä¸¤ç±»åºç¨ï¼ä¸ä¸ªå«å OAuth Appï¼å¦ä¸ä¸ªå« Github App åè½éå¸¸ç±»ä¼¼ï¼æå¤§çä¸åç¹æ¯ OAuth App æè·åæéé½æ¯ç¨æ·æäºçï¼è Github App å ä¹å¯ä»¥è·å Github æä¾çææåè½æéï¼ä¸æè·åçæéå¯ä»¥è¢«è®¾å®ä¸ºåªè¯»ï¼å¯è¯»å¯ååç¦æ­¢è®¿é®ï¼å¯¹äºæéçææç²åº¦ä¼æ´ç»ã

è·åäºå¯¹æäºæä½çæéä¹åï¼å°±å¯ä»¥ä½¿ç¨è¿äºæéå»æ­å»ºä¸ä¸ªç¬ç«ç Appï¼æ¯å¦ä¸ä¸ªç¬¬ä¸æ¹ç Github å®¢æ·ç«¯ç­ç­ï¼è¿ä¹æ¯ Github App çå®ç¨ä¹å¤ã

Github App å¯ä»¥åå»ç¨æ·å¨ç¬¬ä¸æ¹é¡µé¢è¾å¥è´¦å·å¯ç æè Token çæä½èå®æææï¼éè¿ OAuth ç»å½çæ¹å¼åªå¯å®æã

OAuth ç»å½åºæ¬æµç¨å¦ä¸ï¼åè®¾å¼åèçåºç¨ä¸º Appï¼

- App è·³è½¬å° Github ææé¡µé¢ã
- Github ææé¡µé¢è¯¢é®ç¨æ·ï¼âæ¯å¦åè®¸ App è·åä¸åæéâï¼ç¨æ·ç¹å»âåè®¸âï¼åå¾ææç ã
- Github ææé¡µé¢éå®åå App æä¾çéå®åå®¹åæ¥æ¶å°åï¼åæ¶å¨ URL ä¸å¸¦ä¸ææç ã
- App è·å URL ä¸æºå¸¦çææç åï¼ååå¾ Github è·å Tokenï¼è¿ä¸ªä»¤çå°±æ¯çæ­£çææç ã
- App æ¥çå°±å¯ä»¥ä½¿ç¨è¿ä¸ª Token å»è°ç¨ Github APIã


ä½¿ç¨ OAuth App å¯ä»¥å®ç°å®å¶åè½ç Github åºç¨ï¼ä¾å¦ä½¿ç¨å½ä»¤æ¹å¼åå»ºè¿ç¨ä»£ç ä»åºã

å°æ¬å°ä»£ç  push å° github è¿ç¨ä»£ç ä»åºä¹åï¼æ»æ¯éè¿å¨çº¿æ°å»º github ä»£ç ä»åºçæä½æ¯æ¯è¾éº»ç¦çã

åå© Github APIï¼å¯ä»¥å©ç¨å½ä»¤åå»ºè¿ç¨ä»£ç ä»åºï¼ååä¾¿æ·ã

é¦åéè¦ç³è¯·å¹¶è·åèªå·±ç API Tokenï¼ç¨äºé´æï¼OAuth scope requirementsã

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

éè¿ API Token å¯ä»¥å¨ OAuth åºç¨ä¸­å®å¨è®¿é®éè¦ææç API èµæºï¼ä»¥ä¸å¯ä»¥æ£æµä»ä¹ç±»åç OAuth ä½ç¨åæ¯å¯ç¨çï¼

	$ curl -H "Authorization: token YOUR_OAUTH-TOKEN" https://api.github.com/users/jimboyeah -I
	HTTP/1.1 200 OK
	X-OAuth-Scopes: repo, user
	X-Accepted-OAuth-Scopes: user

å¯¹äºè¿ç¨åå»ºä»åºï¼æ£æ¥å¶ä¸­å·²ç»ææç API åè¡¨ X-OAuth-Scopes å X-Accepted-OAuth-Scopes ä¸¤é¡¹ã

å¾é repo æ¯æä»åºçå®å¨æ§å¶ï¼å·ä½åè Scopes for OAuth Appsï¼

- `repo:status` Access commit status
- `repo_deployment` Access deployment status
- `public_repo` Access public repositories
- `repo:invite` Access repository invitations
- `security_events` Read and write security events




# git çæ¬ç®¡çç³»ç» 
[èègitæç¨](http://www.softwhy.com/article-8487-1.html)
[25ä¸ªgitæå·§](http://www.techug.com/post/25-git-tips.html)
[Git æç¨](https://www.liaoxuefeng.com/wiki/896043488029600/)
[Git Book](https://git-scm.com/book/zh/v1)

è½ç¶äººçä¸è½éå¤ï¼ä½GITå¯ä»¥å¨æä»¬äººççåé¨å®ç°é¨ååæµææï¼æ¯å¦å¯ä»¥è®©ç¨åºåæ¹ä¾¿çä¿å­ä»£ç ççæ¬ï¼å¹¶ä¸è½å¤å¿«éçåæ¢å°æå®çä»¥åççæ¬ï¼å¦ææ°ä»£ç åºç°éè¯¯ï¼å¯ä»¥åæ¬¡åå°è¿å»ï¼å¦åéå³æ¸¸æï¼æå°æä¸ªæ¯è¾å¥½çæç»©å¯ä»¥ä¿å­ä¸ä¸ï¼é²æ­¢å¤±è´¥åï¼åè¦éæ°å¼å§ã

```sh
> git clone --depth=1 git@github.com:git/git.git
Cloning into 'git'...
remote: Enumerating objects: 4243, done.
remote: Counting objects: 100% (4243/4243), done.
remote: Compressing objects: 100% (3728/3728), done.
Receiving objects:   7% (322/4243), 516.00 KiB | 22.00 KiB/s
```

ä¸ä¸ªå¸åç git å·¥ä½æµç¨å¤§æ¦å¦ä¸ï¼

	+ åå»ºæ¬å°ä»åºæåéä¸ä¸ªç°æçä»åºï¼
	+ æ·»å éè¦çè§çæä»¶å°ä»åºéï¼
	+ ä¿®æ¹æä»¶ï¼è¿äºå¹³å¸¸çç¼è¾å¨ä½æ¯å¨gitçæå­åºè¿è¡çï¼
	+ å°ä¿®æ¹è¿çæä»¶æäº¤å°æ¬å°ä»åºï¼è¿ä¸ªè¿ç¨å¯ä»¥çä½æ¯ç»è®°ï¼è¿æ · git æ°æ®åºææè®°å½ï¼
	+ éè¿ push æ¨éå°æå¡å¨ä»åºï¼å¦æåªæ¯æ¬å°å·¥ä½å¯ä»¥çç¥ï¼
	+ éè¿ pull æåæå¡å¨ä»åºçæä»¶å°æ¬å°ï¼
	+ åå»ºçæ¬åæ¯ï¼
	+ ....

å¯¹åºä½¿ç¨å°çå½ä»¤å¦ä¸ï¼

- `git init` å»ºç«æ¬å°ä»åºï¼æ clone æå¡å¨çä»åºï¼
- `git checkout` ç­¾åºä¸ä¸ªåæ¯ä½ä¸ºå½åçå·¥ä½åæ¯ï¼
- `git add` å½ä»¤å°å·¥ä½åºæªè·è¸ªåä¿®æ¹æä»¶æäº¤å°æå­åºï¼
- `git commit` å½ä»¤å°æå­åºåå®¹æäº¤å°å½åçæ¬ï¼
- `git remote` add æ·»å å³èçè¿ç«¯ä»åºå°åï¼é»è®¤å½å originï¼ 
- `git push` å½ä»¤æ¨éæ¬å°ä»åºå°æå¡å¨ä¸ï¼

>$ git init 	# Initialize a new git database
$ git clone 	# Copy an existing database
$ git status 	# Check the status of the local project
$ git diff 		# Review the changes done to the project
$ git add 		# Tell Git to track a changed file
$ git commit 	# Save the current state of the project to database
$ git push 		# Copy the local database to a remote server
$ git pull 		# Copy a remote database to a local machine
$ git log 		# Check the history of the project
$ git branch 	# List, create or delete branches
$ git merge 	# Merge the history of two branches together
$ git stash 	# Keep the current changes stashed away to be used later

Git æ¯ä¸ç§åå¸å¼çæ¬æ§å¶ç³»ç» DVCS - Distributed Version Control Systemãå¨ Git ä¸­ç»å¤§å¤æ°çæä½é½åªéè¦è®¿é®æ¬å°æä»¶åèµæºï¼ä¸è¬ä¸éè¦æ¥èªç½ç»ä¸å¶ä»è®¡ç®æºçä¿¡æ¯ã

å®åéä¸­å¼çæ¬æ§å¶ç³»ç» CVCS - Centralized Version Control Systems ç¸æ¯ï¼å¶ä¸å­å¨åç¹æéçé®é¢ãå¨ CVCS ä¸­ï¼å¦æä¸­å¤®æå¡å¨åºç°æéï¼åææçäººé½æ æ³ç»§ç»­ååå·¥ä½ï¼èä¸æ°æ®å¦ææ²¡æå¾å¥½çå¤ä»½ï¼ä¼åºç°æ°æ®ä¸¢å¤±æ¾ä¸åçæåµãä½æ¯å¨ DVCS ä¸­å°±ä¸å­å¨è¿ä¸ªé®é¢ï¼å¨ç½ç»ä¸­çæ¯ä¸ä¸ªèç¹é½åå«ä»£ç ä»åºçéåï¼å½ååå·¥ä½ç¨çæå¡å¨åºç°æéçæ¶åï¼é½å¯ä»¥ä½¿ç¨ä»»ä½ä¸å¤éååºæ¥çæ¬å°ä»åºè¿è¡æ¢å¤ã

çè§£ Gitï¼é¦åå¾è®°ä½ Git çä¸ç§åºæ¬ç¶æåå¯¹åºä¸ç§å·¥ä½åºåï¼

|  State   | Workplace |    ç¶æ    |                       è¯´æ                       |
|----------|-----------|------------|--------------------------------------------------|
| Modified | å·¥ä½åº    | å·²ä¿®æ¹ç¶æ | å·²ç»ä¿®æ¹äºæä»¶ï¼ä½æ¯è¿æ²¡æä¿å­å°æ¬å°æ°æ®åºä¸­ã   |
| Staged   | æå­åº    | å·²æå­ç¶æ | å¯¹å·²ä¿®æ¹æä»¶åäºæ è®°ï¼ä½¿å¶åå«å¨äºä¸æ¬¡çæäº¤ä¸­ã |
| Commited | çæ¬åº    | å·²æäº¤ç¶æ | è¡¨ç¤ºæ°æ®å·²ç»å®å¨çä¿å­å¨æ¬å°æ°æ®åºä¸­ã           |

ä¸é¢çä¸ç§ç¶æå¯¹åºäº Git çä¸ä¸ªå·¥ä½åºåçæ¦å¿µï¼å·¥ä½ç®å½å·²ç»æå­åºåï¼å·²æäº¤å° Git ä»åºã

- å·¥ä½åº Working Treeï¼

	å·¥ä½åºå°±æ¯æ§è¡ git init å½ä»¤æå¨çç®å½ï¼ä¹æ¯å½å Git çæå¨ç¶æï¼åå«æä»¬è¦ä¿®æ¹çæä»¶å°±å¨æ­¤ç®å½ï¼ä½æ¯å¹¶ä¸åæ¬ .git ç®å½ï¼Git ä¼å¯¹å·¥ä½åºè¿è¡ç®¡çï¼å¦åæ¢åæ¯ checkout ç­å¨ä½ï¼Git ä¼å°ä»åºä¸­çå¯¹åºæä»¶è®°å½è¯»ååºæ¥æ¾å°å·¥ä½åºã

- çæ¬åº Repositoryï¼

	å·¥ä½åºæ ¹ç®å½ä¸æä¸ä¸ªé»è®¤éèçç®å½ .gitï¼å®å¹¶ä¸å±äºå·¥ä½åºï¼èæ¯çæ¬åº Repositoryã çæ¬åºä¸­åå®¹å¾å¤ï¼å¹¶ä¸é½å¾éè¦ï¼æå­åº stage ååæ¯ branch æ¦å¿µæ¯æä»¬å®éæä½ä¸­ç»å¸¸è¦éå°çï¼æå­åºï¼ä¹å¯ä»¥ç§°ä¹ä¸º indexï¼éè¿æäº¤å¨ä½ commit å°æå­åºçåå®¹æ´æ°å°ä»åºãè¿æä¸ä¸ª HEAD æéï¼æåå½åæå¨çåæ¯ masterã

	Git ä»åºç®å½ .git ç¨æ¥ä¿å­é¡¹ç®çåæ°æ®åå¯¹è±¡æ°æ®åºçå°æ¹ãè¿æ¯ Git æéè¦çé¨åï¼ä¹æ¯ Git åå¸å¼æ°æ®åºçæå¨ãå½ä½  clone è¿ç«¯ä»åºæ¶ï¼å¶å®æ·è´çå°±æ¯è¿éçæ°æ®ãåéä¸æ¥ç Git é¡¹ç®ï¼é½ä¼æä¸ä¸ªéèçåå­ä¸º .git çæä»¶å¤¹ï¼è¿å°±æ¯ Git ä»åºã

- è¿ç¨å³èä»åº remoteï¼

	éå¸¸ git çæ¬ç®¡çç¨å¨å¤äººå¢éåä½é¡¹ç®çç®¡çä¸­ï¼ä¸»ä»åºéè¦å¨æå¡å¨ä¸å±äº«ç»é¡¹ç®æåï¼åæåå¨æ¬å°å»ºç«å·¥ä½ä»åºã


æå­åºæ¯ä¸ä¸ªä¸´æ¶æ§ä»åºï¼ä½æ¯ç¹å«éè¦ï¼å®å¯ä»¥å°æ¥èªå·¥ä½åºçæ°æä»¶æèä¿®æ¹æä»¶ææ¶å­æ¾èµ·æ¥ï¼ç¶åç»ä¸æäº¤å°åæ¯ã

æå­åºåææ¶åä¹è¢«ç§°ä¸ºç´¢å¼ï¼å®æ¬è´¨ä¸åªæ¯ä¸ä¸ªæä»¶ï¼è®°å½äºä¸æ¬¡å°æäº¤ commit çæä»¶åè¡¨ä¿¡æ¯ï¼è¿ä¸ªæä»¶ä¸è¬å­å¨äº Git ä»åºä¸­ï¼ä¹å°±æ¯ .git ç®å½ä¸­ã

æå­åºå­å¨çå¿è¦æ§ï¼éè¿è¿ä¸ªè¿æ¸¡æ§åºåå¯ä»¥ä½¿æäº¤æ´å æ¡çï¼é¿åæ ç¨çç¢æäº¤ã

ä¸¾ä¸ªæ¯è¾çæ´»åçä¾å­ï¼éè¦å°ä¸è½¦æ¾ç½®æä¹±æ ç« çåç±»è´§ç©æåºçæ¾å¥ä»åºï¼æå¥½çåæ³æ¯å°è´§ç©åææ¡ççæ´çå°ä»åºé¨å£ç©ºå°ä¸ï¼è¿ä¸ªç©ºå°ç¸å½äºæå­åºï¼ç¶ååå°è´§ç©ç¨åè½¦è¿å°ä»åºãè¿æä¸ä¸ªä½ç¨å°±æ¯å¯ä»¥æ´å æ¹ä¾¿çå¯¹æä»¶è¿è¡çæ¬ç®¡çï¼æ¯å¦çæ¬çåæº¯ã

HEAD å¼ç¨ï¼è¿æ¯ä¸ä¸ªæåä½ å½åæäº¤çåå®¹ç SHA-1 çæ¬å·çæéï¼éè¿ä¿®æ¹ HEAD çæåä½ç½®å¯ä»¥å®ç°ç±»ä¼¼åå°è¿å»ï¼ååå°æªæ¥çææãå¦æä½ æ­£å¨è§£å³åå¹¶å²çªï¼ä½¿ç¨ HEAD ä¸ä¼å¯¹ä½ çç¹å®åæ¯æä»»ä½æ¹å¨åªä¼æåä½ å½åçåæ¯ã ææåæ¯çæéé½ä¿å­å¨ .git/refs/headsï¼HEAD æéä¿å­å¨ .git/HEADï¼æ ç­¾åä¿å­å¨ .git/refs/tagsï¼ææ¶é´å°±å»ççå§ã

git åé¨ä½¿ç¨å¯¹è±¡æ°æ®åº object database åç´¢å¼ index ä¸¤ä¸ªåºæ¬æ¦å¿µï¼æåç§å¯¹è±¡ï¼

- Commit Object æäº¤å¨ä½äº§çåå²è®°å½ï¼
- Tree Object å¯¹è±¡æ è®°å½åå²ä¸­çåç§å¯¹è±¡ï¼åæ¬æä»¶ãç®å½ï¼
- Blob Object å¤§æ°æ®å¯¹è±¡ binary large objects ç¨æ¥ä¿å­äºè¿å¶æä»¶ï¼
- Tag Object æ ç­¾å¯¹è±¡ï¼ç¨æ¥æ è®°å¶å®å¯¹è±¡ï¼å¦ç¨ä¸ä¸ªçæ¬å·æ è®°ä¸ä¸ªå¯¹åºç commitï¼

æ¯æ¬¡æäº¤é½äº§çä¸ä¸ªåå²è·¯çº¿å¯¹è±¡ï¼å¯¹åºå¼å°±æ¯ commit_idãåæ¯å°±æ¯ä¸æ¡åå²è·¯çº¿ï¼ä¸»çº¿ master æ¯é»è®¤çåæ¯è®¾ç½®ï¼æ¯æ¡çº¿ä¸çç¹é½æä¸ä¸ªç¶èç¹ï¼ç¶èç¹å°å­èç¹ä¸ºå¯å°è¾¾ç¶æãåä¸ä¸ªèç¹å¯ä»¥äº§çä»»ææ¡åæ¯ï¼ä¸åçåæ¯çº¿è·¯ä¹å¯ä»¥ååå¹¶ mergeï¼å¯ä»¥ä½¿ç¨ gitk å¾å½¢çé¢äºè§£ git ä»åºæ¯å¦ä½ç®¡çåå®¹çã

	         o--o--o <-- Branch A
	        /
	 o--o--o <-- master
	        \
	         o--o--o <-- Branch B

æ¯ä¸ªèç¹éè¿æ ç¶æ°æ®ç»ææ¥ç®¡çæææä»¶å¯¹è±¡ï¼æ ä¸æ¯ä¸ªæä»¶å¯¹è±¡é½æä¸ä¸ªå¯¹åºçç´¢å¼è®°å½ä¿å­å¨ index æä»¶ä¸­ï¼ç´¢å¼è®°å½äºå¯¹è±¡ç SHA-1 æè¦å¼ï¼å®ç¨æ¥æ è®°å¯ä¸å¯¹è±¡ï¼éè¿å® git å¯ä»¥å¿«éåä»åºåæ¾å°éè¦çå¯¹è±¡ï¼è½çæµæ°æ®å¯¹è±¡æ¯å¦æè¯¯ï¼å¨ä¸åçä»åºå¯æ¬ä¸­ä¿æåä¸ä¸ªå¯¹è±¡ä½¿ç¨åä¸ä¸ªåå­ï¼ä½¿ç¨ ls-files æ¥æ¥çç´¢å¼çæä»¶åè¡¨ï¼

	$ git ls-files --stage
	100644 a4f6b681cd56911b8537bfe5c4f55da1566d69d3 0       main.exe
	100644 9f035358770b7bbc17de2ae567c31be6fb36a3e6 0       package.json
	100644 b8e6b6d76198cd6d8156712f82ccc610ceba1249 0       src/go-my-websocket/main.go
	100644 f94cfce9a556ec44062bcf591856f95a46af7972 0       src/go-my-websocket/ws/parser.go
	100644 e595e5db0f6bf9e67440059a47ff8eca54310dca 0       src/go-my-websocket/ws/ws.go
	100644 e535829a3efe1bfc3fa3887ab4ad5671ee26cd2e 0       src/server.js
	100644 c987cdaf83333a6fe6a742b659c53cbf6b514c8c 0       src/view/index.html
	100644 270777b6885bd0607af9fa4bfcbab72216b3c3a5 0       src/view/socket.io.js
	100644 d6fd6fb594e10e64bdbc6305e4033a61f656f55f 0       src/view/theme.css

éè¿ log å½ä»¤å¯ä»¥æ¥çæäº¤æ¥å¿ï¼éè¿ show å½ä»¤æ¥çæå® ID çåç§å¯¹è±¡ä¿¡æ¯ï¼å¦æäº¤ commit ç»èï¼è¾åºåå®¹å¯ä»¥è·å¾ä»¥ä¸åºæ¬çæäº¤ commit idã tree idã

	$ git show --pretty=raw 189349a4210b94eb6e98bd425e84cecd8f3230df
	commit 189349a4210b94eb6e98bd425e84cecd8f3230df
	tree fcc7dfbfd7cbfde03b9b0a04bda882e7ea8c0d4e
	author jimboyeah <jimboyeah@gmail.com> 1577028276 +0800
	committer jimboyeah <jimboyeah@gmail.com> 1577028276 +0800

ä¹å¯ä»¥ä½¿ç¨ ls-tree æä¸¾æ ç»æï¼

	$ git ls-tree -r fcc7df
	100644 blob a83b8d70c4b7e31573084d27a5bfa2e162299a6d    src/server.js
	100644 blob 1535d539de13955e8ea7b42fbd60f9610c654219    src/view/socket-client.tpl
	100644 blob d6fd6fb594e10e64bdbc6305e4033a61f656f55f    src/view/theme.css

éå¸¸ git ä¼å°å¯¹è±¡ä¿å­å¨ `.git\objects` ç®å½ä¸ï¼æ£å¸å¨ 256 ä¸ªå­ç®å½ä¸ï¼ä½æ¯ä¸ºäºæ´ææå¿«éè¿è¡ï¼å¯ä»¥æ§è¡ repack å°é¶æ£å¯¹è±¡æä»¶éæ°æåå° packs æä»¶ä¸­ï¼æååï¼é¶æ£çæä»¶å°ä¼éä¸­å°ä¸ä¸ªæåæä»¶å­æ¾äº packs ç®å½ä¸ãè¿å¯æ§è¡ prune å°å¨é¨å¯¹è±¡æåå°ä¸ä¸ªæä»¶ä¸­ï¼git è¿æä¾äº gc å½ä»¤æ¥æ§è¡è¿äºæ¸çå·¥ä½ãç¨ count-objects å½ä»¤è®¡ç® unpacked çæä»¶æ°éï¼æ£æ¥ä¸ä¸æåååçå·®å«ï¼

	$ git count-objects
	250 objects, 4429 kilobytes

	$ git repack
	Counting objects: 28, done.
	Delta compression using up to 8 threads.
	Compressing objects: 100% (28/28), done.
	Writing objects: 100% (28/28), done.
	Total 28 (delta 3), reused 0 (delta 0)

	$ git prune

	$ git count-objects
	0 objects, 0 kilobytes


git everyday æåä¸­æ ¹æ®ç¨æ·ç±»åä¸åå°å½ä»¤åæä¸ç±»

- Individual Developer (Standalone)

	- `git-init` to create a new repository.
	- `git-log` to see what happened.
	- `git-checkout` and `git-branch` to switch branches.
	- `git-add` to manage the index file.
	- `git-diff` and `git-status` to see what you are in the middle of doing.
	- `git-commit` to advance the current branch.
	- `git-reset` and `git-checkout` (with pathname parameters) to undo changes.
	- `git-merge` to merge between local branches.
	- `git-rebase` to maintain topic branches.
	- `git-tag` to mark a known point.

- Individual Developer (Participant)

	- `git-clone` from the upstream to prime your local repository.
	- `git-pull` and `git-fetch` from "origin" to keep up-to-date with the upstream.
	- `git-push` to shared repository, if you adopt CVS style shared repository workflow.
	- `git-format`-patch to prepare e-mail submission, if you adopt Linux kernel-style public forum workflow.
	- `git-send`-email to send your e-mail submission without corruption by your MUA.
	- `git-request`-pull to create a summary of changes for your upstream to pull.

- Repository Administration

	- `git-daemon` to allow anonymous download from repository.
	- `git-shell` can be used as a restricted login shell for shared central repository users.
	- `git-http-backend` provides a server side implementation of Git-over-HTTP ("Smart http") allowing both fetch and push services.
	- gitweb provides a web front-end to Git repositories, which can be set-up using the git-instaweb script.

- Integrator

	- `git-am` to apply patches e-mailed in from your contributors.
	- `git-pull` to merge from your trusted lieutenants.
	- `git-format-patch` to prepare and send suggested alternative to contributors.
	- `git-revert` to undo botched commits.
	- `git-push` to publish the bleeding edge.

ä»¥ä¸åå®¹ Git User Manual ææ·±å¥çè®²è§£ã


# Pull Requests å¤äººåä½é¡¹ç®
- https://github.com/arcblock/blocklets
- https://blog.csdn.net/jcfszxc/article/details/104997223
- https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests

ç®åå°è¯´ Pull Requests å°±æ¯è¯·æ±è´¡ç®èªå·±çä»£ç ï¼æä½ æ·»å æä¿®æ¹çä»£ç æäº¤ç»åä½èã

ä½¿ç¨åºæ¯ï¼

- A æä¸ä¸ªé¡¹ç®å«å blockletsï¼å¸æ B æ¥åä½å¢å æä¿®æ¹æé¨ååè½ï¼
- B é¦åéè¦å¤å» fork ä¸ä¸ªå¯æ¬ä»åºå°èªå·±çè´¦æ·ä¸­ï¼
- B å®æ fork åï¼å¨èªå·±çä»åºä¸­å¯ä»¥çå°å¤å»ç blocklets ä»åºé¡µé¢ï¼å¨æä»¶åè¡¨ä¸æ¹æ¯å¤äºä¸ä¸ª `Pull request` æä½æé®çï¼ 
- B ç°å¨å¯ä»¥è¿è¡åè½å¼ååä¿®æ¹ï¼å®æå¹¶æäº¤åï¼å°±å¯ä»¥æ§è¡ new pull request åå»ºä¸ä¸ªåå¹¶æåï¼
- å¨ Compare changes è®¾ç½®é¡µé¢ï¼ç®­å¤´å·¦è¾¹é»è®¤æ¯ A çåä»åºï¼å³è¾¹æ¯ B çå¤å»ä»åºï¼
- ç¹å» Create pull request åå»ºåå¹¶æåï¼å¡«åç¸åºè¯´æä¿¡æ¯ï¼ç¶åç­å¾ A å»æ£æ¥ï¼
- A å¨èªå·±çä»åºé¡µé¢ä¸­ï¼å¯ä»¥çå° Pull Requests ææ°çè¯·æ±ï¼ç¹å¼ View pull request æ£æ¥æ²¡æé®é¢ï¼å°±å¯ä»¥ç¹å»æ¥æ¶ Pull request å®æåå¹¶ã
- A æ´æ°ä»åºåï¼B éè¦ä¿æä¸ A ä»åºçåæ­¥æ´æ°ï¼è¿æ¯ç¨å° Pull requestã
- åå»º Pull reqeustï¼è¿åå¨ Compare changes è®¾ç½®é¡µé¢ä¸­ï¼ç®­å¤´å·¦è¾¹é B èªå·±çä»åºï¼å³è¾¹é A çä»åºï¼è¿æ ·æè½æåææ°ä»£ç ï¼

åä¸å¼ååçä¸äºåå¤

ï¼1ï¼å¨ä½ åä»»ä½å¼ååï¼æå¥½åè¯¦ç»éè¯»è¯¥é¡¹ç®çÂ CONTRIBUTING.md æä»¶ã
ï¼2ï¼æµè§è¯¥é¡¹ç®çÂ Issuesï¼é®é¢ï¼å¬åï¼çè³å¯ä»¥èªå·±åå»ºä¸ä¸ªÂ Issueã
ï¼3ï¼ä¸è¬ä¿®æ¹åºè¯¥æäº¤å°æä¸ªæç¡®çÂ topic branch èä¸æ¯ masterï¼å ä¸ºè¿æ ·æ´ç´è§ã
ï¼4ï¼æå¥½æ¯æ¬¡åªæäº¤è¾å°çä¿®æ¹ï¼å¹¶åå¥½æ¸æ°æç¡®çÂ Commit Messagesï¼æäº¤è¯´æï¼.
ï¼5ï¼å¦ææéè¦ï¼è¯·æ´æ°Â README æä»¶ã

Pull Requests æ¯æ¹ä¾¿å¼åèä¹é´åä½çåè½ï¼æä¾äºä¸ä¸ªç¨æ·åå¥½ç Web çé¢ï¼å¨éææäº¤çåæ´å°æ­£å¼é¡¹ç®åå¯ä»¥å¯¹åæ´è¿è¡è®¨è®ºã

å¼åèåå¢éæåéç¥åè½å¼åå·²ç»å®æï¼Pull Requests æ¯æç®åçç¨æ³ãPull Request è¿ä¸æ­¢ä¸ä¸ªç®åçéç¥ï¼èæ¯ä¸ºè®¨è®ºæäº¤çåè½çä¸ä¸ªä¸é¨è®ºåãå¦æåæ´æä»»ä½é®é¢ï¼å¢éæååé¦å¨ Pull Request ä¸­ï¼çè³ push æ°çæäº¤å¾®è°åè½ãææçè¿äºæ´»å¨é½ç´æ¥è·è¸ªå¨ Pull Request ä¸­ã

ç¸æ¯å¶å®çåä½æ¨¡åï¼è¿ç§åäº«æäº¤çå½¢å¼æå©äºæé ä¸ä¸ªæ´æµççå·¥ä½æµãSVN å Git é½è½éè¿ä¸ä¸ªç®åçèæ¬æ¶å°éç¥é®ä»¶ï¼ä½æ¯ï¼è®¨è®ºåæ´æ¶ï¼å¼åèéå¸¸åªè½å»åå¤é®ä»¶ãè¿æ ·åä¼åå¾æä¹±ï¼å°¤å¶è¿è¦æ¶ååé¢çå ä¸ªæäº¤æ¶ãPull Requests æææç¸å³åè½æ´åå°ä¸ä¸ªå Github ä»åºçé¢éæçç¨æ·åå¥½ Web çé¢ä¸­ã

åèµ·ä¸ä¸ª Pull Request æ¶ï¼è¯¢é®ä»¥æå®æºåæ¯ãç®æ ä»åºåç®æ åæ¯ãB ä½ä¸ºä»£ç è´¡ç®èï¼ä»ä»çä»åºä¸­éæ©æºåæ¯ãè A ä½ä¸ºæ¥æ¶èï¼ä»ä»çä»åºä¸­éæ©ç®æ åæ¯ã

å¦å¤ï¼å¦æéè¦ A ä»¥å¤çäººå®¡æ ¸æ¹åä»£ç ï¼B å¯ä»¥æè¿äºäººå¡«å¨ Reviewers ææ¬æ¡ä¸­ãåå»ºå¥½äº Pull Requestï¼éç¥ä¼éè¿ Github ç³»ç»æ¶æ¯æé®ä»¶åç» Aã

A å¯ä»¥çå°ææäººåèµ·ç Pull Requestï¼ç¹å»å¶ä¸­ä¸ä¸ª Pull Request ä¼æ¾ç¤ºåºæè¿°ãåè½çæäº¤åå²åæ¯ä¸ªåæ´çå·®å¼ï¼diffï¼ã
å¦æ A éè¿ Review Pull Requestï¼æ³è¦åå¹¶å°é¡¹ç®ä¸­ï¼åªè¦ç¹ä¸ä¸ Merge æé®ï¼å°±å¯ä»¥åæ Pull Request å¹¶åå¹¶å° master åæ¯ã


# Git Base Operation
- [Gitèµ·æ­¥-ä¸ç§ç¶æä»¥åä¸ç§å·¥ä½åºåãCVCSä¸DVCSçåºå«ãGitåºæ¬å·¥ä½æµç¨](https://www.cnblogs.com/wangwenhui/p/10542360.html)
- [Gitåºç¡-ä»åºçè·åæ¹å¼ä¸Gitæä»¶çç¶æååå¨æ](https://www.cnblogs.com/wangwenhui/p/10546635.html)
- [Gitåºç¡-æ¥çå½åæä»¶ç¶æãè·è¸ªæ°æä»¶ãæå­æä»¶ãå¿½ç¥æä»¶ãæäº¤æ´æ°ãç§»é¤æä»¶ãç§»å¨æä»¶](https://www.cnblogs.com/wangwenhui/p/10555261.html)
- [Gitåºç¡-æ¥çæäº¤åå²](https://www.cnblogs.com/wangwenhui/p/10558461.html)
- [Gitåºç¡-æ¤éæä½ãæ ç­¾çä½¿ç¨ãGitå«å](https://www.cnblogs.com/wangwenhui/p/10573687.html)
- [Gitåºç¡-è¿ç¨ä»åºçä½¿ç¨](https://www.cnblogs.com/wangwenhui/p/10580611.html)
- [Gitåæ¯-åæ¯ç®ä»ãåæ¯åå»ºãåæ¯åæ¢](https://www.cnblogs.com/wangwenhui/p/10595918.html)
- [Gitåæ¯-åæ¯çåå»ºä¸åå¹¶](https://www.cnblogs.com/wangwenhui/p/10603113.html)
- [Gitåæ¯-åæ¯ç®¡ç git branchãåæ¯å¼åå·¥ä½æµ](https://www.cnblogs.com/wangwenhui/p/10644730.html)
- [Gitåæ¯-è¿ç¨è·è¸ª Origin åæ¯çæ¦å¿µãå¤ä¸ªè¿ç¨ä»åºçä½¿ç¨](https://www.cnblogs.com/wangwenhui/p/10651383.html)
- [Gitåæ¯-æ¨é pushãè·è¸ªåæ¯ãæå pullãå é¤è¿ç¨åæ¯](https://www.cnblogs.com/wangwenhui/p/10664935.html)
- [Gitåæ¯-ååº rebaseãrebase VS merge](https://www.cnblogs.com/wangwenhui/p/10673294.html)
- [Gitåç§åè®® localãHTTPãSSHãGit åè®®](https://www.cnblogs.com/wangwenhui/p/10794889.html)

â åå§åä¸ä¸ª Git ä»åº

	$ git init
	$ git add .
	$ git add README.md
	$ git commit -m "Initial project version"

- `git init` åå§å Git ä»åºãåå¨å½åç®å½åå»ºä¸ä¸ª .git æä»¶å¤¹ï¼è¿ä¸ªæä»¶å¤¹æ¯ Git ä»åºçæ°æ®åºã
- `git add .` å°å½åæå¨ç®å½ä¸­çæææä»¶å å¥å°æå­åºã
- `git add README.md` å° README.md æä»¶å å¥å°æå­åºã
- `git commit -m "Initial projrct version"` å°æå­åºçæä»¶æäº¤å° Git ä»åºï¼-m éé¡¹æå®äºæ¬æ¬¡æäº¤çè¯´ææå­ã


â Git æä»¶ç¶æè½¬æ¢

å·¥ä½ç®å½ä¸­çæ¯ä¸ä¸ªæä»¶é½ä¸å¤ä¹å·²è¿½è¸ªåæªè¿½è¸ªè¿ä¸¤ç§ç¶æï¼å·²è¿½è¸ª tracked çæä»¶æçæ¯å·²ç»è¢«çº³å¥å°çæ¬æ§å¶ï¼çæµä¸­çæä»¶ã

æä»¥ï¼ç»åè¿½è¸ªç¶æï¼å¨ä¸ä¸ª Git ä»åºç®å½ä¸çæä»¶å¯ä»¥æä»¥ä¸ 5 ç§ç¶æï¼

- Untracked æªè¿½è¸ªï¼
- Tracked å·²è¿½è¸ªï¼
	- Modified å·²ä¿®æ¹ç¶æï¼
	- Unmodified æªä¿®æ¹ç¶æï¼
	- Staged å·²æå­ç¶æï¼

å½ git clone åéäºä¸ä¸ªè¿ç¨ä»åºå°æ¬å°çæ¶åï¼å·¥ä½ç®å½ä¸­ææçæä»¶é½æ¯å·²è¿½è¸ªçæä»¶ï¼èä¸é½æ¯å¤äºæªä¿®æ¹çç¶æãæªè¿½è¸ª untracked æªè¿½è¸ªçæä»¶è¡¨ç¤ºä¸è¢«çº³å¥çæ¬æ§å¶çæä»¶ï¼é¤äºå·²è¿½è¸ªçæä»¶ä¹å¤ææçæä»¶é½æ¯æªè¿½è¸ªæä»¶ãå¨æ¬å°çé¡¹ç®ä¸­æ°æ·»å äºä¸ä¸ªæä»¶ï¼é£ä¹è¿ä¸ªæä»¶å°±æ¯æªè¿½è¸ªçç¶æã

![Git æä»¶çç¶æååå¨æ](https://img2018.cnblogs.com/blog/1133560/201903/1133560-20190317132825969-1403731969.png)

è¿äºæä»¶çç¶æè½¬æ¢å°±æ¯ä¸ä¸ªç¶ææºï¼ä»¥ README.MD æä»¶ä¸ºä¾ï¼å¶ç¶æè½¬æ¢å¦ä¸è¡¨ï¼

|  åå§ç¶æ  |          æä½          |  ç¶æè½¬æ¢  |                        è¯´æ                       |
|------------|------------------------|------------|---------------------------------------------------|
| Untracked  | git add README.MD      | Staged     | è·è¸ªæ°æä»¶ï¼å°æä»¶å å¥æå­åºï¼å¯ä»¥æç®å½æ·»å       |
| Unmodified | edit                   | modified   | ä¿®æ¹ç¼è¾æä»¶                                      |
| Modified   | git add README.MD      | Staged     | å°ä¿®æ¹åå®¹å å¥æå­åºï¼å¨ä¸ä¸æ¬¡ comit ä¿å­å°æ°æ®åº |
| Staged     | git commit -m "update" | Unmodified |                                                   |
| Unmodified | git rm README.MD       | Untracked  |                                                   |

æ³¨æ git rm ä¼å é¤ææå®çæä»¶ï¼è¦ä¿çå·¥ä½åºçæä»¶ï¼åéè¦ä½¿ç¨ --cached éé¡¹ï¼

	git rm --cached README.md

ä»¥ä¸é½æ¯ Git åºç¡æä½ï¼æ¥çå½åæä»¶ç¶æãè·è¸ªæ°æä»¶ãæå­æä»¶ãå¿½ç¥æä»¶ãæäº¤æ´æ°ãç§»é¤æä»¶ãç§»å¨æä»¶ç­ã


â æ£æ¥å½åæä»¶ç¶æ git statusï¼

	$ git status
	On branch master
	nothing to commit, working directory clean

è¯´æï¼ç°å¨çå·¥ä½ç®å½éå¸¸å¹²åï¼æ¢å¥è¯è¯´ï¼ææçå·²è·è¸ªæä»¶å¨ä¸æ¬¡æäº¤ä¹åé½æªè¢«ä¿®æ¹è¿ã


â æ¥çå·¥ä½åºçä¿®æ¹

ä½¿ç¨ git diff å½ä»¤æ¥çä¿®æ¹åå®¹ï¼å³è¿è¡å·®å¼æ¯è¾ï¼

	git diff # æ¥çå°æªæå­çæä»¶æ´æ°äºåªäºé¨åã
	git diff --staged # æ¥çå·²æå­çæä»¶æ´æ°äºåªäºé¨åã

å½ä¿®æ¹äº Git è¿½è¸ªçæä»¶ä¹åï¼è¿è¡ git status ä¼çå° Changes not staged for commitï¼è¯´æå·²è·è¸ªçæä»¶åçäºååä½æ¯è¿æ²¡æè¢«å å¥å°æå­åºï¼è¿æ¶åéè¦è¿è¡ git add å°è¯¥æä»¶æ¾å¥æå­åºã


â æ·»å è¿½è¸ªå½ä»¤

git add æ¯ä¸ä¸ªå¤åè½å½ä»¤ï¼

- ä½¿ç¨å®è·è¸ªæ°æä»¶ï¼
- å°å·²è·è¸ªçæä»¶å å¥å°æå­åºï¼
- è¿è½ç¨äºåå¹¶æ¶å°æå²çªçæä»¶æ è®°ä¸ºå·²è§£å³çç¶æã

æ³¨æï¼ git commit åªä¼å°æå­åºçæä»¶æäº¤å° Git ä»åºä¸­ï¼æ²¡ææ·»å å°æå­åºä¸­ææ²¡æè¿½è¸ªçæä»¶æ¯ä¸ä¼è¢«æäº¤çã

æ¯å¦ï¼å½ä½ è¿è¡ git add README å°æä»¶å å¥æå­åºï¼è¿æ¶åä½ åä¿®æ¹äº README æä»¶ï¼ä½æ¯æ²¡æè¿è¡ git add ï¼è¿æ¶åå¦æç´æ¥æäº¤ï¼é£ä¹åªä¼å°æå­åºä¸­ç README çæ¬çæä»¶æäº¤å° Git ä»åºãä½ å¯¹ README æ°åçä¿®æ¹ä¸ä¼è¢«æäº¤å° Git ä»åºã


â éç½®å¿½ç¥æä»¶

å¨ Git ä»åºæ ¹ç®å½ä¸éç½® .gitignore æä»¶ï¼å¯ä»¥é¿åè¿½è¸ªä¸å¿è¦çæä»¶ï¼ä¸è¬æä»¬æ»ä¼æä¸äºæä»¶ä¸æ³çº³å¥ Git è¿è¡ç®¡çï¼æ¯å¦ç¼è¯ç¨åºçæçä¸´æ¶æä»¶ï¼åæ¶ä¹ä¸å¸æä»ä»¬æ»åºç°å¨æªè·è¸ªæä»¶åè¡¨ã

è¿æ¶ååªéè¦å¨ .gitignore æä»¶ä¸­æå®è¿äºä½ ä¸æ³è¢« Git è¿è¡ç®¡ççæä»¶ï¼è¿æ ·ä¸æ¥ï¼æ§è¡æ¹éæ·»å å½ä»¤æ¶ï¼å°±ä¸ä¼å°æé¤çæä»¶æ·»å å°æå­åºï¼å½ä½ å¨æäº¤ä»£ç å°è¿ç¨ä»åºçæ¶åä¹å°±ä¸ä¼å°è¿äºæä»¶ä¸ä¼ ä¸å»äºã

GitHub æä¸ä¸ªååè¯¦ç»çéå¯¹æ°åç§é¡¹ç®åè¯­è¨ç .gitignore æä»¶åè¡¨ï¼ä½ å¯ä»¥å¨ https://github.com/github/gitignore æ¾å°å®ã


â æäº¤æ´æ°å° Git æ°æ®åº

ä½¿ç¨ git commit å½ä»¤æäº¤æ´æ°å° git æ°æ®åºä¿å­ï¼ 

- `git commit` å¦æä¸æå® -m åæ°ï¼é£ä¹ git ä¼æå¼ vim ç¼è¾å¨ï¼è®©ä½ è¾å¥æäº¤ä¿¡æ¯ã
- `git commit -m <info>` æå® -m åæ°ï¼å¯ä»¥å¨åé¢ç´æ¥æå®æäº¤ä¿¡æ¯ï¼è¿æ¯æ¨èåæ³ã
- `git commit -a -m <info>` å¯ä»¥åå¹¶æ§è¡ add å commitï¼ç´æ¥å°ä¿®æ¹ç¶æçå·²è¿½è¸ªæä»¶æäº¤å°æ°æ®åºã


â æä»¶ç§»å¨æç§»é¤æä½

æ§è¡ç§»é¤æä»¶ git rm åä¹éè¦æäº¤ä¿®æ¹ï¼ 

	$ git rm <filename>
	$ git rm -f <filename>
	$ git rm --cached <filename>
	$ git commit -m <info>

å¦æè¢«å é¤çæä»¶ä¿®æ¹è¿ï¼èä¸å·²ç»è¢«æ¾å¥äºæå­åºï¼é£ä¹éè¦å ä¸ -f åæ°ï¼å¼ºå¶å é¤ãè¿æ¯ä¸ç§å®å¨ç¹æ§ï¼ç¨äºé²æ­¢å é¤è¿æ²¡æè¢«æ·»å å¿«ç§çæ°æ®ï¼è¿ç§æ°æ®æ æ³è¢« Git æ¢å¤ã

å¦æä½ åªæ¯æ³ä»æå­åºå é¤æä»¶ï¼ä½æ¯å·¥ä½åºçæä»¶ä¿æä¸åï¼å³ä¿çç£çä¸­çæä»¶ï¼ä½æ¯ä¸æ³è®© Git è¿è¡è·è¸ªï¼ä½¿ç¨ --cached éé¡¹ã

ç§»å¨æä»¶å¯ä»¥ä½¿ç¨ git mv å³æä»¶éå½åå½ä»¤ï¼

	$ git mv <oldFile> <newFile>

è¿æ¡å½ä»¤ä¼å°åæä»¶æ¹åå°ä¸ä¸ªæ°çè·¯å¾ï¼å¹¶æ·»å å°æå­åºï¼ç­ä»·äºä¸é¢ä¸æ¡å½ä»¤ï¼

	$ mv oldFile newFile
	$ git rm oldFile
	$ git add newFile

Git é¼å±å¤§éä½¿ç¨åæ¯ï¼æä»¥æ¥ä¸æ¥ææ¡åæ¯çåå»ºãmerge åå¹¶åæ¯ãè§£å³åå¹¶å²çªæ¯å¾æå¿è¦çï¼è¿æ¯çæè½ã


# .gitignore è¿æ»¤æä»¶
- [Useful .gitignore templates](https://github.com/github/gitignore)

å½ä½ ä½¿ç¨ git add å½ä»¤æ¹éæ·»å æä»¶çæ¶åï¼ä¸æ³æäº¤çæä»¶ä¹ä¼æ·»å å°äºç¼å­ä¸­å»ãæ¯å¦é¡¹ç®çæ¬å°éç½®ä¿¡æ¯ï¼å¦æä½ ä¸ä¼ å° Git ä¸­å»å¶ä»äºº pull ä¸æ¥çæ¶åå°±ä¼åä»æ¬å°çéç½®æå²çªï¼æä»¥è¿æ ·çä¸ªæ§åéç½®æä»¶æä»¬ä¸è¬ä¸æå®æ¨éå° git æå¡å¨ä¸­ãå¨ä½ çå·¥ä½åºæ°å»ºä¸ä¸ªåç§°ä¸º `.gitignore` æä»¶è¿æ»¤æé£äºä¸éè¦æäº¤çæä»¶ï¼git add å½ä»¤ä¼èªå¨å¿½ç¥æè¿äºæä»¶ã

ä¸è¦è¯¯è§£äº `.gitignore` æä»¶çç¨éï¼è¯¥æä»¶åªè½ä½ç¨äº Untracked Filesï¼ä¹å°±æ¯é£äºä»æ¥æ²¡æè¢« Git è®°å½è¿çæä»¶ãå¦ææä»¶æ¾ç»è¢« Git è®°å½è¿ï¼é£ä¹å°±å¯¹å®ä»¬å®å¨æ æã

GitHub å·²ç»ä¸ºæä»¬åå¤äºåç§éç½® .gitignore templatesï¼åªéè¦ç»åä¸ä¸å°±å¯ä»¥ä½¿ç¨ã

Rules for .gitignore

					Blank lines are ignored	 
	# text comment	Lines starting with # are ignored	 
	name			All name files, name folders, and files and folders in any name folder
	name/			Ending with / specifies the pattern is for a folder.
	name.file		All files with the name.file
	/name.file		Starting with / specifies the pattern matches only files in the root folder.
	lib/name.file	Patterns specifiing files in specific folders are always realative to root.
	**/lib/name.file	Starting with ** before / specifies that it matches any folder in the repository. 
	**/name			All name folders, and files and folders in any name folder.
	/lib/**/name	All name folders, and files and folders in any name folder within the lib folder.
	*.file			All files withe .file extention
	*name/			All folders ending with name
	name?.file		? matches a single non-specific character
	name[a-z].file	[range] matches a single character in the specified range and also be numberic.
	name[abc].file	[set] matches a single character in the specified set of characters.
	name[!abc].file	[!set] matches a single character, except the ones spesified in the set of characters.
	*.file			All files withe .file extention.

	name/
	!name/secret.log

	! specifies a negation or exception. Matches all files and folders in any name folder, except name/secret.log

	*.file
	!name.file

	! specifies a negation or exception. All files withe .file extention, except name.file

	*.file
	!name/*.file
	junk.*

	Adding new patterns after a negation will re-ignore a previous negated file
	All files withe .file extention, except the ones in name folder. Unless the file name is junk	


ä¾å­ï¼æ¯å¦ Java é¡¹ç®è¿æ»¤æ .class æä»¶ï¼è¿äºæä»¶å¤æ°æåµä¸æ¯ä¸æ³è¢«ä¼ å°ä»åºä¸­çæä»¶ï¼`.gitignore`æä»¶æ¨¡æ¿ï¼

	*.class

	# Mobile Tools for Java (J2ME)
	.mtj.tmp/

	# Package Files #
	*.jar
	*.war
	*.ear

	# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
	hs_err_pid*

ä½¿ç¨å½ä»¤æ£æ¥å¿½ç¥è§åæ¯å¦æ­£ç¡®ï¼

	$ git check-ignore -v HelloWorld.class
	.gitignore:1:*.class    HelloWorld.class

å¯ä»¥çå° HelloWorld.class å¹éå°äºæä»¬çç¬¬ä¸æ¡å¿½ç¥è§åï¼æä»¥æäº¤è¿ç¨ä¸­æä»¶è¢«å¿½ç¥äºã


C/C++ ç .gitignore æ¨¡æ¿ï¼

	# Prerequisites
	*.d

	# Compiled Object files
	*.slo
	*.lo
	*.o
	*.obj

	# Precompiled Headers
	*.gch
	*.pch

	# Compiled Dynamic libraries
	*.so
	*.dylib
	*.dll

	# Fortran module files
	*.mod
	*.smod

	# Compiled Static libraries
	*.lai
	*.la
	*.a
	*.lib

	# Executables
	*.exe
	*.out
	*.app


# Git Protocols local/HTTP/SSH
- [Gitåç§åè®® localãHTTPãSSHãGit åè®®](https://www.cnblogs.com/wangwenhui/p/10794889.html)

Git ä½ä¸ºåå¸å¼ç³»ç»ï¼å¶æ¯æçæ°æ®ä¼ è¾åè®®æåç§ã

```sh
# HTTPS
https://github.com/jimboyeah/xx.git
# SSH
git@github.com:jimboyeah/xx.git
# GitHub CLI
gh repo clone jimboyeah/xx
```

â local æ¬å°åè®®

æåºæ¬çåè®®ï¼å¶è¿ç¨ä»åºå¶å®å°±æ¯ç¡¬çåé¨çä¸ä¸ªç®å½ï¼å¸¸è§äºå¢éåçäººå¯¹ä¸ä¸ªå±äº«çæä»¶ç³»ç»ï¼å·æè®¿é®æéï¼æèå¤äººå±ç¨ä¸å°çµèçæåµã

å½æ­å»ºå¥½ç¡¬çä¸é¢çè¿ç¨ä»åºä¹åï¼å¯ä»¥ä½¿ç¨ä»¥ä¸å½ä»¤æ¥åéæ¬å°çè¿ç¨ä»åºï¼å¯ä»¥å¸¦ file:// æ¬å°æä»¶åè®®ï¼

```sh
> git clone ../spine-sfml/test
Cloning into 'test'...
done.
> git clone file://C:/spine-sfml/test
Cloning into 'test'...
remote: Enumerating objects: 442, done.
remote: Counting objects: 100% (442/442), done.
remote: Compressing objects: 100% (210/210), done.
Receiving objects: 100% (442/442), 3.68 MiB | 34.60 MiB/s, done.
remote: Total 442 (delta 221), reused 436 (delta 218), pack-reused 0R
Resolving deltas: 100% (221/221), done.
```

åºå«ï¼

- ä»æå®è·¯å¾ï¼Git å°è¯ä½¿ç¨ç¡¬é¾æ¥ hard link æç´æ¥å¤å¶æéè¦çèµæï¼
- ä½¿ç¨ file:// åè®®ï¼Git è§¦åç¨äºç½ç»ä¼ è¾èµæçè¿ç¨ï¼æçä½ï¼æ¢ã

æ¬å°åè®®çä¼ç¹ï¼æ­å»ºç®åãç´æ¥ä½¿ç¨äºç°æçæä»¶æéåç½ç»è®¿é®æéï¼å¦æå·²ç»æäºå±äº«æä»¶ç³»ç»ï¼å»ºç«çæ¬åºä¼ååå®¹æï¼åªéè¦åè®¾ç½®å¶ä»å±äº«ç®å½ä¸æ ·ï¼å°ä¸ä¸ªGitä»åºæ¾å¨å¤§å®¶é½è½å¤è®¿é®å°çè·¯å¾å¹¶è®¾ç½®å¥½è¯»åæéå°±å¯ä»¥äºã

ç¼ºç¹ï¼ä¸æ¹ä¾¿ä»å¤ä¸ªä½ç½®è®¿é®ï¼ä¾å¦ä½ å¨å¬å¸ççµèä¸æ­å»ºäºæ¬å°ä»åºï¼ä½ æ³å¨å®¶éè®¿é®å°±æç¹å°é¾äºãä¸è½ä¿è¯ Git ä»åºçå®å¨ï¼ç±äºæ¯ä¸ä¸ªäººé½å·æä»åºç®å½å®æ´ç shell æéï¼æ²¡ææ¹æ³å¯ä»¥é»æ­¢ä»ä»¬å é¤æèç ´åä»åºã

â HTTP åè®®

æ§å¼åï¼DUMPï¼HTTP åè®®å¾å°ä½¿ç¨äºï¼åªæ¯æåªè¯»æ¨¡å¼ã

GitHub ç®åä½¿ç¨æºè½ï¼smartï¼HTTP åè®®ï¼æ¯æè¯»åæ¨¡å¼ãæ¢å¯ä»¥å git:// åè®®ä¸æ ·è®¾ç½®å¿åæå¡ï¼åå¯ä»¥å SSH ä¸æ ·æä¾ä¼ è¾æ¶çææåå å¯ï¼èä¸åªç¨ä¸ä¸ª URL å°±å¯ä»¥å¾å° git:// å SSH çåè½ï¼çå»äºä¸ºä¸åçéæ±è®¾ç½®ä¸åç URLã HTTP åè®®æ¨é push ä»¥åæå pullï¼æå¡å¨é½ä¼è¯¢é®ä½ çç¨æ·ååå¯ç ã

HTTP åè®®çä¼ç¹ï¼

- ä¸åçè®¿é®æ¹å¼åªéè¦ä¸ä¸ª URLï¼æå¡å¨åªå¨éè¦æææ¶æç¤ºè¾å¥ææä¿¡æ¯ã
- ç¸å¯¹äº SSH èè¨ï¼ä¸éè¦çæ SSH ç§é¥å¯¹åæç§é¥ä¸ä¼ å°æå¡å¨ä¸ã
- HTTP æ HTTPS è¢«å¹¿æ³éç¨ï¼ä¸è¬çä¼ä¸é²ç«å¢é½ä¼åè®¸è¿äºç«¯å£çæ°æ®éè¿ã

ç¼ºç¹ï¼å¨ä¸äºæå¡å¨ä¸ï¼æ¶è®¾ HTTP/S åè®®ä¼æ¯ SSH åè®®æ£æä¸äºï¼æ¯æ¬¡éè¦è¾å¥ç¨æ·ååå¯ç ï¼ç®¡çè¿äºå­è¯ä¼æ¯è¾éº»ç¦ä¸äºï¼å½ç¶ä½ å¯ä»¥ä½¿ç¨å­è¯å­å¨å·¥å·ï¼keychainï¼OSXï¼ã

â SSH åè®®

æ¶è®¾ Git æå¡å¨æ¶å¸¸ç¨ SSH åè®®ä½ä¸ºä¼ è¾åè®®ï¼å ä¸ºå¤§å¤æ°ç¯å¢é½æ¯æ SSH è®¿é®ï¼å³ä½¿ä¸æ¯æä¹æ¯è¾å®¹ææ­å»ºã

	$ git clone ssh://user@server/project.git

ä¼ç¹ï¼

- æ¶è®¾ç®åï¼
- æ°æ®ä¼ è¾æ¶æ¯å®å¨çï¼æææ°æ®ä¼ è¾æ¶é½ç»è¿ææåå å¯ï¼
- é«æï¼åå¶ä»3ç§åè®®ä¸æ ·ï¼å¨ä¼ è¾æ°æ®æ¶ä¹ä¼å°½éåç¼©æ°æ®ã

ç¼ºç¹ï¼ä¸è½éè¿å®å®ç°å¿åè®¿é®ãå³ä½¿ä½¿ç¨èåªéè¦è¯»åæ°æ®ï¼ä½¿ç¨èä¹è¦æéè¿ SSH è®¿é®ä½ ä¸»æºçæéï¼ä¸å©äºå¼æºé¡¹ç®ã

â Git åè®®

åå«å¨ Git éçä¸ä¸ªç¹æ®çå®æ¤è¿ç¨ä¸­ï¼çå¬ä¸ä¸ªç¹å®çç«¯å£ 9418 ç±»ä¼¼äº SSH æå¡ï¼ä½æ¯æ éä»»ä½è®¿é®ææã

ä¼ç¹ï¼ç®åæ¯ Git æä½¿ç¨çåè®®éé¢æå¿«çãå¦æä½ çé¡¹ç®ä¸éè¦ä¸ºåè¿è¡ç¨æ·ææï¼å¯ä»¥ä½¿ç¨ Git åè®®ã

ç¼ºç¹ï¼

- ç¼ºä¹æææºå¶ï¼ä¸æ¦æ¾å¼æ¨éæä½ï¼æå³çç½ç»ä¸çä»»ä½äººé½è½åä½ çé¡¹ç®æ¨éä»£ç ï¼
- å¶æ¬¡æ¯æ¶è®¾é¾ã



# git --help

	usage: git [--version] [--help] [-C <path>] [-c name=value]
	           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
	           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
	           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
	           <command> [<args>]

	These are common Git commands used in various situations:

	start a working area (see also: git help tutorial)
	   clone      Clone a repository into a new directory
	   init       Create an empty Git repository or reinitialize an existing one

	work on the current change (see also: git help everyday)
	   add        Add file contents to the index
	   mv         Move or rename a file, a directory, or a symlink
	   reset      Reset current HEAD to the specified state
	   rm         Remove files from the working tree and from the index

	examine the history and state (see also: git help revisions)
	   bisect     Use binary search to find the commit that introduced a bug
	   grep       Print lines matching a pattern
	   log        Show commit logs
	   show       Show various types of objects
	   status     Show the working tree status

	grow, mark and tweak your common history
	   branch     List, create, or delete branches
	   checkout   Switch branches or restore working tree files
	   commit     Record changes to the repository
	   diff       Show changes between commits, commit and working tree, etc
	   merge      Join two or more development histories together
	   rebase     Reapply commits on top of another base tip
	   tag        Create, list, delete or verify a tag object signed with GPG

	collaborate (see also: git help workflows)
	   fetch      Download objects and refs from another repository
	   pull       Fetch from and integrate with another repository or a local branch
	   push       Update remote refs along with associated objects

	'git help -a' and 'git help -g' list available subcommands and some
	concept guides. See 'git help <command>' or 'git help <concept>'
	to read about a specific subcommand or concept.


# config éç½®ä¿®æ¹

å®è£gitåï¼ç¬¬ä¸ä»¶äºä½ éè¦è®¾ç½®ä½ çåå­åé®ç®±ï¼å ä¸ºæ¯æ¬¡æäº¤é½éè¦è¿äºä¿¡æ¯ã

>	>git config --global user.name "Jeangowhy"
>	>git config --global user.email "jimboyeah@gmail.com"

å¨ç½ç»æ¯è¾ç¼æ¢æåµä¸ï¼Git åéä»£ç å¯è½åºç° The remote end hung up unexpectedly éè¯¯ï¼å¯ä»¥å°è¯åå°æä½éåº¦éå¼åå¢å ä½éæ¶é´ï¼

	git config --global http.lowSpeedLimit 0
	git config --global http.lowSpeedTime 999999

å¦æ Git æä½å¨ç½éä½äºç¯å¢åé GIT_HTTP_LOW_SPEED_LIMIT å­è/ç§ï¼å¹¶ä¸æç»­ GIT_HTTP_LOW_SPEED_TIME ç§ä»¥ä¸çæ¶é´ï¼Git ä¼ç»æ­¢é£ä¸ªæä½ãè¿äºå¼ä¼è¦ç http.lowSpeedLimit å http.lowSpeedTime éç½®çå¼ã

# æå®ç®å½ä¸è½½
DownGit: https://minhaskamal.github.io/DownGit/#/home

å¨ Git 1.7.0 ä»¥åï¼è¿æ æ³å®ç°ï¼ä½æ¯å¹¸è¿çæ¯æäº Sparse Checkout æ¨¡å¼ï¼è¿ä½¿å¾ Check Out æå®æä»¶æèæä»¶å¤¹æä¸ºå¯è½ã

ä¸¾ä¸ªä¾å­ï¼

ç°å¨æä¸ä¸ª test ä»åº https://github.com/mygithub/test
ä½ è¦ gitclone éé¢ç tt å­ç®å½ï¼
å¨æ¬å°çç¡¬çä½ç½®æå¼Git Bash

	git init test && cd test     //æ°å»ºä»åºå¹¶è¿å¥æä»¶å¤¹
	git config core.sparsecheckout true //è®¾ç½®åè®¸åéå­ç®å½
	echo 'tt*' >> .git/info/sparse-checkout //è®¾ç½®è¦åéçä»åºçå­ç®å½è·¯å¾   //ç©ºæ ¼å«æ¼

	git remote add origin git@github.com:mygithub/test.git  //è¿éæ¢æä½ è¦åéçé¡¹ç®ååº

	git pull origin master


ç¨ SVN ä¸¾ä¾è¯´æ: è­¬å¦è¿ä¸ªé¡¹ç®: Mooophy/Cpp-Primer.GitHub, æåªæ³ç ch03 æä»¶å¤¹çä»£ç æä¹å? åæå¼ ch03, å¶ URL ä¸º:

	https://github.com/Mooophy/Cpp-Primer/tree/master/ch03

å° /tree/master/ æ¢æ /trunk/ å³å¯ä»¥éè¿ svn checkout ä¸è½½:

	svn checkout https://github.com/Mooophy/Cpp-Primer/trunk/ch03


PS: ç¬¬ä¸æ¬¡ä½¿ç¨çè¯, å¯è½ä¼åºç°ä¸é¢è¿ä¸ªæç¤ºè¾å¥ P å°±è¡äº:

	R)eject, accept (t)emporarily or accept (p)ermanently?

å¦æä¸æ¯ master åæ¯ï¼æ¯å¦ develop åæ¯é£æä¹ä¸è½½æä¸ªæä»¶å¤¹, åªéè¦å° /trunk/ æ¢æ /branches/branchname/ å°±è¡äºã


# GitHub èªå¨ç»ééç½®

git éç½® https å ssh åå¯ç ç»å½ï¼åºå https å ssh ä¸¤ç§æ¹å¼ãä¸åçåéæ¹å¼å¯¼è´æ ¡éªæ¹å¼ä¸åï¼å¯¹åºçåç§æ¹å¼ä¹ä¸ä¸æ ·ã https éè¿è®°ä½è´¦å·å¯ç åç»ï¼ssh éè¿æ ¡éªçæçå¯é¥åç»ã

https åå¯éç½®æ¹æ³ï¼è®¾ç½®éç½® .git/config 

	[credential]  
	    helper = store

ç¸åºå½ä»¤

	git config --global credential.helper store

è¾å¥ä¸æ¬¡è´¦å·å¯ç å°±ä¼è®°ä½è´¦å·å¯ç ï¼ä»åæä½å°±ä¼èªå¨ç»å½ãè´¦æ·å­è¯è®°å½å¯ä»¥å¨ æ§å¶é¢æ¿\ç¨æ·å¸æ·\å­æ®ç®¡çå¨ ä¸­æ¥çæä¿®æ¹ã

credential.helper è¿ä¸ªéç½®é¡¹çå«ä¹ï¼è¿ä¸ªéç½®é¡¹åè®¸ç¨æ·èªè¡æå® git æä½¿ç¨çå­æ®ç®¡çå·¥å·ã
ç®åç²æ´çåæ³å°±æ¯ç´æ¥éç½® credential.helper çå¼ä¸º managerã

æ³¨æï¼å½ä½ éè¦å¨åä¸å°æºå¨ä¸ä½¿ç¨å¤ä¸ª git è´¦å·è¿ä¹æå°±ä¸è¡äºï¼å ä¸º 2 ä¸ªè´¦å·å¿å®ä½¿ç¨çä¸åçå­æ®ï¼

	git config credential.helper manager

å¦æä½ æ¯Macç³»ç»ï¼gité»è®¤æ¯æä¾osxkeychainè¾å©ç¨åºæ¥ç®¡çä½ çå¯ç ï¼ä»¥è³äºæ¯æ¬¡ä½ å½ä½ éè¦æä¾ç¨æ·ååå¯ç çæ¶åï¼osxkeychainè¾å©ç¨åºé½é»é»å¸®ä½ å¡«åäºã

å¦æä½ æ¯Windowsç³»ç»ï¼ä½ å¯è½å·²ç»å®è£äºgit-credential-winstoreäºãå¦æå®è£çæ¯GitGUIï¼åæä¾çæ¯git-credential-managerã

é¤æ­¤ä¹å¤ï¼ä½ ä¹å¯ä»¥ä½¿ç¨ git-credential-store å git-credential-cache æ¥ç®¡çå¯ç ï¼åèå¨æä»¶ä¸­ç¨ææå­å¨å¯ç ï¼åèå­å¨åå­ä¸­ãèè¿å ç§æ¹å¼é½å¯ä»¥åæ¶å­å¨ã

å½ä»¤è¯»åï¼

	git credential-store --file ~/git.store store

ssh åå¯éç½®æ¹æ³åè¦çæ RSA å¯é¥ï¼åå°å¬é¥éç½®å° git æå¡å¨ä¸ã

åéç½® Git å¨å±åæ°ï¼è¿éä¸»è¦éç½® ç¨æ·åãé®ç®±ï¼

	git config --list
	git config --global user.name "username"
	git config --global user.email "username@email.com"

ä½¿ç¨ ssh-keygen çæ RSA å¬é¥åç§é¥ï¼å®ç°æ¬å°åæå¡å¨çè®¤è¯ï¼è¾å¥å½ä»¤åè¿æ²ä¸ä¸ªåè½¦å³å¯

	ssh-keygen -t rsa

è¿æ¶åå»æ¥çç³»ç»çç¨æ·ç®å½ä¸ï¼ä¸è¬å¨ C:\Users\ä½ çç¨æ·å\.sshï¼æ¯å¦æäº .ssh æä»¶å¤¹ï¼è¿å¥ä¼çå°ä¹åçæç id_rsa ä»¥å id_rsa.pubãid_rsa æ¯ç§é¥ä¸è¦è½»æåè¯å«äººï¼id_rsa.pubæ¯å¬é¥å¯æ¾å¿åè¯ä»»ä½äººã

è¿æ¥ GitHub
è¿éä¸ä¸å®æ¯ GitHubï¼æ ¹æ®åä½åå­¦çå®éæåµæ¥è¿æ¥ä¸åçæå¡å¨ï¼æ¯å¦ OSChina ç ç äºã

ä¸é¢ä»¥ GitHub ä¸ºä¾

å¨ settings é¡µé¢ç [SSH and GPG keys](https://github.com/settings/keys) æ ä¸­æ·»å ï¼Title å¯ä»¥èªå®ä¹ï¼Key çåå®¹å³ä¸ºä¹åçæç id_rsa.pub æä»¶åå®¹ï¼å¤å¶è¿æ¥å³å¯ï¼

æå¼ git bash çªå£æ§è¡è¿æ¥æµè¯ï¼

	$ ssh -T git@github.com
	Hi jimboyeah! You've successfully authenticated, but GitHub does not provide shell access.
OKï¼å·²ç»æåè½è¿ä¸ GitHub äºï¼å½åç Gitee ä¹åæ ·å¤çï¼æ·»å è¿ç¨ä»åºå¦ä¸æä½å¯ä»¥æºå¸¦è´¦æ·ä¿¡æ¯ï¼

	git remote add origin git@github.com:jimboyeah/abt-blocklet-demo.git
	git remote add gitee git@gitee.com:jimbowhy/abt-blocklet-demo.git

å¦æç´æ¥ä½¿ç¨ URL å³èï¼åæäº¤æ¶ Gitee å¯è½ä¼æç¤ºè¾åºè´¦æ·ä¿¡æ¯ï¼å³ä½¿æå®äºèªå¨ç»å½å¬é¥ã


å¦æè¿æ¥éè¯¯ï¼å¯è½æ¯ Wrong Credentials é®é¢æ DNS æ±¡æå¯¼è´ HTTPS ä¸è½è®¿é®ï¼

	SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

	ssh: connect to host github.com port 22: Connection refused

å¯ä»¥ï¼æå°è¿æ¥è¿ç¨çè¯¦ç»ä¿¡æ¯ï¼å¯è½å¾å° $SSH_SK_PROVIDER æªè®¾ç½®çæç¤ºï¼æ´å¸¸è§çæ¯ DNS æ±¡æå¯¼è´
ååè§£éå°æ¬å° IPï¼ping github.com å¯ä»¥åç° IP æ¯å¦æ­£å¸¸ï¼

	ssh -T -v git@ssh.github.com
	ssh -T -v -p 443 git@ssh.github.com

	Authenticator provider $SSH_SK_PROVIDER did not resolve; disabling
	Connecting github.com [127.0.0.1] port 22.
	connect to address 127.0.0.1 port 22: Connect refused

æ¢ç¨ DNS æå¡å¨æ¯ä¸ä¸ªè§£å³æ¹æ³ï¼Windows ç³»ç»å¯ä»¥ä¿®æ¹ hosts å¼ºå¶æ å°å°æ­£ç¡®ç IPï¼

	C:\Windows\System32\drivers\etc\hosts

å¯¹äºè§£é root æéç Android ææºï¼å¯ä»¥ç´æ¥ç¼è¾ /system/etc/hosts éç½®æä»¶ãä½¿ç¨ææºç­ç¹å±äº«
ç½ç»ï¼æèä½¿ç¨ WIFI ç½ç»ï¼å¯ä»¥ä¿®æ¹ DHCP é«çº§éç½®ï¼æå® DNS æå¡å¨ IPã

```sh
# ä¸´æ¶ä¿®æ¹ï¼ææºç¨ USB è¿æ¥å°çµèï¼æ§è¡ adb shellï¼
# å¦æ getprop | grep dns æ¥è¯¢ä¸å°ä¿¡æ¯ï¼å¯è½æ¯ç³»ç»ä¸æ¯æ
setprop net.rmnet0.dns1 114.114.114.114
setprop net.rmnet0.dns2 114.114.114.114
setprop net.dns1 114.114.114.114
setprop net.dns2 114.114.114.114

# å®åä¸ç¨ build.prop éç½®ä¿®æ¹ï¼éè¦ ROOTï¼ä¸æ¯ææææºé½æ¯æï¼
net.rmnet0.dns1=8.8.8.8
net.rmnet0.dns2=8.8.4.4
net.dns1=8.8.8.8
net.dns2=8.8.4.4
```

é¤äº DNS ä¿®æ¹ï¼æèä¸»æº IP ä¿®æ¹ï¼å¦ä¸ç§æ¹æ¡å°±æ¯ä½¿ç¨éåç«ç¹ hub.fastgit.xyz å°±ä¸éã


Git æ¯æä¸ç§åè®®ï¼ git://ãssh:// å http://ï¼è git åè®®ä¼ä½¿ç¨å¬é¥ç»å½ï¼æ¯æ¯è¾å®å¨çä¸ç§æ¹å¼ï¼
å¦æç´æ¥ä½¿ç¨ URL å°±ç¸å½è®¾ç½®äº HTTP ä»£çï¼å¨ DNS æé®é¢æ¶å°±æäº¤ä¸äºã

è¾å¥ä»¥ä¸å½ä»¤å¯ä»¥ç¦æ­¢ HTTP ä»£çï¼

	git config --global --unset http.proxy


Windos çæ¬ç git å¯è½ä¼æç¤º

	git: 'credential-cache' is not a git command. See 'get --help'.

å®éä¸æ¯ç¼ºå°å¾®è½¯ç Git Credential Manager

å®è£ Git Credential Manager for Windowså³å¯è§£å³è¯¥é®é¢

ææ°çä¸è½½å°åä¸ºï¼

https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest

ä¸è½½å®è£å®åå¯ä»¥éè¿å½ä»¤è¿è¡æ¥çæ¯å¦çæ

å¦æè¿æ¯ä¸è½è®°å½å¯ç ç¨æ·åï¼å¯ä»¥è¯è¯ä»¥ä¸æ¹å¼ï¼

	git config --global credential.helper wincred
	git config --global credential.helper winstore

å¦æä¸ç´å¼¹æ¡æç¤ºç»å½ï¼å°±å°éç½®æä»¶ç manager å é¤ï¼åæ¬å®è£ç®å½ C:\Git\mingw64\etc ä¸çéç½®ï¼

	[credential]  
	    helper = manager


# Git login å­è¯å­å¨
https://git-scm.com/book/zh/v2/Git-å·¥å·-å­è¯å­å¨

å­è¯å­å¨

å¦æä½ ä½¿ç¨çæ¯ SSH æ¹å¼è¿æ¥è¿ç«¯ï¼å¹¶ä¸è®¾ç½®äºä¸ä¸ªæ²¡æå£ä»¤çå¯é¥ï¼è¿æ ·å°±å¯ä»¥å¨ä¸è¾å¥ç¨æ·ååå¯ç çæåµä¸å®å¨å°ä¼ è¾æ°æ®ã ç¶èï¼è¿å¯¹ HTTP åè®®æ¥è¯´æ¯ä¸å¯è½ç ââ æ¯ä¸ä¸ªè¿æ¥é½æ¯éè¦ç¨æ·ååå¯ç çã è¿å¨ä½¿ç¨åéè®¤è¯çæåµä¸ä¼æ´éº»ç¦ï¼å ä¸ºä½ éè¦è¾å¥ä¸ä¸ªéæºçæå¹¶ä¸æ¯«æ è§å¾ç token ä½ä¸ºå¯ç ã

å¹¸è¿çæ¯ï¼Git æ¥æä¸ä¸ªå­è¯ç³»ç»æ¥å¤çè¿ä¸ªäºæã ä¸é¢æä¸äº Git çéé¡¹ï¼

- é»è®¤ææé½ä¸ç¼å­ã æ¯ä¸æ¬¡è¿æ¥é½ä¼è¯¢é®ä½ çç¨æ·ååå¯ç ã
- cache æ¨¡å¼ä¼å°å­è¯å­æ¾å¨åå­ä¸­ä¸æ®µæ¶é´ã å¯ç æ°¸è¿ä¸ä¼è¢«å­å¨å¨ç£çä¸­ï¼å¹¶ä¸å¨15åéåä»åå­ä¸­æ¸é¤ã
- store æ¨¡å¼ä¼å°å­è¯ç¨ææçå½¢å¼å­æ¾å¨ç£çä¸­ï¼å¹¶ä¸æ°¸ä¸è¿æã è¿æå³çé¤éä½ ä¿®æ¹äºä½ å¨ Git æå¡å¨ä¸çå¯ç ï¼å¦åä½ æ°¸è¿ä¸éè¦åæ¬¡è¾å¥ä½ çå­è¯ä¿¡æ¯ã è¿ç§æ¹å¼çç¼ºç¹æ¯ä½ çå¯ç æ¯ç¨ææçæ¹å¼å­æ¾å¨ä½ ç home ç®å½ä¸ã

Windows ç³»ç»ï¼ä½ å¯è½å·²ç»å®è£äº git-credential-winstoreãå¦æå®è£çæ¯ GitGUIï¼åæä¾çæ¯ git-credential-managerãé¤æ­¤ä¹å¤ï¼ä½ ä¹å¯ä»¥ä½¿ç¨ git-credential-store å git-credential-cache æ¥ç®¡çå¯ç ï¼åèå¨æä»¶ä¸­ç¨ææå­å¨å¯ç ï¼åèå­å¨åå­ä¸­ãèè¿å ç§æ¹å¼é½å¯ä»¥åæ¶å­å¨ã

å¦æä½ ä½¿ç¨çæ¯ Macï¼Git è¿æä¸ç§ âosxkeychainâ æ¨¡å¼ï¼å®ä¼å°å­è¯ç¼å­å°ä½ ç³»ç»ç¨æ·çé¥åä¸²ä¸­ã è¿ç§æ¹å¼å°å­è¯å­æ¾å¨ç£çä¸­ï¼å¹¶ä¸æ°¸ä¸è¿æï¼ä½æ¯æ¯è¢«å å¯çï¼è¿ç§å å¯æ¹å¼ä¸å­æ¾ HTTPS å­è¯ä»¥å Safari çèªå¨å¡«åæ¯ç¸åçã

å¦æä½ ä½¿ç¨çæ¯ Windowsï¼ä½ å¯ä»¥å®è£ä¸ä¸ªå«å âwinstoreâ çè¾å©å·¥å·ã è¿åä¸é¢è¯´ç âosxkeychainâ ååç±»ä¼¼ï¼ä½æ¯æ¯ä½¿ç¨ Windows Credential Store æ¥æ§å¶ææä¿¡æ¯ã å¯ä»¥å¨ https://gitcredentialstore.codeplex.com ä¸è½½ã

ä½ å¯ä»¥è®¾ç½® Git çéç½®æ¥éæ©ä¸è¿°çä¸ç§æ¹å¼

	$ git config --global credential.helper cache

Git for Windows å®è£æ¶éç½®ä¸å¯¹å¯¼è´ Windows ç¼ºå° Git Credential Manager ä¼æç¤ºå½ä»¤éè¯¯ï¼éè¦åå®è£ Git Credential Manager for Windowsï¼

	git: 'credential-cache' is not a git command. See 'get --help'.

	https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest

Git Credential Manager for Windows çå·¥ä½æºå¶

ä½ çèº«ä»½ä¿¡æ¯ä¼è¢«å­æ¾å¨Windowså­æ®ç®¡çå¨ï¼ä¸è¿å­æ¾çæ¯ä¸ä¸ªå«åPAT (Person Access Token)çä»¤çã

è¿ä¸ª Credential Manager ä¼é¦åå°è¯ä½¿ç¨å½åç»éè®¡ç®æºçç¨æ·è´¦å·è¿æ¥è¿ç¨ç TFS æå¡å¨ï¼å¦ææ¬å°è®¡ç®æºåè¿ç¨ TFS åå¨ä¸ä¸ª AD åå¹¶ä¸ç»éè´¦å·å·²ç»å·å¤äºè®¿é® Git ä»åºçæéï¼åä¼ç´æ¥æåï¼å¦æä¸æååä¼å¼¹åºç»éå¯¹è¯æ¡è¦æ±ç¨æ·ç»å½ã

ä½æ¯å¦æå½åè®¡ç®æºæ²¡æå¨TFSæå±çADåä¸­ï¼åä¼ç´æ¥ç»åº Authentication Failed çéè¯¯å¹¶éåºã

è¿æ¯å ä¸ºå¨è¿ä¸ªåºæ¯ä¸æ æ³ç´æ¥ä½¿ç¨ NTLM è¿è¡èº«ä»½è®¤è¯ï¼å ä¸ºä¸å¨åä¸ä¸ªåï¼ï¼ä½æ¯å ä¸ºTFSè¿åçä¿¡æ¯è¦æ±ä½¿ç¨NTLMï¼å°±ä¼åºç°ä»¥ä¸é®é¢ã

æä»¬çè§£å³åæ³æ¯å¼ºå¶æ¬å°ç Credential Manager ä½¿ç¨ Basic æ¹å¼åéç¨æ·ååå¯ç ï¼è½ç¶å¨è¿ç§æåµä¸ä¼æä¸å®çå®å¨æ§é®é¢ï¼ä½æ¯å¦ææå¡å¨å¯ç¨äº https å å¯å°±æ²¡æå³ç³»äºã

ä½ çèº«ä»½ä¿¡æ¯ä¼è¢«å­æ¾å¨Windowså­æ®ç®¡çå¨ï¼ä¸è¿å­æ¾çæ¯ä¸ä¸ªå«åPAT (Person Access Token)çä»¤çã
é¨åè¾å©å·¥å·æä¸äºéé¡¹ã âstoreâ æ¨¡å¼å¯ä»¥æ¥åä¸ä¸ª --file path åæ°ï¼å¯ä»¥èªå®ä¹å­æ¾å¯ç çæä»¶è·¯å¾ï¼é»è®¤æ¯ `~/.git-credentials` ã âcacheâ æ¨¡å¼æ --timeout seconds åæ°ï¼å¯ä»¥è®¾ç½®åå°è¿ç¨çå­æ´»æ¶é´ï¼é»è®¤æ¯ â900âï¼ä¹å°±æ¯ 15 åéã ä¸é¢æ¯ä¸ä¸ªéç½® âstoreâ æ¨¡å¼èªå®ä¹è·¯å¾çä¾å­ï¼

	$ git config --global credential.helper store --file ~/.my-credentials
	$ git config --global credential.helper store --file="./.git-credentials"

Git çè³åè®¸ä½ éç½®å¤ä¸ªè¾å©å·¥å·ã å½æ¥æ¾ç¹å®æå¡å¨çå­è¯æ¶ï¼Git ä¼æé¡ºåºæ¥è¯¢ï¼å¹¶ä¸å¨æ¾å°ç¬¬ä¸ä¸ªåç­æ¶åæ­¢æ¥è¯¢ã å½ä¿å­å­è¯æ¶ï¼Git ä¼å°ç¨æ·ååå¯ç åéç» ææ éç½®åè¡¨ä¸­çè¾å©å·¥å·ï¼å®ä»¬ä¼æèªå·±çæ¹å¼å¤çç¨æ·ååå¯ç ã å¦æä½ å¨éªå­ä¸æä¸ä¸ªå­è¯æä»¶ï¼ä½åå¸æå¨è¯¥éªå­è¢«æåºçæåµä¸ä½¿ç¨åå­ç¼å­æ¥ä¿å­ç¨æ·åå¯ç ï¼.gitconfig éç½®æä»¶å¦ä¸ï¼

	[credential]
	    helper = store --file /mnt/thumbdrive/.git-credentials
	    helper = cache --timeout 30000

éç½®ä¸­ credential.helper é¡¹æéå¤ï¼æ¥ç --global --system --local ä¸ä¸ªçº§å«éç½®ï¼åºç°å¤ä¸ªç¸åéç½®å¼éè¦ --unset-all æ¥æ¸æ¥ï¼

	fatal: unable to get credential storage lock: File exists
	warning: credential.helper has multiple values

	git config --local --unset credential.helper
	git config --global --unset-all credential.helper



åºå±å®ç°
è¿äºæ¯å¦ä½å®ç°çå¢ï¼ Git å­è¯è¾å©å·¥å·ç³»ç»çå½ä»¤æ¯ git credentialï¼è¿ä¸ªå½ä»¤æ¥æ¶ä¸ä¸ªåæ°ï¼å¹¶éè¿æ åè¾å¥è·åæ´å¤çåæ°ã

ä¸¾ä¸ä¸ªä¾å­æ´å®¹æçè§£ã æä»¬åè®¾å·²ç»éç½®å¥½ä¸ä¸ªå­è¯è¾å©å·¥å·ï¼è¿ä¸ªè¾å©å·¥å·ä¿å­äº mygithost çå­è¯ä¿¡æ¯ã ä¸é¢æ¯ä¸ä¸ªä½¿ç¨ âfillâ å½ä»¤çä¼è¯ï¼å½ Git å°è¯å¯»æ¾ä¸ä¸ªæå¡å¨çå­è¯æ¶å°±ä¼è¢«è°ç¨ãä»¥ä¸å¼å§äº¤äºå½ä»¤ï¼

	$ git credential fill
	protocol=https
	host=mygithost
	
	protocol=https
	host=mygithost
	username=bob
	password=s3cre7

	$ git credential fill
	protocol=https
	host=unknownhost

	Username for 'https://unknownhost': bob
	Password for 'https://bob@unknownhost':
	protocol=https
	host=unknownhost
	username=bob
	password=s3cre7

Git-credential æ¥ä¸æ¥ä¼ç­å¾æ åè¾å¥ï¼è¾å¥ protocol å hostï¼å³åè®®åä¸»æºåãåè·ä¸ä¸ªç©ºè¡ä»£è¡¨è¾å¥å·²ç»å®æï¼å­è¯ç³»ç»åºè¯¥è¾åºå®æç¥éçä¿¡æ¯ã

æ¥ä¸æ¥ç± Git-credential æ¥ç®¡ï¼å¹¶ä¸å°æ¾å°çä¿¡æ¯æå°å°æ åè¾åºãå¦ææ²¡ææ¾å°å¯¹åºçå­è¯ï¼Git ä¼è¯¢é®ç¨æ·çç¨æ·ååå¯ç ï¼æä»¬å°è¿äºä¿¡æ¯è¾å¥å°å¨æ åè¾åºçå°æ¹ï¼è¿ä¸ªä¾å­ä¸­æ¯åä¸ä¸ªæ§å¶å°ï¼ã

å­è¯ç³»ç»å®éè°ç¨çç¨åºå Git æ¬èº«æ¯åå¼çï¼å·ä½æ¯åªä¸ä¸ªä»¥åå¦ä½è°ç¨ä¸ credential.helper éç½®çå¼æå³ã è¿ä¸ªéç½®æå¤ç§æ ¼å¼ï¼

- `foo`					æ§è¡ git-credential-foo
- `foo -a --opt=bcd`	æ§è¡ git-credential-foo -a --opt=bcd
- `/path/to/foo -xyz`	æ§è¡ /absolute/path/foo -xyz
- `!f() { echo "password=s3cre7"; }; f`	! åé¢çä»£ç ä¼å¨ shell æ§è¡

ä¸é¢æè¿°çè¾å©å·¥å·å¯ä»¥è¢«ç§°å git-credential-cacheãgit-credential-store ä¹ç±»ï¼æä»¬å¯ä»¥éç½®å®ä»¬æ¥æ¥åå½ä»¤è¡åæ°ã éå¸¸çæ ¼å¼æ¯ âgit-credential-foo [args] <action>â æ åè¾å¥/è¾åºåè®®å git-credential ä¸æ ·ï¼ä½å®ä»¬ä½¿ç¨çæ¯ä¸å¥ç¨å¾®ä¸å¤ªä¸æ ·çè¡ä¸ºï¼

- get æ¯è¯·æ±è¾å¥ä¸å¯¹ç¨æ·ååå¯ç ã
- store æ¯è¯·æ±ä¿å­ä¸ä¸ªå­è¯å°è¾å©å·¥å·çåå­ã
- erase ä¼å°ç»å®çè¯ä¹¦ä»è¾å©å·¥å·åå­ä¸­æ¸é¤ã

å¯¹äº store å erase ä¸¤ä¸ªè¡ä¸ºæ¯ä¸éè¦è¿åæ°æ®çï¼Git ä¹ä¼å¿½ç¥æï¼ã ç¶èå¯¹äº getï¼Git å¯¹è¾å©å·¥å·çè¿åä¿¡æ¯ååæå´è¶£ã

å¦æè¾å©å·¥å·æ²¡æä»»ä½æç¨çä¿¡æ¯ï¼å®å¯ä»¥ç´æ¥éåºèä¸éè¦è¾åºä»»ä½ä¸è¥¿ï¼ä½å¦æå®æè¿äºä¿¡æ¯ï¼å®å¨æä¾çä¿¡æ¯åé¢å¢å å®ææ¥æçä¿¡æ¯ã è¿äºè¾åºä¼è¢«è§ä¸ºä¸ç³»åçèµå¼è¯­å¥ï¼æ¯ä¸ä¸ªæä¾çæ°æ®é½ä¼å° Git å·²æçæ°æ®æ¿æ¢æã

è¿æä¸ä¸ªåä¸é¢ä¸æ ·çä¾å­ï¼ä½æ¯è·³è¿äº git-credential è¿ä¸æ­¥ï¼ç´æ¥å° git-credential-store:

	$ git credential-store --file ~/git.store store
	protocol=https
	host=mygithost
	username=bob
	password=s3cre7

	$ git credential-store --file ~/git.store get
	protocol=https
	host=mygithost

	username=bob
	password=s3cre7

éç½®åè¯ git-credential-store å»ä¿å­å­è¯ï¼å½è®¿é® https://mygithost æ¶ä½¿ç¨ç¨æ·å âbobâï¼å¯ç æ¯ âs3cre7âã

ç°å¨æä»¬ååºè¿ä¸ªå­è¯ã æä»¬æä¾è¿æ¥è¿é¨åçä¿¡æ¯ https://mygithost ä»¥åä¸ä¸ªç©ºè¡ãgit-credential-store è¾åºæä»¬ä¹åä¿å­çç¨æ·ååå¯ç ã

`~/git.store` æä»¶çåå®¹ç±»ä¼¼ï¼

	https://bob:s3cre7@mygithost

ä»ä»æ¯ä¸ç³»ååå«å­è¯ä¿¡æ¯ URL ç»æçè¡ã osxkeychain å winstore è¾å©å·¥å·ä½¿ç¨å®ä»¬åç«¯å­å¨çåçæ ¼å¼ï¼è cache ä½¿ç¨å®çåå­æ ¼å¼ï¼å¶ä»è¿ç¨æ æ³è¯»åï¼ã

èªå®ä¹å­è¯ç¼å­
å·²ç»ç¥é git-credential-store ä¹ç±»çæ¯å Git æ¯ç¸äºç¬ç«çç¨åºï¼å°±ä¸é¾çè§£ Git å­è¯è¾å©å·¥å·å¯ä»¥æ¯ ä»»æ ç¨åºã è½ç¶ Git æä¾çè¾å©å·¥å·è¦çäºå¤§å¤æ°å¸¸è§çä½¿ç¨åºæ¯ï¼ä½å¹¶ä¸è½æ»¡è¶³æææåµã æ¯å¦ï¼åè®¾ä½ çæ´ä¸ªå¢éå±äº«ä¸äºå­è¯ï¼ä¹è®¸æ¯å¨é¨ç½²æ¶ä½¿ç¨ã è¿äºå­è¯æ¯ä¿å­å¨ä¸ä¸ªå±äº«ç®å½éï¼ç±äºè¿äºå­è¯ç»å¸¸åæ´ï¼æä»¥ä½ ä¸æ³æå®ä»¬å¤å¶å°ä½ èªå·±çå­è¯ä»åºä¸­ã ç°æçè¾å©å·¥å·æ æ³æ»¡è¶³è¿ç§æåµï¼æ¥ççæä»¬å¦ä½èªå·±å®ç°ä¸ä¸ªã è¿ä¸ªç¨åºåºè¯¥æ¥æå ä¸ªæ ¸å¿åè½ï¼

- æä»¬å¯ä¸éè¦å³æ³¨çè¡ä¸ºæ¯ getï¼store å erase æ¯åæä½ï¼æä»¥å½æ¥åå°è¿ä¸¤ä¸ªè¯·æ±æ¶æä»¬ç´æ¥éåºå³å¯ã
- å±äº«çå­è¯æä»¶æ ¼å¼å git-credential-store ä½¿ç¨çæ ¼å¼ç¸åã
- å­è¯æä»¶çè·¯å¾ä¸è¬æ¯åºå®çï¼ä½æä»¬åºè¯¥åè®¸ç¨æ·ä¼ å¥ä¸ä¸ªèªå®ä¹è·¯å¾ä»¥é²ä¸ä¸ã

æä»¬åä¸æ¬¡ä½¿ç¨ Ruby æ¥ç¼åè¿ä¸ªæ©å±ï¼ä½åªè¦ Git è½å¤æ§è¡æç»çç¨åºï¼ä»»ä½è¯­è¨é½æ¯å¯ä»¥çã è¿æ¯æä»¬çå­è¯è¾å©å·¥å·çå®æ´ä»£ç ï¼

	#!/usr/bin/env ruby

	require 'optparse'

	path = File.expand_path '~/.git-credentials' (1)
	OptionParser.new do |opts|
	    opts.banner = 'USAGE: git-credential-read-only [options] <action>'
	    opts.on('-f', '--file PATH', 'Specify path for backing store') do |argpath|
	        path = File.expand_path argpath
	    end
	end.parse!

	exit(0) unless ARGV[0].downcase == 'get' (2)
	exit(0) unless File.exists? path

	known = {} (3)
	while line = STDIN.gets
	    break if line.strip == ''
	    k,v = line.strip.split '=', 2
	    known[k] = v
	end

	File.readlines(path).each do |fileline| (4)
	    prot,user,pass,host = fileline.scan(/^(.*?):\/\/(.*?):(.*?)@(.*)$/).first
	    if prot == known['protocol'] and host == known['host'] then
	        puts "protocol=#{prot}"
	        puts "host=#{host}"
	        puts "username=#{user}"
	        puts "password=#{pass}"
	        exit(0)
	    end
	end

æä»¬å¨è¿éè§£æå½ä»¤è¡åæ°ï¼åè®¸ç¨æ·æå®è¾å¥æä»¶ï¼é»è®¤æ¯ `~/.git-credentials`

è¿ä¸ªç¨åºåªæå¨æ¥åå° get è¡ä¸ºçè¯·æ±å¹¶ä¸åç«¯å­å¨çæä»¶å­å¨æ¶æä¼æè¾åºã

è¿ä¸ªå¾ªç¯ä»æ åè¾å¥è¯»åæ°æ®ï¼ç´å°è¯»åå°ç¬¬ä¸ä¸ªç©ºè¡ã è¾å¥çæ°æ®è¢«ä¿å­å° known åå¸è¡¨ä¸­ï¼ä¹åéè¦ç¨å°ã

è¿ä¸ªå¾ªç¯è¯»åå­å¨æä»¶ä¸­çåå®¹ï¼å¯»æ¾å¹éçè¡ã å¦æ known ä¸­çåè®®åä¸»æºåä¸è¯¥è¡ç¸å¹éï¼è¿ä¸ªç¨åºè¾åºç»æå¹¶éåºã

æä»¬æè¿ä¸ªè¾å©å·¥å·ä¿å­ä¸º git-credential-read-onlyï¼æ¾å°æä»¬ç PATH è·¯å¾ä¸å¹¶ä¸ç»äºæ§è¡æéã ä¸ä¸ªäº¤äºå¼ä¼è¯ç±»ä¼¼ï¼

	$ git credential-read-only --file=/mnt/shared/creds get
	protocol=https
	host=mygithost

	protocol=https
	host=mygithost
	username=bob
	password=s3cre7

ç±äºè¿ä¸ªçåå­æ¯ âgit-â å¼å¤´ï¼æä»¥æä»¬å¯ä»¥å¨éç½®å¼ä¸­ä½¿ç¨ç®ä¾¿çè¯­æ³ï¼

	$ git config --global credential.helper read-only --file /mnt/shared/creds

æ­£å¦ä½ çå°çï¼æ©å±è¿ä¸ªç³»ç»æ¯ç¸å½ç®åçï¼å¹¶ä¸å¯ä»¥ä¸ºä½ åä½ çå¢éè§£å³ä¸äºå¸¸è§é®é¢



# å½ä»¤æ¹å¼åå»ºè¿ç¨ä»£ç ä»åº
- https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user
- https://docs.github.com/en/developers/apps/scopes-for-oauth-apps
- https://github.com/settings/tokens
- https://docs.github.com/
- https://gitee.com/api/v5/swagger#/postV5UserRepos

å°æ¬å°ä»£ç  push å° github è¿ç¨ä»£ç ä»åºä¹åï¼æ»æ¯éè¿å¨çº¿æ°å»º github ä»£ç ä»åºçæä½æ¯æ¯è¾éº»ç¦çã

åå© Github APIï¼å¯ä»¥å©ç¨å½ä»¤åå»ºè¿ç¨ä»£ç ä»åºï¼ååä¾¿æ·ã

é¦åéè¦ç³è¯·å¹¶è·åèªå·±ç API Tokenï¼ç¨äºé´æï¼OAuth scope requirementsã

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

éè¿ API Token å¯ä»¥å¨ OAuth åºç¨ä¸­å®å¨è®¿é®éè¦ææç API èµæºï¼ä»¥ä¸å¯ä»¥æ£æµä»ä¹ç±»åç OAuth ä½ç¨åæ¯å¯ç¨çï¼

	$ curl -H "Authorization: token YOUR_OAUTH-TOKEN" https://api.github.com/users/jimboyeah -I
	HTTP/1.1 200 OK
	X-OAuth-Scopes: repo, user
	X-Accepted-OAuth-Scopes: user

å¯¹äºè¿ç¨åå»ºä»åºï¼æ£æ¥å¶ä¸­å·²ç»ææç API åè¡¨ X-OAuth-Scopes å X-Accepted-OAuth-Scopes ä¸¤é¡¹ã

å¾é repo æ¯æä»åºçå®å¨æ§å¶ï¼å·ä½åè Scopes for OAuth Appsï¼

- `repo:status` Access commit status
- `repo_deployment` Access deployment status
- `public_repo` Access public repositories
- `repo:invite` Access repository invitations
- `security_events` Read and write security events


ç¶åå¨æ¬æºä½¿ç¨èæ¬ç®åè¿ç¨åå»ºä»åºçè¿ç¨ï¼å¨ Windows ç³»ç»ä¸å¯ä»¥ä½¿ç¨ä»¥ä¸èæ¬ï¼

	@ECHO off
	SETLOCAL
	set user=yyyyyy
	set token=xxxxx
	set repo=%1

	set private=%2
	IF "%private%" == "private" (
	    set private=true
	)
	IF not "%private%" == "true" (
	    set private=false   
	)
	
	GOTO :RUN


	:ERR
	    echo Error occurs %errorlevel% !
	    GOTO :END
	:RUN

	IF "%repo%" == "" (
	    echo Script [%0] need a repository name for github!
	    echo Example: %0 demo-repository
	    GOTO :END
	)
	IF "%repo%" == "user" (
	    curl -u %user%:%token% https://api.github.com/user
	    GOTO :END
	)

	IF "%repo%" == "demo" (
	    curl -H "Authorization: token %token%" https://api.github.com/repos/%user%/%repo%
	    GOTO :END
	)

	IF "%repo%" == "test" (
	    curl -H "Authorization: token %token%" https://api.github.com/users/jimboyeah -I
	    rem curl -v -H "Authorization: %token% TOKEN" https://api.github.com/repos/octodocs
	    GOTO :END
	)

	IF not "%repo%" == "" (
	    echo Script [%0] ready to create an new repository [%repo%] for github! 
	    curl -u '%user%:%token%' -H "Authorization: token %token%" https://api.github.com/user/repos -d "{\"name\":\"%repo%\"}"
	    rem curl -u '%user%:%token%' -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d "{\"name\":\"%repo%\"}"
	    if not %errorlevel% == 0 (
	        GOTO :ERR
	    )
	    git remote add origin git@github.com:%user%/%repo%.git
	    echo Done with:
	    echo https://github.com/%user%/%repo%.git
	)
	:END

	ENDLOCAL

Gitee API å°åä¸ä¸æ ·ï¼ç¨ä¸ºä¿®æ¹å°±å¯ä»¥ç¨ï¼

	@ECHO off
	SETLOCAL
	set user=xxx
	set token=xxx
	set repo=%1
	set private=%2
	GOTO :RUN

	:ERR
	    echo Error occurs %errorlevel% !
	    GOTO :END
	:RUN

	IF "%repo%" == "" (
	    echo Script [%0] need a repository name for gitee!
	    echo Example: %0 demo-repository
	    GOTO :END
	)
	IF "%repo%" == "user" (
	    curl -u %user%:%token% https://api.gitee.com/user
	    GOTO :END
	)

	IF "%repo%" == "demo" (
	    curl -H "Authorization: token %token%" https://gitee.com/api/v5/repos/%user%/%repo%
	    GOTO :END
	)

	IF "%repo%" == "test" (
	    curl -H "Authorization: token %token%" https://api.gitee.com/users/jimboyeah -I
	    rem curl -v -H "Authorization: %token% TOKEN" https://gitee.com/api/v5/repos/octodocs
	    GOTO :END
	)

	IF "%private%" == "private" (
	    set private=true
	)
	IF not "%private%" == "true" (
	    set private=false   
	)

	IF not "%repo%" == "" (
	    echo Script [%0] ready to create an new repository [%repo%] for gitee! 
	    curl -u '%user%:%token%' -H "Authorization: token %token%" -H "Content-Type: application/json;charset=UTF-8" https://gitee.com/api/v5/user/repos -d "{\"name\":\"%repo%\",\"private\":%private%}"
	    if not %errorlevel% == 0 (
	        GOTO :ERR
	    )
	    git remote add origin git@gitee.com:%user%/%repo%.git
	    echo Done with:
	    echo https://gitee.com/%user%/%repo%.git
	)
	:END

	ENDLOCAL

å¦ bash çéç½®æä»¶ä¸­å å¥ä¸è¿°å½æ°å®ä¹ï¼

	github-create() 
	{if [ $1 ]
	then
	    repo_name=$1
	else
	    repo_name=`basename $(pwd)`
	    echo "set Repo name to ${repo_name}"
	fi 
	curl -u 'username:api_token' https://api.github.com/user/repos -d '{"name":"'$repo_name'"}'
	git remote add origin git@github.com:username/$repo_name.git
	}


æ³¨æï¼éè¦ä½¿ç¨èªå·±ç username ä¸ api_token è¦çä¸è¿°å½æ°ä¸­ç¸åºçå¼ã

åå»ºä»£ç ä»åºåªéè¾å¥å½ä»¤ï¼

	github-create repo_name

å¦ææ²¡ææå®ä»åºåç§° repo_nameï¼ä¼èªå¨å°å½åè·¯å¾çæä»¶å¤¹åç§°è®¾ç½®ä¸ºä»£ç ä»åºçåç§°ãç¶åï¼å°±å¯ä»¥å°æ¬å°ä»£ç ä»åº push å°è¿ç¨ä»£ç ä»åºï¼

	git push -u origin master



# git init åå§å

åå® starter ä¸ºä»åºåï¼ä½¿ç¨ init å¨æ°åå»ºï¼å¦æè¦ç®¡ççç®å½å·²ç»å­å¨ï¼é£ä¹å°±åæ¢å°æ­¤ç®å½æ§è¡å¦ä¸å½ä»¤ã

å¦æç®å½ä¸å­å¨ï¼å¯ä»¥æå¨æèå½ä»¤è¡æ¹å¼åå»ºï¼

>	$ mkdir /starter # åå»º starter ç®å½ã
>	$ cd /starter 	 # åæ¢å°æ­¤ç®å½ã
>	$ git init 		 # å¨æ­¤ç®å½ä¸åå§åä»åºï¼éé¢çæä»¶å¯ä»¥è¿è¡çæ¬ç®¡çã
>	Initialized empty Git repository in E:/starter/starter/.git/

git ä»åºä¿å­å¨éèç®å½ .git ä¸ï¼éè¿æ¸é¤è¿ä¸ªç®å½å°±å¯ä»¥æ¸ç©ºä»åº

>	rm -rf  .git

åå»ºä»åºåï¼å¦æéè¦å°æ¬å°åå»ºä¸è¿ç¨ä»åºå³èèµ·æ¥ï¼éå¸¸é½éè¦ï¼ä¾å¦å github è¿ç¨ä»åºå³èã

éå¸¸éè¿ git clone æ¹å¼åéè¿ç¨ä»åºæ¶ï¼ä¼èªå¨åå»º origin è¿æ¥å°æå®çè¿ç¨ä»åºï¼å®æ¯éç½®æä»¶ config éé»è®¤å®ä¹çè¿ç«¯æå¡å¨åã

æ¯å¦ config æ¯è¿æ ·å®ä¹çï¼

	[core]
		repositoryformatversion = 0
		filemode = false
		bare = false
		logallrefupdates = true
		symlinks = false
		ignorecase = true
	[branch "master"]
	[branch "'win32_x86'"]
	[branch "'linux_arm'"]
	[remote "origin"]
		url = https://gitee.com/jimbowhy/git-demo.git
		fetch = +refs/heads/*:refs/remotes/origin/*
	[branch "'linux_arm'"]
		remote = origin
		merge = refs/heads/'linux_arm'
	[branch "'win32_x86'"]
		remote = origin
		merge = refs/heads/'win32_x86'

```sh
> git config --local -l
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
remote.origin.url=git@github.com:jimboyeah/spine-sfml-demo.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
```

æå¨æ·»å è¿ç¨ä»åºä½¿ç¨ git remote add å½ä»¤ï¼

	echo "# xx" >> README.md
	git init
	git add README.md
	git commit -m "first commit"

	git remote add origin https://github.com/jimboyeah/xx.git
	git push -u origin master

	# Push Current Brench
	git push -u origin HEAD

å¨ Github æå¡å¨ä¸åå»ºä¸ä¸ªä»åºåï¼å¯ä»¥å¨æ¬å°åå§åå¹¶æäº¤åå®¹åï¼å°æ¬å°ä»åºéè¿ git push æ¨éå°æå¡å¨ä¸ã

å¨ Git ä¸­ï¼ç¨ HEAD è¡¨ç¤ºå½åçæ¬ï¼ä¹å°±æ¯ææ°çæäº¤ commit idï¼ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^`ï¼ä¸ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^^`ï¼å½ç¶å¾ä¸ 100 ä¸ªçæ¬å¯ä»¥åæ `HEAD~100`ã


ç°å¨æ³è¦å°ä»åºçè¿ç«¯å°åæ¹å°å¦å¤ä¸ä¸ªæå¡å¨æèå¦å¤ä¸ä¸ªä»åºä¸å»ï¼é£ä¹å°±åå ææ§ç originï¼æèç´æ¥è®¾ç½® URL å°åï¼æèåæ·»å ä¸ä¸ªæ°çè¿ç¨æå¡å¨å°åï¼

	git remote remove origin
	git remote set-url origin git@github.com:jimboyeah/xx.git
	git remote add origin_copy https://github.com/jimboyeah/demo.git

æ¯å¦æ³å¨å¨ Github ä¸ç demo ä»åºæ¾ç½®å¤ä¸ªé¡¹ç®ï¼é£ä¹å¯ä»¥èèä½¿ç¨åæ¯çæ¹å¼ãéå¸¸ä»åºé½æ¯æ master åæ¯çï¼åå°å½åé¡¹ç®è½¬å°ä¸ä¸ªä¸ä¸è¿ç«¯æå²çªçåæ¯ï¼åå°è¿ä¸ªåæ¯æ¨éå°è¿ç«¯æå¡å¨ï¼

	git branch go-my-websocket
	git checkout go-my-websocket
	git push -u origin go-my-websocket

å¯ä»¥ä½¿ç¨ fetch æ¥æåè¿ç«¯çåæ¯ï¼

	git fetch https://github.com/jimboyeah/demo.git master

git pull åæ¯å°è¿ç¨ä¸»æºçææ°åå®¹æä¸æ¥åç´æ¥åå¹¶ï¼å³ï¼git pull = git fetch + git mergeï¼è¿æ ·å¯è½ä¼äº§çå²çªï¼éè¦æå¨è§£å³ã

	git pull https://github.com/jimboyeah/demo.git master

éå¸¸ä¸¤ä¸ªç¬ç«åå»ºçä»åºé½ä¼åºç°éè¯¯ï¼

	fatal: refusing to merge unrelated histories

ç®åç²æ´è§£å³æ¹æ³å¯ä»¥éè¿åæ°å¼ºå¶åå¹¶ï¼ä½è¿ç§æ¹å¼ä¸å¥½ï¼

	git pull origin master --allow-unrelated-histories

å¯ä»¥éè¿ log æ¥çæ¬å° master åæ¯åè¿ç¨(origin)åæ¯çåºå«ï¼åä½¿ç¨ rebase éç½®åºç¹ï¼ è¿æ®µå½ä»¤å°è¿ç«¯ä»£ç  pull ä¸æ¥ï¼ç¶ååä½¿ç¨æ¨éå½ä»¤å°æ¬å°æ´æ°çæä»¶æ¨éå°è¿ç«¯æå¡å¨ä¸ï¼

	git log -p master..origin/master
	git pull --rebase origin master
	git push -u origin master

ä»£ç ä»åºçæä»¶åè¡¨å¯ä»¥ä½¿ç¨ ls-files å½ä»¤æ¥çï¼æä½¿ç¨ log æ¥çæä»¶æ¹å¨ï¼

	git ls-files
	git log --graph

åè¿ç«¯ä»åºåä½æ¶ï¼ä¼éå¾å°æ¬å°åéäºæ§çæ¬ï¼è¿åå¯¼è´æ¨éè¿ç«¯å¤±è´¥ï¼

	Updates were rejected because the tip of your current branch is behind

å ä¸ºè¿ç¨ä»åºçåæ¯æ¯æ¬å°çä»£ç è¦æ°ï¼æä»¥æå²çªï¼ä½ è¦ä¹æå²çªè§£å³æåæäº¤ï¼è¦ä¹å¼æ°åæ¯æäº¤ï¼è¦ä¹å°±ç´æ¥ä½¿ç¨ git push --force æ´åæäº¤ï¼å¤äººåä½è¯·æéï¼ï¼ï¼


Git çæ¬ç³»ç»ä¸­ï¼å¨å·¥ä½ç®å½æ ä¸çæä»¶æåç§åºæ¬ç¶æåå¯¹åºåç§åºåï¼å¦æä»åºåè¿ç¨æå¡å¨è¿æ¥ï¼åæ 5 ç§ç¶æ 5 ä¸­åºåãçæ¬ä»åºçæ°æ®åºä¿å­å¨å·¥ä½ç®å½ä¸ç .git éèç®å½ä¸ï¼æ¬å°æäº¤çæä»¶é½ä¼å¨è¿éé¢ã

å¯ä»¥éæ¶ä½¿ç¨ git status å½ä»¤æ¥çç¶æä¿¡æ¯ï¼

|   State   | Workplace |                  è¯´æ                 |
|-----------|-----------|---------------------------------------|
| Untracked | å·¥ä½åº    | Untracked files                       |
| Modified  | ä¸´æ¶åº    | Changes not staged for commit         |
| Staged    | æå­åº    | Changes to be committed               |
| Commited  | æ¬å°åº    | nothing to commit, working tree clean |
| Pushed    | è¿ç¨åº    | Your branch is ahead or up-to-date    |

é¦åï¼å¨æ¬å°å·¥ä½ç®å½éè¿ git init åå»ºæ¬å°ä»åºæèä½¿ç¨ git clone å°è¿ç¨ä»åºåéå°æ¬å°åï¼å°±ä¼å¨ä¸ç¨ç .git ç®å½ä¸äº§ççæ¬æ°æ®åºã

ä»¥ä¸æ¯æä»¶çæ¬ç®¡ççä¸ä¸ªåºæ¬æµç¨ï¼

- *Untracked* ç¶æï¼å¨å·¥ä½ç®å½ä¸åå»ºæ°æä»¶ï¼å°±æ¯æ­¤ç¶æï¼å³æªè¢«ç´¢å¼åè·è¸ªçæä»¶ï¼æä»¥ä¸ä¸¤ç§ç¶æèµ°åï¼
	- ä½¿ç¨ `git add <file>` å½ä»¤å°å¶æ·»å å°ç´¢å¼è¿è¡è·è¸ªã
	- æææªè·è¸ªç¶æï¼æèä»ç£çä¸­å é¤ï¼git ä¸å¯¹å¶åååºã
- ç´¢å¼ä¸­è·è¸ªçæä»¶çç¶æï¼å¦ä¸ï¼
	- *Modified* åå®¹æ¹å¨ç¶æã
	- *Deleted* å é¤ç¶ææä»¶æä¸¤ç§ï¼ä½¿ç¨ git-rm å¯¹æå­åºãæå·¥ä½åºçåå®¹è¿è¡å é¤ï¼ä½¿ç¨ç³»ç»å é¤å½ä»¤è¿è¡ç©çå é¤ã
	- æ­¤æ¶æ°æ®è¿åªæ¯å¨å·¥ä½ç®å½äº§çä½ç¨ï¼æªæ´æ°å°çæ¬æ°æ®åºä¸­ï¼æ­¤æ¶ `git add` å½ä»¤å°ä¿®æ¹æ´æ°å°æå­åºã
	- ä¹å¯ä»¥ä½¿ç¨ `git restore --staged <file>...` ç­å½ä»¤ä»æå­åºæçæ¬æ°æ®åºä¸­ç°æçåå®¹è¿ååºæ¥ã
- *Staged* to *Commited* æ·»å å°æå­åºåï¼
	- æå­åºçéå¸¸æ¯ä¸ºæ¥ä¸æ¥è¿è¡æäº¤ï¼å°æä»¶çæ¹å¨æ­£å¼å½å¥æ¬å°ä»åºã
	- æå­ç¶æçåå®¹å¯ä»¥ä½¿ç¨ `git rm` å½ä»¤æ¥å é¤ï¼ä¹å¯ä»¥ä½¿ç¨ `git restore` è¿åå°å·¥ä½åºã
	- éå¸¸ï¼éè¦æ§è¡ `git commit` å½ä»¤å°å¶æäº¤å°ä»åºçæ°æ®åºä¸­ã
- *Pushed* ä¸ä¸æ­¥å°±æ¯éè¿ `git push` å°æ¬å°ä»åºåå®¹æ¨éå°è¿ç¨æå¡å¨ï¼éè¦è®¾ç½® origin ç­è¿ç¨é¾æ¥å°åã


```sh
# ////////////////////////////////////////////
# // Initialize an new repository
# ////////////////////////////////////////////
> git init
Initialized empty Git repository in ~/.git/

> git status
On branch master
No commits yet

# ////////////////////////////////////////////
# // Add new file to the index
# ////////////////////////////////////////////
>echo somthing > test.txt
> git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
  (use "git add <file>..." to update what will be committed)
        test.txt

> git add test.txt
> git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   OpenGL/SFML.md
        modified:   git.md
        new file:   test.txt

# ////////////////////////////////////////////
# // Remove stated file
# ////////////////////////////////////////////
> git rm --cached test.txt
rm 'test.txt'

# ////////////////////////////////////////////
# // Remove already exists file in repository
# ////////////////////////////////////////////
> git rm .\README.md
> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    README.md

> git commit -m "Delete Readme.md"
[master cf0f942] Delete Readme.md
 1 file changed, 1 insertion(+)
 delete mode 100644 README.md

# ////////////////////////////////////////////
# // Recover file from commit history
# ////////////////////////////////////////////
> git log --diff-filter=D --summary
commit 3e47d93492632171e75acb2fdbaa2629d6357a61 (HEAD -> master)
Author: Jeangowhy <jimboyeah@gmail.com>
Date:   Thu Jan 27 21:30:04 2022 +0800

    Delete Readme.md

 delete mode 100644 README.md

> git checkout HEAD@{1} README.md
Updated 1 path from 50384ab

> git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md

> git add README.md
>del README.md
> git status
On branch master
nothing to commit, working tree clean

# ////////////////////////////////////////////
# // File in both staged and unstaged
# ////////////////////////////////////////////
> git checkout HEAD@{1} README.md
> git commit -m "Recover README.md"
...
 create mode 100644 README.md

>echo Update > README.md
> git status
...
Changes not staged for commit:
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

> git add README.md
> git status
...
Changes to be committed:
        modified:   README.md

>del README.md
> git status
...
Changes to be committed:
        modified:   README.md

Changes not staged for commit:
        deleted:    README.md

> git commit -m "File in both staged & unstage"
[master bba7f06] File in both staged & unstage
 1 file changed, 1 insertion(+), 66 deletions(-)
 rewrite README.md (100%)

> git status
...
Changes not staged for commit:
        deleted:    README.md

no changes added to commit (use "git add" and/or "git commit -a")

> git rm README.md
rm 'README.md'

# It still can be restored from staged to workplace
# >git restore --stage .\README.md
# >git restore .\README.md
# It can be recovered from history by git-checkout git-reset git-revert

> git status
...
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    README.md

> git commit -m "Actually delete!"
[master 7744b00] Actually delete!
 1 file changed, 1 deletion(-)
 delete mode 100644 README.md

# ////////////////////////////////////////////
# // Pull down or Push to remote server
# ////////////////////////////////////////////
> git remote remove origin
> git remote add origin https://github.com/jimboyeah/demo.git
> git remote set-url origin git@github.com:jimboyeah/xx.git


# push the current branch to remote server
> git push
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (11/11), 4.78 KiB | 699.00 KiB/s, done.
Total 11 (delta 8), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (8/8), completed with 4 local objects.
To github.com:jimboyeah/xx.git
   da7c64f..ca40c1e  master -> master

> git push -u origin HEAD
Everything up-to-date
Branch 'master' set up to track remote branch 'master' from 'origin'.

> git status
On branch master
nothing to commit, working tree clean
```



# git clone åéè¿ç¨ä»åºå°æ¬å°

ä½¿ç¨ git clone åéè¿ç¨ä»åºå°æ¬å°ï¼

>	$ git clone [url]

ä»£ç å®ä¾å¦ä¸ï¼

>	$ git clone https://github.com/jquery/jquery.git
>	Cloning into 'jquery'...
>	remote: Counting objects: 42826, done.
>	remote: Compressing objects: 100% (10/10), done.
>	remote: Total 42826 (delta 1), reused 1 (delta 0), pack-reused 42816
>	Receiving objects: 100% (42826/42826), 27.18 MiB | 22.00 KiB/s, done.
>	Resolving deltas: 100% (30299/30299), done.

ä»¥ä¸åé jQuery ä»åºå°æ¬å°ååå·¥ä½ç®å½ä¸ä¿å­ã

>	$ git clone https://github.com/jquery/jquery.git jQuery-latest

ä»åºåéå°æ¬å°å½åç®å½ä¸ç jQuery-latest ç®å½ä¸ï¼éè¿åéè·å¾ççæ¬åºçç¶æä¸åéæ¶ççº¿ä¸ç¶æç¸åã

æå®åæ¯æçæ¬ï¼åç¬åæ¯åé Single-branch

>   $ git clone -b developer --single-branch https://github.com/alibaba/AliOS-Things.git
>	$ git clone -b developer https://github.com/alibaba/AliOS-Things.git
>   $ git clone -b v3.0.0 https://github.com/alibaba/AliOS-Things.git
>   $ git clone -b blender-v2.83-release git://git.blender.org/blender.git

åªéç¨äº git 1.8.X çæ¬ï¼åªéä½¿ç¨ -b branch å --single-branch åéä¸ä¸ªåæ¯ï¼ææå®åéæ·±åº¦ï¼

	git fetch git://github.com/alibaba/AliOS-Things.git developer

	git clone --depth=1 git@github.com:Valloric/YouCompleteMe.git

åååæ¯ä¸æ ·èçæµéç depth æ·±åº¦åæ°ï¼æå® 1 å±æ·±åº¦åéæ¶å°±ä¸ä¼ä»¥è·åå­æ¨¡åï¼éå¸¸çæµéåæ¶é´ï¼

	--depth <depth>

Create a shallow clone with a history truncated to the specified number of commits. Implies --single-branch unless --no-single-branch is given to fetch the histories near the tips of all branches. If you want to clone submodules shallowly, also pass --shallow-submodules.

	--shallow-since=<date>
Create a shallow clone with a history after the specified time.

	--shallow-exclude=<revision>
Create a shallow clone with a history, excluding commits reachable from a specified remote branch or tag. This option can be specified multiple times.

	--[no-]single-branch
Clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remoteâs HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created.

	--no-tags
Donât clone any tags, and set remote.<remote>.tagOpt=--no-tags in the config, ensuring that future git pull and git fetch operations wonât follow any tags. Subsequent explicit tag fetches will still work, (see git-fetch(1)).

Can be used in conjunction with --single-branch to clone and maintain a branch with no references other than a single cloned branch. This is useful e.g. to maintain minimal clones of the default branch of some repository for search indexing.

	--recurse-submodules[=<pathspec>]

After the clone is created, initialize and clone submodules within based on the provided pathspec. If no pathspec is provided, all submodules are initialized and cloned. This option can be given multiple times for pathspecs consisting of multiple entries. The resulting clone has submodule.active set to the provided pathspec, or "." (meaning all submodules) if no pathspec is provided.

Submodules are initialized and cloned using their default settings. This is equivalent to running git submodule update --init --recursive <pathspec> immediately after the clone is finished. This option is ignored if the cloned repository does not have a worktree/checkout (i.e. if any of --no-checkout/-n, --bare, or --mirror is given)

	--[no-]shallow-submodules

All submodules which are cloned will be shallow with a depth of 1.

	--[no-]remote-submodules

All submodules which are cloned will use the status of the submoduleâs remote-tracking branch to update the submodule, rather than the superprojectâs recorded SHA-1. Equivalent to passing --remote to git submodule update.


git pull å½ä»¤ç¸å½äº git fetch + git mergeï¼å¦æä½ æ³æåè¿ç¨ä»åºçæä¸ªåæ¯ï¼é£ä¹ä½¿ç¨ï¼

```sh
#git pull <repository> <branch>
git pull origin 4.0
```

git fetch æ¯å°è¿ç¨ä¸»æºçææ°åå®¹æå°æ¬å°ï¼ç¨æ·å¨æ£æ¥äºä»¥åå³å®æ¯å¦åå¹¶å°å·¥ä½æ¬æºåæ¯ä¸­ã

	$ git fetch <remote>
	$ git fetch <remote> <branch>

	# å¨è¿ç¨åæ¯ä¸çª¥è§ï¼æ éå¨æ¬å°å­å¨åºä¸­éç½®è¿ç¨
	$ git fetch git://git.kernel.org/pub/scm/git/git.git maint

	$ git init
	$ git remote add origin git@github.com:qemu/qemu
	$ git fetch origin stable-0.10
	$ git checkout -b stable-0.10 origin/stable-0.10

git pull åæ¯å°è¿ç¨ä¸»æºçææ°åå®¹æä¸æ¥åç´æ¥åå¹¶ï¼å³ï¼git pull = git fetch + git mergeï¼è¿æ ·å¯è½ä¼äº§çå²çªï¼éè¦æå¨è§£å³ã

git fetch æ pull æååï¼æ¬å°æä¿®æ¹åï¼ä¸è½åéå¤æ§è¡æåï¼ä¹æåä¸å°è¿ç«¯æä»¶ãå¯ä»¥æ¥çå·¥ä½åºç¶æï¼

	git status

è¿æ¶å¯ä»¥éè¿ reset å½ä»¤æ¥è¿è¡ undo è¿åã

å¤§ä»åºåéææ­çº¿éæ¥çæ¯çï¼å¯ä»¥åå¨æå¡å¨ä¸ git clone --bare ä¸ä¸ªæ´é²ä»åºï¼ç¶åæååæä¾ http ä¸è½½ï¼è½æ­ç¹ç»­ä¼ ãä¸è½½åæ¥åè§£åï¼git pull ä¸ä¸åæ­¥å°ææ°çå°±å¥½äºã

>	$ git clone -b cppDemos --bare https://github.com/jimboyeah/demo/


ä¸ä¸ª bare repository æ¯ç¨æ¥âåäº«âçãå¦ææå ä¸ªäººè¦è®¿é®åä¸ä¸ªé¡¹ç®çæä»¶ï¼å¨ä¸ä¸ªä¸­å¿ç¹ä¸åå»ºä¸ä¸ª bare ä»åºï¼ææé¡¹ç®æåå¯ä»¥ push èªå·±ç¼è¾çæä»¶å°è¿ä¸ªä»åºã

éé¢åªæ git ççæ¬æ§å¶ä¿¡æ¯ï¼æ²¡æä½ å·¥ä½ç¨çæä»¶ï¼ä¹å°±æ¯æ²¡æ working treeãå ä¸ºå®ä¸åå«å·¥ä½ç¨çæä»¶ï¼åªæ git èªå·±éè¦çæä»¶ï¼æä»¥è¿ä¸ªç®å½ä¸æ²¡æ .git å­ç®å½ï¼èæ¯ç´æ¥æ git éè¦çæä»¶æ¾æ ¹ç®å½åºä¸äºãä½æ¯ï¼è¿ä¸ª bare çç®å½æ¬èº«çç®å½åï¼æä¸ä¸ª .git çåç¼ã

å æ­¤ï¼æ¦å¿µä¸ï¼ä¸ä¸ª bare ä»åºï¼å¯ä»¥çææ¯ä¸ä¸ª git çæä»¶æå¡å¨ãä¸ä¸ªäººçé¡¹ç®ï¼å¶å®ä¹å¯ä»¥å»ºä¸ä¸ª bare ä»åºï¼ç¨åæä»¶å¤ä»½ã

Git æä¸ä¸ªåééé¡¹ï¼

- Standard æ ååéï¼å¿«éï¼ååä½ï¼Hardlinksã
- Full Copy åä½å¤ä»½ï¼è¾æ¢ã
- Shared å±äº«åéï¼æå¿«ï¼æ å¤ä»½ã



# git commit æäº¤å°æ¬å°ä»åº 

>	>git commit -m "ç¬¬ä¸æ¬¡æäº¤"

ï¼1ï¼-m è¡¨ç¤ºå¯¹æ­¤æ¬¡æäº¤è¿è¡æ³¨éï¼ç®è¿°æ­¤é¢æäº¤çç¸å³ä¿¡æ¯ã
ï¼2ï¼å¦æä¸å -mï¼é£ä¹å¨ç¹å»åè½¦ä¹åï¼ä¼é»è®¤å¼¹åºèªå¸¦çVIMç¼è¾å¨ï¼éè¦ç¼è¾ç¬¬9è¡ã
æç§»å¨åæ å°ç¬¬9è¡ï¼æä¸xå°æ³¨è§£ç#å·å»æï¼ç¶åè¾å¥VIMç¼è¾æä»¤ESC+wqä¿å­æäº¤ä¿¡æ¯ã
å³äºVIMç¼è¾å¨çåºæ¬ç¨æ³å¯ä»¥åégit Vimç¼è¾å¨è¾å¥åå®¹ãä¿å­åéåºæä½ä¸ç« èã
ä¸è¿°ä¸æ­¥ï¼å°æä»¶ä»å·¥ä½åºæäº¤å°æå­åºï¼æä¼æäº¤å°ä»åºï¼å®æä¸æ¬¡å®æ´çæäº¤è¿ç¨ï¼ä¹å°±æ¯è¿è¡äºä¸æ¬¡å­æ¡£ã

>	1
>	2 # Please enter the commit message for your changes. Lines starting
>	3 # with '#' will be ignored, and an empty message aborts the commit.
>	4 #
>	5 # On branch sensor
>	6 # Your branch is up to date with 'origin/sensor'.
>	7 #
>	8 # Changes to be committed:
>	9 â       new file:   test.tx
>	10 #
>	~

>	git commit
>	[sensor dc6a7ec]        new file:   test.txt
>	 1 file changed, 1 insertion(+)
>	 create mode 100644 test.txt



# git archive

```sh
# SYNOPSIS
git archive [--format=<fmt>] [--list] [--prefix=<prefix>/] [<extra>]
              [-o <file> | --output=<file>] [--worktree-attributes]
              [--remote=<repo> [--exec=<git-upload-archive>]] <tree-ish>
              [<path>â¦]

git : usage: git archive [<options>] <tree-ish> [<path>...]

   or: git archive --list
   or: git archive --remote <repo> [--exec <cmd>] [<options>] <tree-ish> [<path>...]
   or: git archive --remote <repo> [--exec <cmd>] --list
    --format <fmt>        archive format
    --prefix <prefix>     prepend prefix to each pathname in the archive
    --add-file <file>     add untracked file to archive
    -o, --output <file>   write the archive to this file
    --worktree-attributes
                          read .gitattributes in working directory
    -v, --verbose         report archived files on stderr
    -NUM                  set compression level
    -l, --list            list supported archive formats
    --remote <repo>       retrieve the archive from remote repository <repo>
    --exec <command>      path to the remote git-upload-archive command
```

å°ä»£ç æåï¼

```sh
# æåæå®åæ¯
git archive -o imgui_v1.87.zip master
# åªæåæå®ç®å½
git archive -o imgui_v1.87.zip master:src
# å¯ä»¥æåæå® tag çæ¬
> git tag
v1.00
v1.87
# ç»æææä»¶åå åç¼ï¼ä½¿ç¨ææ ä¸ºå ç®å½å±çº§
> git archive --prefix imgui_v1.87/ -o imgui_v1.87.zip v1.87
```

Github ä¸çæåå½ä»¤ä¹ä½¿ç¨äºåç¼è®¾ç½®æåç®å½ï¼å¯¹äºä¸»çº¿åæ¯æ¥è¯´ï¼ä½¿ç¨ [project]-master è¿æ ·çåç¼ä½ä¸ºå­ç®å½ã

EXAMPLES

```sh
git archive --format=tar --prefix=junk/ HEAD | (cd /var/tmp/ && tar xf -)
# Create a tar archive that contains the contents of the latest commit on the current branch, and extract it in the /var/tmp/junk directory.

git archive --format=tar --prefix=git-1.4.0/ v1.4.0 | gzip >git-1.4.0.tar.gz
# Create a compressed tarball for v1.4.0 release.

git archive --format=tar.gz --prefix=git-1.4.0/ v1.4.0 >git-1.4.0.tar.gz
# Same as above, but using the builtin tar.gz handling.

git archive --prefix=git-1.4.0/ -o git-1.4.0.tar.gz v1.4.0
# Same as above, but the format is inferred from the output file.

git archive --format=tar --prefix=git-1.4.0/ v1.4.0^{tree} | gzip >git-1.4.0.tar.gz
# Create a compressed tarball for v1.4.0 release, but without a global extended pax header.

git archive --format=zip --prefix=git-docs/ HEAD:Documentation/ > git-1.4.0-docs.zip
# Put everything in the current headâs Documentation/ directory into git-1.4.0-docs.zip, with the prefix git-docs/.

git archive -o latest.zip HEAD
# Create a Zip archive that contains the contents of the latest commit on the current branch. Note that the output format is inferred by the extension of the output file.

git config tar.tar.xz.command "xz -c"
# Configure a "tar.xz" format for making LZMA-compressed tarfiles. You can use it specifying --format=tar.xz, or by creating an output file like -o foo.tar.xz.
```



# git log reflog status diff ä¿¡æ¯æ¥è¯¢å½ä»¤
- [Useful .gitignore templates](https://github.com/github/gitignore)


## git status å·¥ä½ç®å½æ ç¶æ

ä½¿ç¨ git status æ¥çå·¥ä½ç®å½æ ç¶æï¼ççæä»ä¹æä»¶æ¯å¤äºå¢å ç¶æçï¼ 

>	>git status
>	On branch sensor
>	Your branch is up to date with 'origin/sensor'.
>	
>	nothing to commit, working tree clean

å¦æææä»¶æªè¿è¡è·è¸ªï¼éè¦çè§è¿½è¸ªçæä»¶å°±ä½¿ç¨ git add å½ä»¤ãæä»¶æ·»å å°ä»åºå git å°±ä¼å¯¹æä»¶çæææä½è¿è¡è¿½è¸ªï¼åæ¥çç®å½ç¶æå°±æå·®å«

>	>echo something>test.txt
>	>git add test.txt

å¦æè¦å°å¤ä¸ªæä»¶å å¥å°æå­åºï¼å¯ä»¥éç¨å¦ä¸ç±»ä¼¼ä»£ç ï¼æä»¶ä¸æä»¶ä¹é´ç¨ç©ºæ ¼åéï¼ä¹å¯ä»¥ä½¿ç¨ééç¬¦æ¹å¼æ¹éæäº¤æä»¶ï¼

>	git add .
>	git add all
>	git add *.html
>	git add readme.txt ant.txt

ç®å½ä¸­ç .gitignore è¿æ»¤å¿½ç¥æä»¶è®¾ç½®ä¼å½±åå°å·¥ä½æ çæä»¶ç¶æã


## git log åå²æäº¤æ¥å¿

æ¥å¿æ¯è®°å½äº git commit å½ä»¤æ§è¡çåå²å¨ä½è®°å½ï¼åå«åå®¹åå¨ï¼æäº¤æ¶çæ³¨è§£ä¿¡æ¯ãéè¿ git log å½ä»¤å¯ä»¥å°è¿äºåå²è®°å½ä¿¡æ¯ä»¥ä¸åçæ¹å¼åç°ã

```sh
# SYNOPSIS
git log [<options>] [<revision range>] [[--] <path>â¦]

# means "list all the commits which are reachable from foo or bar, but not from baz".
$ git log foo bar ^baz

# A special notation "<commit1>..<commit2>" stand for "^<commit1> <commit2>".
$ git log origin..HEAD
$ git log HEAD ^origin

# Another special notation is "<commit1>â¦<commit2>" which is useful for merges.
# The resulting set of commits is the symmetric difference between the two operands.
$ git log A B --not $(git merge-base --all A B)
$ git log A...B
```

Table 2. git log çå¸¸ç¨éé¡¹

|       éé¡¹      |                                          è¯´æ                       |
|-----------------|--------------------------------------------------------------------|
| -p              | æè¡¥ä¸æ ¼å¼æ¾ç¤ºæ¯ä¸ªæäº¤å¼å¥çå·®å¼ã                                     |
| --all           | æ¾ç¤ºæææäº¤ã                                                       |
| --stat          | æ¾ç¤ºæ¯æ¬¡æäº¤çæä»¶ä¿®æ¹ç»è®¡ä¿¡æ¯ã                                       |
| --shortstat     | åªæ¾ç¤º --stat ä¸­æåçè¡æ°ä¿®æ¹æ·»å ç§»é¤ç»è®¡ã                           |
| --name-only     | ä»å¨æäº¤ä¿¡æ¯åæ¾ç¤ºå·²ä¿®æ¹çæä»¶æ¸åã                                   |
| --name-status   | æ¾ç¤ºæ°å¢ãä¿®æ¹ãå é¤çæä»¶æ¸åã                                        |
| --abbrev-commit | ä»æ¾ç¤º SHA-1 æ ¡éªåææ 40 ä¸ªå­ç¬¦ä¸­çåå ä¸ªå­ç¬¦ã                      |
| --relative-date | ä½¿ç¨è¾ç­çç¸å¯¹æ¶é´èä¸æ¯å®æ´æ ¼å¼æ¾ç¤ºæ¥æï¼æ¯å¦â2 weeks agoâï¼ã         |
| --graph         | å¨æ¥å¿æä»¥ ASCII å¾å½¢æ¾ç¤ºåæ¯ä¸åå¹¶åå²ã                              |
| --pretty        | ä½¿ç¨å¶ä»æ ¼å¼æ¾ç¤ºåå²æäº¤ä¿¡æ¯ãå¯ç¨çéé¡¹åæ¬ onelineãshortãfullãfuller å formatã |
| --oneline       | --pretty=oneline --abbrev-commit åç¨çç®åã                        |


ä½¿ç¨è¿æ»¤å¨æ¥è¯¢æå®æä½çè®°å½ï¼å°å¤§åæ¹ä¸ºå°åè¡¨ç¤ºæé¤ï¼å¦ `--diff-filter=ad` æé¤æ·»å ãå é¤å¨ä½è®°å½ã

```sh
# --diff-filter=[(A|C|D|M|R|T|U|X|B)â¦[*]]
> git log --diff-filter=D --summary --oneline
7744b00 Actually delete!
 delete mode 100644 README.md
3e47d93 delete readme
 delete mode 100644 README.md
c7477fb (origin/master) update readme
 delete mode 100644 cpp/example/CMakeLists.txt
> git log --grep="Merge" --oneline
be14a8e (HEAD -> master) Merge with readme.md
```

Added (A), Copied (C), Deleted (D), Modified (M), Renamed (R), have their type (i.e. regular file, symlink, submodule, â¦) changed (T), are Unmerged (U), are Unknown (X), or have had their pairing Broken (B). Any combination of the filter characters (including none) can be used. When * (All-or-none) is added to the combination, all paths are selected if there is any file that matches other criteria in the comparison; if there is no file that matches other criteria, nothing is selected.


æ ¼å¼åè¾åºï¼

>$ git log --pretty=format:"%h - %an, %ar : %s"

Table 2-1. Useful Options for git log --pretty=format

| Option |             Description of Output              |
|--------|------------------------------------------------|
| %H     | Commit hash                                    |
| %h     | Abbreviated commit hash                        |
| %T     | Tree hash                                      |
| %t     | Abbreviated tree hash                          |
| %P     | Parent hash                                    |
| %p     | Abbreviated parent hash                        |
| %an    | Author name                                    |
| %ae    | Author e-mail                                  |
| %ad    | Author date (format respects the âdate= option |
| %ar    | Author date, relative                          |
| %cn    | Committer name                                 |
| %ce    | Committer e-mail                               |
| %cd    | Committer date                                 |
| %cr    | Committer date, relative                       |
| %s     | Subject                                        |


>	>git log
>	commit 88d6b02b22b10ce35583c40a05d2c003b984b0cc (å¨ Git ä¸­ï¼ç¨ HEAD è¡¨ç¤ºå½åçæ¬ï¼ä¹å°±æ¯ææ°çæäº¤ commit idï¼ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^`ï¼ä¸ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^^`ï¼å½ç¶å¾ä¸ 100 ä¸ªçæ¬å¯ä»¥åæ `HEAD~100`ã
 -> sensor, origin/sensor, origin/HEAD)
>	Author: jimboyeah <jimboyeah@gmail.com>
>	Date:   Fri Aug 24 12:09:13 2018 +0800
>	
>	            modified:   test.txt
>	......

>	>git log --pretty=oneline
>	88d6b02b22b10ce35583c40a05d2c003b984b0cc (HEAD -> sensor, origin/sensor, origin/HEAD)   modified:   test.txt
>	dc6a7ec5095697a30f12cad06f6e3dffd708e5d0        new file:   test.txt
>	f169a727faa9db0c871445558b690589b533485c ok commit
>	981cef547d6b51b62cd2b5dbea0659d8d2bda0ca Initial commit

>	>git log --oneline
>	4e7b646 (HEAD) commit all
>	df29c18 reorder readme.md
>	6c99293 ignore
>	8ff1371 configure .gitignore
>	46beaf3 IPC demo
>	2fa935b going to sensor programming
>	0e7baf2 test
>	f169a72 ok commit
>	981cef5 Initial commit

>	>git show -s --pretty=raw 88d6
>	commit 88d6b02b22b10ce35583c40a05d2c003b984b0cc
>	tree 1f88890ae57a5d35407c314c3848df1533047b58
>	parent dc6a7ec5095697a30f12cad06f6e3dffd708e5d0
>	author jimboyeah <jimboyeah@gmail.com> 1535083753 +0800
>	committer jimboyeah <jimboyeah@gmail.com> 1535083753 +0800
>	
>	        modified:   test.txt


å¾å½¢åå±ç¤ºç»æï¼å¯ä»¥çå°åæ¯è·¯çº¿ï¼

	>git log --graph
	*   commit 81402931b92f9bd9bc8795c51b2ef62c49ce198d
	|\  Merge: 9625ae4 3aae12b
	| | Author: jimboyeah <jimboyeah@gmail.com>
	| | Date:   Sat Aug 25 16:03:19 2018 +0800
	| |
	| |     version 0.4.3 RC
	| |
	| * commit 3aae12bce0d6a6f21df1fb1be02a5dac46cac569
	| | Author: jimboyeah <jimboyeah@gmail.com>
	| | Date:   Sat Aug 25 16:00:26 2018 +0800
	| |
	| |     version 0.4.2 RC
	| |
	* | commit 9625ae4b65c9f1fca07e26b8afd68e3c5e90147f
	| | Author: jimboyeah <jimboyeah@gmail.com>
	| | Date:   Sat Aug 25 16:00:47 2018 +0800
	| |
	| |     version 0.4.3 RC
	| |
	* |   commit 12df6ca2f337aaf31fbd8f7c5fff2fc3f34d788a
	|\ \  Merge: 7f0b88b db6314a
	| |/  Author: jimboyeah <jimboyeah@gmail.com>
	| |   Date:   Sat Aug 25 15:54:58 2018 +0800
	| |
	| |       version 0.4.1 RC
	| |
	| * commit db6314a8ef66e681e019513449e4575cadba34cd
	| | Author: jimboyeah <jimboyeah@gmail.com>
	| | Date:   Sat Aug 25 15:32:29 2018 +0800
	| |
	| |     version 0.4 RC
	| |
	* | commit 7f0b88b9df17d94b2651b409fac7f60dd8f73adb
	|/  Author: jimboyeah <jimboyeah@gmail.com>
	|   Date:   Sat Aug 25 15:33:31 2018 +0800
	|
	|       version 0.4.1 RC
	|
	......
	|* commit e6ea2e5efc6eda51333075d4bc47a9250cd4f421
	| Author: jimboyeah <jimboyeah@gmail.com>
	| Date:   Sat Aug 25 12:15:41 2018 +0800
	|
	|     version_0_2
	|
	* commit 230090653cec3add3b65ed2e0c9ed5a75bc8edfc
	Author: jimboyeah <jimboyeah@gmail.com>
	  Date:   Sat Aug 25 12:03:54 2018 +0800

	              new file:   readme.txt


## git reflogs å¼ç¨æ¥å¿

Git reflogs æ¯ä¸ç§ç¨æ¥è·è¸ªåæ¯é¡¶ç«¯çæ´æ°çå¼ç¨æ¥å¿æºå¶ï¼è®¸å¤ Git å½ä»¤æ¥åç¨ä¸ä¸ªå¼ç¨ä½ä¸ºåæ°ï¼ä¸ä¸ªå¼ç¨å°±æ¯æåæäº¤çæéã

```sh
# git-reflog - Manage reflog information
# SYNOPSIS
git reflog <subcommand> <options>

git reflog [show] [log-options] [<ref>]
git reflog expire [--expire=<time>] [--expire-unreachable=<time>]
        [--rewrite] [--updateref] [--stale-fix]
        [--dry-run | -n] [--verbose] [--all [--single-worktree] | <refs>â¦]
git reflog delete [--rewrite] [--updateref]
        [--dry-run | -n] [--verbose] ref@{specifier}â¦
git reflog exists <ref>
```

å¼ç¨æ¯ä¸ç§é´æ¥ä½¿ç¨ commit è®°å½çæ¹å¼ï¼æ¯èµ·ç´æ¥ä½¿ç¨ Commit ID åå¸æ¥è¯´ï¼å¯¹ç¨æ·æ¥è¯´æ´æ¸æ°ææã

```sh
> git reflog show
c7477fb (HEAD -> master, origin/master) HEAD@{0}: commit: update readme
d2cf5c9 HEAD@{1}: commit: update image link
4e876c6 HEAD@{2}: commit: add sublime build tools screenshot
411825e HEAD@{3}: commit: correct the link hash
9f09b31 HEAD@{4}: commit (initial): ini
```

ä¾å¦ï¼HEAD{2} çæææ¯ HEAD å¾åç§»å¨ä¸¤ä¸ªè®°å½çä½ç½®ï¼è master@{one.week.ago} è¡¨ç¤ºå¼ç¨ master åæ¯ä¸­æåä¸ä¸ªææåçä½ç½®ï¼åè gitrevisionsã

```sh
> git reflog HEAD@{4}
9f09b31 HEAD@{4}: commit (initial): init
> git log HEAD@{2}      # ååºå 2 æä¾çæ¥å¿è®°å½
```

è®©ææ reflogs è¿æ¶ä¸åææï¼æå é¤æå® reflogï¼

```sh
> git reflog expire --expire=now --all
> git reflog delete master@{2}
```


## git show æ¥è¯¢ä¿¡æ¯

æ¾ç¤ºä»»æå¯¹è±¡çä¿¡æ¯ (blobs, trees, tags and commits)ï¼

- å¯¹äº commits å¯¹è±¡ï¼æ¾ç¤ºå¶æ¥å¿æ¶æ¯åææ¬åå®¹çå·®å¼ï¼å¯¹äºåå¹¶çå¯ä»¥ä½¿ç¨ git diff-tree --ccã
- å¯¹äº tags å¯¹è±¡ï¼æ¾ç¤ºå¶æ ç­¾æ¶æ¯åå¼ç¨å¯¹è±¡ã
- å¯¹äº trees å¯¹è±¡ï¼æ¾ç¤ºå¶åç§°ï¼ç­æ git ls-tree --name-onlyã
- å¯¹äº blobs å¯¹è±¡ï¼æ¾ç¤ºå¶åå§åå®¹ã

git show å½ä»¤å git diff-tree æ¥æ¶åæ ·çåæ°ã

```sh
# SYNOPSIS
git show [<options>] [<object>â¦]

# EXAMPLES

# Shows the tag v1.0.0, along with the object the tags points at.
git show v1.0.0
git show master:readme.md

# Shows the tree pointed to by the tag v1.0.0.
git show v1.0.0^{tree}

# Shows the subject of the commit pointed to by the tag v1.0.0.
git show -s --format=%s v1.0.0^{commit}

# Shows the contents of the file as they were current in the 10th last commit of the branch next.
git show next~10:Documentation/README

# Concatenates the contents of said Makefiles in the head of the branch master.
git show master:Makefile master:t/Makefile
```

å¸¸ç¨éé¡¹åèï¼

-	<object>â¦ æå®ä»»æå¯¹è±¡åï¼åè SPECIFYING REVISIONSã
-	--pretty[=<format>] --format=<format> æå®æ ¼å¼ã

	æ ¼å¼å¯ä»¥æ¯ oneline, short, medium, full, fuller, email, raw, format:<string> and tformat:<string>ï¼å®ä»¬æä¸ä¸ªç¹ä½ç¬¦ %placeholderã

-	--abbrev-commit æ¾ç¤ºç²¾ç®çæäº¤å¯¹è±¡åç§°ï¼èä¸æ¯æ¾ç¤º 40-bte é¿åº¦çå®æ´åï¼å¯ä»¥æå®å·ä½ä½æ° --abbrev=<n>ã
-	--oneline ç­ä»· --pretty=oneline --abbrev-commit åæ¶ä½¿ç¨ï¼èçå±å¹æ¾ç¤ºç©ºé´ã
-	--encoding=<encoding> æå®åå®¹ç¼ç ï¼é»è®¤ UTF-8ã
-	--notes[=<treeish>] æ¾ç¤ºå¤æ³¨åå®¹ï¼å¯ä»¥æå® <treeish> æ¹å¼æ¥æ¾å¤æ³¨åå®¹ï¼refs/notes/ è¿æ ·å¯ä»¥æå®å¨å¼ç¨åã


## git diff å·®å¼æ¯è¾

>7744b00 (HEAD -> master) HEAD@{0}: checkout: moving from tobemerge to master
25fc95b (tobemerge) HEAD@{1}: checkout: moving from master to tobemerge
7744b00 (HEAD -> master) HEAD@{2}: checkout: moving from tobemerge to master
25fc95b (tobemerge) HEAD@{3}: checkout: moving from master to tobemerge
7744b00 (HEAD -> master) HEAD@{4}: checkout: moving from master to master
7744b00 (HEAD -> master) HEAD@{5}: checkout: moving from tobemerge to master
25fc95b (tobemerge) HEAD@{6}: checkout: moving from 25fc95b8887857acef76231ac894260924e28121 to tobemerge
25fc95b (tobemerge) HEAD@{7}: checkout: moving from master to 25fc95b
7744b00 (HEAD -> master) HEAD@{8}: checkout: moving from detached_branch to master
7744b00 (HEAD -> master) HEAD@{9}: checkout: moving from master to detached_branch
7744b00 (HEAD -> master) HEAD@{10}: checkout: moving from detached_branch to master
7744b00 (HEAD -> master) HEAD@{11}: merge master: Fast-forward
25fc95b (tobemerge) HEAD@{12}: checkout: moving from 25fc95b8887857acef76231ac894260924e28121 to detached_branch
25fc95b (tobemerge) HEAD@{13}: reset: moving to HEAD@{14}
bba7f06 HEAD@{14}: reset: moving to HEAD@{12}
7744b00 (HEAD -> master) HEAD@{15}: reset: moving to HEAD@{10}
bba7f06 HEAD@{16}: reset: moving to HEAD@{10}
9f09b31 HEAD@{17}: checkout: moving from master to HEAD~10
7744b00 (HEAD -> master) HEAD@{18}: checkout: moving from 25fc95b8887857acef76231ac894260924e28121 to master
25fc95b (tobemerge) HEAD@{19}: checkout: moving from bba7f0609d5b34230b6f5bc3ea1ac01e5dd1f9e5 to HEAD@{8}
bba7f06 HEAD@{20}: checkout: moving from master to HEAD@{6}
7744b00 (HEAD -> master) HEAD@{21}: checkout: moving from bba7f0609d5b34230b6f5bc3ea1ac01e5dd1f9e5 to master
bba7f06 HEAD@{22}: checkout: moving from 3e47d93492632171e75acb2fdbaa2629d6357a61 to HEAD@{4}
3e47d93 HEAD@{23}: checkout: moving from 25fc95b8887857acef76231ac894260924e28121 to HEAD~1
25fc95b (tobemerge) HEAD@{24}: checkout: moving from bba7f0609d5b34230b6f5bc3ea1ac01e5dd1f9e5 to HEAD~1
bba7f06 HEAD@{25}: checkout: moving from master to HEAD~1
7744b00 (HEAD -> master) HEAD@{26}: commit: Actually delete!
bba7f06 HEAD@{27}: commit: File in both staged & unstage
25fc95b (tobemerge) HEAD@{28}: commit: Recover README.md
3e47d93 HEAD@{29}: commit: delete readme
cf0f942 HEAD@{30}: commit: Delete Readme.md
d9ba910 HEAD@{31}: commit: update documentation
c7477fb (origin/master) HEAD@{32}: commit: update readme
d2cf5c9 HEAD@{33}: commit: update image link
4e876c6 HEAD@{34}: commit: add sublime build tools screenshot
411825e HEAD@{35}: commit: correct the link hash
9f09b31 HEAD@{36}: commit (initial): init

å¾å¤æ¶åï¼éè¦éè¿ diff æ¥æ¯è¾æä»¶ä¿®æ¹åå²å·®å¼åå®¹ï¼ 

git-diff - Show changes between commits, commit and working tree, etc

git diff å½ä»¤å¯ä»¥å±ç¤ºä¸åçåå®¹æ¯è¾å·®å¼ï¼

- Working Tree ä¸ ç´¢å¼æå¦ä¸ä¸ªæ ï¼
- ç´¢å¼æä¸ä¸ªæ ï¼
- ä¸¤ä¸ªæ ä¹é´ï¼
- åå¹¶äº§ççå·®å¼ï¼
- ä¸¤ä¸ª BLOB - Binary Large Object æä»¶ä¹é´ï¼å¦å¾åæä»¶ï¼BLOG æ¯å¤çå¤§å°ºå¯¸äºè¿å¶å­èæ°æ®çä¸ç§å¯¹è±¡ã
- æ¯è¾ç£çä¸­çä¸¤ä¸ªæä»¶ï¼

Git çæ¬ç³»ç»ä¸­ï¼å¨å·¥ä½ç®å½æ ä¸çæä»¶æåç§åºæ¬ç¶æåå¯¹åºåç§åºåï¼å¦æä»åºåè¿ç¨æå¡å¨è¿æ¥ï¼åæ 5 ç§ç¶æ 5 ä¸­åºåãçæ¬ä»åºçæ°æ®åºä¿å­å¨å·¥ä½ç®å½ä¸ç .git éèç®å½ä¸ï¼æ¬å°æäº¤çæä»¶é½ä¼å¨è¿éé¢ã

å¯ä»¥éæ¶ä½¿ç¨ git status å½ä»¤æ¥çç¶æä¿¡æ¯ï¼

|   State   | Workplace |                  è¯´æ                 |
|-----------|-----------|---------------------------------------|
| Untracked | å·¥ä½åº    | Untracked files                       |
| Modified  | ä¸´æ¶åº    | Changes not staged for commit         |
| Staged    | æå­åº    | Changes to be committed               |
| Commited  | æ¬å°åº    | nothing to commit, working tree clean |
| Pushed    | è¿ç¨åº    | Your branch is ahead or up-to-date    |

```sh
# SYNOPSIS
git diff [<options>] [<commit>] [--] [<path>â¦]
git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>â¦]
git diff [<options>] [--merge-base] <commit> [<commit>â¦] <commit> [--] [<path>â¦]
git diff [<options>] <commit>â¦<commit> [--] [<path>â¦]
git diff [<options>] <blob> <blob>
git diff [<options>] --no-index [--] <path> <path>

# æ¥çç´¢å¼ä¸­å¤äºæå­åºä½æªæå­çåå®¹åå¨ï¼å³æªæ¾æ§è¡ git add çåå¨ã
# staging area for the next commit. 
git diff [<options>] [--] [<path>â¦]
git diff .\README.md

# æ¯è¾ä¸¤ä¸ªæªå å¥è·è¸ªçç£çæä»¶ãå¦æå¶ä¸­æå·¥ä½åºå¤çæä»¶ï¼å¯ä»¥çç¥ --no-indexã
git diff [<options>] --no-index [--] <path> <path>

# æ¯è¾æå­åºä¸æå® commit çåå®¹å·®å¼ï¼é»è®¤ä¸º HEADï¼å³å½åææ°æäº¤çåå®¹ã
# å¯ä»¥ä½¿ç¨ --staged åç­ä»·ç --cachedï¼ä»¥ä¸ä¸¤è¡ä¹æ¯ç­ä»·ç¨æ³ã
# git diff --merge-base
# git diff $(git merge-base A HEAD).
git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>â¦]

# æ¯è¾å·¥ä½æ ä¸æå® <commit> çå·®å¼ï¼ä¹å¯ä»¥æå®åæ¯åï¼ä½¿ç¨ HEAD æ¯è¾ææ°æäº¤çå·®å¼ã
git diff [<options>] <commit> [--] [<path>â¦]
git diff origin/master .\README.md
git diff master .\README.md

# æ ¹æ®æå®çä¸¤ä¸ª <commit> ä¹é´è¿è¡æ¯è¾ï¼ä»¥ä¸ä¸¤è¡æ¯ç­ä»·ç¨æ³ã
# å¦ææå®äº --merge-base åä½¿ç¨åé¢çåå¹¶æ¥æºæäº¤ã
# git diff --merge-base A B
# git diff $(git merge-base A B) B.
git diff [<options>] [--merge-base] <commit> <commit> [--] [<path>â¦]

# æ¯è¾åå¹¶çæäº¤ï¼åé¢æå®ç <commit> ä¸ºåå¹¶æäº¤ï¼åé¢ä¸¤ä¸ªæ¯å¶ç¶çº§æäº¤ã
# ä½¿ç¨ ^@ åç¼ï¼ä¾å¦ git diff master master^@ï¼ä¸ git show master ç»åºç¸åçå·®å¼ã
git diff [<options>] <commit> <commit>â¦ <commit> [--] [<path>â¦]

git diff [<options>] <commit>..<commit> [--] [<path>â¦]
# This is synonymous to the earlier form (without the ..) for viewing the changes between two arbitrary <commit>. If <commit> on one side is omitted, it will have the same effect as using HEAD instead.

# This form is to view the changes on the branch containing and up to the second <commit>, 
# starting at a common ancestor of both <commit>. 
# git diff A...B is equivalent to git diff $(git merge-base A B) B. 
# You can omit any one of <commit>, which has the same effect as using HEAD instead.
git diff [<options>] <commit>...<commit> [--] [<path>â¦]

# This form is to view the differences between the raw contents of two blob objects.
git diff [<options>] <blob> <blob>
```




# A Tour of History - Rm Reset restore revert
https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192


## git-rm å é¤æä»¶

å¨ Git ä¸­ï¼å é¤ä¹æ¯ä¸ä¸ªä¿®æ¹æä½ï¼æä»¬å®æä¸ä¸ï¼åæ·»å ä¸ä¸ªæ°æä»¶test.txtå°Gitå¹¶ä¸æäº¤ï¼

	$ git add test.txt

	$ git commit -m "add test.txt"
	[master b84166e] add test.txt
	 1 file changed, 1 insertion(+)
	 create mode 100644 test.txt

ä¸è¬æåµä¸ï¼ä½ éå¸¸ç´æ¥å¨æä»¶ç®¡çå¨ä¸­ææ²¡ç¨çæä»¶å äºï¼æèç¨rmå½ä»¤å äºï¼

	$ rm test.txt

è¿ä¸ªæ¶åï¼Gitç¥éä½ å é¤äºæä»¶ï¼å æ­¤ï¼å·¥ä½åºåçæ¬åºå°±ä¸ä¸è´äºï¼git status å½ä»¤ä¼ç«å»åè¯ä½ åªäºæä»¶è¢«å é¤äºï¼

	$ git status
	On branch master
	Changes not staged for commit:
	  (use "git add/rm <file>..." to update what will be committed)
	  (use "git checkout -- <file>..." to discard changes in working directory)

		deleted:    test.txt

	no changes added to commit (use "git add" and/or "git commit -a")

ç°å¨ä½ æä¸¤ä¸ªéæ©ï¼ä¸æ¯ç¡®å®è¦ä»çæ¬åºä¸­å é¤è¯¥æä»¶ï¼é£å°±ç¨å½ä»¤git rmå æï¼å¹¶ä¸git commitï¼

	$ git rm test.txt
	rm 'test.txt'

	$ git commit -m "remove test.txt"
	[master d46f35e] remove test.txt
	 1 file changed, 1 deletion(-)
	 delete mode 100644 test.txt

ç°å¨ï¼æä»¶å°±ä»çæ¬åºä¸­è¢«å é¤äºã

 å°æç¤ºï¼åæå¨å é¤æä»¶ï¼ç¶åä½¿ç¨ git rm <file> å git add <file> æææ¯ä¸æ ·çã
å¦ä¸ç§æåµæ¯å éäºï¼å ä¸ºçæ¬åºéè¿æå¢ï¼æä»¥å¯ä»¥å¾è½»æ¾å°æè¯¯å çæä»¶æ¢å¤å°ææ°çæ¬ï¼

	$ git checkout -- test.txt

git checkoutå¶å®æ¯ç¨çæ¬åºéççæ¬æ¿æ¢å·¥ä½åºççæ¬ï¼æ è®ºå·¥ä½åºæ¯ä¿®æ¹è¿æ¯å é¤ï¼é½å¯ä»¥âä¸é®è¿åâã

æ³¨æï¼ä»æ¥æ²¡æè¢«æ·»å å°çæ¬åºå°±è¢«å é¤çæä»¶ï¼æ¯æ æ³æ¢å¤çï¼


## git-rm å¤§æä»¶ä¹å pack æ¸çåæ³

git çæ¬ä¿å­å¯¼è´å¤§æä»¶ä»ä¼è¢«è®°å½ç¨äºä¹ååæ»éè¦ã

æ¥çå¯¹è±¡å¤§å°ï¼

	git count-objects -v

æ¹æ³ï¼
1.è·åå¤§æä»¶

	git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"

2.å é¤æ¹æä»¶è®°å½

	git filter-branch -f --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch <file.src>' --tag-name-filter cat -- --all

file.src ä¸ºè¯¥æä»¶è·¯å¾

3.éæpackä¸gc

	rm -rf .git/refs/original/
	git reflog expire --expire=now --all
	git fsck --full --unreachable
	git repack -A -d
	git gc --aggressive --prune=now

4.push force

	git push --force


## git-gc git-clean æä»¶æ¸ç

Git åå¾åæ¶ï¼

```sh
# git-gc - Cleanup unnecessary files and optimize the local repository
# SYNOPSIS
git gc [--aggressive] [--auto] [--quiet] [--prune=<date> | --no-prune] [--force] [--keep-largest-pack]

> git gc
Enumerating objects: 402, done.
Counting objects: 100% (402/402), done.
Delta compression using up to 8 threads
Compressing objects: 100% (216/216), done.
Writing objects: 100% (402/402), done.
Total 402 (delta 173), reused 402 (delta 173), pack-reused 0

> git count-objects -v
count: 43
size: 147
in-pack: 402
packs: 1
size-pack: 3788
prune-packable: 0
garbage: 0
size-garbage: 0
```

å·¥ä½æ æä»¶æ¸çï¼ç©çå é¤ä¸å¨çæ¬ç´¢å¼è·è¸ªä¸çæä»¶ï¼

```sh
# git-clean - Remove untracked files from the working tree
# SYNOPSIS
git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] <path>

> git clean -nxfd
Would remove "SFML-tuorials-system - copy.md"
> git clean -nf
Would remove "SFML-tuorials-system - copy.md"
> git clean -nfd
Would remove "SFML-tuorials-system - copy.md"
```

åæ°è¯´æï¼

æ­£å¸¸ä¸æå® `<path>` ä½¿ç¨ -d æ¶ä¸ä¼æ¸çæªç´¢å¼çç®å½ï¼é¿åè¿éå é¤ãææä¸æå®è·¯å¾å¹éçæªè·è¸ªæä»¶ï¼å¨--forceä¸­æå°çåµå¥gitç®å½é¤å¤ï¼é½å°è¢«å é¤ã

å¦æ *clean.requireForce* éç½®æ²¡æè®¾ç½®ä¸º falseï¼é£ä¹å°±éè¦æå® -f or --force å¼ºå¶æ§è¡æ¸çï¼æè -i è¿è¡äº¤äºæ¨¡å¼ã

ä½¿ç¨ -x åè®¸å é¤ææå¹éçæä»¶ï¼ä¸ä½¿ç¨æ åç gitignore æä»¶è¿æ»¤è§åï¼ä½ä»ä½¿ç¨ -e éé¡¹è®¾ç½®çè¿æ»¤è§åãä½¿ç¨ -X åªç§»é¤ Git å¿½ç¥è§åå¹éçæä»¶ã

ä½¿ç¨ -n or --dry-run è¡¨ç¤ºè§å¯ä¼å é¤ä»ä¹æä»¶ï¼å¹¶ä¸æ§è¡å®éå¨ä½ã

Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.

Normally, only files unknown to Git are removed, but if the `-x` option is specified, ignored files are also removed. This can, for example, be useful to remove all build products.

If any optional `<path>...` arguments are given, only those paths are affected.


## filter-branch vs filter-repo åå²æ¸ç
- https://git-scm.com/docs/git-filter-branch
- https://git-scm.com/book/zh/v2/Git-å·¥å·-éååå²
- https://github.com/newren/git-filter-repo/

git-filter-branch - Rewrite branches éååæ¯åå²ï¼æ¸é¤åå²è®°å½ã

Lets you rewrite Git revision history by rewriting the branches mentioned in the `<rev-list options>`, applying custom filters on each revision. Those filters can modify each tree (e.g. removing a file or running a perl rewrite on all files) or information about each commit. Otherwise, all information (including original commit times or merge information) will be preserved.

git *filter-branch* has a plethora of pitfalls that can produce non-obvious manglings of the intended history rewrite (and can leave you with little time to investigate such problems since it has such abysmal performance). These safety and performance issues cannot be backward compatibly fixed and as such, its use is not recommended.

Please use an alternative history filtering tool such as git *filter-repo*. If you still need to use git *filter-branch*, please carefully read SAFETY (and PERFORMANCE) to learn about the land mines of *filter-branch*, and then vigilantly avoid as many of the hazards listed there as reasonably possible.

git *filter-repo* is a versatile tool for rewriting history, which includes capabilities I have not found anywhere else. It roughly falls into the same space of tool as git *filter-branch* but without the capitulation-inducing poor performance, with far more capabilities, and with a design that scales usability-wise beyond trivial rewriting cases. git *filter-repo* is now recommended by the git project instead of git *filter-branch*.

While most users will probably just use *filter-repo* as a simple command line tool (and likely only use a few of its flags), at its core *filter-repo* contains a library for creating history rewriting tools. As such, users with specialized needs can leverage it to quickly create entirely new history rewriting tools.

```sh
git filter-branch [--setup <command>] [--subdirectory-filter <directory>]
        [--env-filter <command>] [--tree-filter <command>]
        [--index-filter <command>] [--parent-filter <command>]
        [--msg-filter <command>] [--commit-filter <command>]
        [--tag-name-filter <command>] [--prune-empty]
        [--original <namespace>] [-d <directory>] [-f | --force]
        [--state-branch <branch>] [--] [<rev-list options>â¦]
```

æ¸é¤æå®æä»¶ï¼å¦å¸¦è´¦å·å¯ç çæä»¶ï¼

```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch your-file' --prune-empty --tag-name-filter cat -- --al
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch your-file' --prune-empty --tag-name-filter cat -- --al

# Doing this with filter-repo is as simple as the following command:
# (the single quotes are unnecessary, but make it clearer to a human that we are replacing the empty string as a prefix with my-module-)
git filter-repo --path src/ --to-subdirectory-filter my-module --tag-rename '':'my-module-'
```

è¦å é¤çæä»¶ç¸å¯¹äº git repo çæ ¹ç®å½è·¯å¾, å¯ä»¥ä½¿ç¨ééç¬¦ `*` å¹éæä»¶è¿è¡æ¹éå é¤ãæç¤ºä¿¡æ¯æ¶ unchanged è¯´æ repo ä¸­æ²¡ææ¾å°å¹éçæä»¶ã

å®ä½å¤§æä»¶ä¿¡æ¯ï¼

```sh
# ðä½¿ç¨ Powreshell sort-object æ¾åºæå¤§çæä»¶ï¼æç¬¬ 3 åè¿è¡æåºï¼åæåçå¤§æä»¶ã
# >git verify-pack -v .git/objects/pack/pack-xxxxxx.idx | sort -k 3 -n | tail -10
> git verify-pack -v .git\objects\pack\pack-xxxxxx.idx | sort-object { [double]($_ -split '\s+')[2] }
...
32905123d98499de5c9dd2134d8c09b64040db50 blob   2528054 320588 3546538
# ðç¡®å®è¿ä¸ªæä»¶æ¯ä»ä¹æä»¶ï¼ä¸è¦è¯¯å äºå¶ä»æä»¶ï¼
# git rev-list --objects --all | grep 32905123d98499de5c9dd2134d8c09b64040db50
> git rev-list --objects --all | findstr 32905123d98499de5c9dd2134d8c09b64040db50
32905123d98499de5c9dd2134d8c09b64040db50 images/build-tools.jpg
```

ä½¿ç¨ git rev-list å½ä»¤æéæ¶é´é¡ºåºååºæäº¤å¯¹è±¡ã

ç»§ç»­æ¥è¯¢æä¾çæ¬ä¿¡æ¯ï¼

```sh
# ðç¡®å®åªæ¬¡æäº¤å¼å¥çï¼åºä¸çä¸ºæ©ææäº¤
> git log --oneline --branches -- images/build-tools.jpg

d2cf5c9 update image link
4e876c6 add sublime build tools screenshot
```

æ§è¡åå²åæ¯è¿æ»¤ï¼æ¹ååå²æäº¤è®°å½ï¼éåä»å¼å¥æäº¤å¼å§å¾åçæææäº¤ï¼

```sh
> git filter-branch --index-filter 'git rm --ignore-unmatch --cached images/build-tools.jpg' -- 4e876c6^..
WARNING: git-filter-branch has a glut of gotchas generating mangled history
         rewrites.  Hit Ctrl-C before proceeding to abort, then use an
         alternative filtering tool such as 'git filter-repo'
         (https://github.com/newren/git-filter-repo/) instead.  See the
         filter-branch manual page for more details; to squelch this warning,
         set FILTER_BRANCH_SQUELCH_WARNING=1.
```

å¨ Git ä¸­ï¼ç¨ HEAD è¡¨ç¤ºå½åçæ¬ï¼ä¹å°±æ¯ææ°çæäº¤ `<commit>`ï¼ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^`ï¼ä¸ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^^`ï¼å½ç¶å¾ä¸ 100 ä¸ªçæ¬å¯ä»¥åæ `HEAD~100`ãæ³¨æ `<comit>` çè¡¨è¾¾ï¼è±å­ç¬¦å·åé¢è¿æä¸¤ä¸ªç¹è¡¨ç¤ºçç¥ã

```sh
# ðè¦å é¤ä¸æ¹æä»¶ï¼ä½¿ç¨ééç¬¦å·ï¼å¦ä¸ªæå® -f å¯ä»¥å¼ºå¶è¦çä¹åçéå
> git log --oneline --branches -- res/*
> git filter-branch -f --index-filter 'git rm --ignore-unmatch --cached res/*' -- 4e876c6^..
```

åç»­æä½ï¼

```sh
# ðéåå®æï¼å é¤å¼ç¨ä¿¡æ¯
> rm -Rf .git/refs/original
> git reflog expire --expire=now --all
# ðéæ°æå
> git gc --aggressive --prune=now
# ðéªè¯ size-pack æ¯å¦åå°
> git count-objects -v
# ðææ¬å°çå±é©æä½æ¨éå°è¿ç¨åæ¯ï¼æå¥½æ¬å°ä¿çåéå¤ä»½åå¾åä¸äºå¤´
> git push origin master --force
```

æ¨éè¿ä¸æ­¥å¯è½éå° master æ¯ä¸ªä¿æ¤åæ¯ï¼é£ä¹åæ¶ä¿æ¤å§ï¼æä½å®è¦ä¿æ¤åæ¥ã

å ææ¬å°ä»£ç ï¼éæ° clone æ¬å°æè¿ç¨åæ¯ï¼å¤§æä»¶å·²ç»æ²¡æäºã

```sh
> git clone ../spine-sfml/test
Cloning into 'test'...
done.
> git clone file://C:/spine-sfml/test
Cloning into 'test'...
```


## git-restore æ¢å¤æä»¶

ä¸ä¸ªç¸ä¼¼çåå²ä¿®æ¹å½ä»¤ï¼

- *git-revert* åå»ºæ°æäº¤ç¨äºæ¢å¤å¶å®æäº¤äº§ççæ¹åï¼ä¼å¨åå²è®°å½å¢å ä¸ç¬ï¼åæäº¤è®°å½è¿å¨ã
- *git-restore* ç¨äºè¿åæä»¶å°å·¥ä½æ ä¸­ï¼å¯ä»¥ä»å¶å®æäº¤è¿åç´¢å¼ä¸­çæä»¶ï¼å³ä»ä»åºä¸­è¿åæä»¶ï¼æ­¤æä½ä¸æ´æ°åæ¯ã
- *git-reset* å° HEAD æåæ°çç¶æä½ç½®ï¼ä¸åæ¨¡å¼ä¸å¯è½ä¼æå·¥ä½åºãæå­åºçåå®¹æ¿æ¢ï¼è¿å¯è½ææ°æ®ä¸¢å¤±ï¼ä½ä¹ä»å¨è¸ªçæä»¶ã

å¨ Git ä¸­ï¼ç¨ HEAD è¡¨ç¤ºå½åçæ¬å¼ç¨ï¼ä¹å°±æ¯ææ°çæäº¤ commit idãä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^`ï¼ä¸ä¸ä¸ä¸ªçæ¬å°±æ¯ `HEAD^^`ï¼å½ç¶å¾ä¸ 100 ä¸ªçæ¬å¯ä»¥åæ `HEAD~100`ã

æä½åï¼æ¥è¯¢ç°æçæäº¤çæ¬ï¼ä»¥ä¾¿ç¡®å®è¦åå°æªæ¥çåªä¸ªçæ¬ï¼

- git log æ¥çæäº¤åå²ï¼è·å Commit IDï¼
- git reflog æ¥çå¼ç¨æ¥å¿ï¼ä½¿ç¨ HEAD å¼ç¨çæ¹å¼æ¥æ¿ä»£ Commit IDï¼

å¤åæä»¶å½ä»¤ç¸å¯¹å®å¨ï¼ä¹ç¸å¯¹ç®åï¼å½ä»¤ç¨æ³åèï¼

>SYNOPSIS
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>â¦
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>â¦]


ä¸»è¦éé¡¹ `--source` æå®æ¢å¤æ¥æºçæäº¤çæ¬ï¼å¯ä»¥æå® commit, branch æ tagãæ³¨æï¼æä»¶è·¯å¾æ¯å¨è·è¸ªçï¼ä½æ¯æ¥æºä¸­ä¸å­å¨ï¼å°±ä¼ç§»é¤å®ä»¥ä¿æå source ä¸è´ã

å¦ææ²¡ææå® `--source`ï¼ä½æ¯æå®äº `--staged`ï¼å°±ä» HEAD æ¢å¤æä»¶ï¼é½æ²¡ææå®å°±ä»ç´¢å¼åºæ¢å¤æä»¶ã

è `--staged` å `--worktree` ç¨æ¥æå®æä»¶æ¢å¤å°åªéï¼é»è®¤æ¯ `--worktree` æå®æ­¤åæ°ä»¥æ¢å¤å·¥ä½æ ãæå®äº `--staged` å°±ä¼æ¢å¤å°ç´¢å¼åºï¼å¯ä»¥åæ¶æå®ã

æä»¶æå¨ä½ç½®æåä¸ªï¼å·¥ä½åºåãç´¢å¼åºåãæ¬å°ä»åºãè¿ç¨ä»åºãéè¿ä¸ä¸ªæä½è¿è¡ç¶æè½¬ç§»ï¼git add æå·¥ä½åºæä»¶æ·»å å°ç´¢å¼åºï¼git commit æç´¢å¼åºæä»¶æ·»å å°æ¬å°ä»åºï¼git push ææ¬å°ä»åºæä»¶æ·»å å°è¿ç¨ä»åºã

> git restore images/*
> git restore --source=HEAD~1 images/*
> git restore --source=HEAD@{12} --staged images/*

åºæ¯1ï¼å½ä½ æ¹ä¹±äºå·¥ä½åºæä¸ªæä»¶çåå®¹ï¼æ³ç´æ¥ä¸¢å¼å·¥ä½åºçä¿®æ¹æ¶ï¼ç¨å½ä»¤ checkout æ³¨æ `--` è¡¨ç¤ºè¦è·åæä»¶èä¸æ¯åæ¯ï¼

	git checkout -- file
	git checkout -- *

åºæ¯2ï¼å½ä½ ä¸ä½æ¹ä¹±äºå·¥ä½åºæä¸ªæä»¶çåå®¹ï¼è¿æ·»å å°äºæå­åºæ¶ï¼æ³ä¸¢å¼ä¿®æ¹ï¼åä¸¤æ­¥ï¼ç¬¬ä¸æ­¥ç¨ reset å½ä»¤ï¼åæåºæ¯ 1 æä½ã

	git reset HEAD <file>
	git reset --hard HEAD

åºæ¯3ï¼å·²ç»æäº¤äºä¸åéçä¿®æ¹å°çæ¬åºæ¶ï¼æ³è¦æ¤éæ¬æ¬¡æäº¤ï¼å°±éè¦åéæä½ï¼

	$ git reset --hard HEAD^
	HEAD is now at e475afc add distributed


## git-reset åå²ç©¿æ¢­æº

Reset æéç½®çææï¼git reset å½ä»¤å¯ä»¥éç½®å½ååæ¯ææåæäº¤çä½ç½®ï¼åªæ¯æ¹å HEAD æåå commit historyãåå®¹æäº¤è®°å½ä¾ç¶å­å¨ï¼åªæ¯éç½®å½ååæ¯ææåï¼å¹¶ä¸æ¯æ¬¡é½ä¼äº§çç¸åºç reset: moving to åå²è®°å½ã

git reset can also be used to restore the index, overlapping with git restore.

éç½®åï¼å°½ç®¡ git log æ æ³æ¥è¯¢å°éç½®ç¹åé¢çæäº¤å¨ä½ï¼ä½å¯ä»¥éè¿åé¢åè¡¨ç commitid æ¥è¿åã

git reset åºæ¬æ§è¡æ¹å¼ï¼

>SYNOPSIS
git reset [-q] [<tree-ish>] [--] <pathspec>â¦
git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>â¦]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
DEPRECATED: git reset [-q] [--stdin [-z]] [<tree-ish>]

åä¸¤ç§ä¼å°æ´ä¸ªç®å½æ  tree-ish æ·è´å° index æå­åºï¼æåä¸ç§æ¹å¼ä¼å°å½ååæ¯ HEAD æå `<commit>`ï¼æé´å¯è½ä¼ä¿®æ¹ç´¢å¼åå·¥ä½åºï¼æ ¹æ®ä»¥ä¸ä¸åæ¨¡å¼å¤çã

éè¿ git log --oneline æ¥è¯¢ç°å·²æäº¤ççæ¬è®°å½ï¼åè®¾è¦æ¢å¤å°å¶ä¸­æ³¨è§£ä¸º "Initial commit" ççæ¬ï¼

>	>git reset 981cef5 --hard
>	HEAD is now at 981cef5 Initial commit

git reset å¯ä»¥æå® Commit IDï¼æèä½¿ç¨ HEAD ç­ç­çå¼ç¨ï¼æèåæ¯åç§°ç­å½¢å¼ã

git reset åç§æ¨¡å¼çåºå«ï¼

- `--mixed` é»è®¤å¼ï¼å½éç½®åæ¯ææåå¶å®ä½ç½®ï¼æå­åºä¸­çåå®¹ä¼è¢«æ°æåçåå®¹ææ¿æ¢ï¼ä½ä¼ä¿çå·¥ä½åºåå®¹ä¸åã
- `--soft` æå­åºåå·¥ä½åºçåå®¹é½ä¿æåæ ·ï¼ä¸ä¼è¢«æ¿æ¢ã
- `--hard` æå­åºåå·¥ä½åºçåå®¹é½ä¼è¢«æ°æåçåå®¹ææ¿æ¢ï¼åªå½±åè¢«è·è¸ªçæä»¶ï¼å¦æå·¥ä½åºææ°å¢çæä»¶ï¼å¹¶ä¸ä¼è¢«å½±åã
- `--merge` éç½®æå­åºå¹¶æ´æ°å·¥ä½åºä¸­ä¸ commit æå·®å¼çåå®¹ï¼ä½ä¿çæå­åºãå·¥ä½åºå­å¨å·®å¼çåå®¹ï¼å¦ä¿®æ¹ä½æª add çåå®¹ãå¦ææå­åºæ unstaged çåå®¹å³æ²¡ææ·»å è¿½è¸ªçæä»¶ï¼åç»æ­¢æ§è¡ resetã
- `--keep` æ´æ°æå­åºåå·¥ä½åºçåå®¹ï¼ä½æ¬å°æä»¶ææ¹å¨çæåµä¼ç»æ­¢ reset çæ§è¡ã

åå¦ commit å·²ç»è¢« push å°è¿ç¨ä»åºä¸ï¼é£ä¹å¶ä»å¼åäººåå¯è½ä¼åºäºå¯¹åºç commit æäº¤è¿è¡å¼åäº§çæ°ç commitï¼å¦ææ­¤æ¶è¿è¡ reset æä½ï¼ä¼é æå¶ä»å¼åäººåçæäº¤åå²ä¸¢å¤±ï¼è¿å¯è½ä¼äº§çä¸¥éåæã

é¤äº resetï¼è¿æ revert ç¨æ¥æ§è¡ Undo å¨ä½ï¼å®è½æ¤éä»¥åç commitã

åå°æ¥å¿åå¼ç¨æ¥å¿æå°åºæ¥ä½åèï¼

> git log --all --oneline
c7477fb (HEAD -> master, origin/master) update readme
d2cf5c9 update image link
4e876c6 add sublime build tools screenshot
411825e correct the link hash
9f09b31 init
> git reflog --all
c7477fb (HEAD -> master, origin/master) refs/remotes/origin/master@{0}: update by push
c7477fb (HEAD -> master, origin/master) refs/heads/master@{0}: commit: update readme
c7477fb (HEAD -> master, origin/master) HEAD@{0}: commit: update readme
d2cf5c9 refs/remotes/origin/master@{1}: update by push
d2cf5c9 refs/heads/master@{1}: commit: update image link
d2cf5c9 HEAD@{1}: commit: update image link
4e876c6 refs/remotes/origin/master@{2}: update by push
4e876c6 refs/heads/master@{2}: commit: add sublime build tools screenshot
4e876c6 HEAD@{2}: commit: add sublime build tools screenshot
411825e refs/remotes/origin/master@{3}: update by push
411825e refs/heads/master@{3}: commit: correct the link hash
411825e HEAD@{3}: commit: correct the link hash
9f09b31 refs/remotes/origin/master@{4}: update by push
9f09b31 refs/heads/master@{4}: commit (initial): init
9f09b31 HEAD@{4}: commit (initial): init

æµè¯ä¸ä¸ï¼å° HEAD éç½®æååä¸ä½ç½®ï¼å¯ä»¥åç°å½åççæ¬æ²¡ææ¹åï¼å·¥ä½åºç®å½çæä»¶ä¹æ²¡ææ¹åï¼é¤éä½¿ç¨ checkout å½ä»¤ç­¾åºæä»¶ã

ä½æ¯ Reflogs æå¨ä½è®°å½ reset: moving to head@{0}ï¼

> git reset head@{0}
Unstaged changes after reset:
M       CMakeLists.txt
M       README.md
...
> git reflog --all
c7477fb (HEAD -> master, origin/master) HEAD@{0}: reset: moving to head@{0}
c7477fb (HEAD -> master, origin/master) refs/remotes/origin/master@{0}: update by push
...

ä½¿ç¨ --hard æ¨¡å¼è¿è¡éç½®ï¼è½ç¶çæ¬è¿æ¯åä¸ä¸ªçæ¬ï¼ä½æ¯å¯ä»¥çå°æå­åºåå·¥ä½åºçåå®¹é½æ¿æ¢äºï¼ä¹æ¯ä»éå¨è·è¸ªçæä»¶ï¼

>echo test > test.tex
> git reset --hard head@{0}
Updating files: 100% (292/292), done.
HEAD is now at c7477fb update readme
> git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        cpp/example/CMakeLists.txt
        test.tex

## git-revert æ¤æ¶æäº¤

è®¨è®º revert éè¦åä¸¤ç§æåµï¼å ä¸º commit åä¸ºä¸¤ç§ï¼

- å¸¸è§æäº¤ï¼ä¹å°±æ¯ä½¿ç¨ git commit çæäº¤ï¼
- åå¹¶æäº¤ï¼ä½¿ç¨ git merge åå¹¶ä¸¤ä¸ªåæ¯ä¹åï¼å¾å°ä¸ä¸ªæ°ç merge commitã

ä¸åä¹å¤å¨äº merge commit åå«ä¸¤ä¸ª parent commitï¼ç¨æ¥ç¡®å®æ¯ä»åªä¸¤ä¸ªåæ¯åå¹¶è¿æ¥çã

å¸¸è§æäº¤ä½¿ç¨ git revert <commit id> å³å¯ï¼ä¼çæä¸ä¸ªæ°çæäº¤ï¼å°æå®è¦æ¤æ¶çåå®¹ä»å½ååæ¯ä¸æ¤é¤ã

åå¹¶æäº¤éè¦æå® -m åæ°éæ© mainline parent-numberï¼å¦æä¸æå®ï¼git æ æ³ç¡®å®è¦ä¿ççä¸»åæ¯çåå®¹ï¼ä¹å°±ä¸ç¥éè¦æ¤é¤åªä¸æ¡åæ¯ä¸çåå®¹ã

>SYNOPSIS
git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>â¦
git revert (--continue | --skip | --abort | --quit)

åå¹¶åæ¯æäº¤æä¸¤ä¸ª parent èç¹å¨ Merge å¤æ¾ç¤ºï¼ç¨æ¥ç¡®å®æ¯åå¹¶çæ¯åªä¸¤ä¸ªåæ¯ã

	git init
	echo ver-1 > readme.md
	git add readme.md
	git commit -am "v1"
	echo ver-2 > readme.md
	git commit -am "v2"
	echo ver-3 > readme.md
	git commit -am "v3"
	git checkout -b dev master
	echo ver-beta > readme.md
	git commit -am "beta"
	git checkout master
	echo ver-alpha>readme.md
	git commit -am "alpha"
	git merge dev
	git commit -am "merge dev to master"
	git log --graph
	*   commit ffd6ff02fd1051da3416983d3367ab9c6592d8e4
	|\  Merge: 977deca f01a511
	| | Author: jimboyeah@gmail.com <jimboyeah@gmail.com>
	| | Date:   Fri Dec 27 02:03:43 2019 +0800
	| |
	| |     merge dev to master
	| |
	| * commit f01a511d2db3a0255be76fb3ecaeefa5c4b419af
	| | Author: jimboyeah@gmail.com <jimboyeah@gmail.com>
	| | Date:   Fri Dec 27 02:02:21 2019 +0800
	| |
	| |     beta
	| |
	* | commit 977deca51f747d672fb91996982f116e58ceb97e
	|/  Author: jimboyeah@gmail.com <jimboyeah@gmail.com>
	|   Date:   Fri Dec 27 02:02:22 2019 +0800
	|
	|       alpha
	|
	* commit a13bfb49253a05ae99b8095ed44443716d771685
	| Author: jimboyeah@gmail.com <jimboyeah@gmail.com>
	| Date:   Fri Dec 27 02:02:20 2019 +0800
	|
	|     v3
	|
	* commit 60207dfa8755d43b5499966f11648d42c38265a6
	| Author: jimboyeah@gmail.com <jimboyeah@gmail.com>
	| Date:   Fri Dec 27 02:02:20 2019 +0800
	|
	|     v2
	|
	* commit 3ed14b170d04fcc13b25709b8eb8b5aad2a9a858
	  Author: jimboyeah@gmail.com <jimboyeah@gmail.com>
	  Date:   Fri Dec 27 02:02:20 2019 +0800

	      v1

è¿éåè®¾ v2 æäº¤æ¯ééè¦ revertï¼ç´æ¥æ§è¡ git revert commit_id å³å¯ï¼å½ä»¤ä¼çæä¸ä¸ªæ°ç commitï¼æå® revert çæäº¤åå®¹ä¼æ¤éï¼å¦ï¼

	git revert HEAD~1

å¦ææä½åå¹¶åæ¯æäº¤ï¼å¦ä¸é¢ç ffd6ffï¼é£ä¹å°±éè¦ -m 1/2 æ¥æå® parent commit æ è¯ä¸»çº¿ï¼è¿æ ·å¨ revert æ¶ä¼ä¿çä¸»çº¿åå®¹ï¼èå¦ä¸æ¡æäº¤åå®¹è¢«æ¤éï¼ä¸ä¸è¡¨ç¤ºä¿ç 977deca å³å master ä¸çåå®¹ alphaï¼è dev åæ¯ä¸çåå®¹ä¸¢å¼ï¼

	git revert -m 1 ffd6ff



## git-rebase 

git-rebase - Reapply commits on top of another base tip

```sh
# SYNOPSIS
git rebase [-i | --interactive] [<options>] [--exec <cmd>]
        [--onto <newbase> | --keep-base] [<upstream> [<branch>]]
git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
        --root [<branch>]
git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)
```

è®¾æ³ï¼ä»åºçåæ¯ç»æå¦ä¸ï¼å¹¶ä¸å½ååæ¯å¤äº topicï¼

          A---B---C topic
         /
    D---E---F---G master

æ§è¡ä»¥ä¸ rebase å½ä»¤åï¼å½ååæ¯çåºç¡å°ä¼æ¹å° master åæ¯ä¸ï¼

```sh
git rebase master
git rebase master topi
```
                  A'--B'--C' topic
                 /
    D---E---F---G master


# git ç®¡çæä»¶ççæ¬

åç¼è¾ readme.txt å¹¶æäº¤å°çæ¬åº

>	>echo version 0.1>readme.txt
>	>git add readme.txt
>	>git commit
>	[master (root-commit) 9e377b1]  new file:   readme.txt
>	 1 file changed, 1 insertion(+)
>	 create mode 100644 readme.txt

åæ´æ°åå®¹ï¼éè¿ git diff å½ä»¤æ¥æ¯è¾åå®¹å·®å«

>	>echo version 0.2 >readme.txt
>	>git diff
>	diff --git a/readme.txt b/readme.txt
>	index a59ad2c..e44f581 100644
>	--- a/readme.txt
>	+++ b/readme.txt
>	@@ -1 +1 @@
>	-version 0.1
>	+version 0.2

è¿æ¶è¯çæäº¤

>	>git commit
>	On branch master
>	Changes not staged for commit:
>	        modified:   readme.txt
>	
>	no changes added to commit

æ æ³æäº¤ï¼åå åæå¦ä¸ï¼
ï¼+ï¼modifiedç¶æå¯¹åºè¿ä¸æ¬¡ä¿®æ¹ï¼ä½æ²¡æaddå°æå­åºçæä»¶ã
ï¼+ï¼å½åå·¥ä½åºå¨ä¿®æ¹åï¼æ²¡ææäº¤å°æå­åºçæä»¶ï¼å æ­¤ Changes not staged for commitã
ï¼+ï¼æ§è¡git commit -m "xxxx"åªè½å°æå­åºä¸­çåå®¹æäº¤å°å½ååæ¯ãæä»¥æ§è¡ç»æå°±æ¯no changes added to commitã

ä»å·¥ä½åºç´æ¥æäº¤å°ä»åºï¼è·³è¿ git add å½ä»¤ï¼ä½¿ç¨åæ° -am å³å¯å®ç°ç»è¿æå­åºç´æ¥æäº¤å°å½ååæ¯ã

>	>git commit -am version_0_2
>	[master e6ea2e5] version_0_2
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>
>	>git log --oneline
>	e6ea2e5 (HEAD -> master) version_0_2
>	2300906         new file:   readme.txt
>
>	>git status
>	On branch master
>	nothing to commit, working tree clean

ä¿®æ¹åå®¹åï¼éè¿ç¶ææ¥è¯¢å½ä»¤ä¹å¯ä»¥å¾å°æç¤ºä¿¡æ¯

>	>echo version 0.3>readme.txt
>	>git status
>	On branch master
>	Changes not staged for commit:
>	  (use "git add <file>..." to update what will be committed)
>	  (use "git checkout -- <file>..." to discard changes in working directory)
>	
>	        modified:   readme.txt
>	
>	no changes added to commit (use "git add" and/or "git commit -a")

åæ¬¡å°æä»¶æ·»å å°ä»åºå¹¶æäº¤ï¼ç¶ææç¤ºå½åå·¥ä½æå­åºæ¯å¹²åçï¼

>	>git commit -am version_0_3
>	[master 72ed0be] version_0_3
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	
>	>git status
>	On branch master
>	nothing to commit, working tree clean

# git add -p é¨ååå®¹æäº¤

è¯çç» readme.txt æ·»å å¤ä¸¤è¡åå®¹ï¼å®éå·¥ä½ä¸­å¯è½æ¯æ¨¡åä¸­çä¸¤ä¸ªæ¹æ³ç­ç­

>	>echo platform:win32>>readme.txt
>	>echo memory:2GB>>readme.txt

git add å½ä»¤å ä¸åæ°-pä¼è¯¢é®æ¯å¦å°å½ååºåå å¥æå­åºï¼éæ©yè¡¨ç¤ºå¨é¨å å¥æå­åºï¼éæ©nè¡¨ç¤ºå®å¨ä¸å å¥æå­åºï¼ç±äºè¿éæä»¬åªæ³å°é¨ååå®¹å å¥æå­åºï¼æä»¥éæ©eï¼editç¼©åï¼ï¼ç¶åå¼¹åºVIMç¼è¾å¨ã

>	>git add -p readme.txt
>	diff --git a/readme.txt b/readme.txt
>	index 73f3bc2..6493ac9 100644
>	--- a/readme.txt
>	+++ b/readme.txt
>	@@ -1 +1,3 @@
>	 version 0.3
>	+platform:win32
>	+memory:2GB
>	Stage this hunk [y,n,q,a,d,e,?]?
>	y - stage this hunk
>	n - do not stage this hunk
>	q - quit; do not stage this hunk or any of the remaining ones
>	a - stage this hunk and all later hunks in the file
>	d - do not stage this hunk or any of the later hunks in the file
>	e - manually edit the current hunk
>	? - print help

è¿å¥vimç¼è¾æ¨¡å¼ï¼æwqä¿å­éåºï¼å¹¶æäº¤å°çæ¬åº

>	  1 # Manual hunk edit mode -- see bottom for a quick guide.$
>	  2 @@ -1 +1,3 @@$
>	  3  version 0.3 $
>	  4 +platform:win32$
>	  5 +memory:2GB$
>	  6 # ---$
>	  7 # To remove '-' lines, make them ' ' lines (context).$
>	  8 # To remove '+' lines, delete them.$
>	  9 # Lines starting with # will be removed.$
>	 10 # $
>	 11 # If the patch applies cleanly, the edited hunk will immediately be$
>	 12 # marked for staging.$
>	 13 # If it does not apply cleanly, you will be given an opportunity to$
>	 14 # edit again.  If all lines of the hunk are removed, then the edit is$
>	 15 # aborted and the hunk is left unchanged.$
>	~

>	>git commit -m "add multi-line"
>	[master e7bf6df] add multi-line
>	 1 file changed, 2 insertions(+)

# Rewinding Time & Fixing Mistakes åæ»åä¿®å¤éè¯¯

å¦æå°éè¯¯addå°äºæå­åºï¼ä½æ²¡ææäº¤ï¼å¯ä»¥ç®åçæ§è¡ git reset æ¤éæå­åºçæ¹å¨ï¼ä½å·¥ä½åºçåå®¹ä¸åï¼

>	>echo error editing>readme.txt
>	>git add .
>	>git status
>	On branch master
>	Changes to be committed:
>	  (use "git reset HEAD <file>..." to unstage)
>	
>	        modified:   readme.txt
>	
>	
>	>git reset
>	Unstaged changes after reset:
>	M       readme.txt
>	
>	>git status
>	On branch master
>	Changes not staged for commit:
>	  (use "git add <file>..." to update what will be committed)
>	  (use "git checkout -- <file>..." to discard changes in working directory)
>	
>	        modified:   readme.txt
>	
>	no changes added to commit (use "git add" and/or "git commit -a")


å¦ææäº¤äºéè¯¯åå®¹ï¼æä¸¤ç§æåµï¼å¦ææ¯æåä¸æ¬¡æäº¤ä½ ä»ä»éè¦ amendï¼

>	>git commit -am "error editing"
>	[master 6c5ca14] error editing
>	 1 file changed, 1 insertion(+), 3 deletions(-)
>	
>	>git commit --amend

è¿å°ä¸æ§è¡æåä¸æ¬¡æäº¤ï¼æ¢å¤ä½ åæ¥çåå®¹ï¼å·¥ä½åºåå®¹ä¸åï¼æäº¤ä¿¡æ¯å°é»è®¤ä¸ºä½ ä¸æ¬¡æäº¤çä¿¡æ¯ã

æäº¤è¿ä»£ç ä¹åï¼åç°ä¸ä¸ªå°æ¹æ¹éäºï¼ä½ ä¸æ¬¡æäº¤æ¶ä¸æ³ä¿çä¸ä¸æ¬¡çè®°å½ï¼æèä½ ä¸ä¸æ¬¡ç commit message çæè¿°æè¯¯ï¼è¿æ¶åä½ å¯ä»¥ä½¿ç¨è¿ä¸ªå½ä»¤ã

amend ä¼å¨ä»åºä¿çä¿®æ¹çåå®¹ï¼ä¹å°±æ¯æäº¤çæä»¶å¨ä¼å¨ä»åºä¸­ä¿çè®°å½ã

å¦æä½ å·²ç»æäº¤è¿ä¸æ­¢ä¸æ¬¡äºå¹¶ä¸æ³å®å¨åå°ä¹åé£ä¸ªè®°å½ï¼ä½ å¯ä»¥éç½®åæ¯åå°æå®çæ¶é´ï¼`HEAD~2` è¡¨ç¤ºåé2çº§ã

>	git checkout SHA
>	git reset --hard HEAD~2
>	git reset --hard SHA

éç½®åï¼å·¥ä½åºçæä»¶ä¼è·çéç½®å°ç¸åºçç¶æï¼é¤äºæ²¡æè¿è¡è·è¸ªçæä»¶ä¼ä¿çã


SHA å¯ä»¥éè¿ä»¥ä¸å½ä»¤è·å

>	>git log --graph
>	>git log --oneline
>	>git log --graph --all
>	>git log --oneline --all


è¿æä¸ä¸ªæ¹æ³æ¯ Revert commitsï¼æ¯è¾ä¸ä¸å·®å«ï¼

|  æä»¤  | åå²è®°å½ |                                    èªªæ                                   |
|--------|----------|---------------------------------------------------------------------------|
| Reset  | ä¿®æ¹     | éç½®å°æå® Commit ççæï¼éå¸¸é©ç¨æ¼å°æªæ¨åºå»ç Commitã                 |
| Rebase | ä¿®æ¹     | æ°å¢ãä¿®æ¹ãåªé¤ Commit é½ç¸ç¶æ¹ä¾¿ï¼ç¨ä¾æ´çãç·¨è¼¯éæ²ææ¨åºå»ç Commitã |
| Revert | ä¸ä¿®æ¹   | å¢å  Commit ä¾åè½å°æ§ç¶æï¼éç¨äºä¸åè¨±ä½¿ç¨ Reset æ Rebase çå ´åã     |

éè¿éç½®éèç Commit ä¹ä¸ä¼å¨æ¨éæ¶åéç¸å³çæ°æ®è®°å½ã


# Git Tree
- http://gnuwin32.sourceforge.net/packages/tree.htm

Git ä¸æä¾ tree å½ä»¤ï¼éè¦ä½¿ç¨ GNU Tree å·¥å·çæç®å½æ ã

	>c:\git\bin\tree.exe --help
	usage: tree [-adfghilnpqrstuvxACDFNS] [-H baseHREF] [-T title ] [-L level [-R]]
	        [-P pattern] [-I pattern] [-o filename] [--version] [--help] [--inodes]
	        [--device] [--noreport] [--nolinks] [--dirsfirst] [--charset charset]
	        [--filelimit #] [<directory list>]
	  -a            All files are listed.
	  -d            List directories only.
	  -l            Follow symbolic links like directories.
	  -f            Print the full path prefix for each file.
	  -i            Don't print indentation lines.
	  -q            Print non-printable characters as '?'.
	  -N            Print non-printable characters as is.
	  -p            Print the protections for each file.
	  -u            Displays file owner or UID number.
	  -g            Displays file group owner or GID number.
	  -s            Print the size in bytes of each file.
	  -h            Print the size in a more human readable way.
	  -D            Print the date of last modification.
	  -F            Appends '/', '=', '*', or '|' as per ls -F.
	  -v            Sort files alphanumerically by version.
	  -r            Sort files in reverse alphanumeric order.
	  -t            Sort files by last modification time.
	  -x            Stay on current filesystem only.
	  -L level      Descend only level directories deep.
	  -A            Print ANSI lines graphic indentation lines.
	  -S            Print with ASCII graphics indentation lines.
	  -n            Turn colorization off always (-C overrides).
	  -C            Turn colorization on always.
	  -P pattern    List only those files that match the pattern given.
	  -I pattern    Do not list files that match the given pattern.
	  -H baseHREF   Prints out HTML format with baseHREF as top directory.
	  -T string     Replace the default HTML title and H1 header with string.
	  -R            Rerun tree when max dir level reached.
	  -o file       Output to file instead of stdout.
	  --inodes      Print inode number of each file.
	  --device      Print device ID number to which each file belongs.
	  --noreport    Turn off file/directory count at end of tree listing.
	  --nolinks     Turn off hyperlinks in HTML output.
	  --dirsfirst   List directories before files.
	  --charset X   Use charset X for HTML and indentation line output.
	  --filelimit # Do not descend dirs with more than # files in them.


	>c:\git\bin\tree.exe -h -F
	.
	|-- [ 19K]  ReadFile.exe*
	|-- [ 16K]  arguments-list-avg.exe*
	|-- [ 38K]  arguments-list.exe*
	|-- [ 38K]  argv.exe*
	|-- [ 18K]  array.exe*
	|-- [ 17K]  binfind.exe*
	|-- [ 37K]  bom.exe*
	|-- [ 20K]  byte2hex.exe*
	|-- [ 15K]  const.exe*
	|-- [ 17K]  const_cast.exe*
	|-- [ 16K]  decltype.exe*
	|-- [ 16K]  declval.exe*
	|-- [ 17K]  default-args.exe*

# branch åå»ºåæ¯

ç°å¨åå° version_0_3 çç¶æï¼åè®¾éè¦ä¸ä¸ª linux/arm ççæ¬ï¼å¯ä»¥è¿æ ·

>	>git checkout 72ed0be
>	>git branch 'linux_arm'

checkout æ¶å¯ä»¥ç´æ¥å»ºç«åæ¯ï¼ä¸ä¸¤è¡å½ä»¤ç­ä»·åæ³ï¼

>	git checkout -b 'linux_arm'

>	>git log --oneline
>	72ed0be (HEAD, 'linux_arm') version_0_3
>	e6ea2e5 version_0_2
>	2300906 (master)        new file:   readme.txt

åç°åæ¥ç win32 çæ¬ä¸è§äºï¼å¶å®æä»¶è¿å¨ä»åºæ¶éï¼ç°å¨éè¦å°å®è¿ååºæ¥ï¼å¹¶ä¸ºå¶å»ºç«ä¸ä¸ªwin32_x86åæ¯

>	>git checkout e7bf6df
>	Previous HEAD position was 72ed0be version_0_3
>	HEAD is now at e7bf6df add multi-line
>	
>	>git log --oneline
>	e7bf6df (HEAD) add multi-line
>	72ed0be ('linux_arm') version_0_3
>	e6ea2e5 version_0_2
>	2300906 (master)        new file:   readme.txt
>	
>	>git branch 'win32_x86'
>	
>	>git log --oneline
>	e7bf6df (HEAD, 'win32_x86') add multi-line
>	72ed0be ('linux_arm') version_0_3
>	e6ea2e5 version_0_2
>	2300906 (master)        new file:   readme.txt

ååæ¢å° linux_arm çæ¬å¹¶æ·»å åå®¹

>	>git checkout 'linux_arm'
>	Previous HEAD position was e7bf6df add multi-line
>	Switched to branch ''linux_arm''
>	
>	>echo platform:linux>>readme.txt
>	>echo memory:1GB>>readme.txt
>	
>	>git commit -am "add multi-line for linux version"
>	['linux_arm' 60d075a] add multi-line for linux version
>	 1 file changed, 2 insertions(+)
>	
>	>git log --oneline
>	60d075a (HEAD -> 'linux_arm') add multi-line for linux version
>	72ed0be version_0_3
>	e6ea2e5 version_0_2
>	2300906 (master)        new file:   readme.txt

æ¥çåæ¯ï¼å½ååæ¯åé¢ä¼æ ä¸ä¸ª * å·ã

>	>git branch
>	  'linux_arm'
>	  'win32_x86'
>	* master

Gité¼å±å¤§éä½¿ç¨åæ¯ï¼

	git branch 				# æ¥çåæ¯
	git branch -a			# æ¥çææåæ¯
	git branch -r			# æ¥çæ¬å°è¿ç¨åæ¯
	git branch <name> 		# åå»ºåæ¯
	git checkout <name> 	# åæ¢åæ¯
	git checkout -b <name> 	# åå»º+åæ¢åæ¯
	git checkout -b <local> origin/<remote> # æåè¿ç¨åæ¯å¹¶åæ¶åå»ºå¯¹åºçæ¬å°åæ¯
	git merge <name> 		# åå¹¶æåæ¯å°å½ååæ¯
	git branch -d <name> 	# å é¤åæ¯
	git branch -D <name> 	# å¼ºå¶å é¤åæ¯

ä½¿ç¨å­¤åæ¯ --orphan åå»ºä¸ä¸ªæ²¡æç¶èç¹çå­¤å²åæ¯ï¼ä½æ¯è¿ä¸ªæ°åæ¯ä¹ä¼åæ¬å½åææçæä»¶ï¼ä¹å°±æ¯å®ä¾èµäºåç¶åæ¯çæçãå¯ä»¥ä½¿ç¨ rm å½ä»¤å é¤ææ¬å°è¿äºæä»¶ï¼èä¸ä¸è®°å½ï¼ç¶åæ¨éå°è¿ç¨ä»åºï¼

	git checkout --orphan branch-name
	git rm -rf .
	git push --set-upstream origin dllDemo

åèï¼

	usage: git branch [<options>] [-r | -a] [--merged] [--no-merged]
	   or: git branch [<options>] [-l] [-f] <branch-name> [<start-point>]
	   or: git branch [<options>] [-r] (-d | -D) <branch-name>...
	   or: git branch [<options>] (-m | -M) [<old-branch>] <new-branch>
	   or: git branch [<options>] (-c | -C) [<old-branch>] <new-branch>
	   or: git branch [<options>] [-r | -a] [--points-at]
	   or: git branch [<options>] [-r | -a] [--format]

	Generic options
	    -v, --verbose         show hash and subject, give twice for upstream branch
	    -q, --quiet           suppress informational messages
	    -t, --track           set up tracking mode (see git-pull(1))
	    -u, --set-upstream-to <upstream>
	                          change the upstream info
	    --unset-upstream      unset the upstream info
	    --color[=<when>]      use colored output
	    -r, --remotes         act on remote-tracking branches
	    --contains <commit>   print only branches that contain the commit
	    --no-contains <commit>
	                          print only branches that don't contain the commit
	    --abbrev[=<n>]        use <n> digits to display object names

	Specific git-branch actions:
	    -a, --all             list both remote-tracking and local branches
	    -d, --delete          delete fully merged branch
	    -D                    delete branch (even if not merged)
	    -m, --move            move/rename a branch and its reflog
	    -M                    move/rename a branch, even if target exists
	    -c, --copy            copy a branch and its reflog
	    -C                    copy a branch, even if target exists
	    -l, --list            list branch names
	    --show-current        show current branch name
	    --create-reflog       create the branch's reflog
	    --edit-description    edit the description for the branch
	    -f, --force           force creation, move/rename, deletion
	    --merged <commit>     print only branches that are merged
	    --no-merged <commit>  print only branches that are not merged
	    --column[=<style>]    list branches in columns
	    --sort <key>          field name to sort on
	    --points-at <object>  print only branches of the object
	    -i, --ignore-case     sorting and filtering are case insensitive
	    --format <format>     format to use for the output


# push å°æ¬å°ä»åºæ¨éå°githubæç®¡

å° github.com ä¸åå»ºä¸ä¸ªä»åºï¼ç¶å github ä¼ç»åºåå»ºä»åºçå½ä»¤æç¤ºï¼æ§è¡åé¢ä¸¤è¡å½ä»¤å°±å¯ä»¥äºï¼

>	â¦or create a new repository on the command line
>	echo "# demo" >> README.md
>	git init
>	git add README.md
>	git commit -m "first commit"
>	git remote add origin https://github.com/jimboyeah/demo.git
>	git push -u origin master
>	
>	â¦or push an existing repository from the command line
>	git remote add origin https://github.com/jimboyeah/demo.git
>	git push -u origin master


æ³¨ææäº¤çæ¯ä¸»çº¿ master åå§åæ¯ï¼æä»¥ github åªä¼æ¶å°åå§ç readme.txt æä»¶

>	>git remote add origin https://github.com/jimboyeah/demo.git
>	>git push -u origin master
>	Enumerating objects: 3, done.
>	Counting objects: 100% (3/3), done.
>	Writing objects: 100% (3/3), 231 bytes | 231.00 KiB/s, done.
>	Total 3 (delta 0), reused 0 (delta 0)
>	To https://github.com/jimboyeah/demo.git
>	 * [new branch]      master -> master
>	Branch 'master' set up to track remote branch 'master' from 'origin'.

ç¶åå°å¶å®ä¸¤ä¸ªç°æåæ¯ä¹ push å°æå¡å¨

>	>git push
>	fatal: The current branch 'win32_x86' has no upstream branch.
>	To push the current branch and set the remote as upstream, use
>	
>	    git push --set-upstream origin 'win32_x86'
>	
>	>git push --set-upstream origin 'win32_x86'
>	Enumerating objects: 11, done.
>	Counting objects: 100% (11/11), done.
>	Delta compression using up to 4 threads.
>	Compressing objects: 100% (3/3), done.
>	Writing objects: 100% (9/9), 723 bytes | 361.00 KiB/s, done.
>	Total 9 (delta 0), reused 0 (delta 0)
>	To https://github.com/jimboyeah/demo.git
>	 * [new branch]      'win32_x86' -> 'win32_x86'
>	Branch ''win32_x86'' set up to track remote branch ''win32_x86'' from 'origin'.
>	
>	>git push --set-upstream origin 'linux_arm'
>	Enumerating objects: 5, done.
>	Counting objects: 100% (5/5), done.
>	Writing objects: 100% (3/3), 295 bytes | 295.00 KiB/s, done.
>	Total 3 (delta 0), reused 0 (delta 0)
>	To https://github.com/jimboyeah/demo.git
>	 * [new branch]      'linux_arm' -> 'linux_arm'
>	Branch ''linux_arm'' set up to track remote branch ''linux_arm'' from 'origin'.

æ§è¡ push æ¥éï¼

	fatal: The current branch 'win32_x86' has no upstream branch.

æ¯å ä¸ºæ¬å°å½ååæ¯æ²¡æåè¿ç«¯çåæ¯è¿è¡ç¸å³èï¼ä½¿ç¨ `--set-upstream origin` æ¯å³èè¿ç¨åæ¯çä¸ç§è§£å³åæ³ãå¯ä»¥ç¨å½ä»¤æ¥çææåæ¯ï¼è¿ç¨åæ¯æ¯çº¢è²çé¨åãç¶åç¡®å®å¥½è¿ä¸¤ä¸ªå¼åï¼å°å¼æ¢æå³å¯ã

	git branch -a

ä½¿ç¨è¿ç§æ¹å¼çåææ¯éè¦ç¡®ä¿ä½ çè¿ç¨åæ¯æ¯å­å¨çï¼ä¸ç¶çè¯ä¹æ æ³å³èã

ä»¥ä¸è¿ç§æ¹å¼æ éç¡®ä¿è¿ç«¯ç¸åºåæ¯å­å¨ï¼å ä¸ºä¸å­å¨çè¯ï¼ä¼èªå¨åå»ºè¯¥åæ¯å¹¶ä¸æ¬å°åæ¯è¿è¡å³èã

	git push -u origin 'win32_x86'


å¦æè¿ç¨ä»åºå·²ç»å»ºç«ï¼éè¦ç¨æ¬å°ä»åºåå§åï¼å¯ä»¥ä½¿ç¨åæ¯æ¹å¼ï¼

	git push origin <åæ¯å> -f

è¿ç§æ¹å¼å¯ä»¥ç¨æ¬å°ä»åºçåå®¹è¦çè¿ç¨ä»åºã

	git remote -v                 # æ¥çè¿ç¨ä»åºè¯¦ç»ä¿¡æ¯ï¼å¯ä»¥çå°ä»åºåç§°
	git remote show origin        # è¿ç¨ä»åºè¯¦æ
	git remote remove origin      # å é¤è¿ç¨ä»åº
	git remote add origin <name>  # éæ°æ·»å è¿ç¨ä»åºå°å
	gti push -u origin master     # æäº¤å°è¿ç¨ä»åºç master ä¸»å¹²
	git remote prune origin       # æ¸çæ æçè¿ç¨è¿½è¸ªåæ¯
	git remote update

å é¤è¿ç¨åæ¯è¿ä¸ªéå¸¸æ åå¤´çè¯­æ³ï¼

	git push [è¿ç¨å] :[åæ¯å]

å¦ææ³å¨æå¡å¨ä¸å é¤ master åæ¯ï¼è¿è¡ä¸é¢çå½ä»¤ï¼

	$ git push origin :master
	To git@github.com:schacon/simplegit.git
	 - [deleted]         master

åï¼æå¡å¨ä¸çåæ¯æ²¡äºãä½ æå¥½ç¹å«çå¿è¿ä¸é¡µï¼å ä¸ºä½ ä¸å®ä¼ç¨å°é£ä¸ªå½ä»¤ï¼èä¸ä½ å¾å¯è½ä¼å¿æå®çè¯­æ³ãæç§æ¹ä¾¿è®°å¿è¿æ¡å¸¦åå·çå½ä»¤ï¼

	git push [è¿ç¨å] [æ¬å°åæ¯]:[è¿ç¨åæ¯]

è¯­æ³ï¼å¦æçç¥ [æ¬å°åæ¯]ï¼é£å°±ç­äºæ¯å¨è¯´âå¨è¿éæåç©ºç½ç¶åæå®åæ[è¿ç¨åæ¯]âã




# ls-files ls-remote ls-tree åè¡¨æ¥ç

- git-ls-files
Show information about files in the index and the working tree.

		git ls-files [-z] [-t] [-v]
			(--[cached|deleted|others|ignored|stage|unmerged|killed|modified])*
			(-[c|d|o|i|s|u|k|m])*
			[--eol]
			[-x <pattern>|--exclude=<pattern>]
			[-X <file>|--exclude-from=<file>]
			[--exclude-per-directory=<file>]
			[--exclude-standard]
			[--error-unmatch] [--with-tree=<tree-ish>]
			[--full-name] [--abbrev] [--] [<file>â¦]

- git-ls-remote

	List references in a remote repository.

		git ls-remote [--heads] [--tags] [--refs] [--upload-pack=<exec>]
		    [-q | --quiet] [--exit-code] [--get-url]
		    [--symref] [<repository> [<refs>â¦]]

- git-ls-tree

	List the contents of a tree object

		git ls-tree [-d] [-r] [-t] [-l] [-z]
			[--name-only] [--name-status] [--full-name] [--full-tree] [--abbrev[=<n>]]
			<tree-ish> [<path>â¦]

	* <tree-ish> Id of a tree-ish.

	* -d Show only the named tree entry itself, not its children.
	* -r Recurse into sub-trees.
	* -t Show tree entries even when going to recurse them. Has no effect if -r was not passed. -d implies -t.
	* -l 
	* --long Show object size of blob (file) entries.
	* -z \0 line termination on output.
	* --name-only 
	* --name-status List only filenames (instead of the "long" output), one per line.
	* --abbrev[=<n>] Instead of showing the full 40-byte hexadecimal object lines, show only a partial prefix. Non default number of digits can be specified with --abbrev=<n>.
	* --full-name Instead of showing the path names relative to the current working directory, show the full path names.
	* --full-tree Do not limit the listing to the current working directory. Implies --full-name.
	* [<path>â¦] When paths are given, show them (note that this isnât really raw pathnames, but rather a list of patterns to match). Otherwise implicitly uses the root level of the tree as the sole path argument.

ä½¿ç¨ä¸¾ä¾ï¼

	$ git ls-remote
	From https://github.com/jimboyeah/demo.git
	9d9366ba5967b3e8961513c87bc069cdcb0d0693        HEAD
	60d075a8202435a5ae51eb2679aad62129a41ed4        refs/heads/'linux_arm'
	e7bf6df7066601e7b8711f5664fd6337717718b1        refs/heads/'win32_x86'
	189349a4210b94eb6e98bd425e84cecd8f3230df        refs/heads/go-my-websocket
	9d9366ba5967b3e8961513c87bc069cdcb0d0693        refs/heads/master

	$ git ls-tree 9d9366ba5967b3e8961513c87bc069cdcb0d0693
	100644 blob 493d238296bd3da3df2c75284d01d227f50e0f97    readme.txt

	$ git ls-tree -r 189349a4210b94eb6e98bd425e84cecd8f3230df
	100644 blob a83b8d70c4b7e31573084d27a5bfa2e162299a6d    src/server.js
	100644 blob 1535d539de13955e8ea7b42fbd60f9610c654219    src/view/socket-client.tpl
	100644 blob d6fd6fb594e10e64bdbc6305e4033a61f656f55f    src/view/theme.css


# detached HEAD æéæ¸¸ç¦»

git checkout æ¬è´¨ä¸æ¯ä¿®æ¹ HEAD éé¢çåå®¹æ¥è®©å®æåä¸ååæ¯çï¼è HEAD é»è®¤æ»æ¯æåå½åçåæ¯ææ°æäº¤çåå®¹ã

å½ä½¿ç¨ checkout ç­¾åºæå®çæäº¤åå®¹ï¼é£ä¹ HEAD ä¸æåä»»ä½åæ¯ææåäºä¸ä¸ªæ²¡æåæ¯åå­çä¿®è®¢çæ¬ï¼æ­¤æ¶å°±æ¯å¤äºæ¸¸ç¦»ç¶æäº detached HEADã

æ¸¸ç¦»ç¶æä¸è¿è¡ commit æä½ä¸ä¼æäº¤å°ä»»ä½åæ¯ä¸å»ï¼å¨è¿ç§ç¶æä¸å°è¯æäº¤æ¯æ²¡æç¨çï¼å ä¸ºä»»ä½æ´æ¹é½å°ä¸¢å¤±ã

å¯ä»¥éè¿å»ºç«ä¸´æ¶åæ¯ï¼ç¶åååå¹¶åæ¯è§£å³ HEAD æéæ¸¸ç¦»ã


å¦æå·¥ä½åºæ²¡æåå®¹æ´æ°ï¼é£ä¹éè¿ pull å½ä»¤å¯ä»¥è§£é¤ HEAD æ¸¸ç¦»

>	>git pull
>	Updating 2300906..72ed0be
>	Fast-forward
>	 readme.txt | 2 +-
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	
>	>echo version 0.4>readme.txt
>	>git commit -am "update to 0.4"
>	[master 8efc223] update to 0.4
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	
>	>git push
>	Enumerating objects: 5, done.
>	Counting objects: 100% (5/5), done.
>	Writing objects: 100% (3/3), 252 bytes | 252.00 KiB/s, done.
>	Total 3 (delta 0), reused 0 (delta 0)
>	To https://github.com/jimboyeah/demo.git
>	   72ed0be..8efc223  master -> master



# Git Submodule é¡¹ç®å­æ¨¡å
- https://git-scm.com/docs/git-submodule

å½é¡¹ç®è¶æ¥è¶åºå¤§ä¹åï¼ä¸å¯é¿åçè¦æåæå¤ä¸ªå­æ¨¡åï¼æä»¬å¸æåä¸ªå­æ¨¡åæç¬ç«ççæ¬ç®¡çï¼å¹¶ä¸ç±ä¸é¨
çäººå»ç»´æ¤ï¼è¿æ¶åæä»¬å°±è¦ç¨å° git submodule åè½ã

ä¸»é¡¹ç®å¯¹å­æ¨¡åæä¾èµå³ç³»ï¼å´åå¹¶ä¸å³å¿å­æ¨¡åçåé¨å¼åæµç¨ç»èï¼è¿ç§é¡¹ç®éè¦ä½¿ç¨å¤ä¸ªå­æ¨¡å Git ä»åºã

Submodule åè½å°±ä¸ºå½åé¡¹ç®æ·»å å­æ¨¡åä»åºä¹é´çä¾èµå³ç³»ä¿¡æ¯ï¼å¯ä»¥åµå¥ï¼.gitmodules åå«ä¿¡æ¯ï¼

	[submodule "third_party/bottle"]
		path = third_party/bottle
		url = git@github.com:defnull/bottle

å­æ¨¡åè¿ç¨ä»åºè·¯å¾ãå­æ¨¡åççæ¬å·ç­ï¼ç»èçä¿¡æ¯åå«å¨ .git/config å modules ç®å½ä¸ã

å¸¸ç¨å½ä»¤

   1. git clone <repository> --recursive éå½çæ¹å¼åéæ´ä¸ªé¡¹ç®
   2. git submodule add <repository> <path> æ·»å å­æ¨¡å
   3. git submodule init åå§åå­æ¨¡å
   4. git submodule deinit ç§»é¤å­æ¨¡å
   5. git submodule update æ´æ°å­æ¨¡å
   6. git submodule foreach git pull æåææå­æ¨¡å

```sh
# SYNOPSIS
git submodule [--quiet] [--cached]
git submodule [--quiet] add [<options>] [--] <repository> [<path>]
git submodule [--quiet] status [--cached] [--recursive] [--] [<path>â¦]
git submodule [--quiet] init [--] [<path>â¦]
git submodule [--quiet] deinit [-f|--force] (--all|[--] <path>â¦)
git submodule [--quiet] update [<options>] [--] [<path>â¦]
git submodule [--quiet] set-branch [<options>] [--] <path>
git submodule [--quiet] set-url [--] <path> <newurl>
git submodule [--quiet] summary [<options>] [--] [<path>â¦]
git submodule [--quiet] foreach [--recursive] <command>
git submodule [--quiet] sync [--recursive] [--] [<path>â¦]
git submodule [--quiet] absorbgitdirs [--] [<path>â¦]
```

åå»ºå¸¦å­æ¨¡åççæ¬åºï¼ä¾å¦ï¼

	project
	  |--moduleA
	  |--readme.txt

åå»º project çæ¬åºï¼å¹¶æäº¤ readme.txt æä»¶ï¼

	git init --bare project.git
	git clone project.git project
	cd project
	echo "This is a project." > readme.txt
	git add .
	git commit -m "add readme.txt"
	git push origin master
	cd ..

åå»º moduleA çæ¬åºï¼å¹¶æäº¤ a.txt æä»¶

	git init --bare moduleA.git
	git clone moduleA.git moduleA1
	cd moduleA1
	echo "This is a submodule." > a.txt
	git add .
	git commit -m "add a.txt"
	git push origin master
	cd ..

å¨ project ä¸­å¼å¥å­æ¨¡å moduleA å¹¶æäº¤å­æ¨¡åä¿¡æ¯

	cd project
	git submodule add ../moduleA.git moduleA
	git status
	git diff
	git add .
	git commit -m "add submodule"
	git push origin master
	cd ..

ä½¿ç¨ git status å¯ä»¥çå°å¤äºä¸¤ä¸ªéè¦æäº¤çæä»¶ï¼å¶ä¸­ .gitmodules æå® submodule çä¸»è¦ä¿¡æ¯ï¼åæ¬å­æ¨¡åçè·¯å¾åå°åä¿¡æ¯ï¼moduleA æå®äºå­æ¨¡åç commit idï¼ä½¿ç¨ git diff å¯ä»¥çå°è¿ä¸¤é¡¹çåå®¹ãè¿ééè¦æåºç¶é¡¹ç®ç git å¹¶ä¸ä¼è®°å½ submodule çæä»¶åå¨ï¼å®æ¯æç§ commit id æå® submodule ç git headerï¼æä»¥ .gitmodules å moduleA è¿ä¸¤é¡¹æ¯éè¦æäº¤å°ç¶é¡¹ç®çè¿ç¨ä»åºçã

	On branch master
	Your branch is up-to-date with 'origin/master'.
	Changes to be committed:
	  (use "git reset HEAD <file>..." to unstage)
		new file:   .gitmodules
		new file:   moduleA

åéå¸¦å­æ¨¡åççæ¬åº

æ¹æ³ä¸ï¼å clone ç¶é¡¹ç®ï¼ååå§å submoduleï¼æåæ´æ° submoduleï¼åå§ååªéè¦åä¸æ¬¡ï¼ä¹åæ¯æ¬¡åªéè¦ç´æ¥ update å°±å¯ä»¥äºã

æ³¨æ submodule é»è®¤æ¯ä¸å¨ä»»ä½åæ¯ä¸çï¼å®æåç¶é¡¹ç®å­å¨ç submodule commit idã

	git clone project.git project2
	cd project2
	git submodule init
	git submodule update
	cd ..

æ¹æ³äºï¼éç¨éå½åæ° --recursiveï¼éè¦æ³¨æåæ · submodule é»è®¤æ¯ä¸å¨ä»»ä½åæ¯ä¸çï¼å®æåç¶é¡¹ç®å­å¨ç submodule commit idã

	git clone project.git project3 --recursive


ä¿®æ¹å­æ¨¡å

ä¿®æ¹å­æ¨¡åä¹ååªå¯¹å­æ¨¡åççæ¬åºäº§çå½±åï¼å¯¹ç¶é¡¹ç®ççæ¬åºä¸ä¼äº§çä»»ä½å½±åï¼å¦æç¶é¡¹ç®éè¦ç¨å°ææ°çå­æ¨¡åä»£ç ï¼æä»¬éè¦æ´æ°ç¶é¡¹ç®ä¸­ submodule commit idï¼é»è®¤çæä»¬ä½¿ç¨ git status å°±å¯ä»¥çå°ç¶é¡¹ç®ä¸­ submodule commit id å·²ç»æ¹åäºï¼æä»¬åªéè¦åæ¬¡æäº¤å°±å¯ä»¥äºã

	cd project/moduleA
	git branch
	echo "This is a submodule." > b.txt
	git add .
	git commit -m "add b.txt"
	git push origin master
	cd ..
	git status
	git diff
	git add .
	git commit -m "update submodule add b.txt"
	git push origin master
	cd ..


æ´æ°å­æ¨¡å

æ´æ°å­æ¨¡åçæ¶åè¦æ³¨æå­æ¨¡åçåæ¯é»è®¤ä¸æ¯ masterã

æ¹æ³ä¸ï¼å pull ç¶é¡¹ç®ï¼ç¶åæ§è¡ git submodule updateï¼æ³¨æ moduleA çåæ¯å§ç»ä¸æ¯ masterã

	cd project2
	git pull
	git submodule update
	cd ..

æ¹æ³äºï¼åè¿å¥å­æ¨¡åï¼ç¶ååæ¢å°éè¦çåæ¯ï¼è¿éæ¯ master åæ¯ï¼ç¶åå¯¹å­æ¨¡å pullï¼è¿ç§æ¹æ³ä¼æ¹åå­æ¨¡åçåæ¯ã

	cd project3/moduleA
	git checkout master
	cd ..
	git submodule foreach git pull
	cd ..


å é¤å­æ¨¡å

	git rm --cached moduleA
	rm -rf moduleA
	rm .gitmodules
	vim .git/config

å é¤ submodule ç¸å³çåå®¹ï¼ä¾å¦ä¸é¢çåå®¹

	[submodule "moduleA"]
	      url = /Users/nick/dev/nick-doc/testGitSubmodule/moduleA.git

ç¶åæäº¤å°è¿ç¨æå¡å¨

	git add .
	git commit -m "remove submodule"

æ¬å°å®éªçæ¶åï¼åç°ç¨ä¸é¢çæ¹å¼ä¹å¯ä»¥ï¼æå¡å¨è®°å½çæ¯ .gitmodules å moduleAï¼æ¬å°åªè¦ç¨ git å½ä»¤å é¤ moduleAï¼åç¨ git status æ¥çç¶æå°±ä¼åç° .gitmodules å moduleA è¿ä¸¤é¡¹é½å·²ç»æ¹åäºã

	git rm moduleA
	git status
	git commit -m "remove submodule"
	git push origin master

è³äº .git/configï¼ä»ä¼è®°å½ submodule ä¿¡æ¯ï¼ä½æ¯æ¬å°ä½¿ç¨ä¹æ²¡åç°æä»ä¹å½±åï¼å¦æéæ°ä»æå¡å¨åéå .git/config ä¸­ä¸ä¼æ submodule ä¿¡æ¯ã



# git merge åå¹¶åæ¯ãè§£å³åå¹¶å²çª

GIT åæ¯ç®¡çï¼åå»ºä¸åå¹¶åæ¯ãè§£å³åå¹¶å²çª - https://www.cnblogs.com/wangmingshun/p/5425150.html
gitå¥é¨äºï¼åæ¯åå¹¶å²çªåè¡åï¼ https://www.cnblogs.com/andyyu/p/3599551.html

è·å master å¹¶å»ºç«ä¸ä¸ªå·¥ä½ç¨çä¸´æ¶åæ¯ï¼å¹¶æäº¤æ´æ°åå®¹

>	>git checkout -b temp 8efc223
>	Switched to a new branch 'temp'
>	
>	>git branch
>	  'linux_arm'
>	  'win32_x86'
>	  master
>	* temp
>	
>	>echo version 0.4 beta>readme.txt
>	
>	>git commit -am "beta version 0.4 beta"
>	[temp 5e5312f] beta version 0.4 beta
>	 1 file changed, 1 insertion(+), 1 deletion(-)

ç¶ååæ¢åæ¥ä¸»åæ¯ï¼å° temp åæ¯åå¹¶ï¼æ³¨æ Fast-forwardï¼è¿æ¯å¿«éåå¹¶åæ¯çææï¼å ä¸ºæ²¡æå²çªã

>	>git checkout master
>	Switched to branch 'master'
>	Your branch is up to date with 'origin/master'.
>	
>	>git merge temp
>	Updating 8efc223..5e5312f
>	Fast-forward
>	 readme.txt | 2 +-
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	>git branch -d temp
>	Deleted branch temp (was 5e5312f).

å­å¨å²çªæ¶ï¼åå¹¶å°±æ²¡è¿ä¹ç®åäºï¼ä¸é¢æ¨¡æä¸ä¸ªå²çªï¼ç¶åè§£å³å®å®æåæ¯åå¹¶ã

- é¦åå»ºç«å·¥ä½ä¸´æ¶åæ¯ï¼æ´æ° readme.txtï¼
- ç¶ååæ¢å°ä¸»çº¿åæ¯æ´æ° readme.txt æ¨¡æå¤ç¨æ·ç¼è¾åä¸ä¸ªæä»¶ï¼

è¿æ ·åå¹¶åæ¯å°±ä¼å ä¸ºæä¸åç¨æ·æäº¤çç¸åæä»¶äº§çå²çªã

>	>git checkout -b temp master
>	Switched to a new branch 'temp'
>	
>	>echo beta version 0.4 RC>readme.txt
>	
>	>git commit -am "version 0.4 RC"
>	[temp db6314a] version 0.4 RC
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	
>	>git checkout master
>	Switched to branch 'master'
>	Your branch is ahead of 'origin/master' by 1 commit.
>	  (use "git push" to publish your local commits)
>	
>	>echo beta version 0.4.1 RC>readme.txt
>	
>	>git commit -am "version 0.4.1 RC"
>	[master 7f0b88b] version 0.4.1 RC
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	
>	>git merge temp
>	Auto-merging readme.txt
>	CONFLICT (content): Merge conflict in readme.txt
>	Automatic merge failed; fix conflicts and then commit the result.

git ç»åºæç¤ºï¼åå¤åå¹¶çä¸¤åæ¯ä¸­ readme.txt æä»¶å­å¨å²çªï¼æ§è¡å½ä»¤åï¼readme.txt ä¼è¢« git æ æ³¨ï¼

	<<<<<<< HEAD
	beta version 0.4.1 RC
	=======
	beta version 0.4 RC
	>>>>>>> temp

ä¸ä¸ªç­å·ä½ä¸ºåå²çº¿ï¼ä¸é¢æ¯æ´»å¨åæ¯ï¼åé¢æ¯è¢«åå¹¶çåæ¯ãè§£å³å²çªçåæ³æ éæ¯äºèéå¶ä¸æèç±ä½ äº²èªæ´åå°ä¸èµ·ï¼ç¼è¾æå²çªçæä»¶ç¶åæ·»å å¹¶æäº¤å³å®æåæ¯åå¹¶ã

å¯ä»¥ç¨å¾å½¢åçé¢å·¥å· git mergetool å½ä»¤æ¥ç¼è¾ï¼åå¹¶å®æåå¯ä»¥æ¥è¯¢ç¶æ git status æ¥ç¡®è®¤ææå²çªé½å·²ç»è§£å³ãå¦æå²çªè§£å³é½å·²å®æï¼git commit å°±å¯ä»¥å®æè¿æ¬¡åå¹¶æäº¤ãéå¯¹å²çªåå¹¶ï¼åå¥½æ³¨éè¯´æï¼åç»­æ¥çä¼æ´å ç®åæ¹ä¾¿ã

>	>git commit -am "version 0.4.1 RC"
>	[master 12df6ca] version 0.4.1 RC
>	>git merge temp
>	Already up to date.

åå¹¶åæ¯æäº¤ä¸æ®éæäº¤æç¹å·®å«ï¼åå¹¶åæ¯æäº¤æä¸¤ä¸ª parent èç¹ï¼ç¨æ¥ç¡®å®æ¯åå¹¶çé£ä¸¤ä¸ªåæ¯ã

å¨æäºåºæ¯ä¸­ï¼éè¦å¼ºå¶çåæ¯è¦çæä½ï¼æ¯å¦æ´æ° github.io ä¸çéæç«ç¹åå®¹ãä½¿ç¨ Hugo è¿æ ·çéæç«ç¹çæçæä»¶éè¦æ¨éå°å¯¹åºç gihub.com ä¸çä»åºï¼è¿å°±éè¦è¿è¡åæ¯è¦çã

åæ¢å°ãdevelopãåæ¯ä¸ï¼å¹¶ä¿è¯æ¬å°å·²ç»åæ­¥äºè¿ç«¯ãdevelopãçææ°ä»£ç 

	git checkout develop
	git pull

ææ¬å°ç develop åæ¯å¼ºå¶ -f æ¨éå°è¿ç«¯ masterã

	git push origin develop:master -f

åæ¢å°æ§åæ¯ãmasterï¼å¹¶éç½®æææ°ç develop åæ¯ã

	git checkout master
	git reset --hard develop

åæ¨éå°è¿ç«¯ä»åºã

	git push origin master --force<br>

æä½¿ç¨ä¸é¢çå½ä»¤ï¼å°å½ååæ¯æ¨éå°è¿ç¨çåååæ¯ã

	git push origin HEAD





# git blame è¿½è´£ æ¥çæä»¶æ¯è¡åå®¹æ¯è°ä¿®æ¹ç

>	>git blame -L 1,5 readme.txt
>	fatal: file readme.txt has only 1 line
>	
>	>git blame -L 1 readme.txt
>	72ed0bef (jimboyeah 2018-08-25 12:22:40 +0800 1) version 0.3
>	
>	>git blame readme.txt
>	72ed0bef (jimboyeah 2018-08-25 12:22:40 +0800 1) version 0.3

å¯ä»¥ç»å½ä»¤æå®è¡æ°èå´ï¼ç»ææ¯ä¸è¡é½æ æ³¨äºæäº¤ä¿¡æ¯ï¼è¿æ ·å°±å¾å®¹ææ¾åºè´£ä»»äººã



# git tag for release version
- Release your software https://github.com/blog/1547-release-your-software
- 2.6 Git Basics - Tagging https://git-scm.com/book/en/v2/Git-Basics-Tagging
- https://devconnected.com/how-to-list-git-tags/

æ ç­¾ï¼tagï¼æ¯ç¹å®æäº¤ï¼commit)ä¸ä¸ªæéï¼ä¹å°±æ¯æ¯ä¸ªtagå¯¹åºä¸ä¸ªç¹å®çcommitã

Releaseæ¯å·æchangelogsåäºè¿å¶æä»¶çä¸çº§å¯¹è±¡ï¼å®å¯ä»¥ä»£è¡¨è¶åºGitæ¶ææ¬èº«çä¸ä¸ªç¹å®æ¶é´ç¹ä¹åçææé¡¹ç®åå²ãä¹å°±æ¯éè¿releaseï¼ä¸ä½è½å¤éè¿æºç ä½ç°åºé¡¹ç®åå²ï¼è¿è½éè¿å·²ç»ç¼è¯å¥½çäºè¿å¶æä»¶æ¥è¿ä¸æ­¥æè¿°æ­¤æ¶çé¡¹ç®ç¶æãâè¶åºGitæ¶ææ¬èº«âçææåå¨äºï¼gitæ¬èº«åªè½è®°å½é¡¹ç®ä¿®æ¹ï¼æ¬è´¨ä¸ä¸éåå°ç¼è¯å¥½çé¡¹ç®äºè¿å¶æä»¶è®°å½ä¸æ¥ãèéè¿releaseåæé¡¹ç®äºè¿å¶æä»¶ä¿å­äºä¸æ¥ï¼æ¹ä¾¿ç¨æ·ä¸è½½ï¼ä¹æ¹ä¾¿æ¥æ¾ç¹å®çæ¬çäºè¿å¶æä»¶ã

ä»¥ä¸æ¯Github official announcementæå®ä¹åæï¼

> Releases are first-class objects with changelogs and binary assets that present a full project history beyond Git artifacts.

åå»ºæ¹æ³ Release åä¸º lightweight å annotated ä¸¤ç§ï¼

	$ git tag v1.4-light-weight
	$ git tag -a v1.4 -m "annotated version 1.4"

éè¿ tag å¯ä»¥è¿åå°é¡¹ç®çç¹å®ç¶æä¸ï¼æä»¥å¯ä»¥å° tag çä½æ¯ä¸ºå¤§é commit ä¸­è®¾å®çä¹¦ç­¾ã

åå»º releaseï¼åéè¦éè¿æºç æç®¡åçç½é¡µæä½çé¢æ¥è¿è¡ï¼ä¸è¬ä¼è¦æ±å¡«å tag åãåæ¯ä»¥åç¸åºçåå¸è¯´æï¼è¿å¯ä¸ä¼ ç¼è¯å¥½çç¨åºãæåå¥½çæä»¶ç­ã

ä¹å°±æ¯è¯´ git æ¬èº«æ¯æ²¡æ release è¿ä¸ªæ¦å¿µçï¼åªæ tag æ ç­¾æ¦å¿µï¼è release åæ¯ Githubãç äºç­æºç æç®¡åææä¾çæ´é«å±çæ¦å¿µã

ä¸¤èä¹é´çå³ç³»åæ¯ï¼release åºäº tagï¼ä¸º tag æ·»å æ´ä¸°å¯çä¿¡æ¯ï¼ä¸è¬æ¯ç¼è¯å¥½çæä»¶ã

æ¨éå½ä»¤ git push å¹¶ä¸ä¼æ tag æ ç­¾ä¼ éå°è¿ç«¯æå¡å¨ä¸ï¼éè¿æ¾å¼å½ä»¤æè½åäº«æ ç­¾å°è¿ç«¯ä»åºã

	git push origin [tagname]
	git push [origin] --tags

	git push v0.0.1-beta
	git push --tags
	git push origin --tags


## tag æ¬å°ä»åºæä½

å¨ commit ä¹åï¼push ä¹åæ tag æ ç­¾ï¼-m æ·»å éæ³¨ï¼-f å¼ºå¶è¦çåæç tag

	git tag -a <tagå> -m <æ³¨éæå­>
	git tag -a v1.0 -m "commit version 1.0"
	git tag -f v1.0

Git tag ä¸­ä¸å±æä¸¤ç±»æ ç­¾ï¼ä¸ç±»å«åè½»éæ ç­¾ Lightweight Tagsï¼å¦ä¸ç±»å«åéæ³¨æ ç­¾ Annotated TagsãGit çæä½³å®è·µæ¨èä½¿ç¨éæ³¨æ ç­¾ï¼å ä¸ºå½ä½¿ç¨æ­¤ç±»æ ç­¾æ¶ï¼ä¼å° tag ä½ä¸ºå¯¹è±¡å®æ´å°å­å¨å° git æ°æ®åºä¸­ï¼å®æèªèº«çæ ¡éªåä¿¡æ¯ï¼åå«çæ ç­¾çåå­ï¼çµå­é®ä»¶å°ååæ¥æï¼ä»¥åæ ç­¾è¯´æã

æå¥½æ ç­¾å push å°è¿ç¨ä»åº

	git push origin -âtags # pushæætagå°è¿ç¨ä»åº
	git push origin [tagname]  # pushåä¸ªtagå°è¿ç¨ä»åºï¼

å é¤ tag ä¾¿ç­¾

	git tag -d v1.0

æ¥ç tag æ ç­¾

	git tag

åæ¢æ ç­¾

	git checkout v1.0


## tag è¿ç¨ä»åºæä½

æ¥è¯¢ Tags åè¡¨ï¼

	git ls-remote --tags
	git ls-remote --tags origin
	
	git fetch --all --tags

ä»è¿ç¨ä»åºä¸å é¤ tag

	git push origin :v1.0
	git push origin :refs/tags/[tagname]
	git push origin âdelete [tagname]

ä¸ç§æ¹æ³å°½éé½æå°è¯ä¸ä¸ã

æ³¨æäºé¡¹ï¼
å°½éä¸è¦tagåå­ååæ¯åå­ä¸æ ·ï¼æ¯è¾éº»ç¦ãå¦ætagåå­ååæ¯åå­ä¸æ ·çæ¶åï¼pushéè¦æå®refsçè¯¦ç»è·¯å¾ï¼å ä¸ºåæ¯åtagå¨gitåé¨æ¯è¿æ ·è¡¨ç¤ºçï¼åªæ¯å¼ç¨ï¼ï¼tagåªå­å¨ææåçé£ä¸æ¬¡æäº¤ï¼

	refs/tags/{tagnane} refs/heads/branches/{branchnane}

æä»¥è¦è¿æ ·pushç¸ååå­çtagååæ¯ï¼

	git push origin refs/tags/product
	git push origin refs/heads/branches/product

æ tag push å°æå¡å¨ä¸ï¼

	git push origin âtags
	git push origin âtags

å¶ä» tag æä½ï¼

è½»éçº§æ ç­¾å®éä¸å°±æ¯å­å¨ä¸ä¸ªæä»¶ä¸­çæäº¤æ ¡éªåâæ²¡æéå ä»»ä½å¶ä»ä¿¡æ¯ãåå»ºè½»éçº§æ ç­¾çæ¹æ³å°±æ¯æä¸é¢ -a, -s, -m è¿äºéé¡¹é½å»æã

	git tag v1.0

å¦æç°å¨å¯¹è¿ä¸ªæ ç­¾ä½¿ç¨ git show å½ä»¤ï¼ä¸ä¼çå°åä¸é¢é£ç§æ ç­¾æ¾ç¤ºçé£ä¹å¤åå®¹ï¼ä»ä»æ¾ç¤ºè¿æ¬¡æäº¤çæå³ä¿¡æ¯ã


## tag çå¶å®ç¨æ³

æ ¹æ® commit_id åå»º tagï¼ä¹å¯ checkout ç­¾åºä¸ä¸ª tag ç¶æä¸çæä»¶ï¼

	$ git log --pretty=oneline
	0718df7215488db4539ce90cabd6393dc8a53c02 edit demo list
	9282c62830d152f7276614ea1f3a78176d3524c4 edit demo list
	0177fe05aa1887482ceb2f969b09f681f86c7c75 add a link to gitbook.cn
	aedafad14a4b5a9d7661177c1ed942b3994c81e9 update go-my-websocket clone command
	fa13655e5270c2e0f6ba181f7994c3aa784ea018 add gitchat postcard
	26387c45e6fa67474cdd0989d450f38007cce682 add gitchat share card
	032f05c92a7e83cc765e50f8dd67a646039ec9cc readme.md for demos
	9023361924c8f89815c3dc84316551d7c9a8b8be socket.io js demo  

	$ git tag -a v0.0.0 9d9366ba5967b3e8961513c87bc069cdcb0d0693

	$ git checkout v0.0.0
	Note: checking out 'v0.0.0'.

	You are in 'detached HEAD' state. You can look around, make experimental
	changes and commit them, and you can discard any commits you make in this
	state without impacting any branches by performing another checkout.

	If you want to create a new branch to retain commits you create, you may
	do so (now or later) by using -b with the checkout command again. Example:

	  git checkout -b <new-branch-name>

	HEAD is now at 9d9366b... Update readme.txt

ç­¾åº tag æ¶æç¤º HEAD æ¸¸ç¦»ä¿¡æ¯ï¼detached HEAD å³æéä½ç½®æ²¡ææåä»»ä¸åæ¯ä¸ã

git checkout æ¬è´¨ä¸æ¯ä¿®æ¹ HEAD éé¢çåå®¹æ¥è®©å®æåä¸ååæ¯çï¼è HEAD æä»¶æåçåæ¯å°±æ¯æä»¬å½åçåæ¯ãå½ HEAD ä¸æåä»»ä½åæ¯ææåäºä¸ä¸ªæ²¡æåæ¯åå­çä¿®è®¢çæ¬ï¼æ­¤æ¶å°±æ¯å¤äºæ¸¸ç¦»ç¶æäº detached HEADãè¿æ¶åæä»¬å¨è¿è¡ commit æä½ä¸ä¼æäº¤å°ä»»ä½åæ¯ä¸å»ï¼è¿æ¯çæäº¤åªäº§çä¸ä¸ªå³èç commit_idãå¯ä»¥éè¿å»ºç«ä¸´æ¶åæ¯ï¼ç¶åéè¿åå¹¶åæ¯çæ¹æ³è§£å³ HEAD æéæ¸¸ç¦»ã

	$ git checkout -b version2 v2.0.0
	Switched to a new branch 'version2'



# git merge åå¹¶åæ¯

åå¦æä»¬ç°å¨å¨devåæ¯ä¸ï¼åå¼åå®é¡¹ç®ï¼æ§è¡äºä¸åå½ä»¤ï¼

	git add .
	git commit -m 'æäº¤çå¤æ³¨ä¿¡æ¯'
	git push -u origin dev

æ³å°devåæ¯åå¹¶å°masteråæ¯ï¼é¦ååæ¢å°masteråæ¯ä¸

	git checkout master

å¦ææ¯å¤äººå¼åçè¯ éè¦æè¿ç¨ master ä¸çä»£ç  pull ä¸æ¥ï¼å³ä½¿ä¸ä¸ªäººå¼åï¼ä¸ºäºä¿é©èµ·è§è¿æ¯ pull æä½é¿åæ¬å°è¯¯å æä»¶

	git pull origin master

ç¶åæä»¬ædevåæ¯çä»£ç åå¹¶å°masterä¸

	git  merge dev

ç¶åæ¥çç¶æåæ§è¡æäº¤å½ä»¤

	git status

	On branch master
	Your branch is ahead of 'origin/master' by 12 commits.
	  (use "git push" to publish your local commits)
	nothing to commit, working tree clean

ä¸é¢çææå°±æ¯ä½ æ 12 ä¸ª commitï¼éè¦ push å°è¿ç¨ master ä¸ï¼æåæ§è¡ä¸é¢æäº¤å½ä»¤

	git push origin master

æ´æ°è¿ç¨åæ¯

	git remote update origin --prune

æ¥çææåæ¯

	git branch -a

å é¤è¿ç¨åæ¯Chapater6

	git push origin --delete Chapater6

å é¤æ¬å°åæ¯ Chapater6

	git branch -d  Chapater6


# Reference å½ä»¤åè
https://git-scm.com/docs
Pro Git book: https://git-scm.com/book/en/v2


## git --help

	usage: git [--version] [--help] [-C <path>] [-c name=value]
	           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
	           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
	           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
	           <command> [<args>]

	These are common Git commands used in various situations:

	start a working area (see also: git help tutorial)
	   clone      Clone a repository into a new directory
	   init       Create an empty Git repository or reinitialize an existing one

	work on the current change (see also: git help everyday)
	   add        Add file contents to the index
	   mv         Move or rename a file, a directory, or a symlink
	   reset      Reset current HEAD to the specified state
	   rm         Remove files from the working tree and from the index

	examine the history and state (see also: git help revisions)
	   bisect     Use binary search to find the commit that introduced a bug
	   grep       Print lines matching a pattern
	   log        Show commit logs
	   show       Show various types of objects
	   status     Show the working tree status

	grow, mark and tweak your common history
	   branch     List, create, or delete branches
	   checkout   Switch branches or restore working tree files
	   commit     Record changes to the repository
	   diff       Show changes between commits, commit and working tree, etc
	   merge      Join two or more development histories together
	   rebase     Reapply commits on top of another base tip
	   tag        Create, list, delete or verify a tag object signed with GPG

	collaborate (see also: git help workflows)
	   fetch      Download objects and refs from another repository
	   pull       Fetch from and integrate with another repository or a local branch
	   push       Update remote refs along with associated objects

	'git help -a' and 'git help -g' list available subcommands and some
	concept guides. See 'git help <command>' or 'git help <concept>'
	to read about a specific subcommand or concept.

## Setup and Config

### git-config - Get and set repository or global options

	git config [<file-option>] [--type=<type>] [--show-origin] [-z|--null] name [value [value_regex]]
	git config [<file-option>] [--type=<type>] --add name value
	git config [<file-option>] [--type=<type>] --replace-all name value [value_regex]
	git config [<file-option>] [--type=<type>] [--show-origin] [-z|--null] --get name [value_regex]
	git config [<file-option>] [--type=<type>] [--show-origin] [-z|--null] --get-all name [value_regex]
	git config [<file-option>] [--type=<type>] [--show-origin] [-z|--null] [--name-only] --get-regexp name_regex [value_regex]
	git config [<file-option>] [--type=<type>] [-z|--null] --get-urlmatch name URL
	git config [<file-option>] --unset name [value_regex]
	git config [<file-option>] --unset-all name [value_regex]
	git config [<file-option>] --rename-section old_name new_name
	git config [<file-option>] --remove-section name
	git config [<file-option>] [--show-origin] [-z|--null] [--name-only] -l | --list
	git config [<file-option>] --get-color name [default]
	git config [<file-option>] --get-colorbool name [stdout-is-tty]
	git config [<file-option>] -e | --edit

## Getting and Creating Projects

### git-init - Create an empty Git repository or reinitialize an existing one

	git init [-q | --quiet] [--bare] [--template=<template_directory>]
		  [--separate-git-dir <git dir>]
		  [--shared[=<permissions>]] [directory]

### git-clone - Clone a repository into a new directory

	git clone [--template=<template_directory>]
		  [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]
		  [-o <name>] [-b <name>] [-u <upload-pack>] [--reference <repository>]
		  [--dissociate] [--separate-git-dir <git dir>]
		  [--depth <depth>] [--[no-]single-branch] [--no-tags]
		  [--recurse-submodules[=<pathspec>]] [--[no-]shallow-submodules]
		  [--[no-]remote-submodules] [--jobs <n>] [--] <repository>
		  [<directory>]



## Basic Snapshotting

### git-add - Add file contents to the index

	git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
		  [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]]
		  [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
		  [--chmod=(+|-)x] [--] [<pathspec>â¦]


### git-status - Show the working tree status
	
	git status [<options>â¦] [--] [<pathspec>â¦]


### git-commit - Record changes to the repository

	git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
		   [--dry-run] [(-c | -C | --fixup | --squash) <commit>]
		   [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
		   [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
		   [--date=<date>] [--cleanup=<mode>] [--[no-]status]
		   [-i | -o] [-S[<keyid>]] [--] [<file>â¦]


### git-reset - Reset current HEAD to the specified state

	git reset [-q] [<tree-ish>] [--] <paths>â¦
	git reset (--patch | -p) [<tree-ish>] [--] [<paths>â¦]
	git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]


### git-rm - Remove files from the working tree and from the index

	git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch] [--quiet] [--] <file>â¦


### git-mv - Move or rename a file, a directory, or a symlink

	git mv <options>â¦ <args>â¦




## Branching and Merging

### git-branch - List, create, or delete branches

	git branch [--color[=<when>] | --no-color] [--show-current]
		[-v [--abbrev=<length> | --no-abbrev]]
		[--column[=<options>] | --no-column] [--sort=<key>]
		[(--merged | --no-merged) [<commit>]]
		[--contains [<commit]] [--no-contains [<commit>]]
		[--points-at <object>] [--format=<format>]
		[(-r | --remotes) | (-a | --all)]
		[--list] [<pattern>â¦]
	git branch [--track | --no-track] [-f] <branchname> [<start-point>]
	git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
	git branch --unset-upstream [<branchname>]
	git branch (-m | -M) [<oldbranch>] <newbranch>
	git branch (-c | -C) [<oldbranch>] <newbranch>
	git branch (-d | -D) [-r] <branchname>â¦
	git branch --edit-description [<branchname>]

	With a -m or -M option, <oldbranch> will be renamed to <newbranch>. 
	With a -d or -D option, <branchname> will be deleted. 
	Use -r together with -d to delete remote-tracking branches.

Note, that it only makes sense to delete remote-tracking branches if they no longer exist in the remote repository or if git fetch was configured not to fetch them again. See also the prune subcommand of git-remote for a way to clean up all obsolete remote-tracking branches.

	git branch -r
	git branch -a

	>git remote show origin
	* remote origin
	  Fetch URL: https://github.com/jimboyeah/demo.git
	  Push  URL: https://github.com/jimboyeah/demo.git
	  HEAD branch: master
	  Remote branches:
	    'linux_arm'     new (next fetch will store in remotes/origin)
	    'win32_x86'     new (next fetch will store in remotes/origin)
	    dllDemo         new (next fetch will store in remotes/origin)
	    go-my-websocket new (next fetch will store in remotes/origin)
	    master          tracked
	  Local ref configured for 'git push':
	    master pushes to master (up to date)

å³èè¿ç¨åæ¯ï¼å¶ä¸­ï¼origin/remote_branch æ¯ä½ æ¬å°åæ¯ your_branch è¦å¯¹åºçè¿ç¨åæ¯ï¼

	git branch --set-upstream-to=origin/remote_branch  your_branch


 

### git-checkout - Switch branches or restore working tree files

	git checkout [-q] [-f] [-m] [<branch>]
	git checkout [-q] [-f] [-m] --detach [<branch>]
	git checkout [-q] [-f] [-m] [--detach] <commit>
	git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
	git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <paths>â¦
	git checkout [<tree-ish>] [--] <pathspec>â¦
	git checkout (-p|--patch) [<tree-ish>] [--] [<paths>â¦]

ä½¿ç¨å­¤åæ¯ --orphan åå»ºä¸ä¸ªæ²¡æç¶èç¹çå­¤å²åæ¯ï¼ä½æ¯è¿ä¸ªæ°åæ¯ä¹ä¼åæ¬å½åææçæä»¶ï¼ä¹å°±æ¯å®ä¾èµäºåç¶åæ¯çæçãå¯ä»¥ä½¿ç¨ rm å½ä»¤å é¤ææ¬å°è¿äºæä»¶ï¼èä¸ä¸è®°å½ï¼ç¶åæ¨éå°è¿ç¨ä»åºï¼

	git checkout --orphan branch-name
	git checkout <name> 	# åæ¢åæ¯
	git checkout -b <name> 	# åå»º+åæ¢åæ¯
	git checkout -b <local> origin/<remote> # æåè¿ç¨åæ¯å¹¶åæ¶åå»ºå¯¹åºçæ¬å°åæ¯

ç¤ºèï¼åéè¿ç¨ä»åºåï¼ç­¾åºè¿ç¨åæ¯ï¼

	$ git branch -a
	* master
	  remotes/origin/HEAD -> origin/master
	  remotes/origin/gh47074
	  remotes/origin/gh72
	  remotes/origin/master
	$ git checkout -b gh72 origin/gh72
	Switched to a new branch 'gh72'
	Branch 'gh72' set up to track remote branch 'gh72' from 'origin'.

å¯¹äºï¼å·²ç»ç­¾åºçåæ¯ï¼å¦æå·¥ä½åºæä»¶è¢«å é¤ï¼å¯ä»¥ä½¿ç¨ checkout ç­¾åºæ¥æ¢å¤æä»¶ï¼å³ discard changes æä½ï¼

	git checkout *
	git checkout *.md
	git checkout somefile
	git checkout somefolder


### git-merge - Join two or more development histories together

	git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
		[-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
		[--[no-]allow-unrelated-histories]
		[--[no-]rerere-autoupdate] [-m <msg>] [-F <file>] [<commit>â¦]
	git merge (--continue | --abort | --quit)


### git-log - Show commit logs

	git log [<options>] [<revision range>] [[--] <path>â¦]

	git log --graph


### git-stash - Stash the changes in a dirty working directory away

ç¨èç®å½å°å·¥ä½åºçæ¹å¨ä¿å­èµ·æ¥ï¼åç»­å¯ä»¥åä½¿ç¨ã

ä½¿ç¨ git stash åå»ºä¸ä¸ªèç®å½ä¿å­å½åå·¥ä½åºï¼ç­ä»· git stash pushãç¶åï¼ä½¿ç¨ git stash pop è¿åã

ä½¿ç¨ git stash apply n ä¹å¯ä»¥è¿åï¼ä½ä¸ä¼å é¤ç°æèç®å½ã

>SYNOPSIS
git stash list [<options>]
git stash show [<options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
             [-u|--include-untracked] [-a|--all] [-m|--message <message>]
             [--pathspec-from-file=<file> [--pathspec-file-nul]]
             [--] [<pathspec>â¦]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>

### git-tag - Create, list, delete or verify a tag object signed with GPG

	git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]
		<tagname> [<commit> | <object>]
	git tag -d <tagname>â¦
	git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
		[--points-at <object>] [--column[=<options>] | --no-column]
		[--create-reflog] [--sort=<key>] [--format=<format>]
		[--[no-]merged [<commit>]] [<pattern>â¦]
	git tag -v [--format=<format>] <tagname>â¦


### git-worktree - Manage multiple working trees

git 2.6 ä»¥ä¸å¼å§æä¾äº worktree åè½ï¼git worktree ä»ä¸ä¸ªä»åºä¸­å¯ä»¥åå»ºå¤ä¸ªå·¥ä½ç®å½ï¼æ¹ä¾¿å¤å¼ç¼è¾å¨é«æè¿è¡å¹¶è¡å¼åçæ¹æ³ã

å¿«éä¸æ git worktree add -b <æ°åæ¯å> <æ°è·¯å¾> <ä»æ­¤åæ¯åå»º>


	git worktree add [-f] [--detach] [--checkout] [--lock] [-b <new-branch>] <path> [<commit-ish>]
	git worktree list [--porcelain]
	git worktree lock [--reason <string>] <worktree>
	git worktree move <worktree> <new-path>
	git worktree prune [-n] [-v] [--expire <expire>]
	git worktree remove [-f] <worktree>
	git worktree unlock <worktree>


## Sharing and Updating Projects


### git-fetch - Download objects and refs from another repository

	git fetch [<options>] [<repository> [<refspec>â¦]]
	git fetch [<options>] <group>
	git fetch --multiple [<options>] [(<repository> | <group>)â¦]
	git fetch --all [<options>]

git fetch æ¯å°è¿ç¨ä¸»æºçææ°åå®¹æå°æ¬å°ï¼ç¨æ·å¨æ£æ¥äºä»¥åå³å®æ¯å¦åå¹¶å°å·¥ä½æ¬æºåæ¯ä¸­ã

	$ git fetch <remote>
	$ git fetch <remote> <branch>
	
	# å¨è¿ç¨åæ¯ä¸çª¥è§ï¼æ éå¨æ¬å°å­å¨åºä¸­éç½®è¿ç¨
	$ git fetch git://git.kernel.org/pub/scm/git/git.git maint

	$ git init
	$ git remote add origin git@github.com:qemu/qemu
	$ git fetch origin stable-0.10
	$ git checkout -b stable-0.10 origin/stable-0.10

### git-pull - Fetch from and integrate with another repository or a local branch
	
	git pull [<options>] [<repository> [<refspec>â¦]]

    git pull origin --depth=1 remote_branch:local_branch
    git push origin --depth=1 local_branch:remote_branch

<refspec>
Specifies which refs to fetch and which local refs to update. When no <refspec>s appear on the command line, the refs to fetch are read from remote.<repository>.fetch variables instead (see the section "CONFIGURED REMOTE-TRACKING BRANCHES" in git-fetch(1)).

The format of a <refspec> parameter is an optional plus +, followed by the source <src>, followed by a colon :, followed by the destination ref <dst>. The colon can be omitted when <dst> is empty. <src> is typically a ref, but it can also be a fully spelled hex object name.


--force
When git fetch is used with <src>:<dst> refspec it may refuse to update the local branch as discussed in the <refspec> part of the git-fetch[1] documentation. This option overrides that check.

git fetch uses:

    refs/heads/<head>:refs/heads/<branch>

git push uses:

    HEAD:refs/heads/<head>


### git-push - Update remote refs along with associated objects

	git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
		   [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]
		   [-u | --set-upstream] [-o <string> | --push-option=<string>]
		   [--[no-]signed|--signed=(true|false|if-asked)]
		   [--force-with-lease[=<refname>[:<expect>]]]
		   [--no-verify] [<repository> [<refspec>â¦]]


### git-remote - Manage set of tracked repositories

```sh
# SYNOPSIS
git remote [-v | --verbose]
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <url>
git remote rename <old> <new>
git remote remove <name>
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
git remote set-branches [--add] <name> <branch>â¦
git remote get-url [--push] [--all] <name>
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add [--push] <name> <newurl>
git remote set-url --delete [--push] <name> <url>
git remote [-v | --verbose] show [-n] <name>â¦
git remote prune [-n | --dry-run] <name>â¦
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)â¦]
```

æ¥è¯¢è¿ç¨ä»åºåæ¯ï¼

```sh
> git init
> git remote add origin git@github.com:KhronosGroup/glslang.git
> git remote show origin
* remote origin
  Fetch URL: git@github.com:KhronosGroup/glslang.git
  Push  URL: git@github.com:KhronosGroup/glslang.git
  HEAD branch: master
  Remote branches:
    GL_EXT_buffer_reference_uvec2                      new (next fetch will store in remotes/origin)
    SPIR-V_1.4                                         new (next fetch will store in remotes/origin)
    SPIR-V_1.5                                         new (next fetch will store in remotes/origin)
    extension-support                                  new (next fetch will store in remotes/origin)
    fix-2007-rationalize-include-paths                 new (next fetch will store in remotes/origin)
    fix-2014-dont-and-versions-extensions              new (next fetch will store in remotes/origin)
    fix-2020-inconsistent-HLSL                         new (next fetch will store in remotes/origin)
    fix-930-subgroup--mask-ops                         new (next fetch will store in remotes/origin)
    fix-NV_compute_shader_derivatives                  new (next fetch will store in remotes/origin)
    fix-arg-precision                                  new (next fetch will store in remotes/origin)
    fix-name-loc-str                                   new (next fetch will store in remotes/origin)
    fix-non-determinism                                new (next fetch will store in remotes/origin)
    fix-processed-def-undef-1829                       new (next fetch will store in remotes/origin)
    fix-semantic-checking                              new (next fetch will store in remotes/origin)
    fix-texture-precision                              new (next fetch will store in remotes/origin)
    format-attributes                                  new (next fetch will store in remotes/origin)
    generalize-precision                               new (next fetch will store in remotes/origin)
    gtest-automap-fix                                  new (next fetch will store in remotes/origin)
    inherit-memory-qualifiers                          new (next fetch will store in remotes/origin)
    kokoro-testing                                     new (next fetch will store in remotes/origin)
    latest-headers-tools                               new (next fetch will store in remotes/origin)
    location-validation                                new (next fetch will store in remotes/origin)
    master                                             new (next fetch will store in remotes/origin)
    nan-clamp                                          new (next fetch will store in remotes/origin)
    nonuniform-dynindex                                new (next fetch will store in remotes/origin)
    numeric-swizzle                                    new (next fetch will store in remotes/origin)
    return-precision                                   new (next fetch will store in remotes/origin)
    revert-2242-GL_EXT_vulkan_glsl_relaxed             new (next fetch will store in remotes/origin)
    revert-2569-revert-2242-GL_EXT_vulkan_glsl_relaxed new (next fetch will store in remotes/origin)
    revert-2593-hayes-update-min-spv-requirement       new (next fetch will store in remotes/origin)
    revert-2643-master                                 new (next fetch will store in remotes/origin)
    revert-2803-isinf_isnan                            new (next fetch will store in remotes/origin)
    revert-7b0e236                                     new (next fetch will store in remotes/origin)
    revert-ANGLE                                       new (next fetch will store in remotes/origin)
    sdk-1.2.198                                        new (next fetch will store in remotes/origin)
    vulkan-1.2                                         new (next fetch will store in remotes/origin)
```

ä¸ºè¿ç¨ä»åºæ·»å åæ¯ï¼

	git remote add branch cppDemos

æ°å»ºè¿ç¨åæ¯éè¦ååå»ºæ¬å°åæ¯ï¼åæ¨éå°è¿ç¨ä»åºï¼

```sh
$ git checkout -b dbg_lichen_star

$ git branch
* dbg_lichen_star
  master
  release
```

æå·è¡¨ç¤ºå½åæå¨åæ¯ï¼ç°å¨çç¶ææ¯æååå»ºçæ°çåæ¯å¹¶ä¸å·²ç»åæ¢å°æ°åæ¯ä¸ã

ææ°å»ºçæ¬å°åæ¯ push å°è¿ç¨æå¡å¨ï¼è¿ç¨åæ¯åå¯ä»¥æå®ï¼

```sh
#git push [è¿ç¨å] [æ¬å°åæ¯]:[è¿ç¨åæ¯]
$ git push origin dbg_lichen_star:dbg_lichen_star
```

è¯­æ³ï¼å¦æçç¥ [æ¬å°åæ¯]ï¼é£å°±ç­äºæ¯å¨è¯´âå¨è¿éæåç©ºç½ç¶åæå®åæ[è¿ç¨åæ¯]âã

ä½¿ç¨ git branch -a æ¥çææåæ¯ï¼ä¼çå°è¿ä¸ªè¿ç¨åæ¯ï¼è¯´ææ°å»ºè¿ç¨åæ¯æåã

å é¤è¿ç¨åæ¯ï¼æ¨éä¸ä¸ªç©ºåæ¯å°è¿ç¨åæ¯ï¼å¶å®å°±ç¸å½äºå é¤è¿ç¨åæ¯ï¼

	$ git push origin :dbg_lichen_star
	$ git push origin --delete dbg_lichen_star


### git-submodule - Initialize, update or inspect submodules
	
é¡¹ç®ä¸­ç»å¸¸ä½¿ç¨å«äººç»´æ¤çæ¨¡åï¼å¨gitä¸­ä½¿ç¨å­æ¨¡åçåè½è½å¤å¤§å¤§æé«å¼åæçãä½¿ç¨å­æ¨¡ååï¼ä¸å¿è´è´£å­æ¨¡åçç»´æ¤ï¼åªéè¦å¨å¿è¦çæ¶ååæ­¥æ´æ°å­æ¨¡åå³å¯ã

	git submodule [--quiet] [--cached]
	git submodule [--quiet] add [<options>] [--] <repository> [<path>]
	git submodule [--quiet] status [--cached] [--recursive] [--] [<path>â¦]
	git submodule [--quiet] init [--] [<path>â¦]
	git submodule [--quiet] deinit [-f|--force] (--all|[--] <path>â¦)
	git submodule [--quiet] update [<options>] [--] [<path>â¦]
	git submodule [--quiet] set-branch [<options>] [--] <path>
	git submodule [--quiet] summary [<options>] [--] [<path>â¦]
	git submodule [--quiet] foreach [--recursive] <command>
	git submodule [--quiet] sync [--recursive] [--] [<path>â¦]
	git submodule [--quiet] absorbgitdirs [--] [<path>â¦]


## Inspection and Comparison

### git-show - Show various types of objects

	git show [<options>] [<object>â¦]

### git-diff - Show changes between commits, commit and working tree, etc

	git diff [<options>] [<commit>] [--] [<path>â¦]
	git diff [<options>] --cached [<commit>] [--] [<path>â¦]
	git diff [<options>] <commit> <commit> [--] [<path>â¦]
	git diff [<options>] <blob> <blob>
	git diff [<options>] --no-index [--] <path> <path>

### git-shortlog - Summarize git log output

	git shortlog [<options>] [<revision range>] [[--] <path>â¦]
	git log --pretty=short | git shortlog [<options>]


### git-describe - Give an object a human readable name based on an available ref

	git describe [--all] [--tags] [--contains] [--abbrev=<n>] [<commit-ish>â¦]
	git describe [--all] [--tags] [--contains] [--abbrev=<n>] --dirty[=<mark>]
	git describe <blob>



## Patching

### git-apply - Apply a patch to files and/or to the index

	git apply [--stat] [--numstat] [--summary] [--check] [--index | --intent-to-add] [--3way]
		  [--apply] [--no-add] [--build-fake-ancestor=<file>] [-R | --reverse]
		  [--allow-binary-replacement | --binary] [--reject] [-z]
		  [-p<n>] [-C<n>] [--inaccurate-eof] [--recount] [--cached]
		  [--ignore-space-change | --ignore-whitespace]
		  [--whitespace=(nowarn|warn|fix|error|error-all)]
		  [--exclude=<path>] [--include=<path>] [--directory=<root>]
		  [--verbose] [--unsafe-paths] [<patch>â¦]


### git-cherry-pick - Apply the changes introduced by some existing commits

	git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
			  [-S[<keyid>]] <commit>â¦
	git cherry-pick (--continue | --skip | --abort | --quit)



### git-rebase - Reapply commits on top of another base tip

	git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
		[<upstream> [<branch>]]
	git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
		--root [<branch>]
	git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)


### git-revert - Revert some existing commits

ä»å·²ç»æäº¤çåå®¹ä¸­éè½¬ï¼

	git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>â¦
	git revert (--continue | --skip | --abort | --quit)


## Debugging

### git-bisect - Use binary search to find the commit that introduced a bug
http://www.ruanyifeng.com/blog/2018/12/git-bisect.html

git bisectæ¯ä¸ä¸ªå¾æç¨çå½ä»¤ï¼ç¨æ¥æ¥æ¾åªä¸æ¬¡ä»£ç æäº¤å¼å¥äºéè¯¯ã

å®çåçå¾ç®åï¼å°±æ¯å°ä»£ç æäº¤çåå²ï¼æç§ä¸¤åæ³ä¸æ­ç¼©å°å®ä½ãæè°ä¸¤åæ³ï¼å°±æ¯å°ä»£ç åå²ä¸åä¸ºäºï¼ç¡®å®é®é¢åºå¨ååé¨åï¼è¿æ¯ååé¨åï¼ä¸æ­æ§è¡è¿ä¸ªè¿ç¨ï¼ç´å°èå´ç¼©å°å°æä¸æ¬¡ä»£ç æäº¤ã

	git bisect <subcommand> <options>
	git bisect start [--term-{old,good}=<term> --term-{new,bad}=<term>]
		  [--no-checkout] [<bad> [<good>...]] [--] [<paths>...]
	git bisect (bad|new|<term-new>) [<rev>]
	git bisect (good|old|<term-old>) [<rev>...]
	git bisect terms [--term-good | --term-bad]
	git bisect skip [(<rev>|<range>)...]
	git bisect reset [<commit>]
	git bisect (visualize|view)
	git bisect replay <logfile>
	git bisect log
	git bisect run <cmd>...
	git bisect help

### git-blame - Show what revision and author last modified each line of a file

gitå¯ä»¥å¢éå¼åï¼é¾åä¼åºç°å¼åéè¯¯ï¼å¯è½è¦æç¡®è´£ä»»æ¯ç±è°é æçã æ ¹ç®å½ä¸æindex.htmlï¼é£ä¹å¯ä»¥ä½¿ç¨å¦ä¸å½ä»¤ï¼ git blame index.html

	git blame [-c] [-b] [-l] [--root] [-t] [-f] [-n] [-s] [-e] [-p] [-w] [--incremental]
		    [-L <range>] [-S <revs-file>] [-M] [-C] [-C] [-C] [--since=<date>]
		    [--ignore-rev <rev>] [--ignore-revs-file <file>]
		    [--progress] [--abbrev=<n>] [<rev> | --contents <file> | --reverse <rev>..<rev>]
		    [--] <file>

å¦æèªå·±ç»å¸¸æ¢æºå¨å¼åãpush ä»£ç ï¼èä¸ä¸åæºå¨ç git config ä¸å®å¨ä¸æ ·çè¯ï¼æ¯å¦æä¸åæºå¨ä¸ user.name æçæ¯è±æåæçæ¯ä¸­æåï¼ï¼æäº¤çä½èç­¾åä¹ä¸ä¸æ ·ï¼è¿æ¶è¿éè¦æ ¹æ®ä¸åç user.name è¿è¡æ¥æ¾ã

ä¸è¿å¥½å¨æä»¬æå½ä»¤è¡ï¼ç¨ä»¥ä¸å½ä»¤å°±è½å¾å°ä»åºéæææäº¤è¿çä½è

	git shortlog -s


### git-grep - Print lines matching a pattern
https://en.wikibooks.org/wiki/Regular_Expressions/POSIX_Basic_Regular_Expressions

éè¿ git grep å½ä»¤å¯ä»¥ç»åæ­£åè¡¨è¾¾å¼æ£ç´¢æä»¶ä¸­çææ¬åå®¹ï¼éå¸¸çä¾¿å©ï¼å¦æ¥æ¾å¸¦æ version å­æ ·çæä»¶ git grep version

	git grep [-a | --text] [-I] [--textconv] [-i | --ignore-case] [-w | --word-regexp]
		   [-v | --invert-match] [-h|-H] [--full-name]
		   [-E | --extended-regexp] [-G | --basic-regexp]
		   [-P | --perl-regexp]
		   [-F | --fixed-strings] [-n | --line-number] [--column]
		   [-l | --files-with-matches] [-L | --files-without-match]
		   [(-O | --open-files-in-pager) [<pager>]]
		   [-z | --null]
		   [ -o | --only-matching ] [-c | --count] [--all-match] [-q | --quiet]
		   [--max-depth <depth>] [--[no-]recursive]
		   [--color[=<when>] | --no-color]
		   [--break] [--heading] [-p | --show-function]
		   [-A <post-context>] [-B <pre-context>] [-C <context>]
		   [-W | --function-context]
		   [--threads <num>]
		   [-f <file>] [-e] <pattern>
		   [--and|--or|--not|(|)|-e <pattern>â¦]
		   [--recurse-submodules] [--parent-basename <basename>]
		   [ [--[no-]exclude-standard] [--cached | --no-index | --untracked] | <tree>â¦]
		   [--] [<pathspec>â¦]
