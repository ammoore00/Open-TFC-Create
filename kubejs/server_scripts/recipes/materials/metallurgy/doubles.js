onEvent('recipes', event => {
    let welding = (material) => {
        weldingRecipe(material, 'ingot')
        weldingRecipe(material, 'sheet')
    }

    let weldingRecipe = (material, type) => {
        let transitionalItem = 'kubejs:unwelded_' + material + '_double_' + type
        
        event.recipes.createSequencedAssembly(
            [
                'tfc:metal/double_' + type + '/' + material
            ],
            'tfc:metal/' + type + '/' + material,
            [
                event.recipes.createDeploying(
                    transitionalItem,
                    [
                        transitionalItem,
                        'tfc:metal/' + type + '/' + material
                    ]
                ),
                event.recipes.createDeploying(
                    transitionalItem,
                    [
                        transitionalItem,
                        'tfc:powder/flux'
                    ]
                ),
                event.recipes.createPressing(
                    transitionalItem,
                    [
                        transitionalItem
                    ]
                )
            ]
        ).transitionalItem(transitionalItem)
        .loops(1)
        .id('kubejs:automatic_welding/double_' + type + '/' + material)
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