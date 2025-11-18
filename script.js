// script.js

// 1. Ambil elemen-elemen dari HTML menggunakan ID
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// 2. Tambahkan Event Listener ke Tombol Tambah
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); 
    
    if (taskText !== "") {
        addTask(taskText); // Panggil fungsi utama
        taskInput.value = ''; // Bersihkan input
    }
});

// 3. FUNGSI UTAMA: MEMBUAT ITEM DAFTAR (CREATE & READ)
function addTask(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Tambahkan Event Listener untuk menandai Selesai (Update)
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed'); 
        // classList.toggle akan menambahkan kelas 'completed' jika belum ada, 
        // atau menghapusnya jika sudah ada.
    });

    // Tambahkan Tombol Hapus (DELETE)
    const deleteButton = createDeleteButton(listItem); 
    listItem.appendChild(deleteButton); 

    // Masukkan <li> ke dalam <ul>
    taskList.appendChild(listItem); 
}

// 4. FUNGSI KHUSUS: MEMBUAT TOMBOL HAPUS (DELETE)
function createDeleteButton(listItem) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.className = 'delete-btn'; 
    
    // Tambahkan event listener untuk menghapus <li> induk
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event 'click' menyebar ke <li> (agar tidak tertandai completed)
        taskList.removeChild(listItem);
    });
    
    return deleteButton;
    }
