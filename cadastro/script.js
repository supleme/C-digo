const selecionado = document.querySelector("#flexCheckDefault");

document.getElementById('Cadastrar').addEventListener('click', () => {

    selecionado.addEventListener("change", (el) => {
        if ((selecionado.checked)) {
            setTimeout(function () {
                document.getElementById("carregar").style.display = 'block';
                window.location.href = "file:///C:/Users/cesar/Desktop/Faculdade/Pepper%20Crasher/C%C3%B3digo/home/index.html"
                window.location.href = "http://127.0.0.1:5500/home/index.html"
                console.log('teste')
            }, 2000)

        }
        if (!(selecionado.checked)) {
            alert("Você não é maior de idade.");
            document.getElementById("carregar").style.display = 'none';
        }
    });

    selecionado.dispatchEvent(new Event("change"));

});