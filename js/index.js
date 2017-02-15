
/*
 * 首先准备吧代码改成这样：
function slide(){
	//把下面的所有代码粘贴过来
}
slide();
*/

/*
function slide(){
	//规定好每张图片处于的位置和状态
	var states = [
					{ZIndex:1,width:120,height:150,top:69,left:134,ZOpacity:0.2},
					{ZIndex:2,width:130,height:170,top:59,left:0,ZOpacity:0.5},
					{ZIndex:3,width:170,height:218,top:35,left:110,ZOpacity:0.7},
					{ZIndex:4,width:224,height:288,top:0,left:263,ZOpacity:1},
					{ZIndex:3,width:170,height:218,top:35,left:470,ZOpacity:0.7},
					{ZIndex:2,width:130,height:170,top:59,left:620,ZOpacity:0.5},
					{ZIndex:1,width:120,height:150,top:69,left:500,ZOpacity:0.2}
				 ];
	
	var lis = $('#box li');
		//让每个 li 对应上面 states 的每个状态
	function move(){
		lis.each(function(index,ele){
			var state = states[index];
			$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
		})
	}
	//让li从正中间展开
	move();
	
	//下一张，让轮播图发生偏移
	function next(){
		//原理：把数组最后一个元素移到第一位
		//在前面插入删除的最后一个元素
	//	var obj = states.pop();
	//	states.unshift(obj);
		states.unshift(states.pop());
		move();
	}
	
	//上一张，让轮播图发生偏移
	function prev(){
		//原理：把数组第一个元素移到最后一个
		states.push(states.shift());
		move();
	}
	
	//点击上一张
	$('#box .prev').click(function(){
		prev();
	});
	
	//点击下一张 （section）
	$('#box .next').click(function(){
		next();
	});
	
	
	//自动轮播
	var interval = null;
	function autoPlay(){
		interval = setInterval(function(){
			next();
		},2000)
	
	}
	autoPlay();
	
	//停止轮播
	lis.add('#box section').hover(function(){
		clearInterval(interval)
	},function(){
		autoPlay();
	})
}
//调用全局变量 slide
slide();
*/



/*
 *变量的作用域问题：
 * 1.全局域[Window]		2.函数域（Function 域）		（3.Block域）
 * 		全局域：从页面被打开之后带页面被关闭之前始终存在的。
 * 		函数域：存在于函数调用的一瞬间（也不一定，考虑闭包的存在）
 * 
 * 闭包的理解：
 * 		闭包的作用：可以保留函数的作用域（也就是说让函数的作用域留长点时间），
 * 					要不然闭包里的函数move()就不能使用slide函数域里面的变量：states、lis等
 * 		闭包产生的必要条件：函数里面套函数（内层函数要使用外层函数作用域里面的变量）
 * 
 * 全局变量会产生闭包吗？
 * 	不会。因为全局变量存在于全局域里。全局域不会消失。
 * */



/*
 *我们 的轮播图能封装成插件吗？会产生什么问题？
 * 1.插件中最好不要使用id， 原因：插件是能够被重复使用的，也就是说在同一页面中可能多次使用，造成冲突
 * 2.变量的命名和方法的命名：states、interval、move()、next()。用户在使用这个插件的时候，可能还会
 * 		在即创建 js 文件，也有这样的命名，那么久产生冲突了
 * 3.标签 class 的值得问题：prev、next。这些 class 太大众化了，谁写标签都命名 prev 或者 next ，势必会产生冲突
 * 4.插件文件名的命名问题：index.js、index.css，命名大众化。比如这样修改：jQuery.ZYSlide.js
 * */



//自运行匿名函数
/*
(function(){
	alert('自运行匿名函数')；
})()

$(function(){
	alert('自运行匿名函数')；
})
*/

(function(){
	//规定好每张图片处于的位置和状态
	var states = [
					{ZIndex:1,width:120,height:150,top:69,left:134,ZOpacity:0.2},
					{ZIndex:2,width:130,height:170,top:59,left:0,ZOpacity:0.5},
					{ZIndex:3,width:170,height:218,top:35,left:110,ZOpacity:0.7},
					{ZIndex:4,width:224,height:288,top:0,left:263,ZOpacity:1},
					{ZIndex:3,width:170,height:218,top:35,left:470,ZOpacity:0.7},
					{ZIndex:2,width:130,height:170,top:59,left:620,ZOpacity:0.5},
					{ZIndex:1,width:120,height:150,top:69,left:500,ZOpacity:0.2}
				 ];
	
	var lis = $('#box li');
		//让每个 li 对应上面 states 的每个状态
	function move(){
		lis.each(function(index,ele){
			var state = states[index];
			$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
		})
	}
	//让li从正中间展开
	move();
	
	//下一张，让轮播图发生偏移
	function next(){
		//原理：把数组最后一个元素移到第一位
		//在前面插入删除的最后一个元素
	//	var obj = states.pop();
	//	states.unshift(obj);
		states.unshift(states.pop());
		move();
	}
	
	//上一张，让轮播图发生偏移
	function prev(){
		//原理：把数组第一个元素移到最后一个
		states.push(states.shift());
		move();
	}
	
	//点击上一张
	$('#box .prev').click(function(){
		prev();
	});
	
	//点击下一张 （section）
	$('#box .next').click(function(){
		next();
	});
	
	
	//自动轮播
	var interval = null;
	function autoPlay(){
		interval = setInterval(function(){
			next();
		},2000)
	
	}
	autoPlay();
	
	//停止轮播
	lis.add('#box section').hover(function(){
		clearInterval(interval)
	},function(){
		autoPlay();
	})	
})()

