$(document).ready(function(){

    $("#eyeBtn").click(function(){
        
        if($(this).hasClass("fa-eye-slash")){
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
            $("#password").get(0).type = 'text';
        }else{
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
            $("#password").get(0).type = 'password';
        }
    });

});