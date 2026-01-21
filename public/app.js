const tInput = document.getElementById("taskInput");
const tButton = document.getElementById("addBtn")
const tList = document.getElementById("taskList")

tButton.addEventListener("click", function() {
    const taskText = tInput.value.trim();

    if (taskText === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;

    tList.appendChild(li);
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    tInput.value = "";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete"
    delBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    tList.appendChild(li);

});



