let fortures = [
    "Your GPA will rise faster than bread in a hot oven",
    "Soon, your handwriting will look like a font",
    "In the future, you will look back and say: I did it!",
    "The next question you guessed in exam will be correct",
    "The cafeteria will finally serve food that tastes like real food",
    "In 3 years, you will be flying more than mosquitoes in rainy season.",
    "Your crush will borrow your notes and return them neatly",
    "Your cooking will finally impress the person you have been trying to impress",
    "Small steps every day beat cramming the night before",
    "Alow yourself to make mistake so you can improve faster",
]

function chooseNum(user) {

    if (user > fortures.length - 1) {
        alert("you got no forture!. Go study");
    };

    for (let i = 0; i < fortures.length; i++) {
        if (i == user) {
            alert(fortures[i]);
            break;
        }
    }
}

let userSpin = Number(prompt("Please choose your forture number"));
chooseNum(userSpin);

let spinAgain = true;
while (spinAgain) {
    spinAgain = confirm("Do you want to spin again?");
    if (spinAgain) {
        let spins = Number(prompt("Please choose number"));
        chooseNum(spins);
    }
};

