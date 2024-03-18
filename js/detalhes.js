function descryptId(id) {
    return parseInt(id, 36)
}

async function carregaCaracteres(baseUrl,id) {  
    console.log(baseUrl, id)
    try {                                     
        const response = await fetch(`${baseUrl}/${id}`)  
        if (!response) { 
            throw new Error('Erro ao carregar o personagem')
        }
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function detalharInfo() {  
    const urlParam = new URLSearchParams(window.location.search)
    const idParam = urlParam.get('_id')

    if (!idParam) {
        console.log('ID não encontrado na URL')
        return
    }

    const idDescrypted = descryptId(idParam)
    const url = `'https://api.disneyapi.dev/character/206`

    try {
        const character = await carregaCaracteres(url, idDescrypted)
        // console.log(character)
        anexarInfo(character)
    } catch (error) {
        console.log(error)
    }
}

detalharInfo()

async function anexarInfo(character) {
    // console.log(character)

    const img = document.querySelector('.img')
    const name = document.querySelector('.name')
    const films = document.querySelector('.films')
    const videoGames = document.querySelector('.videoGames')
    const sourceUrl = document.querySelector('.sourceUrl')

    img.src = character.imageUrl
    name.innerHTML = character.name
    films.innerHTML = character.films
    videoGames.innerHTML = character.videoGames
    sourceUrl.innerHTML = character.sourceUrl
}

