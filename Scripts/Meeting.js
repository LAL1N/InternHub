$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
    let param = searchParams.get('Teacher');
    $(".profile-name").html(param);
});