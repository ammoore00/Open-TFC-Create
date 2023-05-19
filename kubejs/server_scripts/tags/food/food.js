onEvent('item.tags', event => {

    //------ Meats ------//

    let hamburgerMeats = [
        'beef',
        'mutton',
        'horse_meat',
        'camelidae',
        'chevon',
        'turtle'
    ]

    for (const meat of hamburgerMeats) {
        event.add('kubejs:hamburger_meats', 'tfc:food/' + meat)
        event.add('kubejs:cooked_hamburger_meats', 'tfc:food/cooked_' + meat)
    }

    let wildGame = [
        'bear',
        'venison',
        'rabbit',
        'gran_feline'
    ]

    for (const meat of wildGame) {
        event.add('kubejs:wild_game', 'tfc:food/' + meat)
        event.add('kubejs:cooked_wild_game', 'tfc:food/cooked_' + meat)
    }

    let baconMeats = [
        'pork',
        'wolf',
        'hyena'
    ]

    for (const meat of baconMeats) {
        event.add('kubejs:bacon_meats', 'tfc:food/' + meat)
        event.add('kubejs:cooked_bacon_meats', 'tfc:food/cooked_' + meat)
    }

    let whiteFish = [
        'cod',
        'bluegill',
        'tropical_fish'
    ]

    for (const meat of whiteFish) {
        event.add('kubejs:white_fish', 'tfc:food/' + meat)
        event.add('kubejs:cooked_white_fish', 'tfc:food/cooked_' + meat)
    }

    // Salmon tag used for easier bulk recipe processing
    event.add('kubejs:salmon', 'tfc:food/salmon')
    event.add('kubejs:cooked_salmon', 'tfc:food/cooked_salmon')

    let poultry = [
        'chicken',
        'quail',
        'pheasant',
        'grouse',
        'turkey',
        'duck'
    ]

    for (const meat of poultry) {
        event.add('kubejs:poultry', 'tfc:food/' + meat)
        event.add('kubejs:cooked_poultry', 'tfc:food/cooked_' + meat)
    }

    event.add('kubejs:steaks', [
        'tfc:food/cooked_beef',
        'tfc:food/cooked_pork',
        'tfc:food/cooked_horse_meat',
        'tfc:food/cooked_chevon',
        'tfc:food/cooked_camelidae'
    ])

    event.add('kubejs:seafood', [
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice',
        'tfc:food/cooked_shellfish',
        'tfc:food/cooked_calamari',
        'firmalife:food/tofu'
    ])

    event.add('kubejs:stew_meats', [
        '#kubejs:cooked_poultry',
        '#kubejs:cooked_hamburger_meats',
        '#kubejs:cooked_bacon_meats',
        '#kubejs:cooked_wild_game'
    ])

    event.add('kubejs:cut_meats', [
        'farmersdelight:bacon',
        'farmersdelight:chicken_cuts',
        'farmersdelight:minced_beef',
        'farmersdelight:mutton_chops',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice'
    ])

    event.add('kubejs:cooked_cut_meats', [
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:beef_patty',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_salmon_slice'
    ])

    event.add('tfc:foods/raw_meats', '#kubejs:cut_meats')
    event.add('tfc:foods/cooked_meats', '#kubejs:cooked_cut_meats')

    //------ Bread and Grain ------//

    let breadGrains = [
        'barley',
        'maize',
        'oat',
        'rice',
        'rye',
        'wheat'
    ]

    let breadTypes = {
        'bread': 'tfc',
        'flatbread': 'firmalife',
        'slice': 'firmalife'
    }

    event.add('kubejs:sandwich_breads', [
        '#firmalife:foods/flatbreads',
        '#firmalife:foods/slices'
    ])

    event.add('kubejs:wraps', [
        '#firmalife:foods/flatbreads',
        'firmalife:food/corn_tortilla'
    ])

    event.remove('forge:dough', [
        'create:dough',
        'farmersdelight:wheat_dough'
    ])

    event.add('tfc:foods/flour', 'firmalife:food/masa_flour')

    for (const grain of breadGrains) {
        event.add('forge:dough', 'tfc:food/' + grain + '_dough')
        event.add('forge:dough', 'firmalife:food/' + grain + '_dough')
    }

    //------ Fruits ------//

    event.add('kubejs:berries', [
        'tfc:food/blackberry',
        'tfc:food/blueberry',
        'tfc:food/bunchberry',
        'tfc:food/cloudberry',
        'tfc:food/cranberry',
        'tfc:food/elderberry',
        'tfc:food/gooseberry',
        'tfc:food/raspberry',
        'tfc:food/snowberry',
        'tfc:food/strawberry'
    ])

    event.add('kubejs:fruit_salad_fruits', [
        'tfc:food/plum',
        'tfc:food/peach',
        'tfc:food/orange',
        'tfc:food/lemon',
        'tfc:food/green_apple',
        'tfc:food/red_apple',
        'tfc:food/cherry',
        'tfc:food/banana',
        'firmalife:food/pineapple'
    ])

    event.add('kubejs:fruit_slices', [
        'minecraft:melon_slice',
        'farmersdelight:pumpkin_slice'
    ])

    event.add('tfc:foods/fruits', 'farmersdelight:pumpkin_slice')

    //------ Vegetables ------//

    event.add('kubejs:leafy_vegetables', [
        'tfc:food/cabbage',
        'tfc:food/dried_kelp',
        'tfc:food/dried_seaweed'
    ])

    event.add('kubejs:sandwich_vegetables', [
        'tfc:food/tomato',
        'tfc:food/onion',
        'tfc:food/carrot'
    ])

    event.add('kubejs:fried_rice_vegetables', [
        'tfc:food/onion',
        'tfc:food/squash',
        'tfc:food/carrot'
    ])

    event.add('kubejs:salad_vegetables', [
        'tfc:food/beet',
        'tfc:food/carrot',
        'tfc:food/onion',
        'tfc:food/squash',
        'tfc:food/tomato',
        'tfc:food/cattail_root',
        'tfc:food/taro_root'
    ])

    event.add('kubejs:stew_vegetables', [
        '#kubejs:salad_vegetables',
        'tfc:food/potato'
    ])

    event.add('kubejs:plate_vegetables', [
        '#kubejs:stew_vegetables',
        'tfc:food/green_bean',
        'tfc:food/soybean',
        'tfc:food/cabbage'
    ])
    
    //------ General ------//

    event.add('diet:special_food', [
        'minecraft:pumpkin_pie',
        'tfc:cake',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:rice_roll_medley_block'
    ])

    event.add('kubejs:spices', [
        'firmalife:spice/basil_leaves',
        'firmalife:spice/cinnamon',
        'firmalife:spice/ground_cinnamon',
        'firmalife:plant/bay_laurel',
        'firmalife:plant/cardamom',
        'firmalife:plant/cilantro',
        'firmalife:plant/cumin',
        'firmalife:plant/oregano',
        'firmalife:plant/pimento',
        'firmalife:plant/vanilla',
        'tfc:food/garlic'
    ])

    event.add('tfc:foods', [
        'farmersdelight:pumpkin_slice',
        '#kubejs:cut_meats',
        '#kubejs:cooked_cut_meats'
    ])

    event.add('create:upright_on_belt', [
        'firmalife:empty_jar',
        '#firmalife:jars'
    ])
})