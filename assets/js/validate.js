// validate.js

function validateForm() {
    var pesan = document.getElementById('pesan').value;
    if (pesan.trim() === '') {
        alert('Pesan tidak boleh kosong!');
        return false;
    }
    return true;
}
