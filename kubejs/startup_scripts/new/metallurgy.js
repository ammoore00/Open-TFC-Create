onEvent('item.registry', event => {
    let weldingItems = (material) => {
        event.create('unwelded_' + material + '_double_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_' + material + '_double_ingot')
        event.create('unwelded_' + material + '_double_sheet', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_' + material + '_double_sheet')
    }

    weldingItems('bismuth')
    weldingItems('bismuth_bronze')
    weldingItems('black_bronze')
    weldingItems('bronze')
    weldingItems('brass')
    weldingItems('copper')
    weldingItems('gold')
    weldingItems('nickel')
    weldingItems('rose_gold')
    weldingItems('silver')
    weldingItems('tin')
    weldingItems('zinc')
    weldingItems('sterling_silver')
    weldingItems('wrought_iron')
    weldingItems('cast_iron')
    weldingItems('steel')
    weldingItems('black_steel')
    weldingItems('blue_steel')
    weldingItems('red_steel')

    event.create('magnetite_powder')
    event.create('native_gold_powder')
    event.create('tetrahedrite_powder')
    event.create('native_copper_powder')
    event.create('sphalerite_powder')
    event.create('native_silver_powder')
    event.create('cassiterite_powder')
    event.create('garnierite_powder')
    event.create('bismuthinite_powder')

    event.create('partially_refined_iron_bloom', 'create:sequenced_assembly').texture('kubejs:item/metalworking/partially_refined_iron_bloom')
    event.create('unworked_wrought_iron_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unworked_wrought_iron_ingot')
    
    event.create('unworked_high_carbon_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unworked_high_carbon_steel_ingot')
    event.create('unworked_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unworked_steel_ingot')
    
    event.create('unwelded_black_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_black_steel_ingot')
    event.create('unworked_black_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unworked_black_steel_ingot')
    
    event.create('unwelded_blue_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_blue_steel_ingot')
    event.create('unworked_blue_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unworked_blue_steel_ingot')
    
    event.create('unwelded_red_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_red_steel_ingot')
    event.create('unworked_red_steel_ingot', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unworked_red_steel_ingot')

    event.create('unwelded_wrought_iron_bars', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_wrought_iron_bars')
    event.create('unwelded_gold_bars', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_gold_bars')
    event.create('unwelded_steel_bars', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_steel_bars')
    event.create('unwelded_black_steel_bars', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_black_steel_bars')
    event.create('unwelded_blue_steel_bars', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_blue_steel_bars')
    event.create('unwelded_red_steel_bars', 'create:sequenced_assembly').texture('kubejs:item/metalworking/unwelded_red_steel_bars')
})