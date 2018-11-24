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
  
  2.啊不想要这个函数待着了，从队列里移除吧！  
  ```javascript
  $bueue.d(id);  
  ```
  id即为顺序添加时返回的值.  
  
  3.队列里空出来一个位置，插入一个函数吧！  
  ```javascript
  $bueue.e(id,function);  
  ```
  这将会在队列中指定id的**空位**插入一个函数，这里有个小技巧，你需要先删除原有位置上的函数。  
  
  4.让队列开始执行.  
  ```javascript
  $bueue.start();  
  ```
  
  5.来一发<del>仙人跳</del>跳跃执行~  
  ```javascript
  $bueue.jump(id);  
  ```
  执行这一步后接下来执行的便是编号为id的函数.  
  
  6.执行下一个.  
  ```javascript
  $bueue.next();  
  ```
  这个方法通常在上一个函数的末尾加入，以在上一个函数运行结束时能开始执行下一个.  
  
  7.重置队列.  
  ```javascript
  $bueue.re();  
  ```
  当不带bool值时，这个方法默认是复原id计数，从第一个函数开始执行.  
  ```javascript
  $bueue.re(true);  
  ```
  但是当带上true时会清除队列，一切回到解放前.  
  
  8.打开/关闭DEBUG输出.  
  ```javascript
  $bueue.de(true/false);  
  ```
  输出默认关闭，当开启输出时，控制台会显示队列的情况：  
  ![](https://ww2.sinaimg.cn/large/ed039e1fgy1fxjmpupt9nj20bp0k4jry)  
  
### Example  
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
$bueue.c(function(){
	console.log('This is the END.');
});

$bueue.start();
```
输出结果： 
```
This is the 1st queue
This is the 2nd queue
This is the 3rd queue
This is the 4th queue
This is the END.
```
