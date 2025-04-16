
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You must write something');
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        // Optional: Add delete button (the ✖)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // Unicode for "×"
        span.style.marginLeft = "10px";
        span.style.cursor = "pointer";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();/*It will save data after refresh  */
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();