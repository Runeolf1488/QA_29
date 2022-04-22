let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

const checkAge = function(age){

age = Number(age);

if (!isNaN(age)){

    if (age < age_2){
        alert("“You don’t have access cause your age is ”" + age + "“ It’s less then ”");
    }
    else if (age >= age_2 && age < age_3){
        alert("“Welcome!”");
    }
    else if (age > age_3){
        alert("“Keep calm and look Culture channel”");
    }
    else {
        alert("“Technical work”");
    }
}
else {
    alert("Error");
}
}

let checkAgePrompt = prompt("Введите Ваш возраст!");
    checkAge(checkAgePrompt);