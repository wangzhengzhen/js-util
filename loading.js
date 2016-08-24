/**
 * 加载时动画
 */
function Loading() {
	
	var cssMask = "width:100%; height:100%; position:absolute; top:0px; left:0px; background:#000000; opacity:0.50; filter:alpha(opacity=50); -moz-opacity:0.50";
	var cssContent = "z-index:100; padding:8px 12px 8px 12px; position:fixed; top: 40%; left:40%; background:#ffffff;";
	
	this.show = function(data) {
		
		var mask = document.createElement("div");
		mask.style.cssText = cssMask;
		document.documentElement.appendChild(mask);
		
		var content = document.createElement("div");
		content.innerText = "正在加载...";
		content.style.cssText = cssContent;
		
		document.documentElement.appendChild(content);
	}
	
	this.hide = function(data) {
		
	}
}