const students = [
    {  studentid: 1001,
       name: "Luke Yang",
       DOB: "2018-01-01",
       email: "luke@codingacademy.com",
       class: "Web Development",
       password: "password123"
    },
    {  studentid: 1002,
       name: "Sara Omole",
       DOB: "2019-02-28",
       email: "sara@codingacademy.com",
       class: "Data Science",
       password: "password456"
    },
    {
         studentid: 1003,
         name: "Gbenga Adeyemi",
         DOB: "2018-03-15",
         email: "gbenga@codingacademy.com",
         class: "Cybersecurity",
         password: "password789"
    },
    {  studentid: 1004,
       name: "Aisha Bello",
       DOB: "2020-05-20",
       email: "aisha@codingacademy.com",
       class: "Web Development",
       password: "password101"
    },
    {  studentid: 1005,
       name: "Chioma Nwosu",
       DOB: "2019-07-30",
       email: "chioma@codingacademy.com",
       class: "Data Science",
       password: "password102"
    }
]

function login(studentid, password) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.studentid === studentid && student.password === password) {
      console.log(" Login successful! Welcome " + student.name);
      return student;
    }
  }
  console.log("Invalid login. Please try again.");
  return null;
}

let id = prompt("Please enter your id");
let studentPassword = prompt("please enter your password");

login(id, studentPassword);
