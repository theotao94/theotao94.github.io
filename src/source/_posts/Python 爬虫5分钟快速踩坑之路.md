---
title: Python 爬虫5分钟快速踩坑之路
urlname: hwwlyf
date: '2022-05-25 02:56:31 +0000'
_背景：看到一篇python爬虫文章，想自己尝试一下，原本以为轻松的python之路却因为种种原因而变得不太快乐。_( os: "\U0001F62D \U0001F402 \U0001F40D \U0001F35C )"
tags: []
categories: []
---

# Part 1: python 版本之坑

![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617543355617-36b41ac6-42e4-41a8-9312-ff5505f89712.png#crop=0&crop=0&crop=1&crop=1&height=438&id=Thdmj&margin=%5Bobject%20Object%5D&name=image.png&originHeight=438&originWidth=880&originalType=binary∶=1&rotation=0&showTitle=false&size=190234&status=done&style=none&title=&width=880)

在我们的理解中一个语言的版本兼容应该都会是 **向后兼容 **的，可是 python3.x 版本却宛如一个渣男，
居然与 2.x 版本

**和平分手！ 👋**

3.x 以后的版本大部分是不兼容 2.x 的版本，可以认为是一个全新的版本，这就导致了社区分裂。
可以预见的场景：

A：用 2.x 给 B 写个 🐂 🍺 的功能。
B：大佬，牛蛙牛蛙！我先装个 python 环境等你 😗
A：（两天后）小伙子，拿去装 B 吧！
B：干得漂亮！（ run ）
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
B：大佬语法错误，救救我
A：哟～语法错误不简单，你什么版本
B：3.x
A：我也升级下版本，看看这几个版本改动了什么，调整下语法就 OK 😼
A：？？！我靠靠，怎么连 print 都改动了？字符串也变了？引入模式都改了？@&^#@!\*^#@

Python 为每个版本设计了不同的代码孤岛，社区一直拖拽这些旧版本，所以你最终也只能得到那些旧的、过时的 Python 代码，因为没有人**愿意花时间将它导到最新版本上**。

在你想寻求社区的帮助时，很大可能只能获取到旧的代码。

好奇的我，搜了一下两个版本的差异，看看有哪些区别
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617545717866-af444000-6303-40ff-9979-0ab7499bef5f.png#crop=0&crop=0&crop=1&crop=1&height=144&id=dGIU1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=192&originWidth=240&originalType=binary∶=1&rotation=0&showTitle=false&size=41252&status=done&style=none&title=&width=180)

挑了几个有代表性的
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617545882780-61cdc6a0-c255-4b14-8dca-bba53b61dece.png#crop=0&crop=0&crop=1&crop=1&height=370&id=dRVcc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=370&originWidth=667&originalType=binary∶=1&rotation=0&showTitle=false&size=48000&status=done&style=none&title=&width=667)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617546091838-effe4f0b-827b-4803-9edb-2aa253b7726b.png#crop=0&crop=0&crop=1&crop=1&height=424&id=zVQbF&margin=%5Bobject%20Object%5D&name=image.png&originHeight=424&originWidth=673&originalType=binary∶=1&rotation=0&showTitle=false&size=40120&status=done&style=none&title=&width=673)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617546177012-2d99e677-c064-4182-b4dc-95b24a196705.png#crop=0&crop=0&crop=1&crop=1&height=353&id=rrrSk&margin=%5Bobject%20Object%5D&name=image.png&originHeight=353&originWidth=677&originalType=binary∶=1&rotation=0&showTitle=false&size=48694&status=done&style=none&title=&width=677)

# Part 2: 安装太太太太麻烦了

安装一个 python 你可以使用 apt、yum、rpm 或者 brew 命令去安装，可是如果你不指定版本的话，可能你的电脑上会出现 N 个版本的 python

Python2、Python2.6、Python3 和 Python3.5 ，这是我电脑的版本，前面两个是系统自带的，后面两个是我安装的，虽然版本不一样，但是他们使用的命令是一样的 python ，但是他们底层又是完全不一样的。

所以切记一定要 **指定安装版本！**

这还不是大问题，最大的问题是** 安装依赖 ！**

node 有 npm 管理包，在 python 中则使用 pip（Pip Installs Packages）来管理包，但是由于系统上有许多版本的 Python，你必须记住使用正确版本的 pip。

否则，'pip'可能会运行'pip2'而不是你需要的'pip3.7'。

可以理解为 如果你想安装的库是 3.x 写的但是你的 pip 指定的是 2.x 的话，那么既有可能你在安装过程中出现
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax

![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617544955170-876a9683-606e-4e7e-91d3-aa7fc8011895.png#crop=0&crop=0&crop=1&crop=1&height=120&id=a8r0J&margin=%5Bobject%20Object%5D&name=image.png&originHeight=240&originWidth=240&originalType=binary∶=1&rotation=0&showTitle=false&size=112921&status=done&style=none&title=&width=120)

社区为了弥补一下版本的差异带来的问题，做了点改动

3.x 对应的命令：**python3**
3.x 对应的 pip：**pip3**

# Part 3:寻求解决

还没有开始写代码就遭受了环境之痛，心里默念一句 python 垃圾。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617546507440-bf820956-3f7e-4203-a348-b3a958dead6b.png#crop=0&crop=0&crop=1&crop=1&height=177&id=WZmW9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=333&originalType=binary∶=1&rotation=0&showTitle=false&size=93398&status=done&style=none&title=&width=167)
不过我们的问题还是要解决，我猜测那么肯定会有一些工具帮助我们来解决这个环境之苦，在一番寻找下发现了一款 Anaconda 的软件。

这款软件解决了几个问题

- 环境管理
- 软件包管理
- 链接 IDE
- 示例教程
- 聚集开源社区的资源

[这里下载](https://www.anaconda.com/products/individual)

这就是我们需要的解决方案
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617546806291-68bb4a95-a1f5-47fd-abe6-9c9b951c88c8.png#crop=0&crop=0&crop=1&crop=1&height=219&id=EYiYX&margin=%5Bobject%20Object%5D&name=image.png&originHeight=438&originWidth=440&originalType=binary∶=1&rotation=0&showTitle=false&size=331757&status=done&style=none&title=&width=220)

可以对接主流 IDE

![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617546949365-132cf9b4-b9fb-41bd-8e65-8847eae9498f.png#crop=0&crop=0&crop=1&crop=1&height=364&id=jUtw9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=727&originWidth=2409&originalType=binary∶=1&rotation=0&showTitle=false&size=213570&status=done&style=none&title=&width=1205)
屏蔽 python 环境细节，自带主流包
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617547102897-8ad038ea-d48c-441c-aed0-d4a67de0ceb0.png#crop=0&crop=0&crop=1&crop=1&height=524&id=E0XfL&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1048&originWidth=2543&originalType=binary∶=1&rotation=0&showTitle=false&size=178397&status=done&style=none&title=&width=1272)
这就是我们需要的工具，赶快 mark 一下 📝 。
大力推荐 Notbook 这个 IDE，类似于 Codepen 在线编辑 python，马上开始。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617547281487-e55a9915-fc4e-44a9-b444-8b4e53240ad4.png#crop=0&crop=0&crop=1&crop=1&height=164&id=dBY3i&margin=%5Bobject%20Object%5D&name=image.png&originHeight=327&originWidth=350&originalType=binary∶=1&rotation=0&showTitle=false&size=283625&status=done&style=none&title=&width=175)
开始爬虫 🐛 ！

# Part 4:爬虫相关知识

### 4.1 爬虫的概述

**定义：**
网络爬虫是一个**自动提取网页**的程序，是**搜索引擎**的重要组成。

**通俗的讲：**
每个爬虫都是你的「分身」。就像孙悟空拔了一撮汗毛，吹出一堆猴子一样

**爬虫的主要分布：**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617678016475-4d88b35a-69da-49d3-9ce7-32f6f3b5e657.png#crop=0&crop=0&crop=1&crop=1&height=340&id=fQ8Yc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=340&originWidth=720&originalType=binary∶=1&rotation=0&showTitle=false&size=266357&status=done&style=none&title=&width=720)

**爬虫基本步骤：**

- 模拟身份请求
- 解析 dom
- 获取数据
- 处理数据

### 4.2 爬虫界的“规矩” ： Robots 协议

**全称：**
Robots Exclusion Standard （网络爬虫排除标准）

**作用：**
网站告知网络爬虫哪些页面可以抓取，哪些不行

**形式：**
在网站根目录下的 robots.txt 文件

**例如 jd 官网：**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617677183548-7816074c-e759-434f-86d1-836bcdcb740c.png#crop=0&crop=0&crop=1&crop=1&height=307&id=JuxNZ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=307&originWidth=430&originalType=binary∶=1&rotation=0&showTitle=false&size=28131&status=done&style=none&title=&width=430)

### 4.3 爬虫的尺寸

| 规模   | 特点                                      | 类型         | 占比 |
| ------ | ----------------------------------------- | ------------ | ---- |
| 小规模 | 数据量小，爬取速度不敏感，使用 Requsts 库 | 爬取网页     | 90%  |
| 中规模 | 数据规模大，爬取速度敏感，Scrapy 库       | 爬取系列网站 | 很少 |
| 大规模 | 搜索引擎，爬取速度关键，定制开发          | 爬取全网     | 很少 |

**数据量的评估：**
在 2019 年 05 月 28 日国家网信办发布的《数据安全管理办法（征求意见稿）》中，拟通过行政法规的形式，对爬虫的使用进行限制：

_网络运营者采取自动化手段访问收集网站数据，不得妨碍网站正常运行；此类行为严重影响网站运行，如自动化访问收集流量超过网站日均流量三分之一，网站要求停止自动化访问收集时，应当停止。_

**来点刺激的？我能爬取 robots 协议限定的网页吗？**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617679691845-c9757f54-f0bf-47af-8a59-3c51f5bb6c08.png#crop=0&crop=0&crop=1&crop=1&height=196&id=sL3vb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=240&originalType=binary∶=1&rotation=0&showTitle=false&size=14183&status=done&style=none&title=&width=240)
政府网：[http://www.gov.cn/](http://www.gov.cn/)
教育局：[http://www.moe.gov.cn/](http://www.moe.gov.cn/)

_tips：越界行动注意“尺寸”，只蹭蹭的话是没问题的_

### 4.4 示例爬虫

爬取太平洋汽车的内容
[https://price.pcauto.com.cn/comment/sg2734/](https://price.pcauto.com.cn/comment/sg2734/)

_tips：友情链接 notebook 代码提示 _[_安装指南_](https://www.jianshu.com/p/2e8a6596139a)

#

# Part 5:完结 🎉

- [x] python 环境选择
- [x] 爬虫的概述和规矩
- [x] python 的使用

![image.png](https://cdn.nlark.com/yuque/0/2021/png/131211/1617547281487-e55a9915-fc4e-44a9-b444-8b4e53240ad4.png#crop=0&crop=0&crop=1&crop=1&height=164&id=l1lti&margin=%5Bobject%20Object%5D&name=image.png&originHeight=327&originWidth=350&originalType=binary∶=1&rotation=0&showTitle=false&size=283625&status=done&style=none&title=&width=175)

##
