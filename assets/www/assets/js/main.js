$(document).ready(function(){
	var HS = new Swiper('.swiper-container', {
							loop: true,
							calculateHeight: true,
							autoplay: 3000,
							direction: 'horizontal',
							pagination: '.swiper-pagination',
							// nextButton: '.swiper-button-next',
							// prevButton: '.swiper-button-prev',
							autoplayDisableOnInteraction: false,
	})
	// jQuery('.swiper-slide').on('mouseover', function(){ HS.stopAutoplay(); });
	// jQuery('.swiper-slide').on('mouseout', function(){ HS.startAutoplay(); });

	var HX = new Swiper('.swiper-container-label', {
							slidesPerView: 4,
							spaceBetween: 4,
							direction: 'horizontal',
	})

	$('img#love').click(function() {
		$(this).each(function(i){
			var love = 'assets/img/icon/icon-love.png';
			var grey = 'assets/img/icon/icon-love-grey.png';
			var src  = $(this).attr('src');
			if(src !== love){
				$(this).attr('src', love);
		    }else{
				$(this).attr('src', grey);
		    }
		})
	})

	$('#blog .upload-foto .icon').click(function(){
		$('#blog .upload-foto form.uploading').toggleClass('xhide', 'xshow');
	})



});

$(window).load(function(){

})

