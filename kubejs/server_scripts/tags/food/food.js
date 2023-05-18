onEvent('item.tags', event => {
    event.add('diet:special_food', [
        'minecraft:pumpkin_pie',
        'tfc:cake'
    ])

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

    event.remove('forge:dough', [
        'create:dough',
        'farmersdelight:wheat_dough'
    ])

    event.add('tfc:foods/flour', 'firmalife:food/masa_flour')

    for (const grain of breadGrains) {
        event.add('forge:dough', 'tfc:food/' + grain + '_dough')
        event.add('forge:dough', 'firmalife:food/' + grain + '_dough')
    }

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

    event.add('tfc:foods/fruits', 'farmersdelight:pumpkin_slice')

    event.add('tfc:foods/raw_meats', '#kubejs:cut_meats')
    event.add('tfc:foods/cooked_meats', '#kubejs:cooked_cut_meats')
    
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