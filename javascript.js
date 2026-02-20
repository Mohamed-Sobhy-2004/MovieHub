const locd = localStorage.getItem('them','Light');
const circl = document.querySelector('.circl')
if(localStorage.them == 'Light'){
    on()
}else{
    off()
}
function on(){
    document.body.classList.add('light')
    circl.style.transform = 'translateX(20px)'
    localStorage.setItem('them','Light')
}

function off(){
    document.body.classList.remove('light')
    localStorage.setItem('them','Dark')
    circl.style.transform = 'translateX(0px)';
}

function toggel(){
    if(localStorage.them != 'Light'){
        
        on()
    }else{
        
        off()
    }
}