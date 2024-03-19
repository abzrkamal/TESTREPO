//MULA JAVASCRIPT
function DisplayBuruj() {

    // MENYAMBUNG ID HTML KEPADA VARIABLE JAVASCRIPT
    var hari = parseInt(document.getElementById("hari").value);
    var bulan = parseInt(document.getElementById("bulan").value);

    // KALAU RUANGAN KOSONG, ALERT AKAN DIPAPARKAN
    if (isNaN(hari) || isNaN(bulan)) {
        alert("Ruangan Kosong TIDAK DIBENARKAN!");
        return;
    }

    var buruj;
    /* PENGIRAAN ZODIAK BURUJ */
    if ((bulan === 1 && (hari >= 1 && hari <= 19)) || (bulan === 12 && (hari >= 22 && hari <= 31))) 
    buruj = "Capricorn";
    else if ((bulan === 1 && (hari >= 20 && hari <= 31)) || (bulan === 2 && (hari >= 1 && hari <= 19))) 
    buruj = "Aquarius";
    else if ((bulan === 2 && (hari >= 20 && hari <= 28)) || (bulan === 3 && (hari >= 1 && hari <= 20))) 
    buruj = "Pisces";
    else if ((bulan === 3 && (hari >= 21 && hari <= 31)) || (bulan === 4 && (hari >= 1 && hari <= 20))) 
    buruj = "Aries";
    else if ((bulan === 4 && (hari >= 21 && hari <= 30)) || (bulan === 5 && (hari >= 1 && hari <= 20))) 
    buruj = "Taurus";
    else if ((bulan === 5 && (hari >= 21 && hari <= 31)) || (bulan === 6 && (hari >= 1 && hari <= 21))) 
    buruj = "Gemini";
    else if ((bulan === 6 && (hari >= 22 && hari <= 30)) || (bulan === 7 && (hari >= 1 && hari <= 22))) 
    buruj = "Cancer";
    else if ((bulan === 7 && (hari >= 23 && hari <= 31)) || (bulan === 8 && (hari >= 1 && hari <= 22))) 
    buruj = "Leo";
    else if ((bulan === 8 && (hari >= 23 && hari <= 31)) || (bulan === 9 && (hari >= 1 && hari <= 22))) 
    buruj = "Virgo";
    else if ((bulan === 9 && (hari >= 23 && hari <= 30)) || (bulan === 10 && (hari >= 1 && hari <= 22))) 
    buruj = "Libra";
    else if ((bulan === 10 && (hari >= 23 && hari <= 31)) || (bulan === 11 && (hari >= 1 && hari <= 21))) 
    buruj = "Scorpio";
    else buruj = "Sagittarius";

    // UNTUK MENYAMBUNG ID HTML KEPADA VARIABLE JAVASCRIPT
    var penyataan = document.getElementById("penyataan");
    var simbol = document.getElementById("simbol");
    
    /* UNTUK MEMANGGIL GAMBAR UNTUK DIKELUARKAN KE HALAMAN SISTEM */
    simbol.src = buruj.toLowerCase() + ".png";
    simbol.alt = "Gambar " + buruj;
    simbol.style.width = "250px";
    simbol.style.height = "290px";
}