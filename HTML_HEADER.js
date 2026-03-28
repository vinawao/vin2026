document.write('\n<div class="header">\n<table border="0" style="width: 95%;">\n  <tr>\n    <td style="width: 17%; font-size: 17px; font-weight: bold; color: white"><img src="http://iptv2023.xtgem.com/2026/GEMINI/LANDSKAP/IMG/Geminipro_Androidtv.png" style="width: 190px;"></td> \n    <td style="width: 5%; text-align: center;"> </td>\n    <td style="width: 44%; text-align: center;"><div id="jam" style="font-size: 14px; align: left; display: inline-block;"></div><script src="http://iptv2023.xtgem.com/2026/GEMINI/jam.js"></script></td>\n    <td style="width: 11%;"><button class="right" data-modal="modal-info">INFO IPTV</button></td>\n    <td style="width: 9%;"><button class="right" data-modal="modal-about">ABOUT</button></td>\n  </tr>\n</table>\n</div>\n'); 



//* ==== CEGAH ZOOM HALAMAN WEB 

// Mencegah pinch-to-zoom (dua jari)
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Mencegah zoom saat double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

