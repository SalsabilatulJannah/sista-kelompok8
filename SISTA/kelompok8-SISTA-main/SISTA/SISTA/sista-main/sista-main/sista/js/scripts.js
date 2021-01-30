// Empty JS for your own code to be here
function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Username / Password Tidak Boleh Kosong");
        return false;
    }
    else if (password.length < 8) {
        alert("Password Kurang dari 8");
        return false;
    }
    else if (username == "kelompok8" && password == "#sistahh") {
        window.location = "no7.html";
        return false;
    }
    else if (username == "sabyan" && password == "12082020") {
        window.location = "home.html";
        return false;
        
    }else{
        alert("Username / Password anda salah");

function load() {
        alert("username : kelompok8 & password : #sistahh");
    }
  }
}
