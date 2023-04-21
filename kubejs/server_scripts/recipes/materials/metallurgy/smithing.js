onEvent('recipes', event => {
    event.replaceInput({id: 'create:pressing/iron_ingot'}, 'minecraft:iron_ingot', 'tfc:metal/double_ingot/wrought_iron')
    event.replaceInput({id: 'create:pressing/gold_ingot'}, 'tfc:metal/ingot/gold', 'tfc:metal/double_ingot/gold')
    event.replaceInput({id: 'createaddition:pressing/zinc_ingot'}, 'tfc:metal/ingot/zinc', 'tfc:metal/double_ingot/zinc')
    event.replaceInput({id: 'create:pressing/copper_ingot'}, 'tfc:metal/ingot/copper', 'tfc:metal/double_ingot/copper')
    event.replaceInput({id: 'create:pressing/brass_ingot'}, 'tfc:metal/ingot/brass', 'tfc:metal/double_ingot/brass')

    event.replaceInput({}, 'create:iron_sheet', 'tfc:metal/sheet/wrought_iron')
    event.replaceInput({}, 'create:golden_sheet', 'tfc:metal/sheet/gold')
    event.replaceInput({}, 'createaddition:zinc_sheet', 'tfc:metal/sheet/zinc')
    event.replaceInput({}, 'create:copper_sheet', 'tfc:metal/sheet/copper')
    event.replaceInput({}, 'create:brass_sheet', 'tfc:metal/sheet/brass')

    let sheetPressing = (material) => {
        event.recipes.createPressing('tfc:metal/sheet/' + material, 'tfc:metal/double_ingot/' + material)
    }

    sheetPressing('bismuth')
    sheetPressing('bismuth_bronze')
    sheetPressing('black_bronze')
    sheetPressing('bronze')
    sheetPressing('nickel')
    sheetPressing('rose_gold')
    sheetPressing('silver')
    sheetPressing('tin')
    sheetPressing('sterling_silver')
    sheetPressing('cast_iron')
    sheetPressing('steel')
    sheetPressing('black_steel')
    sheetPressing('blue_steel')
    sheetPressing('red_steel')
})