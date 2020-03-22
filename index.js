// document.querySelector("form").addEventListener("click", function(){
// 	document.querySelector("input").blur();
// })

function validateEmail() {
    var emailText = document.querySelector('.contact').value;
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(emailText)) {
        return true;
    } else {
        // alert('Please provide a valid email: ' + emailText);
        document.querySelector(".email-error").innerHTML = "Please provide a valid email";
        document.querySelector(".contact").style.border = "2px solid hsl(0, 93%, 68%)";
        document.querySelector(".icon-error").style.display = "block";
        return false;
    }
}

window.onload = function() {
    document.querySelector('form').onsubmit = validateEmail;
}