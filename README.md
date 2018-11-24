# Bueue.js  
--------------------------
![](https://ww2.sinaimg.cn/large/ed039e1fgy1fxjiru7owwj20m808ca9z)  
&nbsp;&nbsp;简单的，让函数们乖♂乖♂站好排成一队的js.  

### Then, how to use it ?  
* 引入js.
```html
<script src='./bueue.min.js' charset='UTF-8'></script>  
```
* 对队列进行操作：  
  1.顺序添加函数：
  ```javascript
  $bueue.c(function);  
  ```
  这样，bueue会自动把你的函数加入队列并赋予一个id.  
  ```javascript
  var a=$bueue.c(function(){
	  console.log('This is the 1st queue');
	  setTimeout(function(){$bueue.next();},2000);
  });
  var b=$bueue.c(function(){
	  console.log('This is the 2nd queue');
	  setTimeout(function(){$bueue.next();},2000);
  });
  var c=$bueue.c(function(){
	  console.log('This is the 3rd queue');
	  setTimeout(function(){$bueue.next();},2000);
  });
  var d=$bueue.c(function(){
	  console.log('This is the 4th queue');
	  setTimeout(function(){$bueue.next();},2000);
  });
  console.log(a+' '+b+' '+c+' '+d);
  ```
  输出：0,1,2,3.没错,bueue项目的id是从0开始计的.
