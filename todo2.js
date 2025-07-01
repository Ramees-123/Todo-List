const h=document.getElementById('box');
const listContainer = document.getElementById("list-container");
const d=document.getElementById('si')

 

function toAdd(){
  
if(h.value === ''){


  alert("you complete this")
}else{

  let li=document.createElement('li');
  li.innerHTML=h.value;
  listContainer.appendChild(li);
  let span=document.createElement('span');
  span.innerHTML = "\u00d7"
  li.appendChild(span)
}
h.value=''
// saveData();
}

listContainer.addEventListener("click",function(e) {


if(e.target.tagName === "LI"){

  e.target.classList.toggle("checked");
  // saveData();
}else if(e.target.tagName === "SPAN"){

e.target.parentElement.remove();
// saveData();

}},false);

// function saveData(){
//   localStorage.setItem()("data",listContainer.innerHTML);
// }
// function showTask(){

// listContainer.innerHTML=localStorage.getItem("data");



// }