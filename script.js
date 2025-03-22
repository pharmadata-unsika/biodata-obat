function searchObat() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#obatTable tbody tr");

    rows.forEach(row => {
        let namaObat = row.cells[0].innerText.toLowerCase();
        if (namaObat.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}