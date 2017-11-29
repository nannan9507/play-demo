# ssr
```
作为SSR的模板
富文本编辑器使用了百度的ueditor，但是这里有个坑，
富文本编辑器点击上传图片按钮时，卡顿过长，imageuploader中image/*导致类型检测过长
需要写成具体的 image/png,image/gif......

但是因为写在闭包中，无法修改，所以只能直接修改源码，同时在package.json里面去除，不会每次都更新
```
