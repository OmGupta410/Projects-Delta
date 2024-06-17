let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");


btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let delbtn = document.createElement("button");

  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);

  ul.appendChild(item);

  inp.value = "";

  // ul.append(inp.value);
});

ul.addEventListener("click", function(event){
  if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
    console.log("deleted");
  }
});

// let delbtns = document.querySelectorAll(".delete");

// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }

// // let todo = ["eat", "sleep", "repeat"];

// // let req = prompt("enter your request");

// while (true) {
//   if (req == "quit" || req == "QUIT" || req == "Quit") {
//     console.log("quittin app");
//     break;
//   }

//   if (req == "list") {
//     console.log("Your Tasks");
//     console.log("---------------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("---------------------");
//   } else if (req == "add") {
//     let add = prompt("enter your task to add");
//     todo.push(add);
//     console.log("task added");
//   } else if(req=="delete"){
//     let idx=prompt("please enter index of what you want to delete")
//     todo.splice(idx,1);
//     console.log("deleted sucesfully");
//   }
//   req = prompt("enter your request");
// }
