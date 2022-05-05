* Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1 +++ <br>
> let exponenta = 10; <br>
>let result = 1; <br>
>let count = 0; <br>
>   <br>
>const stepen = function(a){ <br>
> <br>
>    while (count < exponenta) { <br>
>        result = result * a; <br>
>        count++; <br>
>        console.log(result); <br>
>    } <br>
> <br>
>} <br>
> <br>
> <br>
>stepen(2); <br>
 <br>
* Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2 +++ <br>
>let result = 1; <br>
>let count = 0; <br>
>   <br>
>const stepen = function(a, b){ <br>
>    let exp = Number(b); <br>
>    while (count < exp) { <br>
>        result = result * a; <br>
>        count++; <br>
> <br>
>        console.log(result); <br>
>    } <br>
> <br>
>} <br>
> <br>
>stepen(2, 10); <br>
 <br>
* Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее <br>
>let text = ":)"; <br>
>let a = ""; <br>
>for (i = 0; i < 5; i++) {  <br>
>   if (i == 0) { <br>
>       console.log(text)} <br>
>    text = text + ":)"; <br>
>    console.log(text ); <br>
>} <br>
 <br>
* Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows) +++ <br>
>let stroka = "b"; <br>
>let smile = "" <br>
>let numberOfRows = 3; <br>
> <br>
>const printSmile = function(stroka, numberOfRows){ <br>
>for (i = 0; i < numberOfRows; i++) {  <br>
>    if (i == 0) { <br>
>        console.log(smile)} <br>
>     smile += stroka; <br>
>     console.log(smile); <br>
> } <br>
>} <br>
> <br>
>printSmile ("(-=^_^=-) ", 10); <br>
 <br>
* Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв. <br>
e.g. function getWordStructure(word)

Слово (word) состоит из  (число) гласных и (число) согласных букв <br>
>let glasnEN = ['a','e','i','o','u','y']; <br>
>let glasnRU = ['а', 'е', 'ё', 'и', 'о', 'у', 'э', 'ю', 'я']; <br>
>let soglEN = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']; <br>
>let soglRU = ['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ч', 'ш', 'щ', 'й', 'ъ', 'ь']; <br>
>let spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '|', '/', '_']; <br>
> <br>
> <br>
>function Structure(word){ <br>
>    let lowArray = word.toLowerCase().split(''); <br>
>    let glasnSum = lowArray.filter(x => glasnEN.includes(x)).length; <br>
>    let soglSum = lowArray.filter(x => soglEN.includes(x)).length; <br>
>    let glasnRUSum = lowArray.filter(x => glasnRU.includes(x)).length; <br>
>    let soglRUSum = lowArray.filter(x => soglRU.includes(x)).length; <br>
>    let specSum = lowArray.filter(x => spec.includes(x)).length; <br>
> <br>
>    console.log("Гласных EN: " + glasnSum + " ; Согласных EN: " + soglSum);  <br>
>    console.log("Гласных RU: " + glasnRUSum + " ; Согласных RU: " + soglRUSum); <br>
>    console.log("Спец символы: " + specSum); <br>
> <br>
>} <br>
> <br>
>Structure('Ёкарный стыд сколько же тут напихано! What the f@cking f@ck?! !@#$%^&*()_++|///_____'); <br>
 <br>
* Написать функцию, которая проверяет, является ли слово палиндромом <br>
e.g. function isPalindrom(word) <br>
>function Palindrom(word) { <br>
>    let x = word.toLowerCase().replace(/[^а-яё]/g, ''); <br>
>    return x == [...x].reverse().join(''); <br>
>  } <br>
>  console.log(Palindrom('LOL')); <br>
>  console.log(Palindrom("А роза упала на лапу Азора")); <br>
