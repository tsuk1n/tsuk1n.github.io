var exemplo = document.getElementById("senha")
var imagens = document.getElementById("lswitch-pw")

var swpassword = document.getElementById('password-sw')
swpassword.addEventListener("change", function(){

if(swpassword.checked){
    exemplo.type = "text";
    imagens.src = "img/senha-fechada.svg";

}else{
    exemplo.type = "password";
    imagens.src = "img/senha-aberta.svg";
}

})
