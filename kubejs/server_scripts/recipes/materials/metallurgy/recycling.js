onEvent('recipes', event => {
    let temperatures = {
        bismuth: 270,
        bismuth_bronze: 985,
        black_bronze: 1070,
        bronze: 950,
        brass: 930,
        copper: 1080,
        gold: 1060,
        nickel: 1453,
        rose_gold: 960,
        silver: 961,
        tin: 230,
        zinc: 420,
        sterling_silver: 950,
        wrought_iron: 1535,
        cast_iron: 1535,
        pig_iron: 1535,
        steel: 1540,
        black_steel: 1540,
        blue_steel: 1540,
        red_steel: 1540,
        weak_steel: 1540,
        weak_blue_steel: 1540,
        weak_red_steel: 1540,
        high_carbon_steel: 1540,
        high_carbon_black_steel: 1540,
        high_carbon_blue_steel: 1540,
        high_carbon_red_steel: 1540,
    }

    let hasToolsList = {
        bismuth: false,
        bismuth_bronze: true,
        black_bronze: true,
        bronze: true,
        brass: false,
        copper: true,
        gold: false,
        nickel: false,
        rose_gold: false,
        silver: false,
        tin: false,
        zinc: false,
        sterling_silver: false,
        wrought_iron: true,
        cast_iron: false,
        steel: true,
        black_steel: true,
        blue_steel: true,
        red_steel: true,
    }

    let recycle = (material, hasTools) => {
        recycleWithAlternateOutput(material, material, hasTools)
    }

    let recycleWithAlternateOutput = (output, material, hasTools) => {
        createMelting(output, 100, 'tfc:metal/ingot/' + material)
        createMelting(output, 200, 'tfc:metal/double_ingot/' + material)
        createMelting(output, 200, 'tfc:metal/sheet/' + material)
        createMelting(output, 400, 'tfc:metal/double_sheet/' + material)
        createMelting(output, 50, 'tfc:metal/rod/' + material)

        if (hasTools) {
            createMelting(output, 400, 'tfc:metal/tuyere/' + material)
            createMelting(output, 200, 'tfc:metal/fish_hook/' + material)
            createMelting(output, 200, 'tfc:metal/fishing_rod/' + material)
            createMelting(output, 100, 'tfc:metal/pickaxe/' + material)
            createMelting(output, 100, 'tfc:metal/pickaxe_head/' + material)
            createMelting(output, 100, 'tfc:metal/propick/' + material)
            createMelting(output, 100, 'tfc:metal/propick_head/' + material)
            createMelting(output, 100, 'tfc:metal/axe/' + material)
            createMelting(output, 100, 'tfc:metal/axe_head/' + material)
            createMelting(output, 100, 'tfc:metal/shovel/' + material)
            createMelting(output, 100, 'tfc:metal/shovel_head/' + material)
            createMelting(output, 100, 'tfc:metal/hoe/' + material)
            createMelting(output, 100, 'tfc:metal/hoe_head/' + material)
            createMelting(output, 100, 'tfc:metal/chisel/' + material)
            createMelting(output, 100, 'tfc:metal/chisel_head/' + material)
            createMelting(output, 100, 'tfc:metal/hammer/' + material)
            createMelting(output, 100, 'tfc:metal/hammer_head/' + material)
            createMelting(output, 100, 'tfc:metal/saw/' + material)
            createMelting(output, 100, 'tfc:metal/saw_blade/' + material)
            createMelting(output, 100, 'tfc:metal/javelin/' + material)
            createMelting(output, 100, 'tfc:metal/javelin_head/' + material)
            createMelting(output, 200, 'tfc:metal/sword/' + material)
            createMelting(output, 200, 'tfc:metal/sword_blade/' + material)
            createMelting(output, 200, 'tfc:metal/mace/' + material)
            createMelting(output, 200, 'tfc:metal/mace_head/' + material)
            createMelting(output, 100, 'tfc:metal/knife/' + material)
            createMelting(output, 100, 'tfc:metal/knife_blade/' + material)
            createMelting(output, 100, 'tfc:metal/scythe/' + material)
            createMelting(output, 100, 'tfc:metal/scythe_blade/' + material)
            createMelting(output, 200, 'tfc:metal/shears/' + material)
            
            createMelting(output, 400, 'tfc:metal/unfinished_helmet/' + material)
            createMelting(output, 600, 'tfc:metal/helmet/' + material)
            createMelting(output, 400, 'tfc:metal/unfinished_chestplate/' + material)
            createMelting(output, 800, 'tfc:metal/chestplate/' + material)
            createMelting(output, 400, 'tfc:metal/unfinished_greaves/' + material)
            createMelting(output, 600, 'tfc:metal/greaves/' + material)
            createMelting(output, 200, 'tfc:metal/unfinished_boots/' + material)
            createMelting(output, 400, 'tfc:metal/boots/' + material)
            createMelting(output, 400, 'tfc:metal/shield/' + material)
            
            createMelting(output, 1400, 'tfc:metal/anvil/' + material)
            createMelting(output, 6, 'tfc:metal/chain/' + material)
            createMelting(output, 100, 'tfc:metal/lamp/' + material)
            createMelting(output, 200, 'tfc:metal/trapdoor/' + material)
        }
    }

    let createMelting = (output, outputCount, input) => {
        let recipe = event.recipes.createMixing(
            Fluid.of('tfc:metal/' + output, outputCount),
            input
        )

        if (temperatures[output] > 1100) {
            recipe.superheated()
        }
        else {
            recipe.heated()
        }
    }

    let basicMelting = (output, outputCount, input) => {
        event.recipes.tfc.heating(
            Fluid.of('tfc:metal/' + output, outputCount),
            input,
            temperatures[output]
        )
    }

    for (const [metal, hasTools] of Object.entries(hasToolsList)) {
        if (metal == 'wrought_iron') {
            recycleWithAlternateOutput('cast_iron', 'wrought_iron', hasTools)
        }
        else {
            recycle(metal, hasTools)
        }
    }
    
    createMelting('unknown', 100, 'tfc:metal/ingot/unknown')
    createMelting('pig_iron', 100, 'tfc:metal/ingot/pig_iron')
    createMelting('weak_steel', 100, 'tfc:metal/ingot/weak_steel')
    createMelting('weak_blue_steel', 100, 'tfc:metal/ingot/weak_blue_steel')
    createMelting('weak_red_steel', 100, 'tfc:metal/ingot/weak_red_steel')
    createMelting('pig_iron', 100, 'tfc:metal/ingot/high_carbon_steel')
    createMelting('weak_steel', 100, 'tfc:metal/ingot/high_carbon_black_steel')
    createMelting('weak_blue_steel', 100, 'tfc:metal/ingot/high_carbon_blue_steel')
    createMelting('weak_red_steel', 100, 'tfc:metal/ingot/high_carbon_red_steel')

    createMelting('copper', 25, 'createaddition:copper_wire')
    basicMelting('copper', 25, 'createaddition:copper_wire')
    createMelting('copper', 100, 'createaddition:copper_spool')
    basicMelting('copper', 100, 'createaddition:copper_spool')

    createMelting('gold', 25, 'createaddition:gold_wire')
    basicMelting('gold', 25, 'createaddition:gold_wire')
    createMelting('gold', 100, 'createaddition:gold_spool')
    basicMelting('gold', 100, 'createaddition:gold_spool')
})