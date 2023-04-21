onEvent('recipes', event => {
    event.remove({output: 'create:crushed_iron_ore'})
    event.remove({output: 'create:crushed_gold_ore'})
    event.remove({output: 'create:crushed_zinc_ore'})
    event.remove({output: 'create:crushed_copper_ore'})
    event.remove({output: 'create:crushed_nickel_ore'})
    event.remove({output: 'create:crushed_tin_ore'})
    event.remove({output: 'create:crushed_silver_ore'})

    let oreTypeCrushing = (material, outputOwner) => {
        oreCrushing(material, outputOwner, 'small')
        oreCrushing(material, outputOwner, 'poor')
        oreCrushing(material, outputOwner, 'normal')
        oreCrushing(material, outputOwner, 'rich')
    }

    let outputCounts = {
        small: 2,
        poor: 3,
        normal: 5,
        rich: 7
    }

    let oreCrushing = (material, outputOwner, quality) => {
        let count = outputCounts[quality]
        let output
        
        if (outputOwner == 'tfc') {
            output = 'tfc:powder/' + material
        }
        else {
            output = 'kubejs:' + material + '_powder'
        }

        event.recipes.createMilling(
            count + 'x ' + output,
            'tfc:ore/' + quality + '_' + material
        )
        .id('kubejs:milling/ore/' + quality + '_' + material)

        event.recipes.createCrushing(
            [
                count + 'x ' + output,
                Item.of(count + 'x ' + output).withChance(0.5)
            ],
            'tfc:ore/' + quality + '_' + material
        )
        .id('kubejs:crushing/ore/' + quality + '_' + material)

        if (outputOwner != 'tfc') {
            event.recipes.tfc.quern(
                count + 'x ' + output,
                'tfc:ore/' + quality + '_' + material
            )
        }
    }

    oreTypeCrushing('limonite', 'tfc')
    oreTypeCrushing('magnetite', 'kubejs')
    oreTypeCrushing('hematite', 'tfc')

    oreTypeCrushing('native_gold', 'kubejs')
    
    oreTypeCrushing('tetrahedrite', 'kubejs')
    oreTypeCrushing('malachite', 'tfc')
    oreTypeCrushing('native_copper', 'kubejs')
    
    oreTypeCrushing('sphalerite', 'kubejs')
    
    oreTypeCrushing('native_silver', 'kubejs')
    
    oreTypeCrushing('cassiterite', 'kubejs')
    
    oreTypeCrushing('garnierite', 'kubejs')
    
    oreTypeCrushing('bismuthinite', 'kubejs')
})