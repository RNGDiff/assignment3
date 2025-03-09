
// Allt på den här sidan har jag skrivit själv
let mode = '';
const darkMode = document.querySelector('.dark-mode');
darkMode.addEventListener('click', ()=>{
    swapMode('dark')
});
const lightMode = document.querySelector('.light-mode');
lightMode.addEventListener('click', ()=>{
    swapMode('light')
})

 


function swapMode(setting){
    mode = setting;
    if (mode === 'dark'){
        const fName = document.querySelector('.first-name');
        const lName = document.querySelector('.last-name');
        const bodyTag = document.querySelector('body');
        bodyTag.style.background = 'linear-gradient(to right, #313139, #454444)'
        bodyTag.style.color = "#e3e3e3"
        fName.style.color = "#e3e3e3"
        fName.style.opacity = '1'
        lName.style.color = "#e3e3e3"
        lName.style.opacity = '1'

    }
    else if(mode === 'light'){
        const fName = document.querySelector('.first-name');
        const lName = document.querySelector('.last-name');
        const bodyTag = document.querySelector('body');
        bodyTag.style.background = 'none'
        bodyTag.style.backgroundColor = 'white'
        bodyTag.style.color = "black"
        fName.style.color = "#242424"
        fName.style.opacity = '0.4'
        lName.style.color = "#242424"
        lName.style.opacity = '1'

    }
}