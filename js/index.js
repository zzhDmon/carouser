
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

