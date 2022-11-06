const boxes = document.querySelectorAll(".hide");
document.getElementById("copy").addEventListener("click",copy);


window.addEventListener("scroll",move_box);



function move_box(){
    const bottom_trigger = (window.innerHeight / 5 *4); 
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < bottom_trigger) box.classList.remove("hide");
        else box.classList.add("hide");
    });    
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function copy(){
    navigator.clipboard.writeText('sturm.omer@gmail.com');
    document.querySelector('.good').style.transform = 'scale(1)'
    await sleep(1000);
    document.querySelector('.good').style.transform = 'scale(0)'

}
