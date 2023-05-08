let login = document.getElementById("login");
let register = document.getElementById("register");

function hideName(){
    let name = document.querySelector(".mail");
    name.classList.remove("name");
    name.classList.add("name-hidden");
}
function showName(){
    let nameHidden = document.querySelector(".mail");
    nameHidden.classList.remove("name-hidden");
    nameHidden.classList.add("name");
}



login.addEventListener("click", hideName);
register.addEventListener("click",showName);