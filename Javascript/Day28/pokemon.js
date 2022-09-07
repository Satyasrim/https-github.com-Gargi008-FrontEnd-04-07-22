//AJAX with jQuery

/* $(document).ready(function(){ */
$(function(){

    const pokemon="https://pokeapi.co/api/v2/generation/1"

    $.getJSON(pokemon,{
        format: JSON
    }).done(function(pokemonData){
        console.log(pokemonData)
        $.each(pokemonData.pokemon_species,function(index,item){
            const pokemonName= item.name

            const pokeData=$("<p>").html("name of the pokemon is "+ pokemonName)

            pokeData.appendTo("#pokeApi")

        })

    }).fail(function(){
        console.log("sryy it failed")
    })

})