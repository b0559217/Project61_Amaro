"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Britney Amaro
      Date:   04/11/2025

      Filename: project06-01.js
*/
//Declaring variables for the form and its elements
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
//adding event listeners to the form elements
submitButton.addEventListener("click", 
      function(event){
            console.log("Submit button clicked");
            //adding logic of function
            let pattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            //checking if the password is valid
            pwd.setCustomValidity("");
            pwd2.setCustomValidity("");

            if (!pattern.test(pwd.value)) {
                  pwd.setCustomValidity(
                        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
                  pwd.reportValidity();
                 
            }     
            else if (pwd.value !== pwd2.value) {
                  pwd2.setCustomValidity("Passwords do not match.");    
                  pwd2.reportValidity();
            }
            //checking if the passwords match

            //preventing the form from submitting if there are errors
            if (!form.checkValidity()) {
                  event.preventDefault();
            }
      });   