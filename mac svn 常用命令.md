
### 1. 迁入远程库
```
svn checkout svn地址,简写:svn co svn地址 
```

### 2. 添加修改文件
```
svn add index.js 指定某一文件
svn add *.* 添加所有修改文件
svn add *.js 添加所有后缀为.js的文件
```

### 3. 提交文件
```
svn ci -m"描述（可为空）"
```

### 4. 删除文件
```
svn delete  简写：svn del/remove/rm
```

### 5. 更新代码
```
svn update  简写 svn up
svn update  更新所有文件
svn update -r 200 index.js  (将版本库中的文件index.js还原到版本200)
svn update index.js  (更新单一文件，于版本库同步。如果在提交的时候提示过期的话，是因为冲突，需要先update，修改文件，然后清除svn resolved，最后再提交commit)
```

### 6.查看文件详情信息
```
svn info
```

### 7. 查看log
```
svn log
```

### 8. svn status
```
简写：svn st

svn status [path]其字符的含义如下：
‘ ‘ no modifications. 没有改动
‘A’ Added. 新增加的项目
‘C’ Conflicted. 项目内容与更新得到的数据冲突了
‘D’ Deleted. 要删除的项目
‘I’ Ignored. 已忽略
‘M’ Modified. 内容有改动
‘R’ Replaced. 在svn仓库中是一个目录, 在本地是一个同名的文件. 反之亦然.
‘X’ 项目未版本化, 与外部连接相关
‘?’ 未版本化的文件
‘!’ 项目丢失, 或者说目录不完整
‘~’ 本地有一个未版本化的项目, 在svn仓库里有一个同名项目
```

### 9. 比较差异
``` 
svn diff path   简写: svn di
例如： svn diff index.js
svn diff -r m:n path    m版和n版差异比较
例如： svn diff -r 100:101 index.js
```

### 10. 将两个版本之间的差异合并到当前文件
```
svn merge -r m:n path
例如：svn merge -r 200:205 test.php（将版本200与205之间的差异合并到当前文件，但是一般都会产生冲突，需要处理一下）
```
### 10. svn 帮助
```
svn help
svn help ci
```












