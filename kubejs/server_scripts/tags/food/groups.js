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

        'tfc:food/soybean',
        'minecraft:egg',
        'tfc:food/cooked_egg',
        'tfc:food/boiled_egg',

        'farmersdelight:barbecue_stick',
        'farmersdelight:dumplings',
        'farmersdelight:bone_broth',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:grilled_salmon',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie'
    ])
    
    event.add('diet:grains', [
        'tfc:food/barley',
        'tfc:food/maize',
        'tfc:food/oat',
        'tfc:food/rice',
        'tfc:food/rye',
        'tfc:food/wheat',

        'farmersdelight:raw_pasta',
        
        'create_central_kitchen:pumpkin_pie_slice',
        'farmersdelight:cake_slice',
        'create_central_kitchen:chocolate_cake_slice',
        'create_central_kitchen:honey_cake_slice',
        'farmersdelight:honey_cookie',
        'farmersdelight:dumplings',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham'
    ])

    event.add('diet:vegetables', [
        'tfc:food/cabbage',
        'tfc:food/green_bean',
        'tfc:food/squash',
        'tfc:food/cattail_root',
        'tfc:food/taro_root',
        'tfc:food/dried_seaweed',
        'tfc:food/dried_kelp',
        'tfc:food/beet',
        'tfc:food/potato',
        'tfc:food/garlic',
        'tfc:food/onion',
        'tfc:food/carrot',
        'tfc:food/sugarcane',
        'tfc:food/tomato',

        'minecraft:baked_potato',
        
        'farmersdelight:barbecue_stick',
        'farmersdelight:dumplings',
        'farmersdelight:bone_broth',
        'farmersdelight:grilled_salmon',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie'
    ])
    
    event.add('diet:fruits', [
        'tfc:food/plum',
        'tfc:food/peach',
        'tfc:food/orange',
        'tfc:food/olive',
        'tfc:food/lemon',
        'tfc:food/green_apple',
        'tfc:food/red_apple',
        'tfc:food/banana',
        'tfc:food/cherry',
        'minecraft:melon_slice',
        'firmalife:food/fig',
        'firmalife:food/pineapple',
        'farmersdelight:pumpkin_slice',
        'tfc:food/blackberry',
        'tfc:food/blueberry',
        'tfc:food/bunchberry',
        'tfc:food/cloudberry',
        'tfc:food/cranberry',
        'tfc:food/elderberry',
        'tfc:food/gooseberry',
        'tfc:food/raspberry',
        'tfc:food/snowberry',
        'tfc:food/strawberry',
        
        'create_central_kitchen:pumpkin_pie_slice',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:grilled_salmon',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham'
    ])

    event.add('diet:dairy', [
        'firmalife:food/butter',
        'firmalife:food/milk_curd',
        'firmalife:food/yak_curd',
        'firmalife:food/goat_curd',
        'firmalife:food/cocoa_beans',
        'firmalife:food/cocoa_powder',

        'firmalife:food/shredded_cheese',
        'firmalife:food/white_chocolate',
        'firmalife:food/milk_chocolate',
        'firmalife:food/dark_chocolate',
        
        'create_central_kitchen:pumpkin_pie_slice',
        'farmersdelight:cake_slice',
        'create_central_kitchen:chocolate_cake_slice',
        'create:chocolate_glazed_berries',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:stuffed_pumpkin'
    ])

    event.add('diet:sugars', [
        'minecraft:sugar',
        'firmalife:raw_honey',

        'create_central_kitchen:pumpkin_pie_slice',
        'farmersdelight:cake_slice',
        'create_central_kitchen:chocolate_cake_slice',
        'create_central_kitchen:honey_cake_slice',
        'create:honeyed_apple',
        'farmersdelight:honey_cookie',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie'
    ])
})