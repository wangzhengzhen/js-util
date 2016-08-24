/**
 * 分页JS，依赖jquery
 */
var paging_style_ul = {"list-style": "none"};
var paging_style_li = {"display": "inline-block", "margin-left": "5px"};
var paging_style_li_number = {"padding": "0px 2px 0px 2px", "color": "#000000"};
var paging_style_li_current = {"color": "#ff0000"};
var paging_style_li_number_hover = {"cursor": "pointer", "color": "#0000ff"};
var paging_style_li_start = {"color": "#000000"};
var paging_style_li_start_hover = {"cursor": "pointer", "color": "#0000ff"};
var paging_style_li_end = {"color": "#000000"};
var paging_style_li_end_hover = {"cursor": "pointer", "color": "#0000ff"};
var paging_style_li_total = {"padding": "0px 2px 0px 2px"};
var paging_style_li_count = {"padding": "0px 0px 0px 4px"};

$.paging = function(data) {
	
	this.query = function(p) {
		if (null == p) {
			p = $("#paging-current").val();
		}
		queryForPaging(p);
	};
	this.setField = function(name, val) {
		$("#paging-" + name).val(val);
	};
	
	var jpanel = $("#" + data.id);
	var current = data.current;
//	var row = data.row;
	var count = data.count;
	var total = data.total;
	var condition = data.condition;
	var url = data.url;
	var customShow = data.customShow;
	
	if (null == customShow) {
		customShow = "";
	}
	
	// 表单
	
	var form = $("<form></form>");
	form.attr("action", url);
	form.attr("method", "post");
	
	var fCurrent = $("<input />");
	fCurrent.attr("type", "hidden");
	fCurrent.attr("id", "paging-current");
	fCurrent.attr("name", "current");
	fCurrent.val(current);
	form.append(fCurrent);
	for (var tmp in condition) {
		var fCondition = $("<input />");
		fCondition.attr("type", "hidden");
		fCondition.attr("id", "paging-" + tmp);
		fCondition.attr("name", tmp);
		fCondition.val(condition[tmp]);
		form.append(fCondition);
	}
	jpanel.append(form);
	
	function queryForPaging(page) {
		
		fCurrent.val(page);
		form.submit();
	};
	
	//////////////生产页码/////////////////
	
	var ul = $("<ul></ul>");
	ul.css(paging_style_ul);
	
	var left = 5; // 左边N个页码
	var right = 5; // 右边N个页码
	var start = current - left; // 起始页码
	if (current + right > total && start != 1) {
		start -= current + right - total;
	}
	start = start < 1 ? 1 : start;
	
	if (total > start) {
		var li_start = $("<li>首页</li>");
		li_start.attr("title", "首页");
		if (current != 1) {
			li_start.click(function() {
				queryForPaging(1);
			});
			li_start.hover(function() {
				$(this).css(paging_style_li_start_hover);
			}, function() {
				$(this).css(paging_style_li_start);
			});
		}
		ul.append(li_start);
	}
	
	var offset = left + right;
	var end = start + offset > total ? total : start + offset;
	if (start > left) {
		var li = $("<li>...</li>");
		li.attr("title", "向前" + left + "页");
		li.val(current - left);
		li.click(function() {
			queryForPaging($(this).val());
		});
		ul.append(li);
	}
	
	if (total > 1) {
		for (var i = start; i <= end; i++, start++) {
			var li = $("<li>" + i + "</li>");
			li.val(i);
			li.css(paging_style_li_number);
			if (i == current) {
				li.css(paging_style_li_current);
			} else {
				li.hover(function() {
					$(this).css(paging_style_li_number_hover);
				}, function() {
					$(this).css(paging_style_li_number);
				});
				li.click(function() {
					queryForPaging($(this).val());
				});
			}
			ul.append(li);
		}
	}
	
	///////////////END////////////////
	
	if (end < total) {
		var li = $("<li>...</li>");
		li.attr("title", "向后" + right + "页");
		li.val(current + right);
		li.click(function() {
			queryForPaging($(this).val());
		});
		ul.append(li);
	}
	
	if (end > 1) {
		var li_end = $("<li>尾页</li>");
		li_end.attr("title", "尾页");
		if (current < total) {
			li_end.click(function() {
				queryForPaging(total);
			});
			li_end.hover(function() {
				$(this).css(paging_style_li_end_hover);
			}, function() {
				$(this).css(paging_style_li_end);
			});
		}
		ul.append(li_end);
	}
	
	var li_total = $("<li>" + current > total ? 0 : current + "-" + total + "</li>");
	ul.append(li_total);
	var li_count = $("<li>总计<label style='color: #ff0000; font-weight: bold;'>"+ count + "</label>条数据" + customShow + "</li>" );
	li_count.css(paging_style_li_count);
	ul.append(li_count);
	
	ul.find("li").each(function() {
		$(this).css(paging_style_li);
	});
	
	jpanel.append(ul);
	
	return this;
};