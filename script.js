   const peraElement = document.getElementById("pera")
                  console.log(peraElement.innerHTML);
                  peraElement.textContent="this is paragraph text"
                  peraElement.innerHTML= `<strong>paragraph</strong>`
                  peraElement.inputMode= "hello"
                  peraElement.style.backgroundColor= "red"



const Link = document.querySelector("a")
console.log(Link);
Link.innerText= "Ravindra";
Link.setAttribute("href", "ravindrachoudhary.in");
Link.innerHTML= "<h1>Ravindra</h1>";
Link.style.backgroundColor= "red"

// const div = document.querySelector("div");
// console.log(div);
// div.innerText = "hello World"
// div.style.fontSize = "12px"
// div.style.backgroundColor = "pink"
// div.classList.add("highlight")

let newDiv =  document.createElement("div");
newDiv.innerText = "javaScript is a funny language!"
newDiv.innerHTML = "<h1>javaScript is a funny language!</h1>"
document.body.appendChild(newDiv);
document.body.removeChild(Link);


let button = document.querySelector("button")
console.log("Button", button);

let count =  document.createElement("span")
count.innerText = 0;

document.body.appendChild(count);
button.addEventListener('click', function(event){
      console.log(count.innerText++);
      console.log("event Type", event);
      console.log("event target", event.target);  
} )

let बाहरीDiv = document.getElementById('बाहरी');
let मध्यDiv = document.getElementById('मध्य');
let अंदरButton = document.getElementById('अंदर');

बाहरीDiv.addEventListener('click', function() {
  console.log('बाहरी div पर क्लिक किया गया');
}, true);

मध्यDiv.addEventListener('click', function() {
  console.log('मध्य div पर क्लिक किया गया');
}, true);

अंदरButton.addEventListener('click', function() {
  console.log('बटन पर क्लिक किया गया');
}, true);


let Submit =  document.getElementById("submit")

Submit.addEventListener('click', function(event){
      event.preventDefault();
      console.log("Form Submitted");
      let name = document.getElementById("name").value;
      let email = document.getElementById("age").value;
      console.log("Name", name);
      console.log("Email", email);
})



let table = document.getElementById("mainTable");
let tableButton = document.getElementById("tableButton");

tableButton.addEventListener("click", function(event) {
   event.preventDefault();
   console.log("Button Clicked");
   let row = document.getElementById("rowBody");
   let newRow = row.cloneNode(true);
   table.querySelector("tbody").appendChild(newRow);
});




const addNewTaskButton =  document.getElementById("addTask");
console.log(addNewTaskButton,"addNewTaskButton");

addNewTaskButton.addEventListener("click", (event)=>{
     event.preventDefault();

  console.log("Hello ",event);
  
})




