$(document).ready(function(){

    $(".box a").click(function(e){
        e.preventDefault();
        location.href = "./Meeting.html?Teacher=" + $(this).data("teacher");
        
    });

})