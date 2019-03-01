借助readline实现一个迷你版的npm init功能，运行脚本时，会依次要求用户输入name、version、author属性（其他略过）。

这里用到的是rl.question(msg, cbk)这个方法，它会在控制台输入一行提示，当用户完成输入，敲击回车，cbk就会被调用，并把用户输入作为参数传入。