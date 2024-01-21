
// Function to check if a number is even or odd
function checkEvenOrOdd() {
    // Take user input from prompt
    var userInput = prompt("Enter a number:");
  
    // Parse the input to a number
    var number = parseFloat(userInput);
  
    // Check if the number is NaN (Not a Number)
    if (isNaN(number)) {
      alert("Invalid input. Please enter a valid number.");
    } else {
      // Check if the number is even or odd
      if (number % 2 === 0) {
        alert(number + " is even.");
      } else {
        alert(number + " is odd.");
      }
    }
  }
  
  // Call the function to check even or odd
  checkEvenOrOdd();
  

// Function to take input from prompt
function takeUserInput() {
    var userInput = prompt("Enter the obtained marks:");
    return parseFloat(userInput);
  }
  
//   console.log(userInput);
  // Function to calculate percentage
  function calculatePercentage(totalObtainedMarks) {
    var totalMarks = 100; // Assuming total marks are 100
    var percentage = (totalObtainedMarks / totalMarks) * 100;
    return percentage;
  }
  
  // Function to calculate grade based on percentage
  function calculateGrade(percentage) {
    if (percentage >= 90) {
      return "A+";
    } else if (percentage >= 80) {
      return "A";
    } else if (percentage >= 70) {
      return "B";
    } else if (percentage >= 60) {
      return "C";
    } else {
      return "Fail";
    }
  }
  
  // Function to call other functions in sequence
  function calculateResult() {
    // Step 1: Take user input
    var obtainedMarks = takeUserInput();
  
    // Step 2: Calculate percentage
    var percentage = calculatePercentage(obtainedMarks);
  
    // Step 3: Calculate grade
    var grade = calculateGrade(percentage);
  
    // Step 4: Return the calculated grade
    return grade;
  }
  
  // Call the calculateResult function, get its return value, and show in alert
  var result = calculateResult();
  alert("Your grade is: " + result);
  