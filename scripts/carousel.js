let carousel = document.querySelector('.carousel');
let width = 243; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

//    запрещаем выделение карусели при кликах
carousel.addEventListener("mousedown", function (event) {
    event.preventDefault();
});

//Открытие изображений из карусели 
document.body.addEventListener('click', function (e) {

    let clone = e.target.cloneNode(true);
    let parent = e.target.parentElement;

//если фото уже открыто, то при клике на него - закрыть его
    if (e.target.classList.contains('showimg')) {
        e.target.remove();
    }
    ;

//закрыть уже открытое фото если такое есть и перейти на следующее, если нет - открыть новое и вывести описание к нему
    if (e.target.matches('li img')) {
        for (const ep of document.querySelectorAll('.imgblock, .showimg, .license'))
            ep.remove();
        let block = document.createElement('div');
        document.body.querySelector('.wrapper').prepend(block);
        block.classList.add('imgblock');
        block.append(clone);
        clone.license = document.createElement('div');
        clone.license.innerHTML = e.target.title;
        clone.after(clone.license);
        clone.license.classList.add('license');
        let closeX = document.createElement('div');
        closeX.classList.add('btnclose');
        clone.license.after(closeX);
        return (clone.classList.add('showimg'));
    }
    ;
//       Не скрывать фото и описание, если клик по описанию
    if (e.target === document.body.querySelector('.license')) {
        return false;
    }

//       Скрыть при клике в любом другом месте
    for (const ep of document.querySelectorAll(".imgblock, .showimg, .license"))
        ep.remove();
});












   