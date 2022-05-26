npm install
git pull
npm run build

 if [ -n "$(git status -s)" ];then
    echo "检查到有变动文件，准备提交"
    cp -r public/* ../docs/
    cd ../
    git add .
    git commit -m "git local push"
    git push -u origin master                            
fi
