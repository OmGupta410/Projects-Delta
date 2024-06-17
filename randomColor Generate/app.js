let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let getRandomcolor=getRandom();
    h3.innerText=getRandomcolor
    let div=document.querySelector("div");
    div.style.backgroundColor=getRandomcolor;
})

function getRandom(){

    let red= Math.ceil(Math.random()*255);
    let green= Math.ceil(Math.random()*255);
    let blue= Math.ceil(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}