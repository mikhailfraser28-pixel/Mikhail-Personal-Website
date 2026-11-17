// dark and light mode 
const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "light-mode";
        } else {
            themeButton.textContent = "dark-mode";
        }

    })
}

// digital clock on home page
function displayClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        const currentTime = new Date();

        clock.textContent = currentTime.toLocaleTimeString();
    }
}

displayClock();
setInterval(displayClock, 1000);

// show and hide extra content on contact page
const toggleButton = document.getElementById("toggleButton");
const extraContent = document.getElementById("extraContent");

if (toggleButton && extraContent) {
    toggleButton.addEventListener("click",function () {

        if (extraContent.style.display === "none") {
            extraContent.style.display = "block";
            toggleButton.textContent = "showless";
        } else {
            extraContent.style.display = "none";
            toggleButton.textContent = "Show More";
        }
    });
}

//Highlight bold text on hover on home page
const boldTexts = document.querySelectorAll("strong");

boldTexts.forEach(function (text) {

    text.addEventListener("mouseover", function () {
        text.style.backgroundColor = "yellow";
        text.style.color = "black";
    });

    text.addEventListener("mouseout", function () {
        text.style.backgroundColor = "";
        text.style.color = "";
    });

});

//Back to Top button on home
const topButton = document.getElementById("topButton");

if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        
        });

    });
}

// Contact form
const contactForm = document.getElementById("contactForm");
const messageStatus = document.getElementById("messageStatus");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        messageStatus.textContent = "Message sent successfully!";
        messageStatus.style.color = "green";

        contactForm.reset();

    });

}