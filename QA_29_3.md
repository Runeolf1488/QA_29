* Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1 +++
> let exponenta = 10;
>let result = 1;
>let count = 0;
>  
>const stepen = function(a){
>
>    while (count < exponenta) {
>        result = result * a;
>        count++;
>        console.log(result);
>    }
>
>}
>
>
>stepen(2);

* Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2 +++
>let result = 1;
>let count = 0;
>  
>const stepen = function(a, b){
>    let exp = Number(b);
>    while (count < exp) {
>        result = result * a;
>        count++;
>
>        console.log(result);
>    }
>
>}
>
>stepen(2, 10);

* Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
>let text = ":)";
>let a = "";
>for (i = 0; i < 5; i++) { 
>   if (i == 0) {
>       console.log(text)}
>    text = text + ":)";
>    console.log(text );
>}

* Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows) +++
>let stroka = "b";
>let smile = ""
>let numberOfRows = 3;
>
>const printSmile = function(stroka, numberOfRows){
>for (i = 0; i < numberOfRows; i++) { 
>    if (i == 0) {
>        console.log(smile)}
>     smile += stroka;
>     console.log(smile);
> }
>}
>
>printSmile ("(-=^_^=-) ", 10);

* Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
>let glasnEN = ['a','e','i','o','u','y'];
>let glasnRU = ['а', 'е', 'ё', 'и', 'о', 'у', 'э', 'ю', 'я'];
>let soglEN = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
>let soglRU = ['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ч', 'ш', 'щ', 'й', 'ъ', 'ь'];
>let spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '|', '/', '_'];
>
>
>function Structure(word){
>    let lowArray = word.toLowerCase().split('');
>    let glasnSum = lowArray.filter(x => glasnEN.includes(x)).length;
>    let soglSum = lowArray.filter(x => soglEN.includes(x)).length;
>    let glasnRUSum = lowArray.filter(x => glasnRU.includes(x)).length;
>    let soglRUSum = lowArray.filter(x => soglRU.includes(x)).length;
>    let specSum = lowArray.filter(x => spec.includes(x)).length;
>
>    console.log("Гласных EN: " + glasnSum + " ; Согласных EN: " + soglSum); 
>    console.log("Гласных RU: " + glasnRUSum + " ; Согласных RU: " + soglRUSum);
>    console.log("Спец символы: " + specSum);
>
>}
>
>Structure('Ёкарный стыд сколько же тут напихано! What the f@cking f@ck?! !@#$%^&*()_++|///_____');

* Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
>function Palindrom(word) {
>    let x = word.toLowerCase().replace(/[^а-яё]/g, '');
>    return x == [...x].reverse().join('');
>  }
>  console.log(Palindrom('LOL'));
>  console.log(Palindrom("А роза упала на лапу Азора"));
