### debug调试
#### 运行：node debug index.js开启debug模式
 1. 直接运行(断点打在文件第一行)
 2. debugger(断点可以打在任何一行)
#### 执行下一步：next命令
#### 跳到下一个断点：cont命令
#### 查看某个变量的值：repl命令，再次输入变量名，就可以看到对应的值, 退出：ctrl+c
#### 添加/删除:watch()命令
1. 通过watch(expr)来添加监视对象。
2. 通过watchers查看当前所有的监视对象。
3. 通过unwatch(expr)来删除监视对象。
#### 进入/跳出函数（step in、step out）
1. 进入函数：通过step或者s。
2. 跳出函数：通过out或者o。
#### 重新运行: restart(就不用每次输入node debug index.js了)