
(function ($) {//闭包

	
   
	var opt={
		navValues:[
		{navTest:"导航1",navSnav:[["导航1.1","#"],["导航1.2","#"],["导航1.3","#"],["导航1.4","#"]],href:"#",id:"",active:"active"},
		{navTest:"导航2",navSnav:[["导航2.1","#"],["导航2.2","#"]],href:"#",id:"",active:""},
		{navTest:"导航3",navSnav:[["导航3.1","#"]],href:"#",id:"",active:""},
		{navTest:"导航4",navSnav:[["导航4.1","#"],["导航4.2","#"],["导航4.3","#"],["导航4.4","#"],["导航4.5","#"],["导航4.5","#"],["导航4.6","#"],["导航4.7","#"],["导航4.8","#"]],href:"#",id:"",active:""},
		{navTest:"导航5",navSnav:[["导航5.1","#"],["导航5.2","#"],["导航5.3","#"],["导航5.4","#"],["导航5.5","#"],["导航5.5","#"],["导航5.6","#"],["导航5.7","#"],["导航5.8","#"],["导航5.9","#"],["导航5.10","#"],["导航5.11","#"]],href:"#",id:"",active:""},
		{navTest:"导航6",navSnav:[["导航6.1","#"],["导航6.2","#"],["导航6.3","#"]],href:"#",id:"",active:""}
		],
		
		navValuesActive:[0],//选项第几个为活动项
		
		html:'<li class="sy_navli"><a class="sy_navlia"></a><div class="sy_snav clear"></div></li>'
	}
	
	
	$.fn.extend({
		"Nav_s": function (options) {
			if (!isValid(options)) return this;
			var opts = $.extend({}, opt, options);
			return this.each(function (i) {
				$("body").append('<div class="yc" id="mould"></div>');
					$("#mould").html(opts.html)
					var m=$("#mould");
					var thisHtml="";
					for(var i=0;i<opts.navValues.length;i++){
						
						m.find(".sy_navlia")
						.html(opts.navValues[i].navTest)
						.attr("href",opts.navValues[i].href)
						.attr("id",opts.navValues[i].id)
						.parent().addClass(opts.navValues[i].active);
						var snavNumber=opts.navValues[i].navSnav.length;
						var liaW=($(this).width()*7)/100;
						for(var j=0;j<snavNumber;j++){
							m.find(".sy_snav").append('<a class="sy_snavli" style="width:'+liaW+'px" href="'+opts.navValues[i].navSnav[j][1]+'">'+opts.navValues[i].navSnav[j][0]+'</a>');
						}
						if(snavNumber>3){
								var snavW=Math.ceil(snavNumber/3);
								//console.log(snavW,i);
								snavW=snavW*liaW;
								m.find(".sy_snav").css("width",snavW+"px")
						}
						thisHtml+=m.html();
						m.find(".sy_navlia").html("").attr("href","#").attr("id","").parent().removeClass("active");
						m.find(".sy_snav").html("").css("width",liaW+"px");
					}
					$(this).html(thisHtml);
					m.remove();
					
				});	
					
		}
			
	});
	
	//私有方法，检测参数是否合法
	function isValid(options) {
	   return !options || (options && typeof options === "object") ? true : false;
	}	
})(window.jQuery);