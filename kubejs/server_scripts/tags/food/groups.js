onEvent('item.tags', event => {
    event.removeAll('diet:proteins')
    event.removeAll('diet:grains')
    event.removeAll('diet:vegetables')
    event.removeAll('diet:fruits')
    event.removeAll('diet:sugars')

    event.add('diet:proteins', [
        '#kubejs:hamburger_meats',
        '#kubejs:poultry',
        '#kubejs:wild_game',
        '#kubejs:bacon_meats',

        'tfc:food/shellfish',
        'tfc:food/cod',
        'tfc:food/salmon',
        'tfc:food/bluegill',
        'tfc:food/tropical_fish',
        'tfc:food/calamari',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice',

        'firmalife:food/tofu'
    ])
    
    event.add('diet:grains', [

    ])
})