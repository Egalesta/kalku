function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        result = eval(result); // Evaluasi ekspresi matematika
        document.getElementById('result').value = result;
        saveToCloud(result); // Simpan hasil ke cloud
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

// Fungsi untuk menyimpan hasil ke cloud (misalnya menggunakan Firebase)
function saveToCloud(result) {
    // Inisialisasi Firebase dan simpan hasil perhitungan
    // Misalnya, menggunakan Firebase:
    // const db = firebase.firestore();
    // db.collection("calculations").add({
    //     result: result,
    //     timestamp: new Date()
    // });
}
let history = []; // Menyimpan riwayat perhitungan

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        // Evaluasi ekspresi matematika
        result = eval(result);
        document.getElementById('result').value = result;
        saveHistory(result); // Simpan riwayat perhitungan
        saveToCloud(result); // Simpan hasil ke cloud
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

// Menambahkan perhitungan ke riwayat
function saveHistory(result) {
    const expression = document.getElementById('result').value;
    history.push(`${expression} = ${result}`);
    if (history.length > 5) {
        history.shift(); // Menyimpan hanya 5 riwayat terakhir
    }
    updateHistoryList(); // Perbarui tampilan riwayat
}

// Memperbarui tampilan riwayat
function updateHistoryList() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Kosongkan daftar riwayat
    history.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

// Fungsi untuk menyimpan hasil ke cloud (misalnya menggunakan Firebase)
function saveToCloud(result) {
    // Inisialisasi Firebase dan simpan hasil perhitungan
    // Misalnya, menggunakan Firebase:
    // const db = firebase.firestore();
    // db.collection("calculations").add({
    //     result: result,
    //     timestamp: new Date()
    // });
}
