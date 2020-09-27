
function ajax(url, callback) {//ajax 封装函数
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if(xhr.status == 200){
				var data = JSON.parse(xhr.responseText);
				callback&&callback(data.datas);
			}
			if (xhr.status == 404) {
				alert('获取失败,需要服务器或HB内置服务器打开');
			}
		}
	}
}


$(function(){//文档加载完毕执行

	//遍历菜单
	var html = '';
	var ulsArr = [4, 4, 3, 4, 3, 3, 2, 4, 3, 3];
	var imgArr = [
		'image/banner/9f26030d7d914b86daca51233a3ac5f9.webp',
		'image/banner/23316088a9182a08c624958319924d8d.webp',
		'image/banner/2cb85b96b12395fdaa7bccaf8f94e758.jpg',
		'image/banner/067f4a6f0ffb264ed40734a97deae52d.jpg',
		'image/banner/23316088a9182a08c624958319924d8d.webp'
	];
	for(var i = 0; i <= 10; i++){
		html += '<div class="ban_box">'
		for(var j = ulsArr[i]; j > 0; j--){
			html += '<ul>';
			for(var k = 6; k > 0; k--){
				nu = Math.floor(Math.random() * 5 );
				html += ('<li><a href="##"><img src="'+ imgArr[nu] +'" /><span>背包</span></a></li>');
			}
			html += '</ul>';
		}
		html += '</div>'
	}
	document.querySelector('.lists').innerHTML = html;
	
	//菜单事件
	var index;
	$('.banner_nav li').mouseenter(function () {
		$(this).addClass('hov').siblings().removeClass('hov');
		$('.lists').show();
		$('.ban_box').eq($(this).index()).show().siblings().hide();
		index = $(this).index()
	})
	$('.banner_nav li').mouseleave(function () {
		$(this).removeClass('hov');
		$('.lists').hide();
	})
	$('.lists').mouseenter(function() {
		$(this).show()
		$('.banner_nav li').eq(index).addClass('hov')
	})
	.mouseleave(function () {
		$(this).hide()
		$('.banner_nav li').eq(index).removeClass('hov')
	})
	
	//遍历闪购
	$.ajax({
	type:"get",
	url:"json/shangou.json",
	async:true,
	success: function (res) {
		var reArr = res.datas;
		var html1 ='';
		var index = 0;
		for(var i = 0; i < reArr.length; i++){
			html1 += '<div class="new_mid_pic fl"><img src="image/icon/top_icon'+ (i%8) +'.jpg" /><p class="p1">'+reArr[i]['name']+'</p><p class="p2">'+reArr[i]['ps']+'</p><p class="p3">'+reArr[i]['pic']+'</p></div>'
		}
		document.querySelector('.wraps').innerHTML = html1;

		$('.next').click(function () {
			if (index == -(reArr.length/4 - 1)) {
				$('.next').removeClass('.btnOk');
				$('.next').addClass('.btnDis'); 
				return;
			}
			index--;
			$('.wraps').animate({left: index * 992}, 500)
		})
		$('.prev').click(function () {
			if (index == 0) {
				return;
			}
			index++;
			$('.wraps').animate({left: index * 992}, 500)
		})
	},
});
	
	//遍历手机区域
	ajax("json/shouji.json",function(data){
		var html ='';
		for(var i = 0; i < data.length; i++){
			html += '<div class="con_r_li fl"><p class="p1">减 200 元</p><img src="image/icon/top_icon'+i+'.jpg" /><p class="p2">'+data[i]['name']+'</p><p class="p3">'+data[i]['ps']+'</p><p class="p4">'+data[i]['pic']+'</p></div>'
		}
		document.querySelector('.sji').innerHTML = html;
	});
	
	
	//回到顶部
	$(window).scroll(function () {
		var scrTop = $(window).scrollTop();
		if (scrTop > 900) {
			$('.gotop').fadeIn(200)
		} else { 
			$('.gotop').fadeOut(200)
		}
	})
	$('.gotop').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 800)
	})
	$('.gotop').mouseover(function () {
		$('.gotop img').attr('src','image/totop_hover.png');
	})
	$('.gotop').mouseout(function () {
		$('.gotop img').attr('src','image/totop.png');
	})
	
	
	//切换
	$('.fo1 .foolli').mouseover(function (ev) {
		$index = $('.fo1 .foolli').index(ev.currentTarget);
		$('.fo1 .foolli').removeClass('acqh');
		$(ev.currentTarget).addClass('acqh');
		$('.fo1 .fool1_con_r').removeClass('xian');
		$('.fo1 .fool1_con_r').eq($index).addClass('xian');
	})
	$('.fo2 .foolli').mouseover(function (ev) {
		$index = $('.fo2 .foolli').index(ev.currentTarget);
		$('.fo2 .foolli').removeClass('acqh');
		$(ev.currentTarget).addClass('acqh');
		$('.fo2 .fool1_con_r').removeClass('xian');
		$('.fo2 .fool1_con_r').eq($index).addClass('xian');
	})
	$('.fo3 .foolli').mouseover(function (ev) {
		$index = $('.fo3 .foolli').index(ev.currentTarget);
		$('.fo3 .foolli').removeClass('acqh');
		$(ev.currentTarget).addClass('acqh');
		$('.fo3 .fool1_con_r').removeClass('xian');
		$('.fo3 .fool1_con_r').eq($index).addClass('xian');
	})
	$('.fo4 .foolli').mouseover(function (ev) {
		$index = $('.fo4 .foolli').index(ev.currentTarget);
		$('.fo4 .foolli').removeClass('acqh');
		$(ev.currentTarget).addClass('acqh');
		$('.fo4 .fool1_con_r').removeClass('xian');
		$('.fo4 .fool1_con_r').eq($index).addClass('xian');
	})
	$('.fo5 .foolli').mouseover(function (ev) {
		$index = $('.fo5 .foolli').index(ev.currentTarget);
		$('.fo5 .foolli').removeClass('acqh');
		$(ev.currentTarget).addClass('acqh');
		$('.fo5 .fool1_con_r').removeClass('xian');
		$('.fo5 .fool1_con_r').eq($index).addClass('xian');
	})
	
});



