function generateEgg() {
    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    const randomNumber = Math.floor(Math.random() * 90);
    const diff = Math.abs(x - randomNumber);

    let img = document.createElement("img");
    img.style.width = "10vw";
    img.style.height = "10vh";

    if (diff < 3) {
        img.src = "https://bloximages.chicago2.vip.townnews.com/globegazette.com/content/tncms/assets/v3/editorial/d/3e/d3eb7c47-03e1-5457-8678-54078a113ae8/5e90a6c7695e2.preview.jpg"
    }
    else {
        img.src = "https://st4.depositphotos.com/5454582/27584/v/380/depositphotos_275847372-stock-illustration-realistic-hard-boiled-eggs-isolated.jpg";
    }
    document.getElementById("main").appendChild(img);
    img.style.position = "absolute";
    img.style.left = x.toString() + "vw";
    img.style.top = y.toString() + "vh";
    img.style.zIndex = "-1";
}

