document.addEventListener("DOMContentLoaded", () => {
    fetch("https://maloneuniversity.org/partials/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });

    fetch("https://maloneuniversity.org/partials/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});



