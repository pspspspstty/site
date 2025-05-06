document.addEventListener("DOMContentLoaded", function() { 
    var buttonhelp = document.getElementById("help");
    var buttonexit = document.getElementById("exit");
    var buttonok = document.getElementById("ok");
    var buttoncool = document.getElementById("cool");

    buttonhelp.addEventListener("click", function() {
        var alert = document.getElementById("helpalert")

        alert.style.visibility = "visible"
    });

    buttonexit.addEventListener("click", function() {
        var exitwindow = buttonexit.parentElement.parentElement.parentElement

        exitwindow.style.visibility = "hidden"
    });

    buttonok.addEventListener("click", function() {
        var exitwindow = buttonok.parentElement.parentElement.parentElement

        exitwindow.style.visibility = "hidden"
    });

    buttoncool.addEventListener("click", function() {
        var exitwindow = buttoncool.parentElement.parentElement.parentElement

        exitwindow.style.visibility = "hidden"
    });
});