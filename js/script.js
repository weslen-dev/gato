let btn = document.querySelector("#botao");
let campo = document.querySelector("#input-texto");
let imgApi = document.querySelector("#imgApi");
let h2 = document.querySelector("#h2");
let figure = document.querySelector("#figure");
let figcaption = document.querySelector("#figcaption");
let span = document.querySelector("#figcaption > span")



figure.style.display = "none"

async function carregarDados(nomeGato){
    
    const url = `http://34.176.250.192:8080/cat?name=${nomeGato}`;

    try {
        const resultado = await fetch(url)
        

        if(campo.value == ''){
            return;
        }

        if(resultado.status === 200){
            const dados = await resultado.json();

            figcaption.style.display = "block"
            
            figure.style.display = "block";
            h2.style.display = "none";

            imgApi.setAttribute("src", `${dados.url}`);
            imgApi.classList.add("imagem-api");
            
            
            span.textContent = `${dados.name}`;
            span.classList.add("span-nome-gato")
}
        

        

    } catch (error) {
        figure.style.display = "none";
        h2.textContent = "Nenhum gato encontrado";
        h2.style.display = "block";
        h2.classList.add("msg-erro");
       
    }
}





btn.addEventListener("click", (event)=>{
    event.preventDefault();
    carregarDados(campo.value);
})


