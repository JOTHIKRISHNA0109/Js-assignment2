/*2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.*/




function getGrade(score) {

        if (score >= 90 && score <=100){ 
            return "S Grade";
        }
        else if (score >= 80 && score <= 89){
            return "A Grade";
        }
        else if (score >= 70 && score <= 79){
            return "B Grade";
        }
        else if (score >= 60 && score <= 69){
            return "C Grade";
        }
        else if (score >= 50 && score <= 59){
            return "D Grade";
        }
        else if (score >= 40 && score <= 49){
            return "E Grade";
        }
      else if (score < 40){ 
            return "Student failed in the exam!!";
      }
      else {            
            return "Invalid marks!!";
      }
}

function main() {
    let score = 89; //input value
    console.log(getGrade(score));
}
