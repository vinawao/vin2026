
function updateJam() {
const sekarang = new Date();

const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const bulan = ["Januari","Februari","Maret","April","Mei","Juni",
"Juli","Agustus","September","Oktober","November","Desember"];

let jam = sekarang.getHours();
const menit = String(sekarang.getMinutes()).padStart(2,'0');
const detik = String(sekarang.getSeconds()).padStart(2,'0');
const ampm = jam >= 12 ? 'PM' : 'AM';

jam = jam % 12 || 12;

const teks = ` 📅 ${hari[sekarang.getDay()]}, ${sekarang.getDate()} ${bulan[sekarang.getMonth()]} ${sekarang.getFullYear()} | ⏰ ${jam}:${menit}:${detik} ${ampm}`;

document.getElementById('jam').textContent = teks;
}

updateJam();
setInterval(updateJam, 1000);
