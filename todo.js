const inputBox = document.querySelector("input");
const listItem = document.querySelector("ul");
const clickBtn = document.getElementById("clickBtn");


function addTask(){
    if (inputBox.value === ''){
        alert("You cannot add empty task ..");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listItem.appendChild(list);
        
        let cancl = document.createElement("span");
        cancl.innerHTML = "\u00d7";
        list.appendChild(cancl);
        //listItem.append(document.createElement("br"));
    }
    inputBox.value = "";
    saveList();
}

listItem.addEventListener("click", function(up_date){
    if (up_date.target.tagName === "LI"){
        up_date.target.classList.toggle("checked");
        saveList();
    }
    else if(up_date.target.tagName === "SPAN"){
        up_date.target.parentElement.remove();
        saveList();
    }
});

inputBox.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        addTask(inputBox.value);
    }
})

// Function to save created list
function saveList(){
    localStorage.setItem("data", listItem.innerHTML);
}

// Function to save List on website
function webStore(){
    listItem.innerHTML = localStorage.getItem("data");
}
webStore();