// // document.getElementById("myForm").addEventListener("submit", function(event) {
// //     let name = document.querySelector("#name");
// //     const email = document.querySelector("#email");
// //     const password = document.querySelector("#password");

// //     // Validate the fields
// //     if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
// //         // Create and show a modal for the empty fields
// //         event.preventDefault();
// //         showErrorModal("Please fill in all the fields.");

// //     } else if (!isValidEmail(email.value.trim())) {
// //         // Create and show a modal for an invalid email
// //         event.preventDefault();
// //         showErrorModal("Please enter a valid email address.");

// //     } else if (password.value.length < 8) {
// //         // Create and show a modal for a too short password
// //         event.preventDefault();
// //         showErrorModal("Password must contain at least 8 characters.");

// //     } else if (!containsUppercase(password.value)) {
// //         // Create and show a modal for a missing uppercase letter
// //         event.preventDefault();
// //         showErrorModal("Password must contain at least 1 uppercase character.");

// //     } else {
// //         // All conditions passed successfully
// //         event.preventDefault();
// //         showSuccessModal("Form filled successfully!");
// //         name.value = "";
// //         email.value = "";
// //         password.value = "";
// //     }
// // });

// // // Function to show an error modal
// // function showErrorModal(message) {
// //     var modal = document.createElement('div');
// //     modal.innerHTML = `
// //         <div class="modal" id="errorModal">
// //             <div class="modal-dialog">
// //                 <div class="modal-content">
// //                     <div class="modal-header">
// //                         <h4 class="modal-title">Error</h4>
// //                         <button type="button" class="close" data-dismiss="modal">&times;</button>
// //                     </div>
// //                     <div class="modal-body">
// //                         ${message}
// //                     </div>
// //                     <div class="modal-footer">
// //                         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     `;

// //     // Append the modal to the document body
// //     document.body.appendChild(modal);

// //     // Use Bootstrap's modal display method
// //     $('#errorModal').modal('show');
// // }

// // // Function to show a success modal
// // function showSuccessModal(message) {
// //     var modal = document.createElement('div');
// //     modal.innerHTML = `
// //         <div class="modal" id="successModal">
// //             <div class="modal-dialog">
// //                 <div class="modal-content">
// //                     <div class="modal-header">
// //                         <h4 class="modal-title">Success</h4>
// //                         <button type="button" class="close" data-dismiss="modal">&times;</button>
// //                     </div>
// //                     <div class="modal-body">
// //                         ${message}
// //                     </div>
// //                     <div class="modal-footer">
// //                         <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     `;

// //     // Append the modal to the document body
// //     document.body.appendChild(modal);

// //     // Use Bootstrap's modal display method
// //     $('#successModal').modal('show');
// // }

// // // Function to check if the email is valid (a simple example)
// // function isValidEmail(email) {
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailRegex.test(email);
// // }

// // // Function to check if the password contains at least one uppercase letter
// // function containsUppercase(password) {
// //     return /[A-Z]/.test(password);
// // }
// // function resetFormFields() {
// //     name.value = "";
// //     email.value = "";
// //     password.value = "";
// // }
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     const name = document.querySelector("#name");
//     const email = document.querySelector("#email");
//     const password = document.querySelector("#password");

//     // Validate the fields
//     if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
//         event.preventDefault();
//         showErrorModal("Please fill in all the fields.");
//     } else if (!isValidEmail(email.value.trim())) {
//         event.preventDefault();
//         showErrorModal("Please enter a valid email address.");
//     } else if (password.value.length < 8) {
//         event.preventDefault();
//         showErrorModal("Password must contain at least 8 characters.");
//     } else if (!containsUppercase(password.value)) {
//         event.preventDefault();
//         showErrorModal("Password must contain at least 1 uppercase character.");
//     } else {
//         event.preventDefault();
//         showSuccessModal("Form filled successfully!");
//         resetFormFields();
//     }
// });

// function showErrorModal(message) {
//     // Use Bootstrap's modal display method
//     $('#errorModal').modal('show');
//     // Set the error message inside the modal
//     document.querySelector("#errorModal .modal-body").innerHTML = message;
// }

// function showSuccessModal(message) {
//     // Use Bootstrap's modal display method
//     $('#successModal').modal('show');
//     // Set the success message inside the modal
//     document.querySelector("#successModal .modal-body").innerHTML = message;
// }

// // Function to reset form fields
// function resetFormFields() {
//     document.querySelector("#name").value = "";
//     document.querySelector("#email").value = "";
//     document.querySelector("#password").value = "";
// }

// // Function to check if the email is valid (a simple example)
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Function to check if the password contains at least one uppercase letter
// function containsUppercase(password) {
//     return /[A-Z]/.test(password);
// }
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");

        // Validate the fields
        if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
            event.preventDefault();
            showErrorModal("Please fill in all the fields.");
        } else if (!isValidEmail(email.value.trim())) {
            event.preventDefault();
            showErrorModal("Please enter a valid email address.");
        } else if (password.value.length < 8) {
            event.preventDefault();
            showErrorModal("Password must contain at least 8 characters.");
        } else if (!containsUppercase(password.value)) {
            event.preventDefault();
            showErrorModal("Password must contain at least 1 uppercase character.");
        } else {
            event.preventDefault();
            showSuccessModal("Form filled successfully!");
            resetFormFields();
        }
    });

    function showErrorModal(message) {
        $('#errorModal .modal-body').html(message);
        $('#errorModal').modal('show');
    }

    function showSuccessModal(message) {
        $('#successModal .modal-body').html(message);
        $('#successModal').modal('show');
    }

    function resetFormFields() {
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function containsUppercase(password) {
        return /[A-Z]/.test(password);
    }
});

