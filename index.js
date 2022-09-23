let today = new Date();
let dayOfWeek = today.getDay();
const formInfo = document.getElementById("formInfo");

if (dayOfWeek === 0 || dayOfWeek === 6){
    document.writeln("Since its the weekend please be patient");
}

function showMessage(message){
    formInfo.innerHTML = "<p>"+ message + "</p>";
}

function clearMessage(){
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit",function (event){
    event.preventDefault();
    showMessage("Sending message, thank you" + contactForm.fullName);
});

const experiences = document.getElementsByClassName("experience");

for(let x = 0; experiences.length;x++){
    const item = experiences[x];
    item.addEventListener("mouseenter", function(event){
        event.target.style = "background-color: #808080;"
    })
    item.addEventListener("mouseleave", function(event){
        event.target.style = ""
    })

}

class Contact  {
    fullName = "";
    email = "";
    subject = "";
    body = "";
}

