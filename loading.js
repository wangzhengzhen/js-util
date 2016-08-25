/**
 * 加载时动画
 */
function Loading() {
	
	var mask, content;
	
	var cssMask = "width:100%; height:100%; position:absolute; top:0px; left:0px; background:#000000; opacity:0.50; filter:alpha(opacity=50); -moz-opacity:0.50";
	var cssContent = "z-index:100; padding:8px 12px 8px 12px; position:fixed; top: 40%; left:40%; background:#ffffff;";
	
	this.show = function(data) {
		
		mask = document.createElement("div");
		mask.style.cssText = cssMask;
		document.documentElement.appendChild(mask);
		
		content = document.createElement("div");
		content.innerText = "正在加载...";
		content.style.cssText = cssContent;
		mask.appendChild(content);
		document.documentElement.appendChild(content);
	}
	
	this.dismiss = function(data) {
		document.documentElement.removeChild(mask);
		document.documentElement.removeChild(content);
	}
}