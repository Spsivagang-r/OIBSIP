function addTask() {
  let input = document.getElementById("taskInput");
  let category = document.getElementById("category").value;
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");

  // ✅ Checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = function () {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    updateProgress();
  };

  // Task text
  let span = document.createElement("span");
  span.classList.add("task-text");
  span.innerHTML = `<span class="category ${category}">${category}</span> ${taskText}`;

  // Time
  let time = document.createElement("span");
  time.classList.add("time");
  time.innerText = new Date().toLocaleTimeString();

  // Delete button
  let del = document.createElement("span");
  del.classList.add("delete");
  del.innerText = "✖";
  del.onclick = function() {
    li.style.transform = "translateX(100px)";
    li.style.opacity = "0";
    setTimeout(() => {
      li.remove();
      updateProgress();
    }, 300);
  };

  // Add everything into list item
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(time);
  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  updateProgress();
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// 📊 Progress bar function
function updateProgress() {
  let tasks = document.querySelectorAll("#taskList li");
  let completed = document.querySelectorAll("#taskList li.completed");
  
  let progressBar = document.getElementById("progressBar");
  let progressText = document.getElementById("progressText");

  let total = tasks.length;
  let done = completed.length;

  let percent = total === 0 ? 0 : (done / total) * 100;

  progressBar.style.width = percent + "%";
  progressText.innerText = `${done} / ${total} tasks completed`;
}
