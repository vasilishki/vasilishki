$(document).ready(function(){

function loadform(){ 
  $( "<button style='float:right'  onclick='$.removeCookie(\"openspec\", { path: \"/\" });location.reload();'>Закрыть версию для слабовидящих</button>" ).insertBefore( "body" );
$( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" ); 

  
//Добавлено:
//    спрятать карусель, изображения блока ссылок, поиск, кнопку спецверсии
    $(".row-two .grid-item-left, .search-form, .header-links button").hide();   
    
//    показать ссылки текстом вместо изображений
$(".links .texthide").css("display", "flex");

//    увеличенный шрифт по умолчанию
    $("body p, .header-links, footer a, .navigation a").css("font-size", "150%");
    $("h2").css("font-size", "250%");
    $(".menu > li span, .sub-menu a").css("font-size", "130%");
    $(".menu > li > a").css("font-size", "160%");
    $("body *").css("font-family","Arial");
};   
 
$('.spec').click(function (e) {

if (!$.cookie('openspec'))
{
$.cookie('openspec',1, { path: '/' });
$("body *").css("background", "#fff");
$("body *").css("color", "#000");
$("img").css("-webkit-filter", "grayscale(100%)");
loadform();
}});

if ($.cookie('openspec')===1)
loadform();
});
