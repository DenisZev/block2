// счетчик +-
$(document).ready(function() {
	$('.minus').click(function () {
		const $input = $(this).parent().find('input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		const $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

});

// Для уведомления
$(function(){
	$('#pop').click(function(){
		$('#popup').fadeIn().css('top',$(document).height()/3);
		const val = document.querySelector('.text').value;
		document.querySelector('#val').innerHTML = val;
		function enumerate (num, dec) {
			if (num > 100) num = num % 100;
			if (num <= 20 && num >= 10) return dec[2];
			if (num > 20) num = num % 10;
			return num == 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
		}
		document.querySelector('.lastChars').innerHTML = enumerate(val, ['','а','ов']);
	});
	$('#ok').click(function(){
		$('#popup').fadeOut();
	});

});
// Смена изображений

const expandImg = document.querySelector('#expandedImg');
let imgg = document.querySelectorAll('.product__gallery');
console.log(imgg);

$('.product__gallery').on('mouseenter', 'img', function (){
	const imageUrl = $(this).attr('src');
	expandImg.src = imageUrl;
})


