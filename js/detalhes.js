async function carregaCaracteres(baseUrl,id) {  
    try {                                     
        const response = await fetch(`${baseUrl}/${id}`)  
        console.log(response)
        if (!response) { 
            throw new Error('Erro ao carregar o personagem')
        }
        return await response.json()
    } catch (error) {
        // console.log(error)
        throw error
    }
}

async function detalharInfo() {  
    const urlParam = new URLSearchParams(window.location.search)
    const idParam = urlParam.get('id')

    if (!idParam) {
        console.log('ID não encontrado na URL')
        return
    }

    const url = `https://api.disneyapi.dev/character/`

    try {
        const character = await carregaCaracteres(url, idParam)
        renderizarPersonagem(character)
    } catch (error) {
        console.log(error)
    }
}

detalharInfo()

async function renderizarPersonagem(character) {
    // console.log(character)

    const img = document.querySelector('.img')
    const name = document.querySelector('.name')
    const films = document.querySelector('.films')
    const videoGames = document.querySelector('.videoGames')
    const sourceUrl = document.querySelector('.sourceUrl')

    img.src = character.image
    name.innerHTML = character.name
    films.innerHTML = character.films
    videoGames.innerHTML = character.videoGames
    sourceUrl.innerHTML = character.sourceUrl
}