// uma barra de pesquisa que filtra os dados da tabela de acordo com o que é digitado na barra de pesquisa
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".table tbody tr").forEach(function (row) {
        let flag = row.innerText.toLowerCase().indexOf(value) > -1;
        row.style.display = flag ? "" : "none";
    });
});

// todo link que o usuário clicar, será aberto em uma nova aba
document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.open(this.href, "_blank");
    });
});