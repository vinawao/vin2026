// Ambil semua tombol dan modal
const buttons = document.querySelectorAll('.right');
const modals = document.querySelectorAll('.modal');

// Fungsi untuk menutup semua modal dan reset tombol
function closeAllModals() {
    modals.forEach(modal => modal.classList.add('hidden'));
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.textContent = btn.dataset.modal === 'modal-info' ? 'INFO IPTV' : 'ABOUT';
    });
}

// Tambahkan event listener ke setiap tombol
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetModalId = btn.dataset.modal;
        const targetModal = document.getElementById(targetModalId);
        const isCurrentlyOpen = !targetModal.classList.contains('hidden');

        if (isCurrentlyOpen) {
            // Jika modal sudah terbuka, tutup
            closeAllModals();
        } else {
            // Tutup semua modal lain terlebih dahulu
            closeAllModals();
            // Buka modal target dan ubah tombol
            targetModal.classList.remove('hidden');
            btn.classList.add('active');
            btn.textContent = 'TUTUP';
        }
    });
});
