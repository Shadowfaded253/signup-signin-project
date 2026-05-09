function togglePassword(id){

    let input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
}

/* =========================
   SIGNUP VALIDATION
========================= */

let signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let city = document.getElementById("city").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let phonePattern = /^[0-9]{10}$/;
        let cityPattern = /^[A-Za-z ]+$/;
        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        let valid = true;

        document.querySelectorAll(".error").forEach((el)=>{
            el.innerHTML = "";
        });

        if(fullname === ""){
            document.getElementById("nameError").innerHTML = "Full Name Required";
            valid = false;
        }

        if(!emailPattern.test(email)){
            document.getElementById("emailError").innerHTML = "Enter Valid Email";
            valid = false;
        }

        if(!phonePattern.test(phone)){
            document.getElementById("phoneError").innerHTML = "Phone must be 10 digits";
            valid = false;
        }

        if(!cityPattern.test(city)){
            document.getElementById("cityError").innerHTML = "Only alphabets allowed";
            valid = false;
        }

        if(!passwordPattern.test(password)){
            document.getElementById("passwordError").innerHTML =
            "Minimum 8 characters with letters & numbers";
            valid = false;
        }

        if(password !== confirmPassword){
            document.getElementById("confirmError").innerHTML =
            "Passwords do not match";
            valid = false;
        }

        if(valid){

            let userData = {
                fullname,
                email,
                phone,
                city,
                password
            };

            localStorage.setItem("user", JSON.stringify(userData));

            alert("Signup Successful");

            window.location.href = "SignIn.html";
        }

    });

}

/* =========================
   SIGNIN VALIDATION
========================= */

let signinForm = document.getElementById("signinForm");

if(signinForm){

    signinForm.addEventListener("submit", function(e){

        e.preventDefault();

        let loginEmail =
        document.getElementById("loginEmail").value.trim();

        let loginPassword =
        document.getElementById("loginPassword").value.trim();

        let savedUser =
        JSON.parse(localStorage.getItem("user"));

        document.getElementById("loginEmailError").innerHTML = "";
        document.getElementById("loginPasswordError").innerHTML = "";

        if(loginEmail === ""){
            document.getElementById("loginEmailError").innerHTML =
            "Email Required";
            return;
        }

        if(loginPassword === ""){
            document.getElementById("loginPasswordError").innerHTML =
            "Password Required";
            return;
        }

        if(savedUser &&
            loginEmail === savedUser.email &&
            loginPassword === savedUser.password){

            alert("Login Successful");

            window.location.href = "travelapp.html";
        }
        else{

            alert("Invalid Email or Password");
        }

    });

}