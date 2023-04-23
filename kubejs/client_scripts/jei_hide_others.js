onEvent('jei.hide.items', event => {
    event.hide('create:zinc_ore')
    event.hide('create:deepslate_zinc_ore')
    event.hide('create:raw_zinc_block')
    event.hide('create:raw_zinc')
    event.hide('create:crushed_iron_ore')
    event.hide('create:crushed_gold_ore')
    event.hide('create:crushed_zinc_ore')
    event.hide('create:crushed_copper_ore')
    event.hide('create:crushed_nickel_ore')
    event.hide('create:crushed_silver_ore')
    event.hide('create:crushed_tin_ore')
    
    event.hide('create:zinc_block')
    event.hide('create:brass_block')
    event.hide('create:zinc_nugget')
    event.hide('create:copper_nugget')
    event.hide('create:brass_nugget')

    event.hide('create:peculiar_bell')
    event.hide('create:haunted_bell')
    
    event.hide('create:empty_blaze_burner')

    event.hide('create:cinder_flour')
    event.hide('create:blaze_cake_base')

    event.hide('create:red_sand_paper')

    event.hide('create:wheat_flour')
    event.hide('create:dough')
    event.hide('farmersdelight:wheat_dough')
})

onEvent('jei.remove.categories', event => {
    event.remove('create:haunting')
})

//let MysteriousItemConversionCategory = java('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
//let ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')

//MysteriousItemConversionCategory.RECIPES.remove(0) // Blaze burner mysterious conversion