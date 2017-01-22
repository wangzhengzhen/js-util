/**
 * 验证工具
 */
function Validator() {
	
	var fields = new Array();
	var index = 0;
	
	/**
	 * 添加验证
	 * 参数说明：
	 * 参为为json类型，key代表
	 * 	rule 验证规则，传入已有的函数
	 * 	ruleParams	验证规则所需的参数，非必须
	 * 	id	input text 唯一标识，可为空，为空不传
	 * 	name	用于单选或复选按纽取值，可为空，为空不传
	 * 	value 值，如果指定id，则可为空，为空不传
	 * 	failDesc	错误描述
	 */
	this.add = function(params) {
		
		fields[index++] = params;
	}
	
	/**
	 * 执行检查
	 * 
	 */
	this.check = function(params) {
		
		// 是否检查所有，false，验证失败时结束
		var checkAll = params.checkAll;
		// 验证失败后调用的错误方法
		var failFn = params.failure;
		
		var result = new Array();
		var failIndex = 0;
		
		for (var i = 0, j = fields.length; i < j; i++) {
			
			var tmp = fields[i];
			var rule = tmp.rule;
			var ruleParams = tmp.ruleParams;
			var id = tmp.id;
			var name = tmp.name;
			var val = tmp.value;
			
			if (null != id) {
				val = document.getElementById("id").value;
			}
			
			var flag;
			if (null == ruleParams) {
				flag = rule(val);
			} else {
				ruleParams.value = val;
				flag = rule(ruleParams);
			}
			
			if (! flag) {
				// 验证不通过
				result[failIndex++] = tmp;
				if (!checkAll) {
					break;
				}
			}
		}
		
		if (result.length == 0) {
			return true;
		}

		if (checkAll) {
			failFn(result);
		} else {
			failFn(result[0]);
		}
		
		return false;
	}
}

/**
 * 是否为null
 */
Validator.prototype.notIsNull = function(val) {
	
	return val != null;
}

/**
 * 是否为空
 */
Validator.prototype.notIsEmpty = function(val) {
	
	return val != null && val != "";
}

/**
 * 是否是手机号码
 */
Validator.prototype.isMobileNumber = function(val) {
	var reg = /^[1][3-8]\d{9}$/;
	return reg.test(val);
}

/**
 * 是否是身份证
 */
Validator.prototype.isIdCard = function(val) {
	var reg = /^[1-9]\d{5}(19\d{2}|[2-9]\d{3})((0\d)|(1[0-2]))(([0-2]\d)|3[0-1])(\d{4}|\d{3}X)$/i;
	return reg.test(val);
}

/**
 * 是否是邮箱
 */
Validator.prototype.isEmail = function(val) {
	var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	return reg.test(val);
}

/**
 * 是否是日期格式
 */
Validator.prototype.isDatetime = function(val) {
	
}

/**
 * 是否是纯数字
 */
Validator.prototype.isPureDigit= function(val) {
	
	var pattern =/^\d+(.){0,1}\d*$/;
	return pattern.exec(val);
}

/**
 * 是否是存字母
 */
Validator.prototype.isPureLetter= function(val) {
	
}

/**
 * 验证只能6到12位
 */
Validator.prototype.isPwd = function(val) {
	
	var reg = /^[\w]{6,12}$/;
	return reg.test(val);
}

/**
 * 是否是汉字
 */
Validator.prototype.isHanzi = function(val) {
	
	var reg = new RegExp("^[\\w\\u4E00-\\u9FA5\\w]*$");
	return reg.test(val);
}

/**
 * 是否包含汉字
 */
Validator.prototype.containsHanzi = function(val) {
	
	var reg = new RegExp("^[\\w\\u4E00-\\u9FA5\\w]*$");
	return reg.test(val);
}

/**
 * 不包含汉字
 */
Validator.prototype.notContainsHanzi = function(val) {
	
	var reg = new RegExp("^[\\w\\u4E00-\\u9FA5\\w]*$");
	return ! reg.test(val);
}
/**
 * 验证只能输入字母、数字、和下划线
 */
Validator.prototype.isUser = function(val) {
	
	var reg = /^[0-9a-zA-Z\w]*$/;
	return reg.test(val);
}

/**
 * 是否包含特殊字符
 */
Validator.prototype.containsSymbol = function(val) {
	
}

/**
 * 长度限制
 */
Validator.prototype.limit = function(params) {
	
	var val = params.value;
	var minLen = params.minLength;
	var maxLen = params.maxLength;
	
}

/**
 * 数值范围
 */
Validator.prototype.range  = function(params) {
	
	var val = params.value;
	var minVal = params.minValue;
	var maxVal = params.maxValue;
	
}

/**
 * 匹配指定的正则表达式
 */
Validator.prototype.matched = function(params) {
	
	var regExp = params.regExp;
	var val = params.value;
	
	var reg = new RegExp(regExp);
	return reg.test(val);
}