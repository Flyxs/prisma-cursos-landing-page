document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript conectado!");
    const resultado = document.querySelector(".card-resultado");

    resultado.style.display = "none";

    const botaoEnviar =
        document.getElementById("enviarQuiz");

    botaoEnviar.addEventListener("click", () => {

        let tecnologia = 0;
        let gestao = 0;
        let design = 0;

        for(let i = 1; i <= 6; i++){

            const resposta = document.querySelector(
                `input[name="q${i}"]:checked`
            );

            if(!resposta){
                alert(`Responda a pergunta ${i}.`);
                return;
            }

            if(resposta.value === "A"){
                tecnologia++;
            }

            else if(resposta.value === "B"){
                gestao++;
            }

            else{
                design++;
            }

        }

        const total = tecnologia + gestao + design;

        const pctTecnologia =
            Math.round((tecnologia / total) * 100);

        const pctGestao =
            Math.round((gestao / total) * 100);

        const pctDesign =
            Math.round((design / total) * 100);

        let areaPrincipal;

        if (
            tecnologia >= gestao &&
            tecnologia >= design
        ){
            areaPrincipal = "Tecnologia";
        }

        else if (
            gestao >= tecnologia &&
            gestao >= design
        ){
            areaPrincipal = "Gestão";
        }

        else{
            areaPrincipal = "Design";
        }

        document.getElementById("areaPrincipal").textContent =
            areaPrincipal;

        document.getElementById("tec").textContent =
            `Tecnologia ${pctTecnologia}%`;

        document.getElementById("design").textContent =
            `Design ${pctDesign}%`;

        document.getElementById("gestao").textContent =
            `Gestão ${pctGestao}%`;

        const cardsQuiz = document.querySelectorAll(".card-quiz");

        cardsQuiz.forEach(card => {
            card.style.display = "none";
        });
        botaoEnviar.style.display = "none";
        resultado.style.display = "block";

    });

});