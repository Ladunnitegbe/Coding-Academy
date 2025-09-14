const name = prompt("What is your name?");

//greeting / info
alert(` Welcome ${name},kindly follow the prompt to check your result`);

let score;

//collecting scores for the different subjects written

function scoreCollector(subject) {
  score = Number(prompt(`Enter your ${subject} score:`));

  if (isNaN(score) || score < 0 || score > 100) {
    alert(`Invalid input for ${subject}. please enter a valid number`);
    return scoreCollector(subject);
  }

  return score;
}

//saving received scores
const maths = scoreCollector("maths");
const english = scoreCollector("english");
const french = scoreCollector("french");
const science = scoreCollector("science");

//function for score check
let passMark = 50;
function getResult(subject, score) {
  if (score >= passMark) {
    alert(`${subject} score : ${score}; You passed ${subject} \n\n`);
  } else {
    alert(`${subject} score: ${score}, You failed ${subject} \n\n`);
  }
}

getResult("maths", maths);
getResult("english", english);
getResult("french", french);
getResult("science", science);

// Defining a grading system
function graderSys(score) {
  if (score < 40) {
    return "F";
  } else if (score >= 40 && score < 45) {
    return "E";
  } else if (score >= 45 && score < 50) {
    return "D";
  } else if (score >= 50 && score < 60) {
    return "C";
  } else if (score >= 60 && score < 69) {
    return "B";
  } else if (score >= 70) {
    return "A";
  }
}

//saving both scores and subjects in array for use
let scores = [maths, english, french, science];
let subjects = ["maths", "english", "french", "science"];

//function to calculate the average score
function averageScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
  return sum / scores.length;
}

// Result summary / Report

let report = "****** Final Report ******\n\n";

for (let i = 0; i < scores.length; i++) {
  report += `${subjects[i]}; score: ${scores[i]} grade: ${graderSys(
    scores[i]
  )} \n\n`;
  //report += subjects[i] + scores[i] + "(Grade " + graderSys(scores[i]) + ")\n";
}

const average_Score = averageScore(scores);
report += `Average Score : ${average_Score} \n\n`;

if (average_Score >= passMark) {
  report += "Final Remark: Congratulations! You passed";
} else {
  report += "Final Remark: Sorry! You failed";
}

alert(report);
score ? console.log(report) : "";
