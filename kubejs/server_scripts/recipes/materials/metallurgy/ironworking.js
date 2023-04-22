onEvent('recipes', event => {
    let ingotWorking = (output, input, transitionalItem) => {
        event.recipes.createSequencedAssembly(
            [
                output
            ],
            input,
            [
                event.recipes.createPressing(
                    transitionalItem,
                    transitionalItem
                ),
                event.recipes.createPressing(
                    transitionalItem,
                    transitionalItem
                ),
                event.recipes.createPressing(
                    transitionalItem,
                    transitionalItem
                )
            ]
        ).transitionalItem(transitionalItem)
        .loops(1)
    }

    let welding = (output, inputs, transitionalItem) => {
        event.recipes.createSequencedAssembly(
            [
                output
            ],
            inputs[0],
            [
                event.recipes.createDeploying(
                    transitionalItem,
                    [
                        transitionalItem,
                        inputs[1]
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
                    transitionalItem
                )
            ]
        ).transitionalItem(transitionalItem)
        .loops(1)
    }

    event.recipes.createMixing(
        'tfc:raw_iron_bloom',
        [
            Fluid.of('tfc:metal/cast_iron', 100),
            'minecraft:charcoal'
        ]
    ).superheated()

    ingotWorking('tfc:refined_iron_bloom', 'tfc:raw_iron_bloom', 'kubejs:partially_refined_iron_bloom')
    ingotWorking('tfc:metal/ingot/wrought_iron', 'tfc:refined_iron_bloom', 'kubejs:unworked_wrought_iron_ingot')
    
    event.recipes.createMixing(
        Fluid.of('tfc:metal/pig_iron', 100),
        [
            Fluid.of('tfc:metal/cast_iron', 100),
            'create:blaze_cake',
            'tfc:powder/flux'
        ]
    ).superheated()
    
    ingotWorking('tfc:metal/ingot/high_carbon_steel', 'tfc:metal/ingot/pig_iron', 'kubejs:unworked_high_carbon_steel_ingot')
    ingotWorking('tfc:metal/ingot/steel', 'tfc:metal/ingot/high_carbon_steel', 'kubejs:unworked_steel_ingot')
    
    welding('tfc:metal/ingot/high_carbon_black_steel', ['tfc:metal/ingot/weak_steel','tfc:metal/ingot/pig_iron'], 'kubejs:unwelded_black_steel_ingot')
    ingotWorking('tfc:metal/ingot/black_steel', 'tfc:metal/ingot/high_carbon_black_steel', 'kubejs:unworked_black_steel_ingot')
    
    welding('tfc:metal/ingot/high_carbon_blue_steel', ['tfc:metal/ingot/weak_blue_steel','tfc:metal/ingot/black_steel'], 'kubejs:unwelded_blue_steel_ingot')
    ingotWorking('tfc:metal/ingot/blue_steel', 'tfc:metal/ingot/high_carbon_blue_steel', 'kubejs:unworked_blue_steel_ingot')
    
    welding('tfc:metal/ingot/high_carbon_red_steel', ['tfc:metal/ingot/weak_red_steel','tfc:metal/ingot/black_steel'], 'kubejs:unwelded_red_steel_ingot')
    ingotWorking('tfc:metal/ingot/red_steel', 'tfc:metal/ingot/high_carbon_red_steel', 'kubejs:unworked_red_steel_ingot')
})