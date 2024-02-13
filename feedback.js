// Validation for Feedback Form

$(function () {
    $('.error').hide();

    $("#feedback_btn_submit").click(function () {
        $('.error').hide();
        var email = $("input#email").val();
        if (email == "") {
            $("label#email_error").show();
            $("input#email").focus();
        }
        if($('.options:checkbox:checked').length == 0){
            $("label#checkboxes_error").show();
        }
        if (!dob.value){
            $("label#dob_error").show();
            $("input#dob").focus();
        }
        if ($('.options:checkbox:checked').length == 0 || email == "" || !dob.value){
            return false;
        }
        return true;
    });
});