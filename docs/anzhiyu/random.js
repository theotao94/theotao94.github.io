var posts=["2022/05/26/Python 爬虫5分钟快速踩坑之路/","2022/05/26/语雀 + GitAction + hexo 自动发布，省心写博客/","2022/07/20/前端开发部署笔记/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};