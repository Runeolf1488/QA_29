 * Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61

* 2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

* 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

> let item_1;
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

> const checkAge = function(age) {
>>
>>    Number(age);
>>
>>    if (age !=Number(age) || age !=String(age)){
>>        console.log("Error");
>>    }
>>
>>    else {
>>
>>        if (age < age_2) {
>>        console.log("You don’t have access cause your age is " + age + " It’s less then ");
>>        }
>>            else if (age >= age_2 && age <= age_3) {
>>            console.log("Wellcome !");
>>            }
>>            else if (age >= 100) {
>>                console.log("Damn! Who are you?!")
>>            }
>>
>>            else if (age > age_3) {
>>            console.log("Keep calm and look Culture channel!");
>>            }
>>            else {
>>            console.log("Technical Work");
>>            }    
>>      }
>    }
>
>checkAge ("123");<br>
>checkAge ("бла бла бла");<br>
>checkAge (17);<br>
>checkAge (18);<br>
>checkAge (61);<br>
>checkAge ('2');<br>

* 4***:
Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке
>Создаем отдельный файл *script.js* в папке scripts
>Создаем отдельный файл *test.html*
>В файл *script.js* добавляем преобразованный код:
>>> let checkAge = prompt('Сколько вам лет?', '');<br>
>>><br>
>>>    if (checkAge !=Number(checkAge) || checkAge !=String(checkAge)){<br>
>>>        alert("Error");<br>
>>>    }<br>
>>>    else {<br>
>>>        if (checkAge < 18) {<br>
>>>        alert("You don’t have access cause your age is " + checkAge + " It’s less then ");<br>
>>>        }<br>
>>>            else if (checkAge >= 18 && checkAge < 60) {<br>
>>>                alert("Wellcome !");<br>
>>>            }<br>
>>>            else if (checkAge >= 100) {<br>
>>>                alert("Damn! Who are you?!")<br>
>>>            }<br>
>>><br>
>>>    else if (checkAge => 60) {<br>
>>>                alert("Keep calm and look Culture channel!");<br>
>>>            }<br>
>>>            else {<br>
>>>                alert("Technical Work");<br>
>>>            }    <br> 
>>>     }<br>
><br>
>В файл *test.htm* добавляем<br>
> < !DOCTYPE html><br>
> < html><br>
> < body><br>
> < script src="C:\QA_29\QA_29_2\1\scripts\script.js"> <br>       
> < /script><br>
> < /body><br>
> < /html>
