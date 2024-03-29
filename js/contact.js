document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Here you can add what you want to do with the form data
    console.log("Name: " + name + ", Email: " + email + ", Message: " + message);
    this.reset();
});
