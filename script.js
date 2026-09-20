const bouton = document.getElementById("contactBtn");
const contactInfo = document.getElementById("contactInfo");

bouton.addEventListener("click", function() {

    contactInfo.classList.toggle("visible");

    if (contactInfo.classList.contains("visible")) {
        bouton.textContent = "Fermer";
    } else {
        bouton.textContent = "Me contacter";
    }

});