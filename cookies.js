const botonAceptar = document.getElementById("aceptar-cookies");
const avisoCookie = document.getElementById("aviso-cookie")
const fondoCookie = document.getElementById("cookie-bg")

if(!localStorage.getItem("cookies-aceptadas")){
    avisoCookie.classList.add("activo");
    fondoCookie.classList.add("activo");
}

botonAceptar.addEventListener("click", ()=> {
    avisoCookie.classList.remove("activo");
    fondoCookie.classList.remove("activo");

    localStorage.setItem("cookies-aceptadas", true)
})