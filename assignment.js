// Using type conversation, arrays and objects to create a Quiz Game program
let score = 0;
let userName = prompt("Enter your name");
userName =  String(userName); // type conversation
let questionLength = 10;

// Questions as objects in n array
const questions = [
    { question:"What is 10 + 30", answer:"40" },
    { question:"What is the capital of Nigeria?", answer:"Abuja" },
    { question:"What color is the sky on a clear day?", answer:"Blue" },
    { question:"What is the capital of france?", answer:"Paris"},
    { question:"Which planet is known as the Red planet?", answer:"Mars"},
    { question:"What is the chemical symbol for Gold?", answer:"AU"},
    { question:"What is the largest organ in the human body?", answer:"Skin"},
    { question:"Which ocean is the largest?", answer:"Pacific Ocean"},
    { question:"Whhat is the longest river in the world", answer:"River Nile"},
    { question:"what is 100 / 2", answer:"50"},
];

// Ask first question
let userAnswer1 = prompt(questions[0].question);
if(userAnswer1 === questions[0].answer){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

 // Question 2
let userAnswer2 = prompt(questions[1].question);
if(userAnswer2.toLowerCase() === questions[1].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 3
let userAnswer3 = prompt(questions[2].question);
if(userAnswer3.toLowerCase() === questions[2].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 4
let userAnswer4 = prompt(questions[3].question);
if(userAnswer4.toLowerCase() === questions[3].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 5
let userAnswer5 = prompt(questions[4].question);
if(userAnswer5.toLowerCase() === questions[4].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 6
let userAnswer6 = prompt(questions[5].question);
if(userAnswer6.toLowerCase() === questions[5].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 7
let userAnswer7 = prompt(questions[6].question);
if(userAnswer7.toLowerCase() === questions[6].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 8
let userAnswer8 = prompt(questions[7].question);
if(userAnswer8.toLowerCase() === questions[7].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Question 9
let userAnswer9 = prompt(questions[8].question);
if(userAnswer9.toLowerCase() === questions[8].answer.toLowerCase()){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}


// Question 10
let userAnswer10 = prompt(questions[9].question);
if(userAnswer10 === questions[9]){
    alert("Correct!!!!")
    score++
} else{
    alert("Wrong!!!");
}

// Summary object
const summary = {
    name: userName,
    totalQuestions: questionLength,
    correctAnswers: score,
    percentage: ((score / questionLength) * 100).toFixed(2) + "%"
}

// Display summary
let summaryMessage = `=== Quiz Summary ===\n\n
 Name: ${userName};
 Total Questions: ${questionLength};
 Correct Answers: ${score};
Percentage Score: ${((score / questionLength) * 100).toFixed(2)}%
`;

alert(summaryMessage);
