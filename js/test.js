const body = document.querySelector('body');
modeSwitch = body.querySelector('.toggle-switch');
modeText = body.querySelector('.mode-text');

modeSwitch.addEventListener ("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
    modeText.innerHTML = "Light mode";
} else {
    modeText.innerHTML = "Dark mode"
}
});
