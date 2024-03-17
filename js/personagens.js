const urlBase = 'https://api.disneyapi.dev'  // url base da documentação
const page = 156

const carregaCaracteres = async () => {
    const res = await fetch(`${urlBase}/character?pageSize=${page}`);
    const { data } = await res.json();  // para extrair 'data' do objeto retornado
    return data;  // Retorna data diretamente sem precisar colocar em um objeto 
};

function InfoPersonagens(characters) {  // funçaõ das informações de characters
    const characterContainer = document.getElementById('character-container')
    characters.map((character) => {
        const divCharacter = document.createElement('div')
        divCharacter.id = `character-${character.id}`
        divCharacter.innerHTML = `
            <img id="img-character" class="img-character" src="${character.imageUrl}" alt="Imagem do personagem">
            <article class="characterInfo">
                <h3>${character.name}</h3>
                `;

        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter) // elemento_pai.appendChild(elemento_filho)
        divCharacter.addEventListener('click', () => {  // ao clicar vai chamar a função
            detalhesPersonagens(character.id)
        })
    })
}

function detalhesPersonagens(id){
    console.log(id)
    const urlDetalhes = `./pages/detalhes.html?id=${id}`
    window.location.href = urlDetalhes
}

const separaInfo = async () => {
    const characters = await carregaCaracteres();
    // console.log('Characters: ', characters);
    InfoPersonagens(characters);
}

separaInfo()

