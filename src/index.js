// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const taskInput = document.getElementById('taskInput');
//   const submitButton = document.getElementById('submitButton');
//   const taskList = document.getElementById('taskList');

//   submitButton.addEventListener('click', function() {
//       const taskText = taskInput.value.trim();

//       if (taskText !== '') {
//           const newTask = document.createElement('li');
//           newTask.textContent = taskText;
//           taskList.appendChild(newTask);
//           taskInput.value = ''; // Clear the input field
//       } else {
//           alert('Please enter a task!');
//       }
//   });
// });



document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          const newTask = document.createElement('li');
          newTask.textContent = taskText;
          taskList.appendChild(newTask);
          taskInput.value = ''; // Clear the input field
      } else {
          alert('Please enter a task!');
      }
  });
});


