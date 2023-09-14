

## 👉 Github OAuth App 开发
- https://vssue.js.org/guide/github.html#create-a-new-oauth-app
- https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user
- https://docs.github.com/en/developers/apps/scopes-for-oauth-apps
- https://github.com/settings/tokens
- https://docs.github.com/
- https://segmentfault.com/a/1190000019343851
- GitHub OAuth 第三方登录示例教程 http://www.ruanyifeng.com/blog/2019/04/github-oauth.html
- https://gitee.com/api/v5/oauth_doc#/

Github 提供两类应用，一个叫做 OAuth App，另一个叫 Github App 功能非常类似，最大的不同点是 OAuth App 所获取权限都是用户授予的，而 Github App 几乎可以获取 Github 提供的所有功能权限，且所获取的权限可以被设定为只读，可读可写和禁止访问，对于权限的授权粒度会更细。

获取了对某些操作的权限之后，就可以使用这些权限去搭建一个独立的 App，比如一个第三方的 Github 客户端等等，这也是 Github App 的实用之处。

Github App 可以免去用户在第三方页面输入账号密码或者 Token 的操作而完成授权，通过 OAuth 登录的方式只可完成。

OAuth 登录基本流程如下，假设开发者的应用为 App：

- App 跳转到 Github 授权页面。
- Github 授权页面询问用户：“是否允许 App 获取下列权限”，用户点击“允许”，取得授权码。
- Github 授权页面重定向回 App 提供的重定内容向接收地址，同时在 URL 上带上授权码。
- App 获取 URL 上携带的授权码后，再前往 Github 获取 Token，这个令牌就是真正的授权码。
- App 接着就可以使用这个 Token 去调用 Github API。


使用 OAuth App 可以实现定制功能的 Github 应用，例如使用命令方式创建远程代码仓库。

将本地代码 push 到 github 远程代码仓库之前，总是通过在线新建 github 代码仓库的操作是比较麻烦的。

借助 Github API，可以利用命令创建远程代码仓库，十分便捷。

首先需要申请并获取自己的 API Token，用于鉴权，OAuth scope requirements。

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

通过 API Token 可以在 OAuth 应用中安全访问需要授权的 API 资源，以下可以检测什么类型的 OAuth 作用域是可用的：

	$ curl -H "Authorization: token YOUR_OAUTH-TOKEN" https://api.github.com/users/jimboyeah -I
	HTTP/1.1 200 OK
	X-OAuth-Scopes: repo, user
	X-Accepted-OAuth-Scopes: user

对于远程创建仓库，检查其中已经授权的 API 列表 X-OAuth-Scopes 和 X-Accepted-OAuth-Scopes 两项。

勾选 repo 支持仓库的完全控制，具体参考 Scopes for OAuth Apps：

- `repo:status` Access commit status
- `repo_deployment` Access deployment status
- `public_repo` Access public repositories
- `repo:invite` Access repository invitations
- `security_events` Read and write security events




# git 版本管理系统 
[蚂蚁git教程](http://www.softwhy.com/article-8487-1.html)
[25个git技巧](http://www.techug.com/post/25-git-tips.html)
[Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600/)
[Git Book](https://git-scm.com/book/zh/v1)

虽然人生不能重复，但 Git 可以在我们人生的内部实现部分倒流效果，比如可以让开发者、创作者方便的保存代码的版本，并且能够快速的切换到指定的以前的版本，如果新代码出现错误，可以再次回到过去，如同通关游戏，打到某个比较好的战绩可以保存一下，防止失败后，又要重新开始。

```sh
> git clone --depth=1 git@github.com:git/git.git
Cloning into 'git'...
remote: Enumerating objects: 4243, done.
remote: Counting objects: 100% (4243/4243), done.
remote: Compressing objects: 100% (3728/3728), done.
Receiving objects:   7% (322/4243), 516.00 KiB | 22.00 KiB/s
```

一个典型的 git 工作流程大概如下：

	+ 创建本地仓库或克隆一个现有的仓库；
	+ 添加需要监视的文件到仓库里；
	+ 修改文件，这些平常的编辑动作是在git的暂存区进行的；
	+ 将修改过的文件提交到本地仓库，这个过程可以看作是登记，这样 git 数据库才有记录；
	+ 通过 push 推送到服务器仓库，如果只是本地工作可以省略；
	+ 通过 pull 拉取服务器仓库的文件到本地；
	+ 创建版本分支；
	+ ....

对应使用到的命令如下：

- `git init` 建立本地仓库，或 clone 服务器的仓库；
- `git checkout` 签出一个分支作为当前的工作分支；
- `git add` 命令将工作区未跟踪和修改文件提交到暂存区；
- `git commit` 命令将暂存区内容提交到当前版本；
- `git remote` add 添加关联的远端仓库地址，默认命名 origin； 
- `git push` 命令推送本地仓库到服务器上；

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

Git 是一种分布式版本控制系统 DVCS - Distributed Version Control System。在 Git 中绝大多数的操作都只需要访问本地文件和资源，一般不需要来自网络上其他计算机的信息。

它和集中式版本控制系统 CVCS - Centralized Version Control Systems 相比，其不存在单点故障的问题。在 CVCS 中，如果中央服务器出现故障，则所有的人都无法继续协同工作，而且数据如果没有很好的备份，会出现数据丢失找不回的情况。但是在 DVCS 中就不存在这个问题，在网络中的每一个节点都包含代码仓库的镜像，当协同工作用的服务器出现故障的时候，都可以使用任何一处镜像出来的本地仓库进行恢复。

理解 Git，首先得记住 Git 的三种基本状态和对应三种工作区域：

|  State   | Workplace |    状态    |                       说明                       |
|----------|-----------|------------|--------------------------------------------------|
| Modified | 工作区    | 已修改状态 | 已经修改了文件，但是还没有保存到本地数据库中。   |
| Staged   | 暂存区    | 已暂存状态 | 对已修改文件做了标记，使其包含在了下次的提交中。 |
| Commited | 版本库    | 已提交状态 | 表示数据已经安全的保存在本地数据库中。           |

上面的三种状态对应于 Git 的三个工作区域的概念：

1. 工作目录：即操作系统中包含 .git 文件夹的目录，.git 目录是版本数据库目录；
2. 暂存区域：对应 .git 目录中的数据据已经在暂存区记录了文件的状态信息；
3. 已提交状态：对应：工作区的文件内容已提交到 Git 仓库中。

对于已经提交的所有文件，都会在包含完整的历史提交记录，文件历史修改数据都有记录，即表示 .git 目录下的数据已经包含文件的所有数据，即使将工作区的文件删除，也可以通过 git checkout -- * 从数据库中检出所有文件。

所谓分布式，是指所有 .git 数据仓库都是一个完整独立的版本数据库，通过 git clone 命令可以从一个数据仓库克隆到另一个位置：可以是操作系统中的目录，或者是远程主机上的数据仓库，例如 github.com。比如，当前系统中的 test_branch_merge 文件有一个版本数据仓库，那么通过 clone 就可以复制它的副本：

```sh
git clone .\test_branch_merge my_test
Cloning into 'my_test'...
done.
```


- 工作区 Working Tree：

	工作区就是执行 git init 命令所在的目录，也是当前 Git 的所在状态，包含我们要修改的文件就在此目录，但是并不包括 .git 目录，Git 会对工作区进行管理，如切换分支 checkout 等动作，Git 会将仓库中的对应文件记录读取出来放到工作区。

- 版本库 Repository：

	工作区根目录下有一个默认隐藏的目录 .git，它并不属于工作区，而是版本库 Repository。 版本库中内容很多，并且都很重要，暂存区 stage 和分支 branch 概念是我们实际操作中经常要遇到的，暂存区，也可以称之为 index，通过提交动作 commit 将暂存区的内容更新到仓库。还有一个 HEAD 指针，指向当前所在的分支 master。

	Git 仓库目录 .git 用来保存项目的元数据和对象数据库的地方。这是 Git 最重要的部分，也是 Git 分布式数据库的所在。当你 clone 远端仓库时，其实拷贝的就是这里的数据。克隆下来的 Git 项目，都会有一个隐藏的名字为 .git 的文件夹，这就是 Git 仓库。

- 远程关联仓库 remote：

	通常 git 版本管理用在多人团队协作项目的管理中，主仓库需要在服务器上共享给项目成员，各成员在本地建立工作仓库。


暂存区是一个临时性仓库，但是特别重要，它可以将来自工作区的新文件或者修改文件暂时存放起来，然后统一提交到分支。

暂存区域有时候也被称为索引，它本质上只是一个文件，记录了下次将提交 commit 的文件列表信息，这个文件一般存在于 Git 仓库中，也就是 .git 目录中。

暂存区存在的必要性：通过这个过渡性区域可以使提交更加条理，避免无用琐碎提交。

举个比较生活化的例子，需要将一车放置杂乱无章的各类货物有序的放入仓库，最好的办法是将货物先有条理的整理到仓库门口空地上，这个空地相当于暂存区，然后再将货物用叉车运到仓库。还有一个作用就是可以更加方便的对文件进行版本管理，比如版本的回溯。

HEAD 引用，这是一个指向你当前提交的内容的 SHA-1 版本号的指针，通过修改 HEAD 的指向位置可以实现类似回到过去，再回到未来的效果。如果你正在解决合并冲突，使用 HEAD 不会对你的特定分支有任何改动只会指向你当前的分支。 所有分支的指针都保存在 .git/refs/heads，HEAD 指针保存在 .git/HEAD，标签则保存在 .git/refs/tags，有时间就去看看吧。

git 内部使用对象数据库 object database 和索引 index 两个基本概念，有四种对象：

- Commit Object 提交动作产生历史记录；
- Tree Object 对象树记录历史中的各种对象，包括文件、目录；
- Blob Object 大数据对象 binary large objects 用来保存二进制文件；
- Tag Object 标签对象，用来标记其它对象，如用一个版本号标记一个对应的 commit；

每次提交都产生一个历史路线对象，对应值就是 commit_id。分支就是一条历史路线，主线 master 是默认的分支设置，每条线上的点都有一个父节点，父节点到子节点为可到达状态。同一个节点可以产生任意条分支，不同的分支线路也可以再合并 merge，可以使用 gitk 图形界面了解 git 仓库是如何管理内容的。

	         o--o--o <-- Branch A
	        /
	 o--o--o <-- master
	        \
	         o--o--o <-- Branch B

每个节点通过树状数据结构来管理所有文件对象，树上每个文件对象都有一个对应的索引记录保存在 index 文件中，索引记录了对象的 SHA-1 摘要值，它用来标记唯一对象，通过它 git 可以快速再仓库内找到需要的对象，能监测数据对象是否有误，在不同的仓库副本中保持同一个对象使用同一个名字，使用 ls-files 来查看索引的文件列表：

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

通过 log 命令可以查看提交日志，通过 show 命令查看指定 ID 的各种对象信息，如提交 commit 细节，输出内容可以获得以下基本的提交 commit id、 tree id。

	$ git show --pretty=raw 189349a4210b94eb6e98bd425e84cecd8f3230df
	commit 189349a4210b94eb6e98bd425e84cecd8f3230df
	tree fcc7dfbfd7cbfde03b9b0a04bda882e7ea8c0d4e
	author jimboyeah <jimboyeah@gmail.com> 1577028276 +0800
	committer jimboyeah <jimboyeah@gmail.com> 1577028276 +0800

也可以使用 ls-tree 枚举树结构：

	$ git ls-tree -r fcc7df
	100644 blob a83b8d70c4b7e31573084d27a5bfa2e162299a6d    src/server.js
	100644 blob 1535d539de13955e8ea7b42fbd60f9610c654219    src/view/socket-client.tpl
	100644 blob d6fd6fb594e10e64bdbc6305e4033a61f656f55f    src/view/theme.css

通常 git 会将对象保存在 `.git\objects` 目录下，散布在 256 个子目录下，但是为了更有效快速运行，可以执行 repack 将零散对象文件重新打包到 packs 文件中，打包后，零散的文件将会集中到一个打包文件存放于 packs 目录下。还可执行 prune 将全部对象打包到一个文件中，git 还提供了 gc 命令来执行这些清理工作。用 count-objects 命令计算 unpacked 的文件数量，检查一下打包前后的差别：

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


git everyday 手册中根据用户类型不同将命令分成三类

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

以上内容 Git User Manual 有深入的讲解。


# Pull Requests 多人合作项目
- https://github.com/arcblock/blocklets
- https://blog.csdn.net/jcfszxc/article/details/104997223
- https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests

简单地说 Pull Requests 就是请求贡献自己的代码，把你添加或修改的代码提交给原作者。

使用场景：

- A 有一个项目叫做 blocklets，希望 B 来合作增加或修改某部分功能；
- B 首先需要复刻 fork 一个副本仓库到自己的账户中；
- B 完成 fork 后，在自己的仓库中可以看到复刻的 blocklets 仓库页面，在文件列表上方是多了一个 `Pull request` 操作按钮的； 
- B 现在可以进行功能开发和修改，完成并提交后，就可以执行 new pull request 创建一个合并拉取；
- 在 Compare changes 设置页面，箭头左边默认是 A 的原仓库，右边是 B 的复刻仓库；
- 点击 Create pull request 创建合并拉取，填写相应说明信息，然后等待 A 去检查；
- A 在自己的仓库页面中，可以看到 Pull Requests 有新的请求，点开 View pull request 检查没有问题，就可以点击接收 Pull request 完成合并。
- A 更新仓库后，B 需要保持与 A 仓库的同步更新，还是用到 Pull request。
- 创建 Pull reqeust，这回在 Compare changes 设置页面中，箭头左边选 B 自己的仓库，右边选 A 的仓库，这样才能拉取最新代码！

参与开发前的一些准备

（1）在你做任何开发前，最好先详细阅读该项目的 CONTRIBUTING.md 文件。
（2）浏览该项目的 Issues（问题）公告，甚至可以自己创建一个 Issue。
（3）一般修改应该提交到某个明确的 topic branch 而不是 master，因为这样更直观。
（4）最好每次只提交较小的修改，并写好清晰明确的 Commit Messages（提交说明）.
（5）如果有需要，请更新 README 文件。

Pull Requests 是方便开发者之间协作的功能，提供了一个用户友好的 Web 界面，在集成提交的变更到正式项目前可以对变更进行讨论。

开发者向团队成员通知功能开发已经完成，Pull Requests 是最简单的用法。Pull Request 远不止一个简单的通知，而是为讨论提交的功能的一个专门论坛。如果变更有任何问题，团队成员反馈在 Pull Request 中，甚至 push 新的提交微调功能。所有的这些活动都直接跟踪在 Pull Request 中。

相比其它的协作模型，这种分享提交的形式有助于打造一个更流畅的工作流。SVN 和 Git 都能通过一个简单的脚本收到通知邮件；但是，讨论变更时，开发者通常只能去回复邮件。这样做会变得杂乱，尤其还要涉及后面的几个提交时。Pull Requests 把所有相关功能整合到一个和 Github 仓库界面集成的用户友好 Web 界面中。

发起一个 Pull Request 时，询问以指定源分支、目标仓库和目标分支。B 作为代码贡献者，从他的仓库中选择源分支。而 A 作为接收者，从他的仓库中选择目标分支。

另外，如果需要 A 以外的人审核批准代码，B 可以把这些人填在 Reviewers 文本框中。创建好了 Pull Request，通知会通过 Github 系统消息或邮件发给 A。

A 可以看到所有人发起的 Pull Request，点击其中一个 Pull Request 会显示出描述、功能的提交历史和每个变更的差异（diff）。
如果 A 通过 Review Pull Request，想要合并到项目中，只要点一下 Merge 按钮，就可以同意 Pull Request 并合并到 master 分支。


# Git Base Operation
- [Git起步-三种状态以及三种工作区域、CVCS与DVCS的区别、Git基本工作流程](https://www.cnblogs.com/wangwenhui/p/10542360.html)
- [Git基础-仓库的获取方式与Git文件的状态变化周期](https://www.cnblogs.com/wangwenhui/p/10546635.html)
- [Git基础-查看当前文件状态、跟踪新文件、暂存文件、忽略文件、提交更新、移除文件、移动文件](https://www.cnblogs.com/wangwenhui/p/10555261.html)
- [Git基础-查看提交历史](https://www.cnblogs.com/wangwenhui/p/10558461.html)
- [Git基础-撤销操作、标签的使用、Git别名](https://www.cnblogs.com/wangwenhui/p/10573687.html)
- [Git基础-远程仓库的使用](https://www.cnblogs.com/wangwenhui/p/10580611.html)
- [Git分支-分支简介、分支创建、分支切换](https://www.cnblogs.com/wangwenhui/p/10595918.html)
- [Git分支-分支的创建与合并](https://www.cnblogs.com/wangwenhui/p/10603113.html)
- [Git分支-分支管理 git branch、分支开发工作流](https://www.cnblogs.com/wangwenhui/p/10644730.html)
- [Git分支-远程跟踪 Origin 分支的概念、多个远程仓库的使用](https://www.cnblogs.com/wangwenhui/p/10651383.html)
- [Git分支-推送 push、跟踪分支、拉取 pull、删除远程分支](https://www.cnblogs.com/wangwenhui/p/10664935.html)
- [Git分支-变基 rebase、rebase VS merge](https://www.cnblogs.com/wangwenhui/p/10673294.html)
- [Git四种协议 local、HTTP、SSH、Git 协议](https://www.cnblogs.com/wangwenhui/p/10794889.html)

✅ 初始化一个 Git 仓库

	$ git init
	$ git add .
	$ git add README.md
	$ git commit -m "Initial project version"

- `git init` 初始化 Git 仓库。分在当前目录创建一个 .git 文件夹，这个文件夹是 Git 仓库的数据库。
- `git add .` 将当前所在目录中的所有文件加入到暂存区。
- `git add README.md` 将 README.md 文件加入到暂存区。
- `git commit -m "Initial projrct version"` 将暂存区的文件提交到 Git 仓库，-m 选项指定了本次提交的说明文字。


✅ Git 文件状态转换

工作目录中的每一个文件都不外乎已追踪和未追踪这两种状态，已追踪 tracked 的文件指的是已经被纳入到版本控制，监测中的文件。

所以，结合追踪状态，在一个 Git 仓库目录下的文件可以有以下 5 种状态：

- Untracked 未追踪；
- Tracked 已追踪；
	- Modified 已修改状态；
	- Unmodified 未修改状态；
	- Staged 已暂存状态；

当 git clone 克隆了一个远程仓库到本地的时候，工作目录中所有的文件都是已追踪的文件，而且都是处于未修改的状态。未追踪 untracked 未追踪的文件表示不被纳入版本控制的文件，除了已追踪的文件之外所有的文件都是未追踪文件。在本地的项目中新添加了一个文件，那么这个文件就是未追踪的状态。

![Git 文件的状态变化周期](https://img2018.cnblogs.com/blog/1133560/201903/1133560-20190317132825969-1403731969.png)

这些文件的状态转换就是一个状态机，以 README.MD 文件为例，其状态转换如下表：

|  初始状态  |          操作          |  状态转换  |                        说明                       |
|------------|------------------------|------------|---------------------------------------------------|
| Untracked  | git add README.MD      | Staged     | 跟踪新文件，将文件加入暂存区，可以按目录添加      |
| Unmodified | edit                   | modified   | 修改编辑文件                                      |
| Modified   | git add README.MD      | Staged     | 将修改内容加入暂存区，在下一次 comit 保存到数据库 |
| Staged     | git commit -m "update" | Unmodified |                                                   |
| Unmodified | git rm README.MD       | Untracked  |                                                   |

注意 git rm 会删除掉指定的文件，要保留工作区的文件，则需要使用 --cached 选项：

	git rm --cached README.md

以上都是 Git 基础操作，查看当前文件状态、跟踪新文件、暂存文件、忽略文件、提交更新、移除文件、移动文件等。


✅ 检查当前文件状态 git status：

	$ git status
	On branch master
	nothing to commit, working directory clean

说明，现在的工作目录非常干净，换句话说，所有的已跟踪文件在上次提交之后都未被修改过。


✅ 查看工作区的修改

使用 git diff 命令查看修改内容，即进行差异比较：

	git diff # 查看尚未暂存的文件更新了哪些部分。
	git diff --staged # 查看已暂存的文件更新了哪些部分。

当修改了 Git 追踪的文件之后，运行 git status 会看到 Changes not staged for commit，说明已跟踪的文件发生了变化但是还没有被加入到暂存区，这时候需要运行 git add 将该文件放入暂存区。


✅ 添加追踪命令

git add 是一个多功能命令：

- 使用它跟踪新文件；
- 将已跟踪的文件加入到暂存区；
- 还能用于合并时将有冲突的文件标记为已解决的状态。

注意： git commit 只会将暂存区的文件提交到 Git 仓库中，没有添加到暂存区中或没有追踪的文件是不会被提交的。

比如：当你运行 git add README 将文件加入暂存区，这时候你又修改了 README 文件，但是没有运行 git add ，这时候如果直接提交，那么只会将暂存区中的 README 版本的文件提交到 Git 仓库。你对 README 新做的修改不会被提交到 Git 仓库。


✅ 配置忽略文件

在 Git 仓库根目录下配置 .gitignore 文件，可以避免追踪不必要的文件，一般我们总会有一些文件不想纳入 Git 进行管理，比如编译程序生成的临时文件，同时也不希望他们总出现在未跟踪文件列表。

这时候只需要在 .gitignore 文件中指定这些你不想被 Git 进行管理的文件，这样一来，执行批量添加命令时，就不会将排除的文件添加到暂存区，当你在提交代码到远程仓库的时候也就不会将这些文件上传上去了。

GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表，你可以在 https://github.com/github/gitignore 找到它。


✅ 提交更新到 Git 数据库

使用 git commit 命令提交更新到 git 数据库保存： 

- `git commit` 如果不指定 -m 参数，那么 git 会打开 vim 编辑器，让你输入提交信息。
- `git commit -m <info>` 指定 -m 参数，可以在后面直接指定提交信息，这是推荐做法。
- `git commit -a -m <info>` 可以合并执行 add 和 commit，直接将修改状态的已追踪文件提交到数据库。


✅ 文件移动或移除操作

执行移除文件 git rm 后也需要提交修改： 

	$ git rm <filename>
	$ git rm -f <filename>
	$ git rm --cached <filename>
	$ git commit -m <info>

如果被删除的文件修改过，而且已经被放入了暂存区，那么需要加上 -f 参数，强制删除。这是一种安全特性，用于防止删除还没有被添加快照的数据，这种数据无法被 Git 恢复。

如果你只是想从暂存区删除文件，但是工作区的文件保持不变，即保留磁盘中的文件，但是不想让 Git 进行跟踪，使用 --cached 选项。

移动文件可以使用 git mv 即文件重命名命令：

	$ git mv <oldFile> <newFile>

这条命令会将原文件改名到一个新的路径，并添加到暂存区，等价于下面三条命令：

	$ mv oldFile newFile
	$ git rm oldFile
	$ git add newFile

Git 鼓励大量使用分支，所以接下来掌握分支的创建、merge 合并分支、解决合并冲突是很有必要的，这是的技能。


# Branches merge and confict process

使用 Node.js watch 工具监视文件改动，并自动重新运行指定的命令：

```sh
npm install -g watch
watch "echo ---====+ Watching +====--- && bash .\branch_test.sh" -f "filter.js" -w 0.1 .
```

过滤器文件是一个返回过滤函数的 Node.js 模块脚本，过滤函数名称随意，但需要在作为 exports 返回，然后通过 -f 或者 --filter 将文件名传递给 watch 工具：

```ts
const fs = require('node:fs')

/**
 * @param {string}   f   - File name
 * @param {fs.Stats} curr - File Statments
 */
function filter (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        // coonsole.log( f, 'Finished walking the tree ')
    } else if (prev === null) {
        // coonsole.log( f, 'file is a new file ')
    } else if (curr.nlink === 0) {
        // coonsole.log( f, 'file was removed ')
    } else {
        // coonsole.log( f, 'file was changed ')
    }
    return ["filter.js","branch_test.sh"].indexOf(f)>=0 && curr.isFile
}
// console.log( ["filter.js","branch_test.sh"].indexOf("filter.js")>=0 )

module.exports = filter;
```

通常，主分支 master 是其它分支的来源，首次创建分支一般都基于初始化的 master 分支。

以下是 git 分支合并与冲突处理的演示脚本，此操作演示使用了 port.o 和 able.o 两个文件来演示分支的创建、合并与冲突内容的处理，步骤说明如下：

1. Step 初始化目录结构；
2. Step 初始化 git 数据库，为默认的 master 分支添加初始文件 port.o；
3. Step 基于 master 创建新分支 test_branch，切换到此分支并为其添加新文件 able.o；
4. Step 在新分支 test_branch 上删除原来的 port.o 以测试文件在合并时的处理策略；
5. Step 切换回 master 分支，创建并添加和新分支同名的文件 able.o 以测试内容冲突处理；
6. Step 执行 git merge test_branch 合并分支到当前的 master 分支，此时有多种可能：
6.1. 一是可以自动处理的分支合并，不需要用户手动处理；
6.2. 二是如果当前分支未修改相应文件，就保持与正在合并分支的文件状态一致：删除 port.o。
6.3. 三是内容冲突，最常见操作，因为待合并分支与当前分支的文件内容有 diff 差异需要手动处理。
7. Step 合并后分支的状态，处理方式：继续使用，或者删除；

分支合并策略：

	git merge --no-ff -m <remark> <name>

1. fast forward 模式不保留分支合并历史，是默认的分支合并模式；
2. recursive 递归模式保留分支合并历史，使用 --no-ff 禁用默认的快速模式。

```sh
# rm -rf test_branch_merge
mkdir test_branch_merge
cd test_branch_merge
# git config --global user.email 254141203@qq.com
# git config --global user.name Jeangowhy

git init
git config core.autocrlf true
echo "port.o file add in test_branch." > port.o
git add port.o
git commit -am "add new file to master branch: port.o"

git branch "test_branch"   # new branch
git checkout "test_branch"  # working in new branch
rm -rf port.o
echo "able.o file add." > able.o
git add able.o
git commit -am "delete old file and new one: port.o -> able.o"

git checkout master
echo "port.o update in master"      > port.o
echo "able.o file add in master" > able.o
git add able.o
git commit -am "update port.o in master branch"
# Please commit your changes or stash them before you merge.
# if port.o is not updated, it will be delete when merge into master the next step.

echo "merge test_branch into masster branch"
git merge "test_branch" 
# CONFLICT (modify/delete): port.o deleted in test_branch and modified in HEAD.
# Version HEAD of port.o left in tree.
# Automatic merge failed; fix conflicts and then commit the result.
echo "This pretends to solve confilicts content that merge from test_branch." >> able.o
echo "You shoud actually modify file content to left the precious." >> able.o
git commit -am "merge test_branch into masster"

git checkout "test_branch"
echo "port.o was deleted in test_branch branch."
ls -la *.o
cat able.o

git checkout master
echo "port.o is updated in master branch."
ls -la *.o
cat able.o

git branch
```

说明：如果新分支持将其源分支的文件删除，在合并到源分支时，并且源分支上没有再对文件进行改动，那么合并操作就会按新分支的状删除文件。一般，新分支会以 some-feature 的形式命名，以提示此分支的功能与目标。执行 git merge 命令时，是将指定的分支内容合并到当前活动分支内。

冲突内容中会出现 git 检测到的 diff 内容，并且用 <<<<<<< HEAD 表示当前读写指针是最顶端，>>>>>>> test_branch 表示待合并的分支，diff 内容分别对应 ======= 分割符的前后内容。手动解决冲突就是处理这些有冲突的内容，选择需要的留下，删除不需要的内容，甚至可以将所有内容都保留。

输出内容参考：

```sh
Initialized empty Git repository in ~/test_branch_merge/.git/
[master (root-commit) 656ce4b] add new file to master branch: port.o
 1 file changed, 1 insertion(+)
 create mode 100644 port.o
[test_branch 85d5188] delete old file and new one: port.o -> able.o
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 able.o
 delete mode 100644 port.o
[master 501bf4f] update port.o in master branch
 2 files changed, 2 insertions(+), 1 deletion(-)
 create mode 100644 able.o
merge test_branch into masster branch
CONFLICT (modify/delete): port.o deleted in test_branch and modified in HEAD. Version HEAD of port.o left in tree.
CONFLICT (add/add): Merge conflict in able.o
Auto-merging able.o
Automatic merge failed; fix conflicts and then commit the result.
[master 00945e7] merge test_branch into masster
port.o was deleted in test_branch branch.
-rw-r--r-- 1 OCEAN None 18 Sep 15 09:09 able.o
able.o file add.
port.o is updated in master branch.
-rw-r--r-- 1 OCEAN None 223 Sep 15 09:09 able.o
-rw-r--r-- 1 OCEAN None  25 Sep 15 09:09 port.o
<<<<<<< HEAD
able.o file add in master
=======
able.o file add.
>>>>>>> test_branch
This pretends to solve confilicts content that merge from test_branch.
You shoud actually modify file content to left the precious.
* master
  test_branch
```

最后，Linxu 和 Windows 系统使用了不同的文本换行规则，CR vs. CRLF。Unix 类系统心 CR end-of-line 作为换行标志，Windows 则以 CRLF "\r\n" 作为换行符号，Mac OS 9 系统则会使用 LF。在机械式找字机上，CR 是指打印头复位到行首，LF 是指进纸机构移动纸张前进一行。部分程序未对换行符做特别处理，则可能会导致运行出错，比如 Vim 配置文件，如果在 WSL 等系统出现 CRLF 就会出现 ^M 的错误提示。

1. LF for "line feed", encoded as 0x0A, \n;
2. CR for "carriage return", encoded as 0x0D, \r;

Git 提供了自动处理两种系统的换行符号，打开 autocrlf 功能有两种不同的处理策略：
https://markentier.tech/posts/2021/10/autocrlf-true-considered-harmful/

1. core.autocrlf true 方式提交件时转换为 LF，检出时转换为 CRLF；
2. core.autocrlf input 方式提交件时转换为 LF，但是检出时不转换；
3. core.autocrlf false 禁用自动转换，提交检出均不转换；

自动转换是指定 Git 根据当前操作系统，将  CR CRLF LF 等等换行形式转换为 LF，如果使用 autocrlf true 方式，则会在检出文件时替换回当前系统风格的换行符，autocrlf input 方式则只会在检入文件时替换所有换行符为 LF。如果收到以下警告信息，就表示开启了自动 autocrlf true：

	warning: LF will be replaced by CRLF in file.
	warning: CRLF will be replaced by LF in port.o.  

手动检出所有文件：

	git checkout -- *

全局配置或配置文件：

```sh
# $HOME/.gitconfig
[core]
  autocrlf = false
  eol = lf

# If you don't want to touch the config file directly, run the following 2 commands;
# remove `--global` if you're in a repo and want to change the setting only for it.
git config --global core.autocrlf false
git config --global core.eol lf
git config core.autocrlf false
```



# .gitignore 过滤文件
- [Useful .gitignore templates](https://github.com/github/gitignore)

当你使用 git add 命令批量添加文件的时候，不想提交的文件也会添加到了缓存中去。比如项目的本地配置信息，如果你上传到 Git 中去其他人 pull 下来的时候就会和他本地的配置有冲突，所以这样的个性化配置文件我们一般不把它推送到 git 服务器中。在你的工作区新建一个名称为 `.gitignore` 文件过滤掉那些不需要提交的文件，git add 命令会自动忽略掉这些文件。

不要误解了 `.gitignore` 文件的用途，该文件只能作用于 Untracked Files，也就是那些从来没有被 Git 记录过的文件。如果文件曾经被 Git 记录过，那么就对它们完全无效。

GitHub 已经为我们准备了各种配置 .gitignore templates，只需要组合一下就可以使用。

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


例子，比如 Java 项目过滤掉 .class 文件，这些文件多数情况下是不想被传到仓库中的文件，`.gitignore`文件模板：

	*.class

	# Mobile Tools for Java (J2ME)
	.mtj.tmp/

	# Package Files #
	*.jar
	*.war
	*.ear

	# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
	hs_err_pid*

使用命令检查忽略规则是否正确：

	$ git check-ignore -v HelloWorld.class
	.gitignore:1:*.class    HelloWorld.class

可以看到 HelloWorld.class 匹配到了我们的第一条忽略规则，所以提交过程中文件被忽略了。


C/C++ 的 .gitignore 模板：

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
- [Git四种协议 local、HTTP、SSH、Git 协议](https://www.cnblogs.com/wangwenhui/p/10794889.html)

Git 作为分布式系统，其支持的数据传输协议有四种。

```sh
# HTTPS
https://github.com/jimboyeah/xx.git
# SSH
git@github.com:jimboyeah/xx.git
# GitHub CLI
gh repo clone jimboyeah/xx
```

✅ local 本地协议

最基本的协议，其远程仓库其实就是硬盘内部的一个目录，常见于团队内的人对一个共享的文件系统，具有访问权限，或者多人共用一台电脑的情况。

当搭建好硬盘上面的远程仓库之后，可以使用以下命令来克隆本地的远程仓库，可以带 file:// 本地文件协议：

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

区别：

- 仅指定路径：Git 尝试使用硬链接 hard link 或直接复制所需要的资料；
- 使用 file:// 协议，Git 触发用于网络传输资料的进程，效率低，慢。

本地协议的优点：搭建简单。直接使用了现有的文件权限和网络访问权限，如果已经有了共享文件系统，建立版本库会十分容易，只需要像设置其他共享目录一样，将一个Git仓库放在大家都能够访问到的路径并设置好读写权限就可以了。

缺点：不方便从多个位置访问，例如你在公司的电脑上搭建了本地仓库，你想在家里访问就有点困难了。不能保证 Git 仓库的安全，由于每一个人都具有仓库目录完整的 shell 权限，没有方法可以阻止他们删除或者破坏仓库。

✅ HTTP 协议

旧式哑（DUMP）HTTP 协议很少使用了，只支持只读模式。

GitHub 目前使用智能（smart）HTTP 协议：支持读写模式。既可以像 git:// 协议一样设置匿名服务，又可以像 SSH 一样提供传输时的授权和加密，而且只用一个 URL 就可以得到 git:// 和 SSH 的功能，省去了为不同的需求设置不同的 URL。 HTTP 协议推送 push 以及拉取 pull，服务器都会询问你的用户名和密码。

HTTP 协议的优点：

- 不同的访问方式只需要一个 URL，服务器只在需要授权时提示输入授权信息。
- 相对于 SSH 而言，不需要生成 SSH 秘钥对再把秘钥上传到服务器上。
- HTTP 或 HTTPS 被广泛采用，一般的企业防火墙都会允许这些端口的数据通过。

缺点：在一些服务器上，架设 HTTP/S 协议会比 SSH 协议棘手一些；每次需要输入用户名和密码，管理这些凭证会比较麻烦一些，当然你可以使用凭证存储工具，keychain（OSX）。

✅ SSH 协议

架设 Git 服务器时常用 SSH 协议作为传输协议，因为大多数环境都支持 SSH 访问，即使不支持也比较容易搭建。

	$ git clone ssh://user@server/project.git

优点：

- 架设简单；
- 数据传输时是安全的，所有数据传输时都经过授权和加密；
- 高效，和其他3种协议一样，在传输数据时也会尽量压缩数据。

缺点：不能通过它实现匿名访问。即使使用者只需要读取数据，使用者也要有通过 SSH 访问你主机的权限，不利于开源项目。

✅ Git 协议

包含在 Git 里的一个特殊的守护进程中，监听一个特定的端口 9418 类似于 SSH 服务，但是无需任何访问授权。

优点：目前是 Git 所使用的协议里面最快的。如果你的项目不需要为写进行用户授权，可以使用 Git 协议。

缺点：

- 缺乏授权机制，一旦放开推送操作，意味着网络上的任何人都能向你的项目推送代码；
- 其次是架设难。



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


# config 配置修改

安装git后，第一件事你需要设置你的名字和邮箱，因为每次提交都需要这些信息。

>	>git config --global user.name "Jeangowhy"
>	>git config --global user.email "jimboyeah@gmail.com"

在网络比较缓慢情况下，Git 克隆代码可能出现 The remote end hung up unexpectedly 错误，可以尝试减小最低速度阈值及增加低速时间：

	git config --global http.lowSpeedLimit 0
	git config --global http.lowSpeedTime 999999

如果 Git 操作在网速低于环境变量 GIT_HTTP_LOW_SPEED_LIMIT 字节/秒，并且持续 GIT_HTTP_LOW_SPEED_TIME 秒以上的时间，Git 会终止那个操作。这些值会覆盖 http.lowSpeedLimit 和 http.lowSpeedTime 配置的值。

# 指定目录下载
DownGit: https://minhaskamal.github.io/DownGit/#/home

在 Git 1.7.0 以前，这无法实现，但是幸运的是有了 Sparse Checkout 模式，这使得 Check Out 指定文件或者文件夹成为可能。

举个例子：

现在有一个 test 仓库 https://github.com/mygithub/test
你要 gitclone 里面的 tt 子目录：
在本地的硬盘位置打开Git Bash

	git init test && cd test     //新建仓库并进入文件夹
	git config core.sparsecheckout true //设置允许克隆子目录
	echo 'tt*' >> .git/info/sparse-checkout //设置要克隆的仓库的子目录路径   //空格别漏

	git remote add origin git@github.com:mygithub/test.git  //这里换成你要克隆的项目和库

	git pull origin master


用 SVN 举例说明: 譬如这个项目: Mooophy/Cpp-Primer.GitHub, 我只想看 ch03 文件夹的代码怎么办? 先打开 ch03, 其 URL 为:

	https://github.com/Mooophy/Cpp-Primer/tree/master/ch03

将 /tree/master/ 换成 /trunk/ 即可以通过 svn checkout 下载:

	svn checkout https://github.com/Mooophy/Cpp-Primer/trunk/ch03


PS: 第一次使用的话, 可能会出现下面这个提示输入 P 就行了:

	R)eject, accept (t)emporarily or accept (p)ermanently?

如果不是 master 分支，比如 develop 分支那怎么下载某个文件夹, 只需要将 /trunk/ 换成 /branches/branchname/ 就行了。


# GitHub 自动登陆配置

git 配置 https 和 ssh 免密码登录，区分 https 和 ssh 两种方式。不同的克隆方式导致校验方式不同，对应的免秘方式也不一样。 https 通过记住账号密码免登，ssh 通过校验生成的密钥免登。

https 免密配置方法，设置配置 .git/config 

	[credential]  
	    helper = store

相应命令

	git config --global credential.helper store

输入一次账号密码就会记住账号密码，今后操作就会自动登录。账户凭证记录可以在 控制面板\用户帐户\凭据管理器 中查看或修改。

credential.helper 这个配置项的含义：这个配置项允许用户自行指定 git 所使用的凭据管理工具。
简单粗暴的办法就是直接配置 credential.helper 的值为 manager。

注意：当你需要在同一台机器上使用多个 git 账号这么搞就不行了，因为 2 个账号必定使用的不同的凭据：

	git config credential.helper manager

如果你是Mac系统，git默认是提供osxkeychain辅助程序来管理你的密码，以至于每次你当你需要提供用户名和密码的时候，osxkeychain辅助程序都默默帮你填写了。

如果你是Windows系统，你可能已经安装了git-credential-winstore了。如果安装的是GitGUI，则提供的是git-credential-manager。

除此之外，你也可以使用 git-credential-store 和 git-credential-cache 来管理密码，前者在文件中用明文存储密码，后者存在内存中。而这几种方式都可以同时存在。

命令读取：

	git credential-store --file ~/git.store store

ssh 免密配置方法先要生成 RSA 密钥，再将公钥配置到 git 服务器上。

先配置 Git 全局参数，这里主要配置 用户名、邮箱：

	git config --list
	git config --global user.name "username"
	git config --global user.email "username@email.com"

使用 ssh-keygen 生成 RSA 公钥和私钥，实现本地和服务器的认证，输入命令后连敲三个回车即可

	ssh-keygen -t rsa

这时候去查看系统盘用户目录下（一般在 C:\Users\你的用户名\.ssh）是否有了 .ssh 文件夹，进入会看到之前生成的 id_rsa 以及 id_rsa.pub。id_rsa 是私钥不要轻易告诉别人，id_rsa.pub是公钥可放心告诉任何人。

连接 GitHub
这里不一定是 GitHub，根据各位同学的实际情况来连接不同的服务器，比如 OSChina 的 码云。

下面以 GitHub 为例

在 settings 页面的 [SSH and GPG keys](https://github.com/settings/keys) 栏中添加，Title 可以自定义，Key 的内容即为之前生成的 id_rsa.pub 文件内容（复制进来即可）

打开 git bash 窗口执行连接测试：

	$ ssh -T git@github.com
	Hi jimboyeah! You've successfully authenticated, but GitHub does not provide shell access.
OK，已经成功能连上 GitHub 了，国内的 Gitee 也同样处理，添加远程仓库如下操作可以携带账户信息：

	git remote add origin git@github.com:jimboyeah/abt-blocklet-demo.git
	git remote add gitee git@gitee.com:jimbowhy/abt-blocklet-demo.git

如果直接使用 URL 关联，则提交时 Gitee 可能会提示输出账户信息，即使指定了自动登录公钥。


如果连接错误，可能是 Wrong Credentials 问题或 DNS 污染导致 HTTPS 不能访问：

	SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

	ssh: connect to host github.com port 22: Connection refused

可以，打印连接过程的详细信息，可能得到 $SSH_SK_PROVIDER 未设置的提示，更常见的是 DNS 污染导致
域名解释到本地 IP，ping github.com 可以发现 IP 是否正常：

	ssh -T -v git@ssh.github.com
	ssh -T -v -p 443 git@ssh.github.com

	Authenticator provider $SSH_SK_PROVIDER did not resolve; disabling
	Connecting github.com [127.0.0.1] port 22.
	connect to address 127.0.0.1 port 22: Connect refused

换用 DNS 服务器是一个解决方法，Windows 系统可以修改 hosts 强制映射到正确的 IP：

	C:\Windows\System32\drivers\etc\hosts

对于解锁 root 权限的 Android 手机，可以直接编辑 /system/etc/hosts 配置文件。使用手机热点共享
网络，或者使用 WIFI 网络，可以修改 DHCP 高级配置，指定 DNS 服务器 IP。

```sh
# 临时修改，手机用 USB 连接到电脑，执行 adb shell，
# 如果 getprop | grep dns 查询不到信息，可能是系统不支持
setprop net.rmnet0.dns1 114.114.114.114
setprop net.rmnet0.dns2 114.114.114.114
setprop net.dns1 114.114.114.114
setprop net.dns2 114.114.114.114

# 安卓专用 build.prop 配置修改，需要 ROOT，不是所有手机都支持：
net.rmnet0.dns1=8.8.8.8
net.rmnet0.dns2=8.8.4.4
net.dns1=8.8.8.8
net.dns2=8.8.4.4
```

除了 DNS 修改，或者主机 IP 修改，另一种方案就是使用镜像站点 hub.fastgit.xyz 就不错。


Git 支持三种协议： git://、ssh:// 和 http://，而 git 协议会使用公钥登录，是比较安全的一种方式，
如果直接使用 URL 就相当设置了 HTTP 代理，在 DNS 有问题时就提交不了。

输入以下命令可以禁止 HTTP 代理：

	git config --global --unset http.proxy


Windos 版本的 git 可能会提示

	git: 'credential-cache' is not a git command. See 'get --help'.

实际上是缺少微软的 Git Credential Manager

安裝 Git Credential Manager for Windows即可解决该问题

最新的下载地址为：

https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest

下载安装完后可以通过命令进行查看是否生效

如果还是不能记录密码用户名，可以试试以下方式：

	git config --global credential.helper wincred
	git config --global credential.helper winstore

如果一直弹框提示登录，就将配置文件的 manager 删除，包括安装目录 C:\Git\mingw64\etc 下的配置：

	[credential]  
	    helper = manager


# Git login 凭证存储
https://git-scm.com/book/zh/v2/Git-工具-凭证存储

凭证存储

如果你使用的是 SSH 方式连接远端，并且设置了一个没有口令的密钥，这样就可以在不输入用户名和密码的情况下安全地传输数据。 然而，这对 HTTP 协议来说是不可能的 —— 每一个连接都是需要用户名和密码的。 这在使用双重认证的情况下会更麻烦，因为你需要输入一个随机生成并且毫无规律的 token 作为密码。

幸运的是，Git 拥有一个凭证系统来处理这个事情。 下面有一些 Git 的选项：

- 默认所有都不缓存。 每一次连接都会询问你的用户名和密码。
- cache 模式会将凭证存放在内存中一段时间。 密码永远不会被存储在磁盘中，并且在15分钟后从内存中清除。
- store 模式会将凭证用明文的形式存放在磁盘中，并且永不过期。 这意味着除非你修改了你在 Git 服务器上的密码，否则你永远不需要再次输入你的凭证信息。 这种方式的缺点是你的密码是用明文的方式存放在你的 home 目录下。

Windows 系统，你可能已经安装了 git-credential-winstore。如果安装的是 GitGUI，则提供的是 git-credential-manager。除此之外，你也可以使用 git-credential-store 和 git-credential-cache 来管理密码，前者在文件中用明文存储密码，后者存在内存中。而这几种方式都可以同时存在。

如果你使用的是 Mac，Git 还有一种 “osxkeychain” 模式，它会将凭证缓存到你系统用户的钥匙串中。 这种方式将凭证存放在磁盘中，并且永不过期，但是是被加密的，这种加密方式与存放 HTTPS 凭证以及 Safari 的自动填写是相同的。

如果你使用的是 Windows，你可以安装一个叫做 “winstore” 的辅助工具。 这和上面说的 “osxkeychain” 十分类似，但是是使用 Windows Credential Store 来控制敏感信息。 可以在 https://gitcredentialstore.codeplex.com 下载。

你可以设置 Git 的配置来选择上述的一种方式

	$ git config --global credential.helper cache

Git for Windows 安装时配置不对导致 Windows 缺少 Git Credential Manager 会提示命令错误，需要先安裝 Git Credential Manager for Windows：

	git: 'credential-cache' is not a git command. See 'get --help'.

	https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest

Git Credential Manager for Windows 的工作机制

你的身份信息会被存放在Windows凭据管理器，不过存放的是一个叫做PAT (Person Access Token)的令牌。

这个 Credential Manager 会首先尝试使用当前登陆计算机的用户账号连接远程的 TFS 服务器，如果本地计算机和远程 TFS 同在一个 AD 域并且登陆账号已经具备了访问 Git 仓库的权限，则会直接成功；如果不成功则会弹出登陆对话框要求用户登录。

但是如果当前计算机没有在TFS所属的AD域中，则会直接给出 Authentication Failed 的错误并退出。

这是因为在这个场景下无法直接使用 NTLM 进行身份认证（因为不在同一个域），但是因为TFS返回的信息要求使用NTLM，就会出现以上问题。

我们的解决办法是强制本地的 Credential Manager 使用 Basic 方式发送用户名和密码，虽然在这种情况下会有一定的安全性问题，但是如果服务器启用了 https 加密就没有关系了。

你的身份信息会被存放在Windows凭据管理器，不过存放的是一个叫做PAT (Person Access Token)的令牌。
部分辅助工具有一些选项。 “store” 模式可以接受一个 --file path 参数，可以自定义存放密码的文件路径，默认是 `~/.git-credentials` 。 “cache” 模式有 --timeout seconds 参数，可以设置后台进程的存活时间，默认是 “900”，也就是 15 分钟。 下面是一个配置 “store” 模式自定义路径的例子：

	$ git config --global credential.helper store --file ~/.my-credentials
	$ git config --global credential.helper store --file="./.git-credentials"

Git 甚至允许你配置多个辅助工具。 当查找特定服务器的凭证时，Git 会按顺序查询，并且在找到第一个回答时停止查询。 当保存凭证时，Git 会将用户名和密码发送给 所有 配置列表中的辅助工具，它们会按自己的方式处理用户名和密码。 如果你在闪存上有一个凭证文件，但又希望在该闪存被拔出的情况下使用内存缓存来保存用户名密码，.gitconfig 配置文件如下：

	[credential]
	    helper = store --file /mnt/thumbdrive/.git-credentials
	    helper = cache --timeout 30000

配置中 credential.helper 项有重复，查看 --global --system --local 三个级别配置，出现多个相同配置值需要 --unset-all 来清楚：

	fatal: unable to get credential storage lock: File exists
	warning: credential.helper has multiple values

	git config --local --unset credential.helper
	git config --global --unset-all credential.helper



底层实现
这些是如何实现的呢？ Git 凭证辅助工具系统的命令是 git credential，这个命令接收一个参数，并通过标准输入获取更多的参数。

举一个例子更容易理解。 我们假设已经配置好一个凭证辅助工具，这个辅助工具保存了 mygithost 的凭证信息。 下面是一个使用 “fill” 命令的会话，当 Git 尝试寻找一个服务器的凭证时就会被调用。以下开始交互命令：

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

Git-credential 接下来会等待标准输入，输入 protocol 和 host，即协议和主机名。再跟一个空行代表输入已经完成，凭证系统应该输出它所知道的信息。

接下来由 Git-credential 接管，并且将找到的信息打印到标准输出。如果没有找到对应的凭证，Git 会询问用户的用户名和密码，我们将这些信息输入到在标准输出的地方（这个例子中是同一个控制台）。

凭证系统实际调用的程序和 Git 本身是分开的；具体是哪一个以及如何调用与 credential.helper 配置的值有关。 这个配置有多种格式：

- `foo`					执行 git-credential-foo
- `foo -a --opt=bcd`	执行 git-credential-foo -a --opt=bcd
- `/path/to/foo -xyz`	执行 /absolute/path/foo -xyz
- `!f() { echo "password=s3cre7"; }; f`	! 后面的代码会在 shell 执行

上面描述的辅助工具可以被称做 git-credential-cache、git-credential-store 之类，我们可以配置它们来接受命令行参数。 通常的格式是 “git-credential-foo [args] <action>” 标准输入/输出协议和 git-credential 一样，但它们使用的是一套稍微不太一样的行为：

- get 是请求输入一对用户名和密码。
- store 是请求保存一个凭证到辅助工具的内存。
- erase 会将给定的证书从辅助工具内存中清除。

对于 store 和 erase 两个行为是不需要返回数据的（Git 也会忽略掉）。 然而对于 get，Git 对辅助工具的返回信息十分感兴趣。

如果辅助工具没有任何有用的信息，它可以直接退出而不需要输出任何东西，但如果它有这些信息，它在提供的信息后面增加它所拥有的信息。 这些输出会被视为一系列的赋值语句；每一个提供的数据都会将 Git 已有的数据替换掉。

这有一个和上面一样的例子，但是跳过了 git-credential 这一步，直接到 git-credential-store:

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

配置告诉 git-credential-store 去保存凭证：当访问 https://mygithost 时使用用户名 “bob”，密码是 “s3cre7”。

现在我们取出这个凭证。 我们提供连接这部分的信息 https://mygithost 以及一个空行。git-credential-store 输出我们之前保存的用户名和密码。

`~/git.store` 文件的内容类似：

	https://bob:s3cre7@mygithost

仅仅是一系列包含凭证信息 URL 组成的行。 osxkeychain 和 winstore 辅助工具使用它们后端存储的原生格式，而 cache 使用它的内存格式（其他进程无法读取）。

自定义凭证缓存
已经知道 git-credential-store 之类的是和 Git 是相互独立的程序，就不难理解 Git 凭证辅助工具可以是 任意 程序。 虽然 Git 提供的辅助工具覆盖了大多数常见的使用场景，但并不能满足所有情况。 比如，假设你的整个团队共享一些凭证，也许是在部署时使用。 这些凭证是保存在一个共享目录里，由于这些凭证经常变更，所以你不想把它们复制到你自己的凭证仓库中。 现有的辅助工具无法满足这种情况；来看看我们如何自己实现一个。 这个程序应该拥有几个核心功能：

- 我们唯一需要关注的行为是 get；store 和 erase 是写操作，所以当接受到这两个请求时我们直接退出即可。
- 共享的凭证文件格式和 git-credential-store 使用的格式相同。
- 凭证文件的路径一般是固定的，但我们应该允许用户传入一个自定义路径以防万一。

我们再一次使用 Ruby 来编写这个扩展，但只要 Git 能够执行最终的程序，任何语言都是可以的。 这是我们的凭证辅助工具的完整代码：

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

我们在这里解析命令行参数，允许用户指定输入文件，默认是 `~/.git-credentials`

这个程序只有在接受到 get 行为的请求并且后端存储的文件存在时才会有输出。

这个循环从标准输入读取数据，直到读取到第一个空行。 输入的数据被保存到 known 哈希表中，之后需要用到。

这个循环读取存储文件中的内容，寻找匹配的行。 如果 known 中的协议和主机名与该行相匹配，这个程序输出结果并退出。

我们把这个辅助工具保存为 git-credential-read-only，放到我们的 PATH 路径下并且给予执行权限。 一个交互式会话类似：

	$ git credential-read-only --file=/mnt/shared/creds get
	protocol=https
	host=mygithost

	protocol=https
	host=mygithost
	username=bob
	password=s3cre7

由于这个的名字是 “git-” 开头，所以我们可以在配置值中使用简便的语法：

	$ git config --global credential.helper read-only --file /mnt/shared/creds

正如你看到的，扩展这个系统是相当简单的，并且可以为你和你的团队解决一些常见问题



# 命令方式创建远程代码仓库
- https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user
- https://docs.github.com/en/developers/apps/scopes-for-oauth-apps
- https://github.com/settings/tokens
- https://docs.github.com/
- https://gitee.com/api/v5/swagger#/postV5UserRepos

将本地代码 push 到 github 远程代码仓库之前，总是通过在线新建 github 代码仓库的操作是比较麻烦的。

借助 Github API，可以利用命令创建远程代码仓库，十分便捷。

首先需要申请并获取自己的 API Token，用于鉴权，OAuth scope requirements。

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

通过 API Token 可以在 OAuth 应用中安全访问需要授权的 API 资源，以下可以检测什么类型的 OAuth 作用域是可用的：

	$ curl -H "Authorization: token YOUR_OAUTH-TOKEN" https://api.github.com/users/jimboyeah -I
	HTTP/1.1 200 OK
	X-OAuth-Scopes: repo, user
	X-Accepted-OAuth-Scopes: user

对于远程创建仓库，检查其中已经授权的 API 列表 X-OAuth-Scopes 和 X-Accepted-OAuth-Scopes 两项。

勾选 repo 支持仓库的完全控制，具体参考 Scopes for OAuth Apps：

- `repo:status` Access commit status
- `repo_deployment` Access deployment status
- `public_repo` Access public repositories
- `repo:invite` Access repository invitations
- `security_events` Read and write security events


然后在本机使用脚本简化远程创建仓库的过程，在 Windows 系统上可以使用以下脚本：

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

Gitee API 地址不一样，稍为修改就可以用：

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

如 bash 的配置文件中加入下述函数定义：

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


注意，需要使用自己的 username 与 api_token 覆盖上述函数中相应的值。

创建代码仓库只需输入命令：

	github-create repo_name

如果没有指定仓库名称 repo_name，会自动将当前路径的文件夹名称设置为代码仓库的名称。然后，就可以将本地代码仓库 push 到远程代码仓库：

	git push -u origin master



# git init 初始化

假定 starter 为仓库名，使用 init 全新创建，如果要管理的目录已经存在，那么就切换到此目录执行如下命令。

如果目录不存在，可以手动或者命令行方式创建：

>	$ mkdir /starter # 创建 starter 目录。
>	$ cd /starter 	 # 切换到此目录。
>	$ git init 		 # 在此目录下初始化仓库，里面的文件可以进行版本管理。
>	Initialized empty Git repository in E:/starter/starter/.git/

git 仓库保存在隐藏目录 .git 下，通过清除这个目录就可以清空仓库

>	rm -rf  .git

创建仓库后，如果需要将本地创建与远程仓库关联起来，通常都需要，例如和 github 远程仓库关联。

通常通过 git clone 方式克隆远程仓库时，会自动创建 origin 连接到指定的远程仓库，它是配置文件 config 里默认定义的远端服务器名。

比如 config 是这样定义的：

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

手动添加远程仓库使用 git remote add 命令：

	echo "# xx" >> README.md
	git init
	git add README.md
	git commit -m "first commit"

	git remote add origin https://github.com/jimboyeah/xx.git
	git push -u origin master

	# Push Current Brench
	git push -u origin HEAD

在 Github 服务器上创建一个仓库后，可以在本地初始化并提交内容后，将本地仓库通过 git push 推送到服务器上。

在 Git 中，用 HEAD 表示当前版本，也就是最新的提交 commit id，上一个版本就是 `HEAD^`，上上一个版本就是 `HEAD^^`，当然往上 100 个版本可以写成 `HEAD~100`。


现在想要将仓库的远端地址改到另外一个服务器或者另外一个仓库上去，那么就先删掉旧的 origin，或者直接设置 URL 地址，或者再添加一个新的远程服务器地址：

	git remote remove origin
	git remote set-url origin git@github.com:jimboyeah/xx.git
	git remote add origin_copy https://github.com/jimboyeah/demo.git

比如想在在 Github 上的 demo 仓库放置多个项目，那么可以考虑使用分支的方式。通常仓库都是有 master 分支的，先将当前项目转到一个不与远端有冲突的分支，再将这个分支推送到远端服务器：

	git branch go-my-websocket
	git checkout go-my-websocket
	git push -u origin go-my-websocket

可以使用 fetch 来拉取远端的分支：

	git fetch https://github.com/jimboyeah/demo.git master

git pull 则是将远程主机的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。

	git pull https://github.com/jimboyeah/demo.git master

通常两个独立创建的仓库都会出现错误：

	fatal: refusing to merge unrelated histories

简单粗暴解决方法可以通过参数强制合并，但这种方式不好：

	git pull origin master --allow-unrelated-histories

可以通过 log 查看本地 master 分支和远程(origin)分支的区别，再使用 rebase 重置基点， 这段命令将远端代码 pull 下来，然后再使用推送命令将本地更新的文件推送到远端服务器上：

	git log -p master..origin/master
	git pull --rebase origin master
	git push -u origin master

代码仓库的文件列表可以使用 ls-files 命令查看，或使用 log 查看文件改动：

	git ls-files
	git log --graph

和远端仓库协作时，会遇得到本地回退了旧版本，这回导致推送远端失败：

	Updates were rejected because the tip of your current branch is behind

因为远程仓库的分支比本地的代码要新，所以有冲突，你要么把冲突解决掉再提交，要么开新分支提交，要么就直接使用 git push --force 暴力提交，多人协作请慎重！！！


Git 版本系统中，在工作目录树下的文件有四种基本状态和对应四种区域，如果仓库和远程服务器连接，则有 5 种状态 5 中区域。版本仓库的数据库保存在工作目录下的 .git 隐藏目录下，本地提交的文件都会在这里面。

可以随时使用 git status 命令查看状态信息：

|   State   | Workplace |                  说明                 |
|-----------|-----------|---------------------------------------|
| Untracked | 工作区    | Untracked files                       |
| Modified  | 临时区    | Changes not staged for commit         |
| Staged    | 暂存区    | Changes to be committed               |
| Commited  | 本地库    | nothing to commit, working tree clean |
| Pushed    | 远程库    | Your branch is ahead or up-to-date    |

首先，在本地工作目录通过 git init 创建本地仓库或者使用 git clone 将远程仓库克隆到本地后，就会在专用的 .git 目录下产生版本数据库。

以下是文件版本管理的一个基本流程：

- *Untracked* 状态，在工作目录下创建新文件，就是此状态，即未被索引和跟踪的文件，有以下两种状态走向：
	- 使用 `git add <file>` 命令将其添加到索引进行跟踪。
	- 操持未跟踪状态，或者从磁盘中删除，git 不对其做响应。
- 索引中跟踪的文件的状态，如下：
	- *Modified* 内容改动状态。
	- *Deleted* 删除状态文件有两种：使用 git-rm 对暂存区、或工作区的内容进行删除，使用系统删除命令进行物理删除。
	- 此时数据还只是在工作目录产生作用，未更新到版本数据库中，此时 `git add` 命令将修改更新到暂存区。
	- 也可以使用 `git restore --staged <file>...` 等命令从暂存区或版本数据库中现有的内容还原出来。
- *Staged* to *Commited* 添加到暂存区后：
	- 暂存区的通常是为接下来进行提交，将文件的改动正式录入本地仓库。
	- 暂存状态的内容可以使用 `git rm` 命令来删除，也可以使用 `git restore` 还原到工作区。
	- 通常，需要执行 `git commit` 命令将其提交到仓库的数据库中。
- *Pushed* 下一步就是通过 `git push` 将本地仓库内容推送到远程服务器，需要设置 origin 等远程链接地址。


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



# git clone 克隆远程仓库到本地

使用 git clone 克隆远程仓库到本地：

>	$ git clone [url]

代码实例如下：

>	$ git clone https://github.com/jquery/jquery.git
>	Cloning into 'jquery'...
>	remote: Counting objects: 42826, done.
>	remote: Compressing objects: 100% (10/10), done.
>	remote: Total 42826 (delta 1), reused 1 (delta 0), pack-reused 42816
>	Receiving objects: 100% (42826/42826), 27.18 MiB | 22.00 KiB/s, done.
>	Resolving deltas: 100% (30299/30299), done.

以上克隆 jQuery 仓库到本地同名工作目录下保存。

>	$ git clone https://github.com/jquery/jquery.git jQuery-latest

仓库克隆到本地当前目录下的 jQuery-latest 目录下，通过克隆获得的版本库的状态与克隆时的线上状态相同。

指定分支或版本，单独分支克隆 Single-branch

>   $ git clone -b developer --single-branch https://github.com/alibaba/AliOS-Things.git
>	$ git clone -b developer https://github.com/alibaba/AliOS-Things.git
>   $ git clone -b v3.0.0 https://github.com/alibaba/AliOS-Things.git
>   $ git clone -b blender-v2.83-release git://git.blender.org/blender.git

只适用于 git 1.8.X 版本，只需使用 -b branch 和 --single-branch 克隆一个分支，或指定克隆深度：

	git fetch git://github.com/alibaba/AliOS-Things.git developer

	git clone --depth=1 git@github.com:Valloric/YouCompleteMe.git

和单分支一样节省流量的 depth 深度参数，指定 1 层深度克隆时就不会以获取子模块，非常省流量和时间：

	--depth <depth>

Create a shallow clone with a history truncated to the specified number of commits. Implies --single-branch unless --no-single-branch is given to fetch the histories near the tips of all branches. If you want to clone submodules shallowly, also pass --shallow-submodules.

	--shallow-since=<date>
Create a shallow clone with a history after the specified time.

	--shallow-exclude=<revision>
Create a shallow clone with a history, excluding commits reachable from a specified remote branch or tag. This option can be specified multiple times.

	--[no-]single-branch
Clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remote’s HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created.

	--no-tags
Don’t clone any tags, and set remote.<remote>.tagOpt=--no-tags in the config, ensuring that future git pull and git fetch operations won’t follow any tags. Subsequent explicit tag fetches will still work, (see git-fetch(1)).

Can be used in conjunction with --single-branch to clone and maintain a branch with no references other than a single cloned branch. This is useful e.g. to maintain minimal clones of the default branch of some repository for search indexing.

	--recurse-submodules[=<pathspec>]

After the clone is created, initialize and clone submodules within based on the provided pathspec. If no pathspec is provided, all submodules are initialized and cloned. This option can be given multiple times for pathspecs consisting of multiple entries. The resulting clone has submodule.active set to the provided pathspec, or "." (meaning all submodules) if no pathspec is provided.

Submodules are initialized and cloned using their default settings. This is equivalent to running git submodule update --init --recursive <pathspec> immediately after the clone is finished. This option is ignored if the cloned repository does not have a worktree/checkout (i.e. if any of --no-checkout/-n, --bare, or --mirror is given)

	--[no-]shallow-submodules

All submodules which are cloned will be shallow with a depth of 1.

	--[no-]remote-submodules

All submodules which are cloned will use the status of the submodule’s remote-tracking branch to update the submodule, rather than the superproject’s recorded SHA-1. Equivalent to passing --remote to git submodule update.


git pull 命令相当于 git fetch + git merge，如果你想拉取远程仓库的某个分支，那么使用：

```sh
#git pull <repository> <branch>
git pull origin 4.0
```

git fetch 是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。

	$ git fetch <remote>
	$ git fetch <remote> <branch>

	# 在远程分支上窥视，无需在本地存储库中配置远程
	$ git fetch git://git.kernel.org/pub/scm/git/git.git maint

	$ git init
	$ git remote add origin git@github.com:qemu/qemu
	$ git fetch origin stable-0.10
	$ git checkout -b stable-0.10 origin/stable-0.10

git pull 则是将远程主机的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。

git fetch 或 pull 拉取后，本地有修改后，不能再重复执行拉取，也拉取不到远端文件。可以查看工作区状态：

	git status

这时可以通过 reset 命令来进行 undo 还原。

大仓库克隆有断线重来的毛病，可以先在服务器上 git clone --bare 一个暴露仓库，然后打包后提供 http 下载，能断点续传。下载回来后解压，git pull 一下同步到最新版就好了。

>	$ git clone -b cppDemos --bare https://github.com/jimboyeah/demo/


一个 bare repository 是用来“分享”的。如果有几个人要访问同一个项目的文件，在一个中心点上创建一个 bare 仓库，所有项目成员可以 push 自己编辑的文件到这个仓库。

里面只有 git 的版本控制信息，没有你工作用的文件，也就是没有 working tree。因为它不包含工作用的文件，只有 git 自己需要的文件，所以这个目录下没有 .git 子目录，而是直接把 git 需要的文件放根目录底下了。但是，这个 bare 的目录本身的目录名，有一个 .git 的后缀。

因此，概念上，一个 bare 仓库，可以看成是一个 git 的文件服务器。一个人的项目，其实也可以建一个 bare 仓库，用做文件备份。

Git 有三个克隆选项：

- Standard 标准克隆，快速，半冗余，Hardlinks。
- Full Copy 冗余备份，较慢。
- Shared 共享克隆，最快，无备份。



# git commit 提交到本地仓库 

>	>git commit -m "第一次提交"

（1）-m 表示对此次提交进行注释，简述此题提交的相关信息。
（2）如果不加-m，那么在点击回车之后，会默认弹出自带的VIM编辑器，需要编辑第9行。
把移动光标到第9行，按下x将注解的#号去掉，然后输入VIM编辑指令ESC+wq保存提交信息。
关于VIM编辑器的基本用法可以参阅git Vim编辑器输入内容、保存和退出操作一章节。
上述三步，将文件从工作区提交到暂存区，最会提交到仓库，完成一次完整的提交过程，也就是进行了一次存档。

>	1
>	2 # Please enter the commit message for your changes. Lines starting
>	3 # with '#' will be ignored, and an empty message aborts the commit.
>	4 #
>	5 # On branch sensor
>	6 # Your branch is up to date with 'origin/sensor'.
>	7 #
>	8 # Changes to be committed:
>	9 ▒       new file:   test.tx
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
              [<path>…]

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

将代码打包：

```sh
# 打包指定分支
git archive -o imgui_v1.87.zip master
# 只打包指定目录
git archive -o imgui_v1.87.zip master:src
# 可以打包指定 tag 版本
> git tag
v1.00
v1.87
# 给所有文件名加前缀，使用斜杠为加目录层级
> git archive --prefix imgui_v1.87/ -o imgui_v1.87.zip v1.87
```

Github 上的打包命令也使用了前缀设置打包目录，对于主线分支来说，使用 [project]-master 这样的前缀作为子目录。

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
# Put everything in the current head’s Documentation/ directory into git-1.4.0-docs.zip, with the prefix git-docs/.

git archive -o latest.zip HEAD
# Create a Zip archive that contains the contents of the latest commit on the current branch. Note that the output format is inferred by the extension of the output file.

git config tar.tar.xz.command "xz -c"
# Configure a "tar.xz" format for making LZMA-compressed tarfiles. You can use it specifying --format=tar.xz, or by creating an output file like -o foo.tar.xz.
```



# git log reflog status diff 信息查询命令
- [Useful .gitignore templates](https://github.com/github/gitignore)


## git status 工作目录树状态

使用 git status 查看工作目录树状态，看看有什么文件是处于增删状态的： 

>	>git status
>	On branch sensor
>	Your branch is up to date with 'origin/sensor'.
>	
>	nothing to commit, working tree clean

如果有文件未进行跟踪，需要监视追踪的文件就使用 git add 命令。文件添加到仓库后 git 就会对文件的所有操作进行追踪，再查看目录状态就有差别

>	>echo something>test.txt
>	>git add test.txt

如果要将多个文件加入到暂存区，可以采用如下类似代码，文件与文件之间用空格分隔；也可以使用通配符方式批量提交文件：

>	git add .
>	git add all
>	git add *.html
>	git add readme.txt ant.txt

目录中的 .gitignore 过滤忽略文件设置会影响到工作树的文件状态。


## git log 历史提交日志

日志是记录了 git commit 命令执行的历史动作记录，包含内容变动，提交时的注解信息。通过 git log 命令可以将这些历史记录信息以不同的方式呈现。

```sh
# SYNOPSIS
git log [<options>] [<revision range>] [[--] <path>…]

# means "list all the commits which are reachable from foo or bar, but not from baz".
$ git log foo bar ^baz

# A special notation "<commit1>..<commit2>" stand for "^<commit1> <commit2>".
$ git log origin..HEAD
$ git log HEAD ^origin

# Another special notation is "<commit1>…<commit2>" which is useful for merges.
# The resulting set of commits is the symmetric difference between the two operands.
$ git log A B --not $(git merge-base --all A B)
$ git log A...B
```

Table 2. git log 的常用选项

|       选项      |                                          说明                       |
|-----------------|--------------------------------------------------------------------|
| -p              | 按补丁格式显示每个提交引入的差异。                                     |
| --all           | 显示所有提交。                                                       |
| --stat          | 显示每次提交的文件修改统计信息。                                       |
| --shortstat     | 只显示 --stat 中最后的行数修改添加移除统计。                           |
| --name-only     | 仅在提交信息后显示已修改的文件清单。                                   |
| --name-status   | 显示新增、修改、删除的文件清单。                                        |
| --abbrev-commit | 仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。                      |
| --relative-date | 使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）。         |
| --graph         | 在日志旁以 ASCII 图形显示分支与合并历史。                              |
| --pretty        | 使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format。 |
| --oneline       | --pretty=oneline --abbrev-commit 合用的简写。                        |


使用过滤器查询指定操作的记录，将大写改为小写表示排除，如 `--diff-filter=ad` 排除添加、删除动作记录。

```sh
# --diff-filter=[(A|C|D|M|R|T|U|X|B)…[*]]
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

Added (A), Copied (C), Deleted (D), Modified (M), Renamed (R), have their type (i.e. regular file, symlink, submodule, …) changed (T), are Unmerged (U), are Unknown (X), or have had their pairing Broken (B). Any combination of the filter characters (including none) can be used. When * (All-or-none) is added to the combination, all paths are selected if there is any file that matches other criteria in the comparison; if there is no file that matches other criteria, nothing is selected.


格式化输出：

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
| %ad    | Author date (format respects the –date= option |
| %ar    | Author date, relative                          |
| %cn    | Committer name                                 |
| %ce    | Committer e-mail                               |
| %cd    | Committer date                                 |
| %cr    | Committer date, relative                       |
| %s     | Subject                                        |


>	>git log
>	commit 88d6b02b22b10ce35583c40a05d2c003b984b0cc (在 Git 中，用 HEAD 表示当前版本，也就是最新的提交 commit id，上一个版本就是 `HEAD^`，上上一个版本就是 `HEAD^^`，当然往上 100 个版本可以写成 `HEAD~100`。
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


图形化展示结构，可以看到分支路线：

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


## git reflogs 引用日志

Git reflogs 是一种用来跟踪分支顶端的更新的引用日志机制，许多 Git 命令接受用一个引用作为参数，一个引用就是指向提交的指针。

```sh
# git-reflog - Manage reflog information
# SYNOPSIS
git reflog <subcommand> <options>

git reflog [show] [log-options] [<ref>]
git reflog expire [--expire=<time>] [--expire-unreachable=<time>]
        [--rewrite] [--updateref] [--stale-fix]
        [--dry-run | -n] [--verbose] [--all [--single-worktree] | <refs>…]
git reflog delete [--rewrite] [--updateref]
        [--dry-run | -n] [--verbose] ref@{specifier}…
git reflog exists <ref>
```

引用是一种间接使用 commit 记录的方式，比起直接使用 Commit ID 哈希来说，对用户来说更清晰易懂。

```sh
> git reflog show
c7477fb (HEAD -> master, origin/master) HEAD@{0}: commit: update readme
d2cf5c9 HEAD@{1}: commit: update image link
4e876c6 HEAD@{2}: commit: add sublime build tools screenshot
411825e HEAD@{3}: commit: correct the link hash
9f09b31 HEAD@{4}: commit (initial): ini
```

例如，HEAD{2} 的意思是 HEAD 往前移动两个记录的位置，而 master@{one.week.ago} 表示引用 master 分支中指向一个星期前的位置，参考 gitrevisions。

```sh
> git reflog HEAD@{4}
9f09b31 HEAD@{4}: commit (initial): init
> git log HEAD@{2}      # 列出前 2 提供的日志记录
```

让所有 reflogs 过时不再有效，或删除指定 reflog：

```sh
> git reflog expire --expire=now --all
> git reflog delete master@{2}
```


## git show 查询信息

显示任意对象的信息 (blobs, trees, tags and commits)：

- 对于 commits 对象，显示其日志消息和文本内容的差异，对于合并的可以使用 git diff-tree --cc。
- 对于 tags 对象，显示其标签消息和引用对象。
- 对于 trees 对象，显示其名称，等效 git ls-tree --name-only。
- 对于 blobs 对象，显示其原始内容。

git show 命令和 git diff-tree 接收同样的参数。

```sh
# SYNOPSIS
git show [<options>] [<object>…]

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

常用选项参考：

-	<object>… 指定任意对象名，参考 SPECIFYING REVISIONS。
-	--pretty[=<format>] --format=<format> 指定格式。

	格式可以是 oneline, short, medium, full, fuller, email, raw, format:<string> and tformat:<string>，它们有一个点位符 %placeholder。

-	--abbrev-commit 显示精简的提交对象名称，而不是显示 40-bte 长度的完整名，可以指定具体位数 --abbrev=<n>。
-	--oneline 等价 --pretty=oneline --abbrev-commit 同时使用，节省屏幕显示空间。
-	--encoding=<encoding> 指定内容编码，默认 UTF-8。
-	--notes[=<treeish>] 显示备注内容，可以指定 <treeish> 方式查找备注内容，refs/notes/ 这样可以指定全引用名。


## git diff 差异比较

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

很多时候，需要通过 diff 来比较文件修改历史差异内容： 

git-diff - Show changes between commits, commit and working tree, etc

git diff 命令可以展示不同的内容比较差异：

- Working Tree 与 索引或另一个树；
- 索引或一个树；
- 两个树之间；
- 合并产生的差异；
- 两个 BLOB - Binary Large Object 文件之间，如图像文件，BLOG 是处理大尺寸二进制字节数据的一种对象。
- 比较磁盘中的两个文件；

Git 版本系统中，在工作目录树下的文件有四种基本状态和对应四种区域，如果仓库和远程服务器连接，则有 5 种状态 5 中区域。版本仓库的数据库保存在工作目录下的 .git 隐藏目录下，本地提交的文件都会在这里面。

可以随时使用 git status 命令查看状态信息：

|   State   | Workplace |                  说明                 |
|-----------|-----------|---------------------------------------|
| Untracked | 工作区    | Untracked files                       |
| Modified  | 临时区    | Changes not staged for commit         |
| Staged    | 暂存区    | Changes to be committed               |
| Commited  | 本地库    | nothing to commit, working tree clean |
| Pushed    | 远程库    | Your branch is ahead or up-to-date    |

```sh
# SYNOPSIS
git diff [<options>] [<commit>] [--] [<path>…]
git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…]
git diff [<options>] [--merge-base] <commit> [<commit>…] <commit> [--] [<path>…]
git diff [<options>] <commit>…<commit> [--] [<path>…]
git diff [<options>] <blob> <blob>
git diff [<options>] --no-index [--] <path> <path>

# 查看索引中处于暂存区但未暂存的内容变动，即未曾执行 git add 的变动。
# staging area for the next commit. 
git diff [<options>] [--] [<path>…]
git diff .\README.md

# 比较两个未加入跟踪的磁盘文件。如果其中有工作区外的文件，可以省略 --no-index。
git diff [<options>] --no-index [--] <path> <path>

# 比较暂存区与指定 commit 的内容差异，默认为 HEAD，即当前最新提交的内容。
# 可以使用 --staged 和等价的 --cached，以下两行也是等价用法。
# git diff --merge-base
# git diff $(git merge-base A HEAD).
git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…]

# 比较工作树与指定 <commit> 的差异，也可以指定分支名，使用 HEAD 比较最新提交的差异。
git diff [<options>] <commit> [--] [<path>…]
git diff origin/master .\README.md
git diff master .\README.md

# 根据指定的两个 <commit> 之间进行比较，以下两行是等价用法。
# 如果指定了 --merge-base 则使用前面的合并来源提交。
# git diff --merge-base A B
# git diff $(git merge-base A B) B.
git diff [<options>] [--merge-base] <commit> <commit> [--] [<path>…]

# 比较合并的提交，前面指定的 <commit> 为合并提交，后面两个是其父级提交。
# 使用 ^@ 后缀，例如 git diff master master^@，与 git show master 给出相同的差异。
git diff [<options>] <commit> <commit>… <commit> [--] [<path>…]

git diff [<options>] <commit>..<commit> [--] [<path>…]
# This is synonymous to the earlier form (without the ..) for viewing the changes between two arbitrary <commit>. If <commit> on one side is omitted, it will have the same effect as using HEAD instead.

# This form is to view the changes on the branch containing and up to the second <commit>, 
# starting at a common ancestor of both <commit>. 
# git diff A...B is equivalent to git diff $(git merge-base A B) B. 
# You can omit any one of <commit>, which has the same effect as using HEAD instead.
git diff [<options>] <commit>...<commit> [--] [<path>…]

# This form is to view the differences between the raw contents of two blob objects.
git diff [<options>] <blob> <blob>
```




# A Tour of History - Rm Reset restore revert
https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192


## git-rm 删除文件

在 Git 中，删除也是一个修改操作，我们实战一下，先添加一个新文件test.txt到Git并且提交：

	$ git add test.txt

	$ git commit -m "add test.txt"
	[master b84166e] add test.txt
	 1 file changed, 1 insertion(+)
	 create mode 100644 test.txt

一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了：

	$ rm test.txt

这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status 命令会立刻告诉你哪些文件被删除了：

	$ git status
	On branch master
	Changes not staged for commit:
	  (use "git add/rm <file>..." to update what will be committed)
	  (use "git checkout -- <file>..." to discard changes in working directory)

		deleted:    test.txt

	no changes added to commit (use "git add" and/or "git commit -a")

现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit：

	$ git rm test.txt
	rm 'test.txt'

	$ git commit -m "remove test.txt"
	[master d46f35e] remove test.txt
	 1 file changed, 1 deletion(-)
	 delete mode 100644 test.txt

现在，文件就从版本库中被删除了。

 小提示：先手动删除文件，然后使用 git rm <file> 和 git add <file> 效果是一样的。
另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：

	$ git checkout -- test.txt

git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

注意：从来没有被添加到版本库就被删除的文件，是无法恢复的！


## git-rm 大文件之后 pack 清理办法

git 版本保存导致大文件仍会被记录用于之后回滚需要。

查看对象大小：

	git count-objects -v

方法：
1.获取大文件

	git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"

2.删除改文件记录

	git filter-branch -f --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch <file.src>' --tag-name-filter cat -- --all

file.src 为该文件路径

3.重构pack与gc

	rm -rf .git/refs/original/
	git reflog expire --expire=now --all
	git fsck --full --unreachable
	git repack -A -d
	git gc --aggressive --prune=now

4.push force

	git push --force


## git-gc git-clean 文件清理

Git 垃圾回收：

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

工作树文件清理，物理删除不在版本索引跟踪下的文件：

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

参数说明：

正常不指定 `<path>` 使用 -d 时不会清理未索引的目录，避免过量删除。所有与指定路径匹配的未跟踪文件（在--force中提到的嵌套git目录除外）都将被删除。

如果 *clean.requireForce* 配置没有设置为 false，那么就需要指定 -f or --force 强制执行清理，或者 -i 进行交互模式。

使用 -x 允许删除所有匹配的文件，不使用标准的 gitignore 文件过滤规则，但仍使用 -e 选项设置的过滤规则。使用 -X 只移除 Git 忽略规则匹配的文件。

使用 -n or --dry-run 表示观察会删除什么文件，并不执行实际动作。

Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.

Normally, only files unknown to Git are removed, but if the `-x` option is specified, ignored files are also removed. This can, for example, be useful to remove all build products.

If any optional `<path>...` arguments are given, only those paths are affected.


## filter-branch vs filter-repo 历史清理
- https://git-scm.com/docs/git-filter-branch
- https://git-scm.com/book/zh/v2/Git-工具-重写历史
- https://github.com/newren/git-filter-repo/

git-filter-branch - Rewrite branches 重写分支历史，清除历史记录。

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
        [--state-branch <branch>] [--] [<rev-list options>…]
```

清除指定文件，如带账号密码的文件：

```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch your-file' --prune-empty --tag-name-filter cat -- --al
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch your-file' --prune-empty --tag-name-filter cat -- --al

# Doing this with filter-repo is as simple as the following command:
# (the single quotes are unnecessary, but make it clearer to a human that we are replacing the empty string as a prefix with my-module-)
git filter-repo --path src/ --to-subdirectory-filter my-module --tag-rename '':'my-module-'
```

要删除的文件相对于 git repo 的根目录路径, 可以使用通配符 `*` 匹配文件进行批量删除。提示信息时 unchanged 说明 repo 中没有找到匹配的文件。

定位大文件信息：

```sh
# 👉使用 Powreshell sort-object 找出最大的文件，按第 3 列进行排序，取最后的大文件。
# >git verify-pack -v .git/objects/pack/pack-xxxxxx.idx | sort -k 3 -n | tail -10
> git verify-pack -v .git\objects\pack\pack-xxxxxx.idx | sort-object { [double]($_ -split '\s+')[2] }
...
32905123d98499de5c9dd2134d8c09b64040db50 blob   2528054 320588 3546538
# 👉确定这个文件是什么文件（不要误删了其他文件）
# git rev-list --objects --all | grep 32905123d98499de5c9dd2134d8c09b64040db50
> git rev-list --objects --all | findstr 32905123d98499de5c9dd2134d8c09b64040db50
32905123d98499de5c9dd2134d8c09b64040db50 images/build-tools.jpg
```

使用 git rev-list 命令按逆时间顺序列出提交对象。

继续查询提供版本信息：

```sh
# 👉确定哪次提交引入的，底下的为早期提交
> git log --oneline --branches -- images/build-tools.jpg

d2cf5c9 update image link
4e876c6 add sublime build tools screenshot
```

执行历史分支过滤，改写历史提交记录，重写从引入提交开始往后的所有提交：

```sh
> git filter-branch --index-filter 'git rm --ignore-unmatch --cached images/build-tools.jpg' -- 4e876c6^..
WARNING: git-filter-branch has a glut of gotchas generating mangled history
         rewrites.  Hit Ctrl-C before proceeding to abort, then use an
         alternative filtering tool such as 'git filter-repo'
         (https://github.com/newren/git-filter-repo/) instead.  See the
         filter-branch manual page for more details; to squelch this warning,
         set FILTER_BRANCH_SQUELCH_WARNING=1.
```

在 Git 中，用 HEAD 表示当前版本，也就是最新的提交 `<commit>`，上一个版本就是 `HEAD^`，上上一个版本就是 `HEAD^^`，当然往上 100 个版本可以写成 `HEAD~100`。注意 `<comit>` 的表达，脱字符号后面还有两个点表示省略。

```sh
# 👉要删除一批文件，使用通配符号，另个指定 -f 可以强制覆盖之前的重写
> git log --oneline --branches -- res/*
> git filter-branch -f --index-filter 'git rm --ignore-unmatch --cached res/*' -- 4e876c6^..
```

后续操作：

```sh
# 👉重写完成，删除引用信息
> rm -Rf .git/refs/original
> git reflog expire --expire=now --all
# 👉重新打包
> git gc --aggressive --prune=now
# 👉验证 size-pack 是否减小
> git count-objects -v
# 👉把本地的危险操作推送到远程分支，最好本地保留克隆备份免得回不了头
> git push origin master --force
```

推送这一步可能遇到 master 是个保护分支，那么取消保护吧，操作完要保护回来。

删掉本地代码，重新 clone 本地或远程分支，大文件已经没有了。

```sh
> git clone ../spine-sfml/test
Cloning into 'test'...
done.
> git clone file://C:/spine-sfml/test
Cloning into 'test'...
```


## git-restore 恢复文件

三个相似的历史修改命令：

- *git-revert* 创建新提交用于恢复其它提交产生的改变，会在历史记录增加一笔，原提交记录还在。
- *git-restore* 用于还原文件到工作树中，可以从其它提交还原索引中的文件，即从仓库中还原文件，此操作不更新分支。
- *git-reset* 将 HEAD 指向新的状态位置，不同模式下可能会有工作区、暂存区的内容替换，这可能有数据丢失，但也仅在踪的文件。

在 Git 中，用 HEAD 表示当前版本引用，也就是最新的提交 commit id。上一个版本就是 `HEAD^`，上上一个版本就是 `HEAD^^`，当然往上 100 个版本可以写成 `HEAD~100`。

操作前，查询现有的提交版本，以便确定要回到未来的哪个版本：

- git log 查看提交历史，获取 Commit ID；
- git reflog 查看引用日志，使用 HEAD 引用的方式来替代 Commit ID；

复原文件命令相对安全，也相对简单，命令用法参考：

>SYNOPSIS
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…]


主要选项 `--source` 指定恢复来源的提交版本，可以指定 commit, branch 或 tag。注意，文件路径是在跟踪的，但是来源中不存在，就会移除它以保持和 source 一致。

如果没有指定 `--source`，但是指定了 `--staged`，就从 HEAD 恢复文件，都没有指定就从索引区恢复文件。

而 `--staged` 和 `--worktree` 用来指定文件恢复到哪里，默认是 `--worktree` 指定此参数以恢复工作树。指定了 `--staged` 就会恢复到索引区，可以同时指定。

文件所在位置有四个，工作区内、索引区内、本地仓库、远程仓库。通过三个操作进行状态转移：git add 把工作区文件添加到索引区；git commit 把索引区文件添加到本地仓库；git push 把本地仓库文件添加到远程仓库。

> git restore images/*
> git restore --source=HEAD~1 images/*
> git restore --source=HEAD@{12} --staged images/*

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 checkout 注意 `--` 表示要获取文件而不是分支：

	git checkout -- file
	git checkout -- *

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用 reset 命令，再按场景 1 操作。

	git reset HEAD <file>
	git reset --hard HEAD

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，就需要回退操作：

	$ git reset --hard HEAD^
	HEAD is now at e475afc add distributed


## git-reset 历史穿梭机

Reset 有重置的意思，git reset 命令可以重置当前分支所指向提交的位置，只是改变 HEAD 指向和 commit history。内容提交记录依然存在，只是重置当前分支所指向，并且每次都会产生相应的 reset: moving to 历史记录。

git reset can also be used to restore the index, overlapping with git restore.

重置后，尽管 git log 无法查询到重置点后面的提交动作，但可以通过前面列表的 commitid 来还原。

git reset 基本执行方式：

>SYNOPSIS
git reset [-q] [<tree-ish>] [--] <pathspec>…
git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>…]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
DEPRECATED: git reset [-q] [--stdin [-z]] [<tree-ish>]

前两种会将整个目录树 tree-ish 拷贝到 index 暂存区，最后一种方式会将当前分支 HEAD 指向 `<commit>`，期间可能会修改索引和工作区，根据以下不同模式处理。

通过 git log --oneline 查询现已提交的版本记录，假设要恢复到其中注解为 "Initial commit" 的版本：

>	>git reset 981cef5 --hard
>	HEAD is now at 981cef5 Initial commit

git reset 可以指定 Commit ID，或者使用 HEAD 等等的引用，或者分支名称等形式。

git reset 各种模式的区别：

- `--mixed` 默认值，当重置分支所指向其它位置，暂存区中的内容会被新指向的内容所替换，但会保留工作区内容不变。
- `--soft` 暂存区和工作区的内容都保持原样，不会被替换。
- `--hard` 暂存区和工作区的内容都会被新指向的内容所替换；只影响被跟踪的文件，如果工作区有新增的文件，并不会被影响。
- `--merge` 重置暂存区并更新工作区中与 commit 有差异的内容，但保留暂存区、工作区存在差异的内容，如修改但未 add 的内容。如果暂存区有 unstaged 的内容即没有添加追踪的文件，则终止执行 reset。
- `--keep` 更新暂存区和工作区的内容，但本地文件有改动的情况会终止 reset 的执行。

假如 commit 已经被 push 到远程仓库上，那么其他开发人员可能会基于对应的 commit 提交进行开发产生新的 commit，如果此时进行 reset 操作，会造成其他开发人员的提交历史丢失，这可能会产生严重后果。

除了 reset，还有 revert 用来执行 Undo 动作，它能撤销以前的 commit。

先将日志和引用日志打印出来作参考：

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

测试一下，将 HEAD 重置指向同一位置，可以发现当前的版本没有改变，工作区目录的文件也没有改变，除非使用 checkout 命令签出文件。

但是 Reflogs 有动作记录 reset: moving to head@{0}：

> git reset head@{0}
Unstaged changes after reset:
M       CMakeLists.txt
M       README.md
...
> git reflog --all
c7477fb (HEAD -> master, origin/master) HEAD@{0}: reset: moving to head@{0}
c7477fb (HEAD -> master, origin/master) refs/remotes/origin/master@{0}: update by push
...

使用 --hard 模式进行重置，虽然版本还是同一个版本，但是可以看到暂存区和工作区的内容都替换了，也是仅限在跟踪的文件：

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

## git-revert 撤消提交

讨论 revert 需要分两种情况，因为 commit 分为两种：

- 常规提交，也就是使用 git commit 的提交；
- 合并提交，使用 git merge 合并两个分支之后，得到一个新的 merge commit。

不同之处在于 merge commit 包含两个 parent commit，用来确定是从哪两个分支合并过来的。

常规提交使用 git revert <commit id> 即可，会生成一个新的提交，将指定要撤消的内容从当前分支上撤除。

合并提交需要指定 -m 参数选择 mainline parent-number，如果不指定，git 无法确定要保留的主分支的内容，也就不知道要撤除哪一条分支上的内容。

>SYNOPSIS
git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…
git revert (--continue | --skip | --abort | --quit)

合并分支提交有两个 parent 节点在 Merge 处显示，用来确定是合并的是哪两个分支。

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

这里假设 v2 提交是错需要 revert，直接执行 git revert commit_id 即可，命令会生成一个新的 commit，指定 revert 的提交内容会撤销，如：

	git revert HEAD~1

如果操作合并分支提交，如上面的 ffd6ff，那么就需要 -m 1/2 来指定 parent commit 标识主线，这样在 revert 时会保留主线内容，而另一条提交内容被撤销，一下表示保留 977deca 即原 master 上的内容 alpha，而 dev 分支上的内容丢弃；

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

设想，仓库的分支结构如下，并且当前分支处于 topic：

          A---B---C topic
         /
    D---E---F---G master

执行以下 rebase 命令后，当前分支的基础将会改到 master 分支下：

```sh
git rebase master
git rebase master topi
```
                  A'--B'--C' topic
                 /
    D---E---F---G master


# git 管理文件的版本

先编辑 readme.txt 并提交到版本库

>	>echo version 0.1>readme.txt
>	>git add readme.txt
>	>git commit
>	[master (root-commit) 9e377b1]  new file:   readme.txt
>	 1 file changed, 1 insertion(+)
>	 create mode 100644 readme.txt

再更新内容，通过 git diff 命令来比较内容差别

>	>echo version 0.2 >readme.txt
>	>git diff
>	diff --git a/readme.txt b/readme.txt
>	index a59ad2c..e44f581 100644
>	--- a/readme.txt
>	+++ b/readme.txt
>	@@ -1 +1 @@
>	-version 0.1
>	+version 0.2

这时试着提交

>	>git commit
>	On branch master
>	Changes not staged for commit:
>	        modified:   readme.txt
>	
>	no changes added to commit

无法提交，原因分析如下：
（+）modified状态对应这一次修改，但没有add到暂存区的文件。
（+）当前工作区在修改后，没有提交到暂存区的文件，因此 Changes not staged for commit。
（+）执行git commit -m "xxxx"只能将暂存区中的内容提交到当前分支。所以执行结果就是no changes added to commit。

从工作区直接提交到仓库，跳过 git add 命令，使用参数 -am 即可实现绕过暂存区直接提交到当前分支。

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

修改内容后，通过状态查询命令也可以得到提示信息

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

再次将文件添加到仓库并提交，状态提示当前工作暂存区是干净的：

>	>git commit -am version_0_3
>	[master 72ed0be] version_0_3
>	 1 file changed, 1 insertion(+), 1 deletion(-)
>	
>	>git status
>	On branch master
>	nothing to commit, working tree clean

# git add -p 部分内容提交

试着给 readme.txt 添加多两行内容，实际工作中可能是模块中的两个方法等等

>	>echo platform:win32>>readme.txt
>	>echo memory:2GB>>readme.txt

git add 命令加上参数-p会询问是否将当前区块加入暂存区，选择y表示全部加入暂存区，选择n表示完全不加入暂存区，由于这里我们只想将部分内容加入暂存区，所以选择e（edit缩写），然后弹出VIM编辑器。

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

进入vim编辑模式，按wq保存退出，并提交到版本库

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

# Rewinding Time & Fixing Mistakes 回滚和修复错误

如果将错误add到了暂存区，但没有提交，可以简单的执行 git reset 撤销暂存区的改动，但工作区的内容不变：

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


如果提交了错误内容，有两种情况：如果是最后一次提交你仅仅需要 amend：

>	>git commit -am "error editing"
>	[master 6c5ca14] error editing
>	 1 file changed, 1 insertion(+), 3 deletions(-)
>	
>	>git commit --amend

这将不执行最后一次提交，恢复你原来的内容，工作区内容不变，提交信息将默认为你下次提交的信息。

提交过代码之后，发现一个地方改错了，你下次提交时不想保留上一次的记录；或者你上一次的 commit message 的描述有误，这时候你可以使用这个命令。

amend 会在仓库保留修改的内容，也就是提交的文件在会在仓库中保留记录。

如果你已经提交过不止一次了并且想完全回到之前那个记录，你可以重置分支回到指定的时间，`HEAD~2` 表示回退2级。

>	git checkout SHA
>	git reset --hard HEAD~2
>	git reset --hard SHA

重置后，工作区的文件会跟着重置到相应的状态，除了没有进行跟踪的文件会保留。


SHA 可以通过以下命令获取

>	>git log --graph
>	>git log --oneline
>	>git log --graph --all
>	>git log --oneline --all


还有一个方法是 Revert commits，比较一下差别：

|  指令  | 历史记录 |                                    說明                                   |
|--------|----------|---------------------------------------------------------------------------|
| Reset  | 修改     | 重置到指定 Commit 的狀態，通常適用於尚未推出去的 Commit。                 |
| Rebase | 修改     | 新增、修改、刪除 Commit 都相當方便，用來整理、編輯還沒有推出去的 Commit。 |
| Revert | 不修改   | 增加 Commit 來反轉到旧状态，适用于不允許使用 Reset 或 Rebase 的場合。     |

通过重置隐藏的 Commit 也不会在推送时发送相关的数据记录。


# Git Tree
- http://gnuwin32.sourceforge.net/packages/tree.htm

Git 不提供 tree 命令，需要使用 GNU Tree 工具生成目录树。

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

# branch 创建分支

现在回到 version_0_3 的状态，假设需要一个 linux/arm 的版本，可以这样

>	>git checkout 72ed0be
>	>git branch 'linux_arm'

checkout 时可以直接建立分支，上两行命令等价写法：

>	git checkout -b 'linux_arm'

>	>git log --oneline
>	72ed0be (HEAD, 'linux_arm') version_0_3
>	e6ea2e5 version_0_2
>	2300906 (master)        new file:   readme.txt

发现原来的 win32 版本不见了，其实文件还在仓库时里，现在需要将它还原出来，并为其建立一个win32_x86分支

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

再切换到 linux_arm 版本并添加内容

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

查看分支，当前分支前面会标一个 * 号。

>	>git branch
>	  'linux_arm'
>	  'win32_x86'
>	* master

Git鼓励大量使用分支：

	git branch 				# 查看分支
	git branch -a			# 查看所有分支
	git branch -r			# 查看本地远程分支
	git branch <name> 		# 创建分支
	git checkout <name> 	# 切换分支
	git checkout -b <name> 	# 创建+切换分支
	git checkout -b <local> origin/<remote> # 拉取远程分支并同时创建对应的本地分支
	git merge <name> 		# 合并某分支到当前分支
	git branch -d <name> 	# 删除分支
	git branch -D <name> 	# 强制删除分支

使用孤分支 --orphan 创建一个没有父节点的孤岛分支，但是这个新分支也会包括当前所有的文件，也就是它依赖于原父分支生成的。可以使用 rm 命令删除掉本地这些文件，而且不记录，然后推送到远程仓库：

	git checkout --orphan branch-name
	git rm -rf .
	git push --set-upstream origin dllDemo

参考：

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


# push 将本地仓库推送到github托管

到 github.com 上创建一个仓库，然后 github 会给出创建仓库的命令提示，执行后面两行命令就可以了：

>	…or create a new repository on the command line
>	echo "# demo" >> README.md
>	git init
>	git add README.md
>	git commit -m "first commit"
>	git remote add origin https://github.com/jimboyeah/demo.git
>	git push -u origin master
>	
>	…or push an existing repository from the command line
>	git remote add origin https://github.com/jimboyeah/demo.git
>	git push -u origin master


注意提交的是主线 master 原始分支，所以 github 只会收到原始的 readme.txt 文件

>	>git remote add origin https://github.com/jimboyeah/demo.git
>	>git push -u origin master
>	Enumerating objects: 3, done.
>	Counting objects: 100% (3/3), done.
>	Writing objects: 100% (3/3), 231 bytes | 231.00 KiB/s, done.
>	Total 3 (delta 0), reused 0 (delta 0)
>	To https://github.com/jimboyeah/demo.git
>	 * [new branch]      master -> master
>	Branch 'master' set up to track remote branch 'master' from 'origin'.

然后将其它两个现有分支也 push 到服务器

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

执行 push 报错：

	fatal: The current branch 'win32_x86' has no upstream branch.

是因为本地当前分支没有和远端的分支进行相关联，使用 `--set-upstream origin` 是关联远程分支的一种解决办法。可以用命令查看所有分支，远程分支是红色的部分。然后确定好这两个值后，将值换掉即可。

	git branch -a

使用这种方式的前提是需要确保你的远程分支是存在的，不然的话也无法关联。

以下这种方式无需确保远端相应分支存在，因为不存在的话，会自动创建该分支并与本地分支进行关联。

	git push -u origin 'win32_x86'


如果远程仓库已经建立，需要用本地仓库初始化，可以使用分支方式：

	git push origin <分支名> -f

这种方式可以用本地仓库的内容覆盖远程仓库。

	git remote -v                 # 查看远程仓库详细信息，可以看到仓库名称
	git remote show origin        # 远程仓库详情
	git remote remove origin      # 删除远程仓库
	git remote add origin <name>  # 重新添加远程仓库地址
	gti push -u origin master     # 提交到远程仓库的 master 主干
	git remote prune origin       # 清理无效的远程追踪分支
	git remote update

删除远程分支这个非常无厘头的语法：

	git push [远程名] :[分支名]

如果想在服务器上删除 master 分支，运行下面的命令：

	$ git push origin :master
	To git@github.com:schacon/simplegit.git
	 - [deleted]         master

咚！服务器上的分支没了。你最好特别留心这一页，因为你一定会用到那个命令，而且你很可能会忘掉它的语法。有种方便记忆这条带冒号的命令：

	git push [远程名] [本地分支]:[远程分支]

语法，如果省略 [本地分支]，那就等于是在说“在这里提取空白然后把它变成[远程分支]”。




# ls-files ls-remote ls-tree 列表查看

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
			[--full-name] [--abbrev] [--] [<file>…]

- git-ls-remote

	List references in a remote repository.

		git ls-remote [--heads] [--tags] [--refs] [--upload-pack=<exec>]
		    [-q | --quiet] [--exit-code] [--get-url]
		    [--symref] [<repository> [<refs>…]]

- git-ls-tree

	List the contents of a tree object

		git ls-tree [-d] [-r] [-t] [-l] [-z]
			[--name-only] [--name-status] [--full-name] [--full-tree] [--abbrev[=<n>]]
			<tree-ish> [<path>…]

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
	* [<path>…] When paths are given, show them (note that this isn’t really raw pathnames, but rather a list of patterns to match). Otherwise implicitly uses the root level of the tree as the sole path argument.

使用举例：

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


# detached HEAD 指针游离

git checkout 本质上是修改 HEAD 里面的内容来让它指向不同分支的，而 HEAD 默认总是指向当前的分支最新提交的内容。

当使用 checkout 签出指定的提交内容，那么 HEAD 不指向任何分支或指向了一个没有分支名字的修订版本，此时就是处于游离状态了 detached HEAD。

游离状态下进行 commit 操作不会提交到任何分支上去，在这种状态下尝试提交是没有用的，因为任何更改都将丢失。

可以通过建立临时分支，然后再合并分支解决 HEAD 指针游离。


如果工作区没有内容更新，那么通过 pull 命令可以解除 HEAD 游离

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



# Git Submodule 项目子模块
- https://git-scm.com/docs/git-submodule

当项目越来越庞大之后，不可避免的要拆分成多个子模块，我们希望各个子模块有独立的版本管理，并且由专门
的人去维护，这时候我们就要用到 git submodule 功能。

主项目对子模块有依赖关系，却又并不关心子模块的内部开发流程细节，这种项目需要使用多个子模块 Git 仓库。

Submodule 功能就为当前项目添加子模块仓库之间的依赖关系信息，可以嵌套，.gitmodules 包含信息：

	[submodule "third_party/bottle"]
		path = third_party/bottle
		url = git@github.com:defnull/bottle

子模块远程仓库路径、子模块的版本号等，细节的信息包含在 .git/config 和 modules 目录下。

常用命令

   1. git clone <repository> --recursive 递归的方式克隆整个项目
   2. git submodule add <repository> <path> 添加子模块
   3. git submodule init 初始化子模块
   4. git submodule deinit 移除子模块
   5. git submodule update 更新子模块
   6. git submodule foreach git pull 拉取所有子模块

```sh
# SYNOPSIS
git submodule [--quiet] [--cached]
git submodule [--quiet] add [<options>] [--] <repository> [<path>]
git submodule [--quiet] status [--cached] [--recursive] [--] [<path>…]
git submodule [--quiet] init [--] [<path>…]
git submodule [--quiet] deinit [-f|--force] (--all|[--] <path>…)
git submodule [--quiet] update [<options>] [--] [<path>…]
git submodule [--quiet] set-branch [<options>] [--] <path>
git submodule [--quiet] set-url [--] <path> <newurl>
git submodule [--quiet] summary [<options>] [--] [<path>…]
git submodule [--quiet] foreach [--recursive] <command>
git submodule [--quiet] sync [--recursive] [--] [<path>…]
git submodule [--quiet] absorbgitdirs [--] [<path>…]
```

创建带子模块的版本库，例如：

	project
	  |--moduleA
	  |--readme.txt

创建 project 版本库，并提交 readme.txt 文件：

	git init --bare project.git
	git clone project.git project
	cd project
	echo "This is a project." > readme.txt
	git add .
	git commit -m "add readme.txt"
	git push origin master
	cd ..

创建 moduleA 版本库，并提交 a.txt 文件

	git init --bare moduleA.git
	git clone moduleA.git moduleA1
	cd moduleA1
	echo "This is a submodule." > a.txt
	git add .
	git commit -m "add a.txt"
	git push origin master
	cd ..

在 project 中引入子模块 moduleA 并提交子模块信息

	cd project
	git submodule add ../moduleA.git moduleA
	git status
	git diff
	git add .
	git commit -m "add submodule"
	git push origin master
	cd ..

使用 git status 可以看到多了两个需要提交的文件，其中 .gitmodules 指定 submodule 的主要信息，包括子模块的路径和地址信息，moduleA 指定了子模块的 commit id，使用 git diff 可以看到这两项的内容。这里需要指出父项目的 git 并不会记录 submodule 的文件变动，它是按照 commit id 指定 submodule 的 git header，所以 .gitmodules 和 moduleA 这两项是需要提交到父项目的远程仓库的。

	On branch master
	Your branch is up-to-date with 'origin/master'.
	Changes to be committed:
	  (use "git reset HEAD <file>..." to unstage)
		new file:   .gitmodules
		new file:   moduleA

克隆带子模块的版本库

方法一，先 clone 父项目，再初始化 submodule，最后更新 submodule，初始化只需要做一次，之后每次只需要直接 update 就可以了。

注意 submodule 默认是不在任何分支上的，它指向父项目存储的 submodule commit id。

	git clone project.git project2
	cd project2
	git submodule init
	git submodule update
	cd ..

方法二，采用递归参数 --recursive，需要注意同样 submodule 默认是不在任何分支上的，它指向父项目存储的 submodule commit id。

	git clone project.git project3 --recursive


修改子模块

修改子模块之后只对子模块的版本库产生影响，对父项目的版本库不会产生任何影响，如果父项目需要用到最新的子模块代码，我们需要更新父项目中 submodule commit id，默认的我们使用 git status 就可以看到父项目中 submodule commit id 已经改变了，我们只需要再次提交就可以了。

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


更新子模块

更新子模块的时候要注意子模块的分支默认不是 master。

方法一，先 pull 父项目，然后执行 git submodule update，注意 moduleA 的分支始终不是 master。

	cd project2
	git pull
	git submodule update
	cd ..

方法二，先进入子模块，然后切换到需要的分支，这里是 master 分支，然后对子模块 pull，这种方法会改变子模块的分支。

	cd project3/moduleA
	git checkout master
	cd ..
	git submodule foreach git pull
	cd ..


删除子模块

	git rm --cached moduleA
	rm -rf moduleA
	rm .gitmodules
	vim .git/config

删除 submodule 相关的内容，例如下面的内容

	[submodule "moduleA"]
	      url = /Users/nick/dev/nick-doc/testGitSubmodule/moduleA.git

然后提交到远程服务器

	git add .
	git commit -m "remove submodule"

本地实验的时候，发现用下面的方式也可以，服务器记录的是 .gitmodules 和 moduleA，本地只要用 git 命令删除 moduleA，再用 git status 查看状态就会发现 .gitmodules 和 moduleA 这两项都已经改变了。

	git rm moduleA
	git status
	git commit -m "remove submodule"
	git push origin master

至于 .git/config，仍会记录 submodule 信息，但是本地使用也没发现有什么影响，如果重新从服务器克隆则 .git/config 中不会有 submodule 信息。



# git merge 合并分支、解决合并冲突

GIT 分支管理：创建与合并分支、解决合并冲突 - https://www.cnblogs.com/wangmingshun/p/5425150.html
git入门五（分支合并冲突和衍合） https://www.cnblogs.com/andyyu/p/3599551.html

获取 master 并建立一个工作用的临时分支，并提交更新内容

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

然后切换回来主分支，将 temp 分支合并，注意 Fast-forward，这是快速合并分支的意思，因为没有冲突。

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

存在冲突时，合并就没这么简单了，下面模拟一个冲突，然后解决它完成分支合并。

- 首先建立工作临时分支，更新 readme.txt；
- 然后切换到主线分支更新 readme.txt 模拟多用户编辑同一个文件；

这样合并分支就会因为有不同用户提交的相同文件产生冲突。

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

git 给出提示，准备合并的两分支中 readme.txt 文件存在冲突，执行命令后，readme.txt 会被 git 标注：

	<<<<<<< HEAD
	beta version 0.4.1 RC
	=======
	beta version 0.4 RC
	>>>>>>> temp

七个等号作为分割线，上面是活动分支，后面是被合并的分支。解决冲突的办法无非是二者选其一或者由你亲自整合到一起，编辑有冲突的文件然后添加并提交即完成分支合并。

可以用图形化界面工具 git mergetool 命令来编辑，合并完成后可以查询状态 git status 来确认所有冲突都已经解决。如果冲突解决都已完成，git commit 就可以完成这次合并提交。针对冲突合并，写好注释说明，后续查看会更加简单方便。

>	>git commit -am "version 0.4.1 RC"
>	[master 12df6ca] version 0.4.1 RC
>	>git merge temp
>	Already up to date.

合并分支提交与普通提交有点差别，合并分支提交有两个 parent 节点，用来确定是合并的那两个分支。

在有些场景中，需要强制的分支覆盖操作，比如更新 github.io 上的静态站点内容。使用 Hugo 这样的静态站点生成的文件需要推送到对应的 gihub.com 上的仓库，这就需要进行分支覆盖。

切换到　develop　分支下，并保证本地已经同步了远端　develop　的最新代码

	git checkout develop
	git pull

把本地的 develop 分支强制 -f 推送到远端 master。

	git push origin develop:master -f

切换到旧分支　master，并重置成最新的 develop 分支。

	git checkout master
	git reset --hard develop

再推送到远端仓库。

	git push origin master --force<br>

或使用下面的命令，将当前分支推送到远程的同名分支。

	git push origin HEAD





# git blame 追责 查看文件每行内容是谁修改的

>	>git blame -L 1,5 readme.txt
>	fatal: file readme.txt has only 1 line
>	
>	>git blame -L 1 readme.txt
>	72ed0bef (jimboyeah 2018-08-25 12:22:40 +0800 1) version 0.3
>	
>	>git blame readme.txt
>	72ed0bef (jimboyeah 2018-08-25 12:22:40 +0800 1) version 0.3

可以给命令指定行数范围，结果每一行都标注了提交信息，这样就很容易找出责任人。



# git tag for release version
- Release your software https://github.com/blog/1547-release-your-software
- 2.6 Git Basics - Tagging https://git-scm.com/book/en/v2/Git-Basics-Tagging
- https://devconnected.com/how-to-list-git-tags/

标签（tag）是特定提交（commit)一个指针，也就是每个tag对应一个特定的commit。

Release是具有changelogs和二进制文件的一级对象，它可以代表超出Git架构本身的一个特定时间点之前的所有项目历史。也就是通过release，不但能够通过源码体现出项目历史，还能通过已经编译好的二进制文件来进一步描述此时的项目状态。“超出Git架构本身“的意思则在于，git本身只能记录项目修改，本质上不适合将编译好的项目二进制文件记录下来。而通过release则把项目二进制文件保存了下来，方便用户下载，也方便查找特定版本的二进制文件。

以下是Github official announcement所定义原文：

> Releases are first-class objects with changelogs and binary assets that present a full project history beyond Git artifacts.

创建方法 Release 分为 lightweight 和 annotated 两种：

	$ git tag v1.4-light-weight
	$ git tag -a v1.4 -m "annotated version 1.4"

通过 tag 可以返回到项目的特定状态下，所以可以将 tag 看作是为大量 commit 中设定的书签。

创建 release，则需要通过源码托管商的网页操作界面来进行，一般会要求填写 tag 名、分支以及相应的发布说明，还可上传编译好的程序、打包好的文件等。

也就是说 git 本身是没有 release 这个概念的，只有 tag 标签概念，而 release 则是 Github、码云等源码托管商所提供的更高层的概念。

两者之间的关系则是，release 基于 tag，为 tag 添加更丰富的信息，一般是编译好的文件。

推送命令 git push 并不会把 tag 标签传送到远端服务器上，通过显式命令才能分享标签到远端仓库。

	git push origin [tagname]
	git push [origin] --tags

	git push v0.0.1-beta
	git push --tags
	git push origin --tags


## tag 本地仓库操作

在 commit 之后，push 之前打 tag 标签，-m 添加附注，-f 强制覆盖原有的 tag

	git tag -a <tag名> -m <注释文字>
	git tag -a v1.0 -m "commit version 1.0"
	git tag -f v1.0

Git tag 中一共有两类标签，一类叫做轻量标签 Lightweight Tags，另一类叫做附注标签 Annotated Tags。Git 的最佳实践推荐使用附注标签，因为当使用此类标签时，会将 tag 作为对象完整地存储到 git 数据库中，它有自身的校验和信息，包含着标签的名字，电子邮件地址和日期，以及标签说明。

打好标签再 push 到远程仓库

	git push origin -–tags # push所有tag到远程仓库
	git push origin [tagname]  # push单个tag到远程仓库：

删除 tag 便签

	git tag -d v1.0

查看 tag 标签

	git tag

切换标签

	git checkout v1.0


## tag 远程仓库操作

查询 Tags 列表：

	git ls-remote --tags
	git ls-remote --tags origin
	
	git fetch --all --tags

从远程仓库上删除 tag

	git push origin :v1.0
	git push origin :refs/tags/[tagname]
	git push origin –delete [tagname]

三种方法尽量都有尝试一下。

注意事项：
尽量不要tag名字和分支名字一样，比较麻烦。如果tag名字和分支名字一样的时候，push需要指定refs的详细路径，因为分支和tag在git内部是这样表示的（只是引用），tag只存储所指向的那一次提交：

	refs/tags/{tagnane} refs/heads/branches/{branchnane}

所以要这样push相同名字的tag和分支：

	git push origin refs/tags/product
	git push origin refs/heads/branches/product

把 tag push 到服务器上：

	git push origin –tags
	git push origin –tags

其他 tag 操作：

轻量级标签实际上就是存在一个文件中的提交校验和–没有附加任何其他信息。创建轻量级标签的方法就是把上面 -a, -s, -m 这些选项都去掉。

	git tag v1.0

如果现在对这个标签使用 git show 命令，不会看到像上面那种标签显示的那么多内容，仅仅显示这次提交的有关信息。


## tag 的其它用法

根据 commit_id 创建 tag，也可 checkout 签出一个 tag 状态下的文件：

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

签出 tag 时提示 HEAD 游离信息，detached HEAD 即指针位置没有指向任一分支上。

git checkout 本质上是修改 HEAD 里面的内容来让它指向不同分支的，而 HEAD 文件指向的分支就是我们当前的分支。当 HEAD 不指向任何分支或指向了一个没有分支名字的修订版本，此时就是处于游离状态了 detached HEAD。这时候我们在进行 commit 操作不会提交到任何分支上去，这是的提交只产生一个关联的 commit_id。可以通过建立临时分支，然后通过合并分支的方法解决 HEAD 指针游离。

	$ git checkout -b version2 v2.0.0
	Switched to a new branch 'version2'



# git merge 合并分支

假如我们现在在dev分支上，刚开发完项目，执行了下列命令：

	git add .
	git commit -m '提交的备注信息'
	git push -u origin dev

想将dev分支合并到master分支，首先切换到master分支上

	git checkout master

如果是多人开发的话 需要把远程 master 上的代码 pull 下来，即使一个人开发，为了保险起见还是 pull 操作避免本地误删文件

	git pull origin master

然后我们把dev分支的代码合并到master上

	git  merge dev

然后查看状态及执行提交命令

	git status

	On branch master
	Your branch is ahead of 'origin/master' by 12 commits.
	  (use "git push" to publish your local commits)
	nothing to commit, working tree clean

上面的意思就是你有 12 个 commit，需要 push 到远程 master 上，最后执行下面提交命令

	git push origin master

更新远程分支

	git remote update origin --prune

查看所有分支

	git branch -a

删除远程分支Chapater6

	git push origin --delete Chapater6

删除本地分支 Chapater6

	git branch -d  Chapater6


# Reference 命令参考
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
		  [--chmod=(+|-)x] [--] [<pathspec>…]


### git-status - Show the working tree status
	
	git status [<options>…] [--] [<pathspec>…]


### git-commit - Record changes to the repository

	git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
		   [--dry-run] [(-c | -C | --fixup | --squash) <commit>]
		   [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
		   [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
		   [--date=<date>] [--cleanup=<mode>] [--[no-]status]
		   [-i | -o] [-S[<keyid>]] [--] [<file>…]


### git-reset - Reset current HEAD to the specified state

	git reset [-q] [<tree-ish>] [--] <paths>…
	git reset (--patch | -p) [<tree-ish>] [--] [<paths>…]
	git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]


### git-rm - Remove files from the working tree and from the index

	git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch] [--quiet] [--] <file>…


### git-mv - Move or rename a file, a directory, or a symlink

	git mv <options>… <args>…




## Branching and Merging

### git-branch - List, create, or delete branches

	git branch [--color[=<when>] | --no-color] [--show-current]
		[-v [--abbrev=<length> | --no-abbrev]]
		[--column[=<options>] | --no-column] [--sort=<key>]
		[(--merged | --no-merged) [<commit>]]
		[--contains [<commit]] [--no-contains [<commit>]]
		[--points-at <object>] [--format=<format>]
		[(-r | --remotes) | (-a | --all)]
		[--list] [<pattern>…]
	git branch [--track | --no-track] [-f] <branchname> [<start-point>]
	git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
	git branch --unset-upstream [<branchname>]
	git branch (-m | -M) [<oldbranch>] <newbranch>
	git branch (-c | -C) [<oldbranch>] <newbranch>
	git branch (-d | -D) [-r] <branchname>…
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

关联远程分支，其中，origin/remote_branch 是你本地分支 your_branch 要对应的远程分支：

	git branch --set-upstream-to=origin/remote_branch  your_branch


 

### git-checkout - Switch branches or restore working tree files

	git checkout [-q] [-f] [-m] [<branch>]
	git checkout [-q] [-f] [-m] --detach [<branch>]
	git checkout [-q] [-f] [-m] [--detach] <commit>
	git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
	git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <paths>…
	git checkout [<tree-ish>] [--] <pathspec>…
	git checkout (-p|--patch) [<tree-ish>] [--] [<paths>…]

使用孤分支 --orphan 创建一个没有父节点的孤岛分支，但是这个新分支也会包括当前所有的文件，也就是它依赖于原父分支生成的。可以使用 rm 命令删除掉本地这些文件，而且不记录，然后推送到远程仓库：

	git checkout --orphan branch-name
	git checkout <name> 	# 切换分支
	git checkout -b <name> 	# 创建+切换分支
	git checkout -b <local> origin/<remote> # 拉取远程分支并同时创建对应的本地分支

示范，克隆远程仓库后，签出远程分支：

	$ git branch -a
	* master
	  remotes/origin/HEAD -> origin/master
	  remotes/origin/gh47074
	  remotes/origin/gh72
	  remotes/origin/master
	$ git checkout -b gh72 origin/gh72
	Switched to a new branch 'gh72'
	Branch 'gh72' set up to track remote branch 'gh72' from 'origin'.

对于，已经签出的分支，如果工作区文件被删除，可以使用 checkout 签出来恢复文件，即 discard changes 操作：

	git checkout *
	git checkout *.md
	git checkout somefile
	git checkout somefolder


### git-merge - Join two or more development histories together

	git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
		[-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
		[--[no-]allow-unrelated-histories]
		[--[no-]rerere-autoupdate] [-m <msg>] [-F <file>] [<commit>…]
	git merge (--continue | --abort | --quit)


### git-log - Show commit logs

	git log [<options>] [<revision range>] [[--] <path>…]

	git log --graph


### git-stash - Stash the changes in a dirty working directory away

用脏目录将工作区的改动保存起来，后续可以再使用。

使用 git stash 创建一个脏目录保存当前工作区，等价 git stash push。然后，使用 git stash pop 还原。

使用 git stash apply n 也可以还原，但不会删除现有脏目录。

>SYNOPSIS
git stash list [<options>]
git stash show [<options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
             [-u|--include-untracked] [-a|--all] [-m|--message <message>]
             [--pathspec-from-file=<file> [--pathspec-file-nul]]
             [--] [<pathspec>…]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>

### git-tag - Create, list, delete or verify a tag object signed with GPG

	git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]
		<tagname> [<commit> | <object>]
	git tag -d <tagname>…
	git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
		[--points-at <object>] [--column[=<options>] | --no-column]
		[--create-reflog] [--sort=<key>] [--format=<format>]
		[--[no-]merged [<commit>]] [<pattern>…]
	git tag -v [--format=<format>] <tagname>…


### git-worktree - Manage multiple working trees

git 2.6 以上开始提供了 worktree 功能，git worktree 从一个仓库中可以创建多个工作目录，方便多开编辑器高效进行并行开发的方法。

快速上手 git worktree add -b <新分支名> <新路径> <从此分支创建>


	git worktree add [-f] [--detach] [--checkout] [--lock] [-b <new-branch>] <path> [<commit-ish>]
	git worktree list [--porcelain]
	git worktree lock [--reason <string>] <worktree>
	git worktree move <worktree> <new-path>
	git worktree prune [-n] [-v] [--expire <expire>]
	git worktree remove [-f] <worktree>
	git worktree unlock <worktree>


## Sharing and Updating Projects


### git-fetch - Download objects and refs from another repository

	git fetch [<options>] [<repository> [<refspec>…]]
	git fetch [<options>] <group>
	git fetch --multiple [<options>] [(<repository> | <group>)…]
	git fetch --all [<options>]

git fetch 是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。

	$ git fetch <remote>
	$ git fetch <remote> <branch>
	
	# 在远程分支上窥视，无需在本地存储库中配置远程
	$ git fetch git://git.kernel.org/pub/scm/git/git.git maint

	$ git init
	$ git remote add origin git@github.com:qemu/qemu
	$ git fetch origin stable-0.10
	$ git checkout -b stable-0.10 origin/stable-0.10

### git-pull - Fetch from and integrate with another repository or a local branch
	
	git pull [<options>] [<repository> [<refspec>…]]

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
		   [--no-verify] [<repository> [<refspec>…]]


### git-remote - Manage set of tracked repositories

```sh
# SYNOPSIS
git remote [-v | --verbose]
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <url>
git remote rename <old> <new>
git remote remove <name>
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
git remote set-branches [--add] <name> <branch>…
git remote get-url [--push] [--all] <name>
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add [--push] <name> <newurl>
git remote set-url --delete [--push] <name> <url>
git remote [-v | --verbose] show [-n] <name>…
git remote prune [-n | --dry-run] <name>…
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…]
```

查询远程仓库分支：

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

为远程仓库添加分支：

	git remote add branch cppDemos

新建远程分支需要先创建本地分支，再推送到远程仓库：

```sh
$ git checkout -b dbg_lichen_star

$ git branch
* dbg_lichen_star
  master
  release
```

星号表示当前所在分支，现在的状态是成功创建的新的分支并且已经切换到新分支上。

把新建的本地分支 push 到远程服务器，远程分支名可以指定：

```sh
#git push [远程名] [本地分支]:[远程分支]
$ git push origin dbg_lichen_star:dbg_lichen_star
```

语法，如果省略 [本地分支]，那就等于是在说“在这里提取空白然后把它变成[远程分支]”。

使用 git branch -a 查看所有分支，会看到这个远程分支，说明新建远程分支成功。

删除远程分支，推送一个空分支到远程分支，其实就相当于删除远程分支：

	$ git push origin :dbg_lichen_star
	$ git push origin --delete dbg_lichen_star


### git-submodule - Initialize, update or inspect submodules
	
项目中经常使用别人维护的模块，在git中使用子模块的功能能够大大提高开发效率。使用子模块后，不必负责子模块的维护，只需要在必要的时候同步更新子模块即可。

	git submodule [--quiet] [--cached]
	git submodule [--quiet] add [<options>] [--] <repository> [<path>]
	git submodule [--quiet] status [--cached] [--recursive] [--] [<path>…]
	git submodule [--quiet] init [--] [<path>…]
	git submodule [--quiet] deinit [-f|--force] (--all|[--] <path>…)
	git submodule [--quiet] update [<options>] [--] [<path>…]
	git submodule [--quiet] set-branch [<options>] [--] <path>
	git submodule [--quiet] summary [<options>] [--] [<path>…]
	git submodule [--quiet] foreach [--recursive] <command>
	git submodule [--quiet] sync [--recursive] [--] [<path>…]
	git submodule [--quiet] absorbgitdirs [--] [<path>…]


## Inspection and Comparison

### git-show - Show various types of objects

	git show [<options>] [<object>…]

### git-diff - Show changes between commits, commit and working tree, etc

	git diff [<options>] [<commit>] [--] [<path>…]
	git diff [<options>] --cached [<commit>] [--] [<path>…]
	git diff [<options>] <commit> <commit> [--] [<path>…]
	git diff [<options>] <blob> <blob>
	git diff [<options>] --no-index [--] <path> <path>

### git-shortlog - Summarize git log output

	git shortlog [<options>] [<revision range>] [[--] <path>…]
	git log --pretty=short | git shortlog [<options>]


### git-describe - Give an object a human readable name based on an available ref

	git describe [--all] [--tags] [--contains] [--abbrev=<n>] [<commit-ish>…]
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
		  [--verbose] [--unsafe-paths] [<patch>…]


### git-cherry-pick - Apply the changes introduced by some existing commits

	git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
			  [-S[<keyid>]] <commit>…
	git cherry-pick (--continue | --skip | --abort | --quit)



### git-rebase - Reapply commits on top of another base tip

	git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
		[<upstream> [<branch>]]
	git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
		--root [<branch>]
	git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)


### git-revert - Revert some existing commits

从已经提交的内容中逆转：

	git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…
	git revert (--continue | --skip | --abort | --quit)


## Debugging

### git-bisect - Use binary search to find the commit that introduced a bug
http://www.ruanyifeng.com/blog/2018/12/git-bisect.html

git bisect是一个很有用的命令，用来查找哪一次代码提交引入了错误。

它的原理很简单，就是将代码提交的历史，按照两分法不断缩小定位。所谓两分法，就是将代码历史一分为二，确定问题出在前半部分，还是后半部分，不断执行这个过程，直到范围缩小到某一次代码提交。

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

git可以团队开发，难免会出现开发错误，可能要明确责任是由谁造成的。 根目录下有index.html，那么可以使用如下命令： git blame index.html

	git blame [-c] [-b] [-l] [--root] [-t] [-f] [-n] [-s] [-e] [-p] [-w] [--incremental]
		    [-L <range>] [-S <revs-file>] [-M] [-C] [-C] [-C] [--since=<date>]
		    [--ignore-rev <rev>] [--ignore-revs-file <file>]
		    [--progress] [--abbrev=<n>] [<rev> | --contents <file> | --reverse <rev>..<rev>]
		    [--] <file>

如果自己经常换机器开发、push 代码，而且不同机器的 git config 不完全一样的话（比如我不同机器上 user.name 有的是英文名有的是中文名），提交的作者签名也不一样，这时还需要根据不同的 user.name 进行查找。

不过好在我们有命令行，用以下命令就能得到仓库里所有提交过的作者

	git shortlog -s


### git-grep - Print lines matching a pattern
https://en.wikibooks.org/wiki/Regular_Expressions/POSIX_Basic_Regular_Expressions

通过 git grep 命令可以结合正则表达式检索文件中的文本内容，非常的便利，如查找带有 version 字样的文件 git grep version

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
		   [--and|--or|--not|(|)|-e <pattern>…]
		   [--recurse-submodules] [--parent-basename <basename>]
		   [ [--[no-]exclude-standard] [--cached | --no-index | --untracked] | <tree>…]
		   [--] [<pathspec>…]
