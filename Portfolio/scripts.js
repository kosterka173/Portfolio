$(".scrollto").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 100
    }, 800);
})

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('.scroll_top').show();
		} else {
			$('.scroll_top').hide();
		}
	});
 
	$('.scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 1400);
		return false;
	});
});

new WOW().init(); 



const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
// Создаем клон меню, чтобы задать ему новый стиль
const menu = document.querySelector("#menu").cloneNode(1);

// При нажатии на наше меню вызываем функцию
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  //Меняем классы элементов, тем самым добавляя им нужные нам стили
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  //Вызываем функцию, которая добавит клон меню в наш контейнер для бургер-меню
  renderPopup();
}
// Добавляем в контейнер
function renderPopup() {
  popup.appendChild(menu);
}
// Закрываем меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем функцию закрытия
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
// Функция удаляет соответствующие классы, таким образом закрывая меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}