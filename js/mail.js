$(document).ready(function() {
	//! ..Popup-thanks ///
	//? Появление //
	function PopupThanks_true(){
		$(".popup-thanks").css("display", "flex");
		$(".popup-thanks").animate({ opacity: 1 }, 200);
	}
	//? Исчезание
	$(".popup-thanks").on("click", function (e) {
		$(".popup-thanks").animate({ opacity: 0 }, 200, function () {
			$(".popup-thanks").css("display", "none");;
		});
	});
	//////////!

	// !ANTISPAM //
	function antispamcheck_add(){
		$("form").each(function(){
			$(this).append("<input type='hidden' value='yes' name='antispamcheck'>");
		});
	}
	function antispamcheck_remove(){
			$('[name="antispamcheck"]').remove();
	}
	// !TIMER_ANTISPAM //
	function timer_antispam_add(){
		$("form input[type='submit']").attr('disabled','true');
	}
	function timer_antispam_remove(){
		setTimeout(()=>{$("form input[type='submit']").removeAttr('disabled')},2000);	// 2 сек не доступна кнопка
	};
	
	// !E-mail Ajax Send
	$("form").submit(function(e) { //Change
		e.preventDefault();
		if (($("form input[name='Name']").val()!="") && ($("form input[name='Phone']").val()!="")){ 
			antispamcheck_add();
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize(),
				beforeSend: function(){
					timer_antispam_add();
				},
			}).done(function() {
				PopupThanks_true(); 
				antispamcheck_remove()
				timer_antispam_remove();
			});
		return false;
		}
	});
});