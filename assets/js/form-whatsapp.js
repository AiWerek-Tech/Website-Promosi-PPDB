// Fungsi untuk menampilkan/menyembunyikan popup form WhatsApp
function togglePopup() {
    var popup = document.getElementById('popupForm');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Fungsi untuk membuka form WhatsApp tanpa validasi
function openWhatsAppForm() {
    var pesan = document.getElementById('pesan').value;
    var pesanEncoded = encodeURIComponent(pesan);
    var url = 'https://wa.me/6282190822641?text=' + pesanEncoded;
    window.open(url, '_blank');
    document.getElementById('popupForm').style.display = 'none'; // Menyembunyikan popup setelah form diserahkan
    return false; // Prevent default action
}
