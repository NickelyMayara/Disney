const urlBase = 'https://api.disneyapi.dev'  // url base da documentação
const page = 160

const carregaCaracteres = async () => {
    const res = await fetch(`${urlBase}/character?pageSize=${page}`);
    const { data} = await res.json();  // para extrair 'data' do objeto retornado
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
        divCharacter.id = `character-${character.id}`
        divCharacter.innerHTML = `
        <div class="detalhes-click-personagens">
            <img id="img-character" class="img-character" src="${character.imageUrl}" alt="Imagem do personagem">
            <article class="characterInfo">
                <h3>${character.name}</h3>
            </article>
        </div>   
            `;
        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter) // elemento_pai.appendChild(elemento_filho)
        divCharacter.addEventListener('click', () => {  // ao clicar vai chamar a função
            divCharacter.id = `character-${character.id}`
            divCharacter.innerHTML = `
            <div class="detalhes-click-personagens">
                <img id="img-character" class="img-character" src="${character.imageUrl}" alt="Imagem do personagem">
                    <article class="characterInfoClick">
                        <h3 class="texto-info-click">• NOME: ${character.name}</h3>
                        <h4 class="texto-info-click">• FILME: ${character.films}</h4>
                        <h4 class="texto-info-click">• JOGOS: ${character.videoGames}</h4>
                        <h5 class="texto-info-click">• FANDOM: <a href="${character.sourceUrl}">${character.sourceUrl}</a></h5>
                    </article>
            </div>
            `;
            'character-box'.style.backgroundColor = "#FFF"
        })
    })
}

