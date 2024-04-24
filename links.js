document.addEventListener("DOMContentLoaded", function() { 
    const buttonhelp = document.getElementById("help");
    const buttonexit = document.getElementById("exit");
    const buttonok = document.getElementById("ok");
    const buttoncool = document.getElementById("cool");
    const buttonexitpass = document.getElementById("exitpass");

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
    buttonexitpass.addEventListener("click", function() {
        var exitwindow = buttonexitpass.parentElement.parentElement.parentElement

        exitwindow.style.visibility = "hidden"
    });

    const tabs = document.querySelectorAll("menu[role=tablist]");
    for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

    tabButtons.forEach((btn) =>
        btn.addEventListener("click", (e) => {
        e.preventDefault();

        tabButtons.forEach((button) => {
            if (
            button.getAttribute("aria-controls") ===
            e.target.getAttribute("aria-controls")
            ) {
            button.setAttribute("aria-selected", true);
            openTab(e, tab);
            } else {
            button.setAttribute("aria-selected", false);
            }
        });
        })
    );
    }
    function openTab(event, tab) {
    const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
    articles.forEach((p) => {
        p.setAttribute("hidden", true);
    });
    const article = tab.parentNode.querySelector(
        `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
    );
    article.removeAttribute("hidden");
    }

    const passaccept = document.getElementById("passaccept")
    passaccept.addEventListener("click", function() {
        let pass = document.getElementById("pass").value;

        if (pass === "gojofucker9000") {
            window.location.href = "./diary.html"
            console.log(pass);
        } else if (pass === "") {
            alert("maybe type something AND THEN you'll have a chance to make it in");
            console.log("dumbass didn't type anything");
        } else {
            alert("WRONG!!!!! try again noob");
            console.log(pass);
        }
    });

    function showpass() {
        var x = document.getElementById("pass");
        
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    const buttonblog = document.getElementById("blog")
    buttonblog.addEventListener("click", function() {
        var passreq = document.getElementById("passreq")

        passreq.style.visibility = "visible"
        document.getElementById("showpass").checked = false
    });

    window.showpass = showpass
    console.log("all func loaded")
});