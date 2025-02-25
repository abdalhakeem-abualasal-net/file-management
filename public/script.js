const apiUrl = 'http://localhost:3000/api';

async function readFile() {
  const fileName = document.getElementById('readFileName').value;
  try {
    const response = await fetch(`${apiUrl}/read?fileName=${fileName}`);
    const data = await response.json();
    if (response.ok) {
      document.getElementById('readMessage').textContent = "File read successfully!";
      document.getElementById('readMessage').classList.add('text-green-600');
      document.getElementById('readContent').textContent = data.content || "No content available";
    } else {
      document.getElementById('readMessage').textContent = data.error || "Error reading file";
      document.getElementById('readMessage').classList.add('text-red-600');
    }
  } catch (error) {
    document.getElementById('readMessage').textContent = "Failed to read file";
    document.getElementById('readMessage').classList.add('text-red-600');
  }
}

async function writeFile() {
  const fileName = document.getElementById('writeFileName').value;
  const content = document.getElementById('writeContent').value;
  try {
    const response = await fetch(`${apiUrl}/write`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName, content })
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('writeMessage').textContent = "File written successfully!";
      document.getElementById('writeMessage').classList.add('text-green-600');
    } else {
      document.getElementById('writeMessage').textContent = data.error || "Error writing file";
      document.getElementById('writeMessage').classList.add('text-red-600');
    }
  } catch (error) {
    document.getElementById('writeMessage').textContent = "Failed to write file";
    document.getElementById('writeMessage').classList.add('text-red-600');
  }
}

async function appendFile() {
  const fileName = document.getElementById('appendFileName').value;
  const content = document.getElementById('appendContent').value;
  try {
    const response = await fetch(`${apiUrl}/append`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileName, content })
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('appendMessage').textContent = "Content appended successfully!";
      document.getElementById('appendMessage').classList.add('text-green-600');
    } else {
      document.getElementById('appendMessage').textContent = data.error || "Error appending to file";
      document.getElementById('appendMessage').classList.add('text-red-600');
    }
  } catch (error) {
    document.getElementById('appendMessage').textContent = "Failed to append to file";
    document.getElementById('appendMessage').classList.add('text-red-600');
  }
}

async function deleteFile() {
  const fileName = document.getElementById('deleteFileName').value;
  try {
    const response = await fetch(`${apiUrl}/delete?fileName=${fileName}`, { method: 'DELETE' });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('deleteMessage').textContent = "File deleted successfully!";
      document.getElementById('deleteMessage').classList.add('text-green-600');
    } else {
      document.getElementById('deleteMessage').textContent = data.error || "Error deleting file";
      document.getElementById('deleteMessage').classList.add('text-red-600');
    }
  } catch (error) {
    document.getElementById('deleteMessage').textContent = "Failed to delete file";
    document.getElementById('deleteMessage').classList.add('text-red-600');
  }
}

async function renameFile() {
  const oldName = document.getElementById('oldFileName').value;
  const newName = document.getElementById('newFileName').value;
  try {
    const response = await fetch(`${apiUrl}/rename`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldName, newName })
    });
    const data = await response.json();
    if (response.ok) {
      document.getElementById('renameMessage').textContent = "File renamed successfully!";
      document.getElementById('renameMessage').classList.add('text-green-600');
    } else {
      document.getElementById('renameMessage').textContent = data.error || "Error renaming file";
      document.getElementById('renameMessage').classList.add('text-red-600');
    }
  } catch (error) {
    document.getElementById('renameMessage').textContent = "Failed to rename file";
    document.getElementById('renameMessage').classList.add('text-red-600');
  }
}

async function createDirectory() {
  const dirName = document.getElementById('createDirName').value;
  try {
    const response = await fetch(`${apiUrl}/create-dir`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dirName })
    });
    const data = await response.json();
    if (response.ok) {
      alert("Directory created successfully!");
    } else {
      alert(data.error || "Error creating directory");
    }
  } catch (error) {
    alert("Failed to create directory");
  }
}

async function deleteDirectory() {
  const dirName = document.getElementById('deleteDirName').value;
  try {
    const response = await fetch(`${apiUrl}/delete-dir?dirName=${dirName}`, { method: 'DELETE' });
    const data = await response.json();
    if (response.ok) {
      alert("Directory deleted successfully!");
    } else {
      alert(data.error || "Error deleting directory");
    }
  } catch (error) {
    alert("Failed to delete directory");
  }
}
