function auth() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if(email == "gounea.a@gmail.com" && password == "ratio") {
        window.location.assign("dashboard.html")
        alert("OK")
    } 
    else {
        alert("Accès refusé.")
        return
    }
}
