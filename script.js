const clickNotif = document.querySelector('.click');
let dontNotif = document.querySelector(".dont")

var flashingClick = setInterval(function() {
    clickNotif.classList.toggle("flashing");
},1000);

var flashingDont = setInterval(function() {
    dontNotif.classList.toggle("flashing");
},2500);

//clicking on sad

const sadButton = document.querySelector(".sad-word");
let answer1 = document.querySelector(".answer1");
let willit = document.querySelector(".will-it");
let fineRotate = document.querySelector(".fine")
let executeFlag = false;


sadButton.addEventListener('click', ()=>{
    clearInterval(flashingDont);
    clearInterval(flashingClick);
    dontNotif.classList.remove("flashing");
    clickNotif.classList.remove("flashing");
    answer1.classList.add("appear");  
    executeFlag = true;  
    
    const asynctimeout = (classToChange,delay, className) => {
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                classToChange.classList.add(className);
                resolve();
            },delay)
        })
    };

    asynctimeout(fineRotate,2000,"rotate")
    .then(()=> asynctimeout(willit,2000,"appear"))
    .then(()=> asynctimeout(fineRotate,1,"zoom-down"))
    .then(()=> {
        let finalFine = document.querySelector(".fine.rotate.zoom-down");
        setTimeout(()=>{
            finalFine.style.display = "none";
        },1200)
        
    });
    


});


//update imports
answer1 = document.querySelector(".answer1");
willit = document.querySelector(".will-it");