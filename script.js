function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var fullname = document.querySelector('#fullname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var country = document.getElementById('country').value;
    var gender = document.Form.gender.value;
    var age = document.Form.age.value;

console.log('Age: '+age);

    var nameErr = emailErr = mobileErr = countryErr = genderErr = ageErr = true;


    if(fullname == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("fullname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(fullname) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("fullname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("fullname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }


    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[0-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if(country == "Select") {
        printError("countryErr", "Please select your country");
        var elem = document.getElementById("country");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("countryErr", "");
        countryErr = false;
        var elem = document.getElementById("country");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }


    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }


    if(age == "") {
        printError("ageErr", "Please enter your Age");
        var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[0-9]+$/;
        if(regex.test(age) === false) {
            printError("age", "Please enter numbers only");
            var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("ageErr", "");
            ageErr = false;
            var elem = document.getElementById("age");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if((nameErr || emailErr || mobileErr || countryErr || genderErr || ageErr) == true) {
       return false;
    }
};

//validateForm();