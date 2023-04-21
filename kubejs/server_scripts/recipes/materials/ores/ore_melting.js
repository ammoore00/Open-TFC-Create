onEvent('recipes', event => {
    let temperatures = {
        bismuth: 270,
        copper: 1080,
        gold: 1060,
        nickel: 1453,
        silver: 961,
        tin: 230,
        zinc: 420,
        cast_iron: 1535,
    }

    let standardMelting = (output, material, powderOwner) => {
        let powder
        
        if (powderOwner == 'tfc') {
            powder = 'tfc:powder/' + material
        }
        else {
            powder = 'kubejs:' + material + '_powder'
        }

        basicMelting(output, 5, powder)
        createMelting(output, 5, powder)
        
        createMelting(output, 10, 'tfc:ore/small_' + material)
        createMelting(output, 15, 'tfc:ore/poor_' + material)
        createMelting(output, 25, 'tfc:ore/normal_' + material)
        createMelting(output, 35, 'tfc:ore/rich_' + material)
    }

    let createMelting = (output, outputCount, input) => {
        if (temperatures[output] > 1100) {
            event.recipes.createMixing(
                Fluid.of('tfc:metal/' + output, outputCount),
                input
            )
            .superheated()
            //.id('kubejs:melting/' + input)
        }
        else {
            event.recipes.createMixing(
                Fluid.of('tfc:metal/' + output, outputCount),
                input
            )
            .heated()
            //.id('kubejs:melting/' + input)
        }
    }

    let basicMelting = (output, outputCount, input) => {
        event.recipes.tfc.heating(
            Fluid.of('tfc:metal/' + output, outputCount),
            input,
            temperatures[output]
        )
        //.id('kubejs:melting/basic/' + input)
    }

    standardMelting('cast_iron', 'limonite', 'tfc')
    standardMelting('cast_iron', 'magnetite', 'kubejs')
    standardMelting('cast_iron', 'hematite', 'tfc')
    
    standardMelting('gold', 'native_gold', 'kubejs')
    
    standardMelting('copper', 'tetrahedrite', 'kubejs')
    standardMelting('copper', 'malachite', 'tfc')
    standardMelting('copper', 'native_copper', 'kubejs')
    
    standardMelting('zinc', 'sphalerite', 'kubejs')
    
    standardMelting('silver', 'native_silver', 'kubejs')
    
    standardMelting('tin', 'cassiterite', 'kubejs')
    
    standardMelting('nickel', 'garnierite', 'kubejs')
    
    standardMelting('bismuth', 'bismuthinite', 'kubejs')
})