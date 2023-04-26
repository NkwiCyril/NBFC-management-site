document.getElementById("go-back").addEventListener("click" ,() =>{
    history.back();
})
const allSections = document.querySelector('.player-role');
const sectBtn = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.category');


function pageTransitions(){
    //button click active class

    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn'); //here, the current button has a class name of active-btn
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); //once I click on a different button, the class 'active-btn' is replaced with an empty string 
            this.className += 'active-btn';
        })
    }
}