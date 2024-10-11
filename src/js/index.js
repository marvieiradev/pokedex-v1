const botaoAlterarTema = document.getElementById("botao-tema");
const body = document.querySelector("body");
const imagemTema = document.querySelector(".imagem-botao");
const container = document.querySelector("main");
const pokemonCount = 151

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemons(i)
    }
}

const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    createPokemonCard(data)

}

const createPokemonCard = (poke) => {
    const card = document.createElement('div')
    card.classList.add("cartao-pokemon")

    const name = poke.name[0] + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, '0')

    const pokeTypes = poke.types.map(type => type.type.name)

    var type1 = pokeTypes[0]
    var type2 = pokeTypes[1]

    if (type2 == undefined) {
        type2 = 'no-type'
    }

    const pokemonInnerHTML = `
        <div class="informacoes">
            <span class="name">${name}</span>
            <span class="number">#${id}</span>
         </div>

         
        <ul class="bg-poke">
            <img src="https://raw.githubusercontent.com/marvieiradev/imgs-projetos/master/pokemon/png/${poke.id}.png" alt="${name}" class="png">
        </ul>
        <ul class="tipos">
            <li class="tipo ${type1}">${obterTipo(type1)}</li>
            <li class="tipo ${type2}">${obterTipo(type2)}</li>
        </ul>
        <p class="descricao">${dex[poke.id]}</p>
        `
    card.innerHTML = pokemonInnerHTML
    container.appendChild(card)
}

const obterTipo = (type) => {
    switch (type) {
        case 'normal':
            type = 'normal'
            break

        case 'fighting':
            type = 'lutador'
            break

        case 'flying':
            type = 'voador'
            break

        case 'poison':
            type = 'veneno'
            break

        case 'ground':
            type = 'terra'
            break

        case 'rock':
            type = 'pedra'
            break

        case 'bug':
            type = 'inseto'
            break

        case 'ghost':
            type = 'fantasma'
            break

        case 'steel':
            type = 'metal'
            break

        case 'fire':
            type = 'fogo'
            break

        case 'water':
            type = 'água'
            break

        case 'grass':
            type = 'grama'
            break

        case 'electric':
            type = 'elétrico'
            break

        case 'psychic':
            type = 'psíquico'
            break

        case 'ice':
            type = 'gelo'
            break

        case 'dragon':
            type = 'dragão'
            break

        case 'dark':
            type = 'escuro'
            break

        case 'fairy':
            type = 'fada'
            break
    }

    return type
}

botaoAlterarTema.addEventListener("click", () => {
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemTema.setAttribute("src", "./imagens/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagemTema.setAttribute("src", "./imagens/moon.png");
    }
})

fetchPokemons()