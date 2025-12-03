function toggleContent(id) {
    var content = document.getElementById(id);
    var downloadButton = content.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        downloadButton.style.display = "none";
    } else {
        content.style.display = "block";
        downloadButton.style.display = "block";
    }
}

function downloadContent(id) {
    // Implementieren Sie die Logik zum Herunterladen der Inhalte
    alert("Download für " + id);
}
