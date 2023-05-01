// Inquirer import
const inquirer = require("inquirer");

// File system module import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user data from inquirer prompts
function writeToFile(fileName, answers) {
  // File starts with an empty string
  let svgString = "";
  // Sets width and height for logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag 
  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`;

  // Conditional check  users input from choices  and  adds polygon properties and shape color 
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="57" y="35" width="180" height="180" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

     // <text> tag sets  text alignment, text-content and text-color  from user prompt with font size of "40"
  svgString += `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  // file system module used to generate svg file, takes in file name given in the promptUser function, the svg string
  fs.writeFile(fileName, svgString, (err) => {
  // If error, message err will be logged, If not, message "Your logo.svg has been generated" will be logged
    err ? console.log(err) : console.log("Your logo.svg has been generated");
  });

}


//  function  that uses inquirer .prompt to take in and save  user's input  in the command line 
function promptUser() {
    inquirer
      .prompt([
        
        {
          type: "input",
          message:
            "What text would you like your logo to display? (No more than three characters)",
          name: "text",
        },
        
        {
          type: "input",
          message:
            "Choose a text color (Enter color keyword OR a hexadecimal number)",
          name: "textColor",
        },
        
        {
          type: "list",
          message: "What shape would you like to use for the logo,? ",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        
        {
          type: "input",
          message:
            "Choose shapes color (Enter color keyword or a hexadecimal number)",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
        if (answers.text.length > 3) {
          console.log("Please enter a value of no more than 3 characters");
          promptUser();
        } else {
          // Call for write file function to generate SVG file
          writeToFile("logo.svg", answers);
        }
      });
  }
  
  // promptUser function call
  promptUser();