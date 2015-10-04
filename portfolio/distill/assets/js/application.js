$(function(){
	// sidebar Toggle
	$(".sidebar-toggle").click(function(){
		$(".sidebar").toggleClass("active");
		$(".content").toggleClass("content-sidebar");
		$("body").toggleClass("body-sidebar");
		$(".header").toggleClass("header-sidebar");
		return false;
	});
	$('.sidebar').bind('clickoutside', function (event) {
		$(".sidebar").removeClass("active");
	});
	// aside Toggle
	$(".aside-toggle").click(function(){
		$(".aside").toggleClass("active");
		$(".content").toggleClass("content-aside");
		$("body").toggleClass("body-aside");
		$(".header").toggleClass("header-aside");
		return false;
	});
	$('.aside').bind('clickoutside', function (event) {
		$(".aside").removeClass("active");
	});
	// header Toggle
	$(".header-toggle").click(function(){
		$(".header, .content").toggleClass("active");
		return false;
	});
	// Activate tooltip
    $("[data-toggle='tooltip']").tooltip();
    // Animate progress bars
    $(function(){
			$('.progress .progress-bar').each(function() {
				var bar = $(this);
				var perc = bar.attr("aria-valuenow");
				var current_perc = 0;
	            var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
					} else {
						current_perc +=1;
						bar.css('width', (current_perc)+'%');
					}
				}, 0);
			});
		});
});