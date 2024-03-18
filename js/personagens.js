const urlBase = 'https://api.disneyapi.dev'  // url base da documentação
const page = 156

const carregaCaracteres = async () => {
    const res = await fetch(`${urlBase}/character?pageSize=${page}`);
    const { data } = await res.json();  // para extrair 'data' do objeto retornado
    return data;  // Retorna data diretamente sem precisar colocar em um objeto 
};

const separaInfo = async () => {
    const characters = await carregaCaracteres();
    // console.log('Characters: ', characters);
    InfoPersonagens(characters);
}

separaInfo()

function InfoPersonagens(characters) {  // função das informações de characters
    const characterContainer = document.getElementById('character-container')
    characters.map((character) => {
        const divCharacter = document.createElement('div')
        divCharacter._id = `character-${character._id}`
        divCharacter.innerHTML = `
            <img id="img-character" class="img-character" src="${character.imageUrl}" alt="Imagem do personagem">
            <article class="characterInfo">
                <h3>${character.name}</h3>
                `;

        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter) // elemento_pai.appendChild(elemento_filho)
        divCharacter.addEventListener('click', () => {  // ao clicar vai chamar a função
            detalhesPersonagens(character._id)
        })
    })
}

function detalhesPersonagens(_id){
    const idCriptografado = criptografarId(_id)
    window.location.href = `./detalhes.html?id=${idCriptografado}`
}

function criptografarId(_id){
    return _id.toString(36)
}



