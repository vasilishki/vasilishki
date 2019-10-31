//Открытие выпадающего подменю
document.body.addEventListener('click', e => {
    const neighbour = e.target.nextElementSibling;
    const lastPar = e.target.parentElement;
    if (neighbour && neighbour.matches('.sub-menu') && lastPar && lastPar.matches('.menu li')) {
        document.querySelector('li span').classList.toggle('up');
        return (e.target.nextElementSibling.classList.toggle('open'), undefined);
    }
    ;

    for (const mi of document.querySelectorAll('.sub-menu'))
        mi.classList.remove('open');
    document.querySelector('li span').classList.remove('up');
});

//Кнопка назад
function goBack() {
    window.history.back();
}
;
let buttonBack = document.querySelector('.navigation a img');
buttonBack.addEventListener("click", goBack);

//Отображение текущего положения пользователя
function currentPlace() {
    let myLocation = document.querySelector('.navigation a:last-child');
    myLocation.textContent = document.title;
}
;
document.addEventListener("DOMContentLoaded", currentPlace);

//Предупреждение об отключенном поиске на сайте:
function searchAlert() {
    alert("Извините, в настоящее время поиск по сайту недоступен.");
}
;
document.querySelector('.search-text').addEventListener("change", searchAlert);

   