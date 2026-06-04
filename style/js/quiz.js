const perguntas = [

    {
        texto: "Qual atividade desperta mais interesse?",
        respostas: [
            "Resolver problemas usando lógica ou números.",
            "Organizar pessoas, ideias ou projetos.",
            "Criar algo visualmente bonito ou artístico."
        ]
    },

    {
        texto: "Em um trabalho em grupo, você normalmente:",
        respostas: [
            "Procura a parte técnica.",
            "Coordena as atividades.",
            "Cuida da apresentação e criatividade."
        ]
    },

    {
        texto: "Você prefere:",
        respostas: [
            "Descobrir como as coisas funcionam.",
            "Planejar e tomar decisões.",
            "Inventar soluções novas."
        ]
    },

    {
        texto: "Qual dessas matérias você mais gosta?",
        respostas: [
            "Matemática/Física.",
            "Administração/Atualidades.",
            "Artes/Produção Visual."
        ]
    },

    {
        texto: "Você se considera mais:",
        respostas: [
            "Analítico(a).",
            "Estratégico(a).",
            "Criativo(a)."
        ]
    },

    {
        texto: "Quando você vê um produto famoso, o que pensa?",
        respostas: [
            "Como ele foi criado?",
            "Como fizeram ele crescer tanto?",
            "Nossa, que design interessante!"
        ]
    }

];

let perguntaAtual = 0;

let tecnologia = 0;
let gestao = 0;
let design = 0;

function mostrarPergunta(){

    document.getElementById("pergunta").textContent =
        `${perguntaAtual + 1}. ${perguntas[perguntaAtual].texto}`;

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    perguntas[perguntaAtual].respostas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement("button");

            const letras = ["A", "B", "C"];

            botao.textContent =
                `${letras[indice]}) ${texto}`;

            botao.onclick = () =>
                responder(indice);

            alternativas.appendChild(botao);

        }
    );
}

function responder(indice){

    if(indice === 0){
        tecnologia++;
    }

    else if(indice === 1){
        gestao++;
    }

    else{
        design++;
    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){
        mostrarPergunta();
    }

    else{
        mostrarResultado();
    }
}

function mostrarResultado(){

    document.querySelector(".card-quiz")
        .style.display = "none";

    document.querySelector(".card-resultado")
        .style.display = "block";

    const total =
        tecnologia + gestao + design;

    const pctTec =
        Math.round((tecnologia / total) * 100);

    const pctGestao =
        Math.round((gestao / total) * 100);

    const pctDesign =
        Math.round((design / total) * 100);

    let areaPrincipal;

    if(
        tecnologia >= gestao &&
        tecnologia >= design
    ){
        areaPrincipal = "Tecnologia";
    }

    else if(
        gestao >= tecnologia &&
        gestao >= design
    ){
        areaPrincipal = "Gestão";
    }

    else{
        areaPrincipal = "Design";
    }

    document.getElementById("areaPrincipal")
        .textContent = areaPrincipal;

    document.getElementById("tec")
        .textContent = `Tecnologia ${pctTec}%`;

    document.getElementById("design")
        .textContent = `Design ${pctDesign}%`;

    document.getElementById("gestao")
        .textContent = `Gestão ${pctGestao}%`;
}

mostrarPergunta();

document.getElementById("voltarAoInicio")
.addEventListener("click", () => {

    window.location.href = "index.html";

});