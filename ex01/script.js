function calculateGrade(score) {
  if (typeof score === "number" && score >= 0  && score <= 100) {
      if (score >= 90) {
         return "A";
      }
        else if (score >= 80) {
         return "B";
        }

        else if (score >= 70 ) {
         return "C";
        }

        else if (score >= 60 ) {
         return "D";
        }

        else {
         return "F";
        }
      }

      else {
        return "Invalid";
      }
}

console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(0));
console.log(calculateGrade(100));
console.log(calculateGrade("abc"));

function checkAccess(age, hasTicket) {
  if (typeof age === "number" && typeof hasTicket === "boolean") {
    return (age >= 18 && hasTicket === true) || age >= 65;
  } else {
    return false;
  }
}

console.log(checkAccess(20, true));
console.log(checkAccess(20, false));
console.log(checkAccess(16, true));
console.log(checkAccess(70, false));
console.log(checkAccess("abc", true));

console.log(checkAccess(18, true));
console.log(checkAccess(17, true));
console.log(checkAccess(65, false));
console.log(checkAccess(64, false));
