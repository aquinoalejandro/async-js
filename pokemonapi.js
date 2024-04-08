async function obtenerPokemon(nombre) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el Pokémon');
        }

        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error.message);
        return null;
    }
} 

function formatPokemon(pokemon) {
    const nombre = pokemon.name;
    const habilidades = pokemon.abilities.map(habilidad => habilidad.ability.name).join(', ');
    const tipos = pokemon.types.map(
        tipo => tipo.type.name).join(', ');

    return `Datos del Pokémon:
        Nombre: ${nombre}
        Habilidades: ${habilidades}
        Tipos: ${tipos}`;
}

obtenerPokemon("charmander")
    .then(pokemon => {
        if (pokemon) {
            console.log(formatPokemon(pokemon));
        } else {
            console.log('No se encontró el Pokémon.');
        }
    });

