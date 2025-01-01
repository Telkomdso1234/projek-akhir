// Menampilkan greeting berdasarkan waktu
window.onload = function() {
    const greetingElement = document.createElement('div');
    const date = new Date();
    const hour = date.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Selamat Pagi!";
    } else if (hour < 18) {
        greeting = "Selamat Siang!";
    } else {
        greeting = "Selamat Malam!";
    }

    greetingElement.innerText = greeting;
    greetingElement.style.textAlign = "center";
    greetingElement.style.marginTop = "20px";
    document.body.prepend(greetingElement);
};