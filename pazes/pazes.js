window.addEventListener('load', () => {
    const form = document.querySelector("#oForm");
    const texto = document.querySelector("#new-input");
    const list_el = document.querySelector("tasks");


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const resultado = texto.value;

        if( resultado == "sim") {
            alert("SIM");
        } else if (resultado == "SIM"){
            alert("SIM");
        } else if (resultado == "Sim") {
            alert("SIM");
        } else if (resultado == "Talvez") {
            alert("Essa opcao nao tem. Voce vai ter que me desculpar.");
        } else if (resultado == "TALVEZ") {
            alert("Essa opcao nao tem. Voce vai ter que me desculpar.");
        } else if (resultado == "talvez") {
            alert("Essa opcao nao tem. Voce vai ter que me desculpar.");
        } else {
            alert("Tente novamente");
        }

        // const task_el = document.createElement("div");
        // task_el.classList.add("task");

        // const task_content_el = document.createElement("div");
        // task_content_el.classList.add("content");


        texto.value = "";
    });

});

function esconder() {
    if (task.style.display == "block") {
        task.style.display = "none"
    } else {
        task.style.display = "block"
    }
}

function exibirNao() {
    if (nao.style.display == "block") {
        nao.style.display = "none"
    } else {
        nao.style.display = "block"
    }
}

function exibirTalvez() {
    if (talvez.style.display == "block") {
        talvez.style.display = "none"
    } else {
        talvez.style.display = "block"
    }
}