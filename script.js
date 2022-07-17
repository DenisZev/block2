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
const urlPic = document.querySelectorAll('.large')

$('.product__gallery').on('mouseenter', 'img', function (){
	const imageUrl = $(this).attr('src');
	const backUrl = $(this).css('background', imageUrl)
	expandImg.src = imageUrl;
	$('.large').css({'background': 'url(' + imageUrl + ')','background-size': '400%'});


})

// zoom

$(document).ready(function(){
	const zoomMargin = 15;

	function startZoom(e) {
		$('.large').css('left',  zoomMargin + '%').show();    // Контейнер c зумом появляется
	}

	function moveZoom(e) {
		const offset = $(this).offset(),       // В переменной offset хранятся координаты блока с начальным изображением
			x = (e.pageX - offset.left),      // В переменной хранится координата X курсора мыши относительно блока с начальным изображением
			y = (e.pageY - offset.top);        // Координата Y курсора мыши.
			w = $(this).width(),               // Ширина
			h = $(this).height(),              // Высота

			// Позиционирование фона зума относительно того, куда указывает курсор на начальном изображении.
			$('.large').css({'background-position': (x / w * 100) + '% ' + (y / h * 100) + '%', 'left': x,  'top': y});
	}

	function endZoom(e) {
		$('.large').hide();        // Контейнер изображением скрывается
	}

	$('#expandedImg').on({
		'mouseenter': startZoom,
		'mousemove': moveZoom,
		'mouseleave': endZoom
	});
})