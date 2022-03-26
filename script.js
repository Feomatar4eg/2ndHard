'use strict';
/*
1). Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится
дни недели на русском или английском языке. Решите задачу
 a) через if,
 b) через switch-case
 c) через многомерный массив без ифов и switch.
2). У нас есть переменная namePerson. Если значение этой переменной “Артем”
 то вывести в консоль “директор”, если значение “Александр” то вывести в консоль
 “преподаватель”, с любым другим значением вывести в консоль “студент”
 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
3). Запушить проект в репозиторий для усложненных заданий на GitHub
*/
//const lang = 'ru';
const lang = 'eu';
if (lang == 'ru') {
    console.log('ПН ВТ СР ЧТ ПТ СБ ВС');
} else if (lang == 'eu') {
    console.log('SUN MON TUE WED THU FRI SAT');
} else {
    console.log('заданный язык не поддерживается');
}

switch (lang) {
    case 'ru': {
        console.log('ПН ВТ СР ЧТ ПТ СБ ВС');
        break;
    }
    case 'eu': {
        console.log('SUN MON TUE WED THU FRI SAT');
        break;
    }
    default:
        console.log('заданный язык не поддерживается');
}

const langMass = [
    ['ru', 'eu'],
    ['ПН ВТ СР ЧТ ПТ СБ ВС', 'SUN MON TUE WED THU FRI SAT']
];
console.log(langMass[1][langMass[0].indexOf(lang)]);

//const namePerson = 'Артем';
//const namePerson = 'Александр';
const namePerson = 'Андрей';

(namePerson == 'Артем') ?
(console.log('Директор')) :
((namePerson == 'Александр') ?
    console.log('преподаватель') : console.log('студент'));