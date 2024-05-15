let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const form = document.getElementById('contact-form');
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phoneNumber"); // Corrected ID
const subject = document.getElementById("subject");
const message = document.getElementById("message");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});


function sendEmail() {

    const bodymessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message:${message.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rishabhuikey@gmail.com",
        Password: "83615B47D10E655F34699517BCB1B9D23DB2",
        To: "rishabhuikey@gmail.com",
        From: "rishabhuikey@gmail.com",
        Subject: subject.value,
        Body: bodymessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
        sendEmail();
    }
});

function validateForm() {
    let isValid = true;
    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    if (fullName.value === "") {
        fullNameError.style.display = "block";
        isValid = false;
    } else {
        fullNameError.style.display = "none";
    }

    if (email.value === "") {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    if (phone.value === "") {
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    if (message.value === "") {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    return isValid;
}