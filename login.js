// Validation for Login Page

$(function () {
    $('.container').hide();
    $('.error').hide();
    $('#back_arrow').hide();

    var newuserbtn = document.getElementById("newuserbtn");
    var existingbtn = document.getElementById("existingbtn");
    var createAcc = document.getElementById("createAcc_form");
    var login = document.getElementById("login_form");
    var back = document.getElementById("back_arrow");

    newuserbtn.onclick = function () {
        $('.section-login').hide();
        $(createAcc).show();
        $('#back_arrow').show();
        $('#create_howto').show();
    }

    existingbtn.onclick = function () {
        $('.section-login').hide();
        $(login).show();
        $('#back_arrow').show();
        $('#login_howto').show();
    }

    back.onclick = function () {
        $('.container').hide();
        $('.section-login').show();
        $('.error').hide();
        $('#back_arrow').hide();
    }

    //New User Validation
    $("#newsubmit_btn").click(function () {
        const nameRegex = /\d/;
        const usernameRegex = /^[^A-Za-z]/
        const passRegexLength = /^(.{8,16})$/
        const passRegexNumbers = /^([^0-9]*)$/
        const passRegexLetters = /^[^A-Za-z]/
        const passRegexSpecChar = /^([^\*\!]*)$/

        $('.error').hide();
        var firstname = $("input#firstname").val();
        if (firstname == "") {
            $("label#firstname_error1").show();
            $("input#firstname").focus();
        }
        if (nameRegex.test(firstname)) {
            $("label#firstname_error2").show();
            $("input#firstname").focus();
        }
        var lastname = $("input#lastname").val();
        if (lastname == "") {
            $("label#lastname_error1").show();
            $("input#lastname").focus();
        }
        if (nameRegex.test(lastname)) {
            $("label#lastname_error2").show();
            $("input#lastname").focus();
        }
        var newusername = $("input#newusername").val();
        if (newusername == "") {
            $("label#newusername_error1").show();
            $("input#newusername").focus();
        }
        if (usernameRegex.test(newusername)) {
            $("label#newusername_error2").show();
            $("input#newusername").focus();
        }
        var email = $("input#newemail").val();
        if (email == "") {
            $("label#newemail_error").show();
            $("input#newemail").focus();
        }
        var password = $("input#newpassword").val();
        if (password == "") {
            $("label#newpassword_error1").show();
            $("input#newpassword").focus();
        }
        if (!passRegexLength.test(password)) {
            $("label#newpassword_error_length").show();
            $("input#newpassword").focus();
        }
        if (passRegexLetters.test(password)) {
            $("label#newpassword_error_letters").show();
            $("input#newpassword").focus();
        }
        if (passRegexNumbers.test(password)) {
            $("label#newpassword_error_number").show();
            $("input#newpassword").focus();
        }
        if (passRegexSpecChar.test(password)) {
            $("label#newpassword_error_spec_char").show();
            $("input#newpassword").focus();
        }

        if(firstname == "" || nameRegex.test(firstname) || lastname == "" || nameRegex.test(lastname) || newusername == "" || usernameRegex.test(newusername)
           || email == "" || password == "" || !passRegexLength.test(password) || passRegexLetters.test(password) || passRegexNumbers.test(password) || passRegexSpecChar.test(password)) {
            return false; 
           }
        
        alert("Account Created!")
        return true;
    });

    //Existing User Validation
    $("#loginsubmit_btn").click(function () {
        $('.error').hide();
        var newusername = $("input#login_username").val();
        if (newusername == "") {
            $("label#loginusername_error").show();
            $("input#login_username").focus();
        }
        var password = $("input#loginpassword").val();
        if (password == "") {
            $("label#loginpassword_error").show();
            $("input#loginpassword").focus();
        }
        if(newusername == "" || password == "") {
            return false;
        }
        alert("Login Success. Welcome!")
        return true;
    });

});

