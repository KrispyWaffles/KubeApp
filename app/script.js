const userInput = document.getElementById('userInput');
const submitBtn= document.getElementById('submitBtn');
const greeting = document.getElementById('greeting');




submitBtn.addEventListener("click", function(){
const nameEntered = userInput.value; 



if (nameEntered === "") {
    greeting.innerHTML = "<span>Enter Name!</span>";
} else {
    greeting.textContent = "Hello " + nameEntered + "!";
}


})






