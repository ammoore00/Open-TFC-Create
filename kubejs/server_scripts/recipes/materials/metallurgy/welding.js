onEvent('recipes', event => {
    let welding = (material) => {
        weldingRecipe(material, 'ingot')
        weldingRecipe(material, 'sheet')
    }

    let weldingRecipe = (material, type) => {
        event.recipes.createSequencedAssembly(
            [
                'tfc:metal/double_' + type + '/' + material
            ],
            'tfc:metal/' + type + '/' + material,
            [
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + material + '_double_' + type,
                    [
                        'kubejs:incomplete_' + material + '_double_' + type,
                        'tfc:metal/' + type + '/' + material
                    ]
                ),
                event.recipes.createDeploying(
                    'kubejs:incomplete_' + material + '_double_' + type,
                    [
                        'kubejs:incomplete_' + material + '_double_' + type,
                        'tfc:powder/flux'
                    ]
                ),
                event.recipes.createPressing(
                    'kubejs:incomplete_' + material + '_double_' + type,
                    [
                        'kubejs:incomplete_' + material + '_double_' + type
                    ]
                )
            ]
        ).transitionalItem('kubejs:incomplete_' + material + '_double_' + type)
        .loops(1)
        .id('kubejs:welding/double_' + type + '/' + material)
    }

    welding('bismuth')
    welding('bismuth_bronze')
    welding('black_bronze')
    welding('bronze')
    welding('brass')
    welding('copper')
    welding('gold')
    welding('nickel')
    welding('rose_gold')
    welding('silver')
    welding('tin')
    welding('zinc')
    welding('sterling_silver')
    welding('wrought_iron')
    welding('cast_iron')
    welding('steel')
    welding('black_steel')
    welding('blue_steel')
    welding('red_steel')
})