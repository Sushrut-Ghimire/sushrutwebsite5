let title = document.querySelector('.writing');
let name = "Welcome to the official website of Sushrut Ghimire"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index++;

    setTimeout(() => {typeWriter()}, 40)

}


typeWriter();

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.subject')

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
}
}