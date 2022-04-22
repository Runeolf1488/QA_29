                        Основное задание	
============

* Посмотреть где я                                                                                      
>                            pwd
* Создать папку                                                                                              
>                            mkdir QA_29
* Зайти в папку

>                            cd QA_29
* Создать три папки
>                            mkdir 1 2 3
* Зайти в любую папку
>                            cd /c/QA_29/1/                            
* Создать 5 файлов (3 txt, 2 json)
>                            touch 1.txt 2.txt 3.txt 4.json 5.json 
* Создать 3 папки
>                            mkdir f_1 f_2 f_3
* Вывести список содержимого папки
>                            ls -la                            
* Открыть любой txt файл
>                            vim 1.txt 
* Написать туда что-нибудь, любой текст
>                            Нажать I - написать текст 
* Сохранить и выйти 
>                            Нажать ctrl+c - выйти из редактирования, нажать :wq - сохранить.
* Выйти из папки на уровень выше
>                            cd ..                            
* Переместить любые 2 файла, которые вы создали, в любую другую папку
>                            mv 1.txt 5.json /c/QA_29/1/ 
* Скопировать любые 2 файла, которые вы создали, в любую другую папку 
>                            cp {2.txt,3.txt} /c/QA_29/2/
* Найти файл по имени
>                            find . -name \*.txt - все файлы txt || либо  find . 5.json                            
* Просмотреть содержимое в реальном времени (команда grep) изучите как она работает
>                            tail -f 1.txt | grep *искомый текст* 
* Вывести несколько первых строк из текстового файла 
>                            head -n3 1.txt
* Вывести несколько последних строк из текстового файла 
>                            tail -n3 1.txt
* Просмотреть содержимое длинного файла (команда less) изучите как она работает
>                            less -N -s -w 1.txt
* Вывести дату и время 
>                            date


                        Задание под звездочкой*
============
> Kuznetsov@KOMP100 MINGW64 /c/QA_29<br>
$ curl 'http://162.55.220.72:5005/terminal-hw-request?name=Run&age=34'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   237  100   237    0     0   2158      0 --:--:-- --:--:-- --:--:--  2174{"Intro":"Hello!! This is your the first response from server","Tasks":{"Task_1":"Send the next URL in terminal: http://162.55.220.72:5005/get_method?name=(set_your_String)&age=(set_your_number)","result":["Your_String","Your_number"]}}

>> Kuznetsov@KOMP100 MINGW64 /c/QA_29 <br>
$ curl 'http://162.55.220.72:5005/get_method?name=Run&age=34'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    13  100    13    0     0    119      0 --:--:-- --:--:-- --:--:--   120["Run","34"]


                        Задание под звездочкой**
============
> cd /c/QA_29/
mkdir script
cd /c/QA_29/script/
touch script1.sh
vim script1.sh
>>  #!/bin/bash/  <br>
script_name=$0   <br>
echo 'Запущен скрипт добавления пунктов 3 - 4 - 5 - 6 - 7 - 8 - 13'  <br>
date=$(date)  <br>
echo $(date)  <br>
pwd=$(pwd)  <br>
cd /c/QA_29/  <br>
mkdir sc1 sc2 sc3 <br> 
cd /c/QA_29/sc1/  <br>
touch sc1.txt sc2.txt sc3.txt sc4.json sc5.json  <br>
mkdir sc1_1 sc1_2 sc1_3  <br>
echo $(pwd)  <br>
mv {sc1.txt,sc2.txt,sc5.json} /c/QA_29/sc1/sc1_1/  <br>
ls -la  <br>
exec bash  <br>
exit 0  <br>
