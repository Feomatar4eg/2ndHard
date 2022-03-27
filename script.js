'use strict';
/*
УСЛОЖНЕННОЕ ЗАДАНИЕ:
Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице
1) Выведите на страницу текущую дату и время в 2-х форматах:
    a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
    б) '04.02.2020 - 21:05:33'
2) Для вывода в формате (а) напишите функцию, которая будет менять склонение
 слов в зависимости от числа, "час, часов, часа"
3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0
 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)
4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду
5) Добавить папку с уроком на свой GitHub
*/

const formDataFirtsType = function () {
    let date = new Date();
    let dateText = 'Сегодня';
    switch (date.getDay()) {
        case 0: {
            dateText += ' Воскресенье, ';
            break;
        }
        case 1: {
            dateText += ' Понедельник, ';
            break;
        }
        case 2: {
            dateText += ' Вторник, ';
            break;
        }
        case 3: {
            dateText += ' Среда, ';
            break;
        }
        case 4: {
            dateText += ' Четверг, ';
            break;
        }
        case 5: {
            dateText += ' Пятница, ';
            break;
        }
        case 6: {
            dateText += ' Суббота, ';
            break;
        }
    }
    dateText += date.getDate();
    switch (date.getMonth()) {
        case 0: {
            dateText += ' января ';
            break;
        }
        case 1: {
            dateText += ' февраля ';
            break;
        }
        case 2: {
            dateText += ' марта ';
            break;
        }
        case 3: {
            dateText += ' апреля ';
            break;
        }
        case 4: {
            dateText += ' мая ';
            break;
        }
        case 5: {
            dateText += ' июня ';
            break;
        }
        case 6: {
            dateText += ' июня ';
            break;
        }
        case 7: {
            dateText += ' августа ';
            break;
        }
        case 8: {
            dateText += ' сентября ';
            break;
        }
        case 9: {
            dateText += ' октября ';
            break;
        }
        case 10: {
            dateText += ' ноября ';
            break;
        }
        case 11: {
            dateText += ' декабря ';
            break;
        }
    }
    dateText = dateText + date.getFullYear() + ' года, ';
    dateText = dateText + date.getHours() + ' ';
    switch (date.getHours()) {
        case 1:
        case 21: {
            dateText += ' час ';
            break;
        }
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24: {
            dateText += ' часа ';
            break;
        }
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20: {
            dateText += ' часов ';
            break;
        }
    }
    dateText = dateText + date.getMinutes() + ' минут ' + date.getSeconds() + ' секунды';
    return dateText;
};
const formDataSecondType = function () {
    let date = new Date();
    let dateTxt = '';
    let day = date.getDate();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    day < 10 ? dateTxt = dateTxt + '0' + day : dateTxt = dateTxt + day;
    dateTxt += '.';
    ((month + 1) < 10) ? dateTxt = dateTxt + '0' + (month + 1): dateTxt = dateTxt + (month + 1);
    dateTxt += '.';
    dateTxt += date.getFullYear();
    dateTxt += ' - ';
    hours < 10 ? dateTxt = dateTxt + '0' + hours : dateTxt = dateTxt + hours;
    dateTxt += ':';
    minutes < 10 ? dateTxt = dateTxt + '0' + minutes : dateTxt = dateTxt + minutes;
    dateTxt += ':';
    seconds < 10 ? dateTxt = dateTxt + '0' + seconds : dateTxt = dateTxt + seconds;
    return dateTxt;
};

const printBothFormat = function () {
    let date = new Date();
    div.innerHTML = '<strong>' + formDataFirtsType() + '</strong>';
    div2.innerHTML = '<strong>' + formDataSecondType() + '</strong>';
};

let div = document.createElement('div');
let div2 = document.createElement('div');
div.className = 'dateType1';
div2.className = 'dateType2';

document.body.append(div);
document.body.append(div2);

setInterval(printBothFormat, 1000);