$(function(){
	var $carousel_img = $('.carousel_img');

	$carousel_img.data('index', '1');
	//update prev button image
	$('.nav').on('click', function(evt){
		var target = $(evt.target);
		var root = target.closest('.nav');
		var imgIndex = $('.carousel_img').data('index');
		var factor = root.hasClass('prev') ? -1: 1;
		var newInd = (parseInt(imgIndex)+factor)%4;
		newInd = newInd < 0 ? newInd + 4 : newInd;
		$carousel_img.css('background-image','url("images/image'+newInd+'.jpg")');
		$carousel_img.data('index', newInd);
		var tempIndex = ((newInd-1+4)%4)
		$('.nav.prev').find('.imgHolder').css('background-image','url("images/image'+tempIndex+'.jpg")');
		$('.nav.next').find('.imgHolder').css('background-image','url("images/image'+((newInd+1)%4)+'.jpg")');
	});

})