/**
 * 
 */
var FastJs = {
		/**
		 * 格式化字符串
		 */
		messageFormat: function(msg, array) {

			var len = array.length;
			for(var i = 0, j = len; i < j; i++) {
				msg = msg.replace("{" + i + "}", array[i]);
			}

			return msg;
		},

		//判断是否在微信浏览器中打开
		isWeixinBrowser: function() {

			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == "micromessenger") {
				return true;
			} else {
				return false;
			}
		},

		// 判断是否在支付宝浏览器中打开
		isZhifubaoBrowser: function() {

			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/Alipay/i) == "Alipay" || ua.match(/alipay/i) == "alipay") {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * 截取地址栏的参数
		 */
		parseUrlParam: function() {
			var currentUrl = location.href;
			var index = currentUrl.indexOf("?");
			if(index == -1) {
				return null;
			}

			var params = currentUrl.substring(index + 1);
			var paramsSeq = params.split("&");
			var data = {};
			for(var i = 0, j = paramsSeq.length; i < j; i++) {
				var split = paramsSeq[i].split("=");
				var k = split[0];
				var v = unescape(split[1]);
				console.log(k + "=" + v);
				data[k] = v;
			}

			return data;
		},

		/**
		 * 把数据绑定到表单
		 */
		viewBindData: function(frm, data, dataType) {
			
			var frmData;
			
			if ("json" == dataType || "JSON" == dataType) {
				frmData = data;
				
			} else if ("form" == dataType || "FORM" == dataType) {
				frmData = {};
				var params = data.split("&");
				for (var i = 0, j = params.length; i < j; i++) {
					var seq = params[i];
					var split = seq.split("=");
					if (split.length == 2) {
						var name = split[0];
						var val = split[1];
						frmData[name] = decodeURI(val);
					}
				}
			}
			
			var childrens = frm.children;
			for (var i = 0, j = childrens.length; i < j; i++) {
				
				var e = childrens[i];
				var val = frmData[e.name];
				
				if (null != val && undefined != val) {
					
					var tagName = e.tagName;
					if ("input" == tagName || "INPUT" == tagName
						|| "select" == tagName || "SELECT" == tagName) {
						
						var eType = e.type;
						if ("button" == eType || "BUTTON" == eType) {
							continue;
						}
						if ("checkbox" == eType || "CHECKBOX" == eType
							|| "file" == eType || "FILE" == eType) {
						
						} else {
							
							e.value = val;
						}
					}
				}	
			}
		},

		/**
		 * 获取表单数据
		 */
		getFormData: function(frm, type) {
			
			var childrens = frm.children;
			var data;
			if ("json" == type || "JSON" == type) {
				data = {};
			} else if ("form" == type || "FORM" == type) {
				data = "";
			}
			
			for (var i = 0, j = childrens.length; i < j; i++) {
				var e = childrens[i];
				var tagName = e.tagName;
				if ("input" == tagName || "INPUT" == tagName
					|| "select" == tagName || "SELECT" == tagName) {
					
					var name = e.name;
					var val;
					var eType = e.type;
					if ("button" == eType || "BUTTON" == eType) {
						continue;
					}
					
					if ("checkbox" == eType || "CHECKBOX" == eType
						|| "file" == eType || "FILE" == eType) {
						
					} else {
						
						val = e.value;
					}
					
					// 保存到data
					if (null != name && undefined != name
						&& null != val && undefined != val) {
						if ("json" == type || "JSON" == type) {
							data[name] = val;
						} else if ("form" == type || "FORM" == type) {
							data += "&" + name + "=" + encodeURI(val);
						}
					}
				}
			}
			
			if ("form" == type || "FORM" == type) {
				return "" == data ? data : data.substring(1);
			}
			
			return data;
		}
}