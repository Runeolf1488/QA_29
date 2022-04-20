let checkAge = prompt('Сколько вам лет?', '');

    if (checkAge !=Number(checkAge) || checkAge !=String(checkAge)){
        alert("Error");
    }
    else {
        if (checkAge < 18) {
        alert("You don’t have access cause your age is " + checkAge + " It’s less then ");
        }
            else if (checkAge >= 18 && checkAge < 60) {
                alert("Wellcome !");
            }
            else if (checkAge >= 100) {
                alert("Damn! Who are you?!")
            }

            else if (checkAge => 60) {
                alert("Keep calm and look Culture channel!");
            }
            else {
                alert("Technical Work");
            }    
    }

