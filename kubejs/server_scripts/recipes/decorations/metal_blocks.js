onEvent('recipes', event => {
    let metals = [
        'gold',
        'brass',
        'iron',
        'netherite',
        'andesite',
        'zinc',
        'cast_iron',
        'copper'
    ]

    for (const metal of metals) {
        event.remove({output: 'createdeco:' + metal + '_sheet_slab_vert'})
    }

    event.replaceInput({}, 'createdeco:cast_iron_sheet', 'tfc:metal/sheet/cast_iron')
    //event.replaceInput({mod: 'createdeco'}, 'minecraft:netherite_ingot', 'tfc:metal/ingot/black_steel')
    //event.replaceInput({mod: 'createdeco'}, 'createdeco:netherite_sheet', 'tfc:metal/sheet/black_steel')
})