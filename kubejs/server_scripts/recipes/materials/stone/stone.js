onEvent('recipes', event => {
    let igneousRocks = [
        'granite',
        'diorite',
        'gabbro',
        'rhyolite',
        'basalt',
        'andesite',
        'dacite'
    ]
    
    for (const rockType of igneousRocks) {
        event.recipes.tfc.heating(
            'tfc:rock/magma/' + rockType,
            '#kubejs:' + rockType,
            1000
        )
    }

    event.replaceInput({id: 'create:crafting/materials/andesite_alloy'}, 'minecraft:iron_nugget', '#kubejs:mafic_alloy_components')
    event.replaceInput({id: 'create:crafting/materials/andesite_alloy'}, 'minecraft:andesite', '#kubejs:magma')
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})

    event.replaceInput({id: 'create:mixing/andesite_alloy'}, 'minecraft:iron_nugget', '#kubejs:mafic_alloy_components')
    event.replaceInput({id: 'create:mixing/andesite_alloy'}, 'minecraft:andesite', '#kubejs:magma')
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
})