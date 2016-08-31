/**
 * 弹出框
 */
var Popup = {

	info : function(params) {
		var maxWidth = (window.screen.availWidth - 20) + "px";
		/* 声明全局的传入的参数 */
		var title = params.title, msg = params.message;
		/* div层的css样式 */
		var cssMask = "z-index:99; width:100%; height:100%; position:absolute; top:0px; left:0px; background:#fff; opacity:0; filter:alpha(opacity=0); -moz-opacity:0";
		var cssPanel = "z-index:100;display: block;overflow: hidden; border: 1px solid #bce8f1;border-radius: 5px; background: #d9edf7;color: #3170a9;width:70%;max-width:" + maxWidth + ";position:fixed; top: 35%;left: 15%;";
		var cssTitle = "width:100%;height:6.0rem;font-size:3.5rem;margin-bottom: 5px;padding: 8px 2.0rem;line-height: 6rem;";
		var cssContent = "margin:2.0rem;font-size: 3rem;";
		var cssBtndiv = "z-index: 101;width:100%;height:6rem;background:#d9edf7;";
		var cssBtna = "font-size:2.5rem;display: block;overflow: hidden;color: #245269;float: right;height: 4rem;line-height: 4rem;margin: 1.0rem 2.5rem;cursor: pointer;";
		/* 动态创建的遮罩层 */
		var mask = document.createElement("div");
		mask.style.cssText = cssMask;
		document.documentElement.appendChild(mask);

		/* 动态创建单个div */
		var panelDiv = document.createElement("div"), titleDiv = document
				.createElement("div"), contentDiv = document
				.createElement("div"), buttonDiv = document
				.createElement("div"), buttonA = document.createElement("a");
		/* 声明变量为div添加内容，设置为textNode值 */
		var titNode = document.createTextNode(title), conNode = document
				.createTextNode(msg), btnNode = document.createTextNode("确定");
		/* 向页面中添加总的div */
		document.documentElement.appendChild(panelDiv);
		/* 向总的div中添加子元素 */
		panelDiv.appendChild(titleDiv);
		panelDiv.appendChild(contentDiv);
		panelDiv.appendChild(buttonDiv);
		buttonDiv.appendChild(buttonA);
		/* 给div添加拿到的textNode值 */
		titleDiv.appendChild(titNode);
		contentDiv.appendChild(conNode);
		buttonA.appendChild(btnNode);
		/* 为每一个div层添加已设置好的样式 */
		panelDiv.style.cssText = cssPanel;
		titleDiv.style.cssText = cssTitle;
		contentDiv.style.cssText = cssContent;
		buttonDiv.style.cssText = cssBtndiv;
		buttonA.style.cssText = cssBtna;
		/* 设置点击按钮移除弹出层的效果 */
		buttonA.onclick = function() {
			document.documentElement.removeChild(mask);
			document.documentElement.removeChild(panelDiv);
		}
	},

	warn : function(params) {
		var maxWidth = (window.screen.availWidth - 20) + "px";
		var title = params.title, msg = params.message;
		var cssMask = "z-index:88; width:100%; height:100%; position:absolute; top:0px; left:0px; background:#000; opacity:0.75; filter:alpha(opacity=75); -moz-opacity:0.7";
		var cssPanel = "z-index:100;display: block;overflow: hidden; border: 1px solid #faebcc;border-radius: 5px; background: #fcf8e3;color: #665131;width:70%;max-width:" + maxWidth + ";position:fixed; top: 35%;left: 15%;";
		var cssTitle = "z-index:102;width:100%;height:6.0rem;font-size:3.5rem;margin-bottom: 5px;padding: 8px 2.0rem;line-height: 6rem;";
		var cssContent = "margin:2.0rem;font-size: 2.8rem;";
		var cssBtndiv = "z-index: 101;width:100%;height:6rem;background:#fcf8e3;";
		var cssBtna = "font-size:2.5rem;display: block;overflow: hidden;color: #ffaa33;float: right;height: 4rem;line-height: 4rem;margin: 1.0rem 2.5rem;cursor: pointer;";
		var mask = document.createElement("div");
		mask.style.cssText = cssMask;
		document.documentElement.appendChild(mask);

		var panelDiv = document.createElement("div"), titleDiv = document
				.createElement("div"), contentDiv = document
				.createElement("div"), buttonDiv = document
				.createElement("div"), buttonA = document.createElement("a");
		var titNode = document.createTextNode(title), conNode = document
				.createTextNode(msg), btnNode = document
				.createTextNode("确定");
		document.documentElement.appendChild(panelDiv);
		panelDiv.appendChild(titleDiv);
		panelDiv.appendChild(contentDiv);
		panelDiv.appendChild(buttonDiv);
		buttonDiv.appendChild(buttonA);
		titleDiv.appendChild(titNode);
		contentDiv.appendChild(conNode);
		buttonA.appendChild(btnNode);
		panelDiv.style.cssText = cssPanel;
		titleDiv.style.cssText = cssTitle;
		contentDiv.style.cssText = cssContent;
		buttonDiv.style.cssText = cssBtndiv;
		buttonA.style.cssText = cssBtna;
		buttonA.onclick = function() {
			document.documentElement.removeChild(mask);
			document.documentElement.removeChild(panelDiv);
		}
	},

	error : function(params) {
		var maxWidth = (window.screen.availWidth - 20) + "px";
		var title = params.title, msg = params.message;
		var cssMask = "z-index:99; width:100%; height:100%; position:absolute; top:0px; left:0px; background:#000; opacity:0.75; filter:alpha(opacity=75); -moz-opacity:0.7";
		var cssPanel = "z-index:100;display: block;overflow: hidden; border: 1px solid #ebccd1;border-radius: 5px; background: #f2dede;color: #a94442;width:70%;max-width:" + maxWidth + ";position:fixed; top: 35%;left: 15%;";
		var cssTitle = "width:100%;height:6.0rem;font-size:3.5rem;margin-bottom: 5px;padding: 8px 2.0rem;line-height: 6rem;";
		var cssContent = "margin:2.0rem;font-size: 2.8rem;";
		var cssBtndiv = "z-index: 101;width:100%;height:6rem;background:#f2dede;";
		var cssBtna = "font-size:2.5rem;display: block;overflow: hidden;color: #843534;float: right;height: 4rem;line-height: 4rem;margin: 1.0rem 2.5rem;cursor: pointer;";

		var mask = document.createElement("div");
		mask.style.cssText = cssMask;
		document.documentElement.appendChild(mask);

		var panelDiv = document.createElement("div"), titleDiv = document
				.createElement("div"), contentDiv = document
				.createElement("div"), buttonDiv = document
				.createElement("div"), buttonA = document.createElement("a");
		var titNode = document.createTextNode(title), conNode = document
				.createTextNode(msg), btnNode = document
				.createTextNode("确定");
		document.documentElement.appendChild(panelDiv);
		panelDiv.appendChild(titleDiv);
		panelDiv.appendChild(contentDiv);
		panelDiv.appendChild(buttonDiv);
		buttonDiv.appendChild(buttonA);
		titleDiv.appendChild(titNode);
		contentDiv.appendChild(conNode);
		buttonA.appendChild(btnNode);
		panelDiv.style.cssText = cssPanel;
		titleDiv.style.cssText = cssTitle;
		contentDiv.style.cssText = cssContent;
		buttonDiv.style.cssText = cssBtndiv;
		buttonA.style.cssText = cssBtna;
		buttonA.onclick = function() {
			document.documentElement.removeChild(mask);
			document.documentElement.removeChild(panelDiv);
		}
	}
}