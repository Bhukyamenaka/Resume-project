document.getElementById("resumeForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        document.getElementById("message").innerHTML =
        "Please fill all required fields.";
    }
    else {
        document.getElementById("message").innerHTML =
        "Resume submitted successfully!";
    }

});