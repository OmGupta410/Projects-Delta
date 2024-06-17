let btn= document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    if (inp.value.trim() === "") {
        return;
    }
    let item=document.createElement("li");
    item.innerText=inp.value;
    

    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    inp.value="";

})

// let delbtns= document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//     let par=this.parentElement;
//     par.remove();
// });
// }

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
     
})

// let todo=[];
// let req=prompt("Enter your request");
//  console.log(req);


//  while(true){
//     if (req=="quit") {
//         console.log("quitting app");
//         break;
//     }
//      if(req=="list" || req=="List"){
//         console.log("------------------");
//          for(let i=0;i<=todo.length-1;i++){
//              console.log(i,todo[i]);
//          }
//          console.log("------------------");
             
//      }else if(req=="add"){
//            let task= prompt("add  task to do");
//            todo.push(task);
//            console.log("task added");
//      }
//      else if(req=="delete"){
//         let idx=prompt("enter tast index to delete");
//         todo.splice(idx,1);
//         console.log("task deleted");
//      }
//      else{
//         console.log("wrong message");
//      }
//      req=prompt("Enter your request");
//  }

// //pq1

// // let num=245345;
// // count=0;


// // for(let i=0;i<num.length;i++){
// //     num[i]
// //     count++
    
// // }
// // console.log(count);

// // let n=6;
// // let fact=1;

// // for (let i = 1; i <=n; i++) {
// //     fact=fact*i;
    
// // }
// // console.log(`fact of ${n} is ${fact}`);

// // let arr=[2,4,3,7,9,6,5];
// // let cur=0;

// // for (let i = 0; i < arr.length; i++) {
// //     if(cur<arr[i]){
// //         cur=arr[i];
// //     }
// // }
// // console.log(`largest is ${cur}`);

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(i=0;i<=arr.length;i++){
//     if (arr[i]==num) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);