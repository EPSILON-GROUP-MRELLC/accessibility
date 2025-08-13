document.addEventListener("DOMContentLoaded", () => {
    Promise.all([
        fetch("https://maloneuniversity.org/partials/navbar.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("navbar").innerHTML = data;
            }),
        fetch("https://maloneuniversity.org/partials/footer.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer").innerHTML = data;
            })
    ]).then(() => {
        // Load main.js after navbar & footer are inserted
        const script = document.createElement("script");
        script.src = "https://maloneuniversity.org/data/main.js";
        document.body.appendChild(script);
    });
});
