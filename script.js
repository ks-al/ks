function updateDropdown() {
  const dropdown = document.getElementById('task-dropdown');
  const pendingList = document.getElementById('pending-list');
  dropdown.innerHTML = '';
  Array.from(pendingList.children).forEach((li, idx) => {
    const option = document.createElement('option');
    option.value = idx;
    // Use only the span's text for the option
    const span = li.querySelector('span');
    option.text = span ? span.textContent.trim() : li.textContent.replace('Delete', '').trim();
    dropdown.appendChild(option);
  });
}

function createTaskElement(taskText) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = '';
    }
  });

  const span = document.createElement('span');
  span.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', function() {
    li.remove();
    updateDropdown();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  return li;
}

document.getElementById('add-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';

    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Delete button with cross emoji
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.style.background = 'none';
    delBtn.style.border = 'none';
    delBtn.style.fontSize = '1.2em';
    delBtn.style.cursor = 'pointer';
    delBtn.style.marginLeft = '12px';
    delBtn.setAttribute('aria-label', 'Delete task');

    delBtn.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById('pending-list').appendChild(li);
    taskInput.value = '';
  }
});

document.getElementById('delete-btn').addEventListener('click', function() {
  const dropdown = document.getElementById('task-dropdown');
  const idx = dropdown.value;
  const pendingList = document.getElementById('pending-list');
  if (pendingList.children[idx]) {
    pendingList.children[idx].remove();
    updateDropdown();
  }
});

// Initialize dropdown on page load
updateDropdown();