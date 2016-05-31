# JavaScript-for-PS
Useful JavaScript for Photoshop


/*
在github上创建一个仓库 ,得到库的地址
仓库HTTP格式地址为：https://github.com/janehoart/JavaScript-for-PS.git
SSH格式地址为： git@github.com:janehoart/JavaScript-for-PS.git
下载gitforWindows安装，打开git bush
cd E:/work/github


登录

git config --global user.name "janehoart"

git config --global user.email "176401868@qq.com"

克隆仓库到本地

git clone https://github.com/janehoart/JavaScript-for-PS.git

或者初始化建立一个仓库

git init


生成添加SSH keys
检查SSH keys是否存在
ls -al ~/.ssh
没有就生成SSH keys.(软件TortoiseGit/puttygen也可以生成)
ssh-keygen -t rsa -C "176401868@qq.com"
生成id_rsa和id_rsa.pub
输入passphrase（本步骤可以跳过）
将key添加到ssh-agent中:
eval "$(ssh-agent -s)"
Agent pid 59566
ssh-add ~/.ssh/id_rsa
将ssh key添加到GitHub中
打开id_rsa.pub文件，复制到GitHub的Add SSH key
或者用命令
clip < ~/.ssh/id_rsa.pub


本地的文件变动提交流程是

变动 注意只对文件有效。空文件夹无效。

git add .  将工作区的内容放到暂存区

git commit -m ‘my commit’ 把暂存区的修改提交  合并 git add . 和git commit 可以用git commit -a

将修改文件（不包括新创建的文件）添加到索引，并提交到仓库

git remote add origin push到远程仓库,同时设置跟踪分支,下次push的时候,直接输入git

push就醒了,系统会自动用本地master分支跟踪远程master分支.

git remote add origin https://github.com/janehoart/new.git

git push -u origin master

弹出登录窗口，登录。刷新网页。同步成功。


下载到本地

git pull https://github.com/janehoart/JavaScript-for-PS.git

之后直接 

git pull

*/
