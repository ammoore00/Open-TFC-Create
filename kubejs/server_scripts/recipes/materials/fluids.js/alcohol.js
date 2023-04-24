onEvent('recipes', event => {
    let alcohols = {
        'beer': 'tfc:food/barley_flour',
        'cider': '#tfc:foods/apples',
        'rum': 'minecraft:sugar',
        'sake': 'tfc:food/rice_flour',
        'vodka': 'tfc:food/potato',
        'whiskey': 'tfc:food/wheat_flour',
        'corn_whiskey': 'tfc:food/maize_flour',
        'rye_whiskey': 'tfc:food/rye_flour'
    }

    for (const [alcohol, root] of Object.entries(alcohols)) {
        event.recipes.createMixing(
            Fluid.of('tfc:' + alcohol, 500),
            [
                Fluid.of('minecraft:water', 500),
                root
            ]
        ).id('kubejs:mixing/' + alcohol)

        event.recipes.createMixing(
            Fluid.of('tfc:vinegar', 250),
            [
                Fluid.of('tfc:' + alcohol, 250),
                {
                    ingredient: {
                        type: 'tfc:not_rotten',
                        ingredient: {
                            tag: 'tfc:foods/fruits'
                        }
                    }
                }
            ]
        ).id('kubejs:mixing/vinegar_from_' + alcohol)
    }
})