onEvent('item.tags', event => {

    //------ Meats ------//

    event.add('kubejs:stats/raw_meats', [
        '#kubejs:hamburger_meats',
        '#kubejs:poultry',
        '#kubejs:wild_game',
        '#kubejs:bacon_meats'
    ])

    event.add('kubejs:stats/cooked_meats', [
        '#kubejs:cooked_hamburger_meats',
        '#kubejs:cooked_poultry',
        '#kubejs:cooked_wild_game',
        '#kubejs:cooked_bacon_meats'
    ])
    
    event.add('kubejs:stats/raw_cut_meats', [
        'farmersdelight:bacon',
        'farmersdelight:chicken_cuts',
        'farmersdelight:minced_beef',
        'farmersdelight:mutton_chops'
    ])
    
    event.add('kubejs:stats/cooked_cut_meats', [
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:beef_patty',
        'farmersdelight:cooked_mutton_chops'
    ])

    event.add('kubejs:stats/raw_seafood', [
        'tfc:food/shellfish',
        'tfc:food/cod',
        'tfc:food/salmon',
        'tfc:food/bluegill',
        'tfc:food/tropical_fish',
        'tfc:food/calamari'
    ])

    event.add('kubejs:stats/cooked_seafood', [
        'tfc:food/cooked_shellfish',
        'tfc:food/cooked_cod',
        'tfc:food/cooked_salmon',
        'tfc:food/cooked_bluegill',
        'tfc:food/cooked_tropical_fish',
        'tfc:food/cooked_calamari'
    ])

    event.add('kubejs:stats/raw_cut_seafood', [
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice'
    ])

    event.add('kubejs:stats/cooked_cut_seafood', [
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_salmon_slice'
    ])

    //------ Fruits ------//

    event.add('kubejs:stats/standard_fruits', [
        'tfc:food/plum',
        'tfc:food/peach',
        'tfc:food/orange',
        'tfc:food/olive',
        'tfc:food/lemon',
        'tfc:food/green_apple',
        'tfc:food/red_apple',
        'tfc:food/banana',
        'tfc:food/cherry',
        'tfc:food/tomato',
        'minecraft:melon_slice',
        'firmalife:food/fig',
        'firmalife:food/pineapple',
        'farmersdelight:pumpkin_slice'
    ])

    event.add('kubejs:stats/berries', '#kubejs:berries')

    //------ Vegetables ------//

    event.add('kubejs:stats/standard_vegetables', [
        'tfc:food/cabbage',
        'tfc:food/green_bean',
        'tfc:food/soybean',
        'tfc:food/squash',
        'tfc:food/cattail_root',
        'tfc:food/taro_root',
        'tfc:food/dried_seaweed',
        'tfc:food/dried_kelp',
        'firmalife:food/soy_mixture'
    ])

    event.add('kubejs:stats/long_lasting_vegetables', [
        'tfc:food/beet',
        'tfc:food/potato',
        'tfc:food/garlic',
        'tfc:food/onion',
        'tfc:food/carrot',
        'tfc:food/sugarcane',
        'firmalife:food/cocoa_beans',
        'firmalife:food/roasted_cocoa_beans'
    ])

    event.add('kubejs:stats/cooked_vegetables', [
        'minecraft:baked_potato',
        'farmersdelight:tomato_sauce',
        'tfc:food/cooked_rice',
        'firmalife:food/tofu'
    ])

    //------ Dairy ------//

    event.add('kubejs:stats/cooked_eggs', [
        'tfc:food/cooked_egg',
        'tfc:food/boiled_egg'
    ])

    event.add('kubejs:stats/raw_dairy', [
        'firmalife:food/butter',
        'firmalife:food/milk_curd',
        'firmalife:food/yak_curd',
        'firmalife:food/goat_curd'
    ])

    event.add('kubejs:stats/chocolate_ingredients', [
        'firmalife:food/cocoa_butter',
        'firmalife:food/cocoa_powder'
    ])

    event.add('kubejs:stats/chocolate', '#firmalife:foods/chocolate')

    //------ Grain ------//

    event.add('kubejs:stats/raw_grain', [
        'tfc:food/barley',
        'tfc:food/maize',
        'tfc:food/oat',
        'tfc:food/rice',
        'tfc:food/rye',
        'tfc:food/wheat'
    ])

    event.add('kubejs:stats/grain', [
        'tfc:food/barley_grain',
        'tfc:food/maize_grain',
        'tfc:food/oat_grain',
        'tfc:food/rice_grain',
        'tfc:food/rye_grain',
        'tfc:food/wheat_grain',
        'firmalife:food/cured_maize',
        'firmalife:food/nixtamal'
    ])

    event.add('kubejs:stats/flour', [
        'tfc:food/barley_flour',
        'tfc:food/maize_flour',
        'tfc:food/oat_flour',
        'tfc:food/rice_flour',
        'tfc:food/rye_flour',
        'tfc:food/wheat_flour',
        'firmalife:food/masa_flour'
    ])

    event.add('kubejs:stats/dough', [
        '#forge:dough',
        'farmersdelight:raw_pasta'
    ])

    event.add('kubejs:stats/bread', '#tfc:foods/breads')

    event.add('kubejs:stats/bread_slices', [
        '#firmalife:foods/slices'
    ])

    event.add('kubejs:stats/toasts', [
        'firmalife:food/toast',
        'firmalife:food/taco_shell'
    ])
    event.add('kubejs:stats/basic_topped_toasts', [
        'firmalife:food/toast_with_butter'
    ])
    event.add('kubejs:stats/topped_toasts', [
        'firmalife:food/garlic_bread',
        'firmalife:food/toast_with_jam'
    ])

    event.add('kubejs:stats/flatbread', [
        '#firmalife:foods/flatbreads',
        'firmalife:food/corn_tortilla'
    ])

    //------ Desserts ------//

    event.add('kubejs:stats/pies', [
        'farmersdelight:apple_pie',
        'farmersdelight:sweet_berry_cheesecake',
        'farmersdelight:chocolate_pie',
        'minecraft:pumpkin_pie'
    ])

    event.add('kubejs:stats/cakes', [
        'tfc:cake',
        'createaddition:chocolate_cake',
        'createaddition:honey_cake'
    ])

    event.add('kubejs:stats/dessert_slices', [
        'farmersdelight:apple_pie_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:chocolate_pie_slice',
        'create_central_kitchen:pumpkin_pie_slice',
        'farmersdelight:cake_slice',
        'create_central_kitchen:chocolate_cake_slice',
        'create_central_kitchen:honey_cake_slice'
    ])

    event.add('kubejs:stats/cookies', [
        'minecraft:cookie',
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:honey_cookie'
    ])

    event.add('kubejs:stats/glazed_fruits', [
        'create:chocolate_glazed_berries',
        'create:honeyed_apple'
    ])

    event.add('kubejs:stats/sweet_roll', [
        'create:sweet_roll'
    ])

    event.add('kubejs:stats/pie_crust', [
        'farmersdelight:pie_crust'
    ])

    event.add('kubejs:stats/cake_base', [
        'createaddition:cake_base'
    ])

    event.add('kubejs:stats/cake_base_baked', [
        'createaddition:cake_base_baked'
    ])

    event.add('kubejs:stats/ice_cream', [
        'farmersdelight:glow_berry_custard',
        'firmalife:food/vanilla_ice_cream',
        'firmalife:food/chocolate_ice_cream',
        'firmalife:food/strawberry_ice_cream'
    ])

    //------ Meals ------//

    event.add('kubejs:stats/small_meals', [
        'farmersdelight:salmon_roll',
        'farmersdelight:cod_roll',
        'farmersdelight:kelp_roll_slice'
    ])
    
    event.add('kubejs:stats/basic_handheld_meals', [
        'farmersdelight:egg_sandwich',
        'farmersdelight:cabbage_rolls',
    ])

    event.add('kubejs:stats/basic_meals', [
        'farmersdelight:bone_broth',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie'
    ])

    event.add('kubejs:stats/handheld_meals', [
        'farmersdelight:chicken_sandwich',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:mutton_wrap',
        'farmersdelight:dumplings'
    ])

    event.add('kubejs:stats/meals', [
        'farmersdelight:barbecue_stick',
        'farmersdelight:stuffed_potato',
        'farmersdelight:vegetable_soup',
        'farmersdelight:fish_stew',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:noodle_soup',
        'farmersdelight:fruit_salad',
        'farmersdelight:mixed_salad',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:ratatouille'
    ])

    event.add('kubejs:stats/hearty_handheld_meals', [
        'farmersdelight:hamburger',
        'firmalife:food/burrito',
        'firmalife:food/taco'
    ])

    event.add('kubejs:stats/hearty_meals', [
        'farmersdelight:beef_stew',
        'farmersdelight:chicken_soup',
        'farmersdelight:fried_rice',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:grilled_salmon',
        'farmersdelight:kelp_roll'
    ])

    event.add('kubejs:stats/meal_blocks', [
        'farmersdelight:roast_chicken_block',
        'farmersdelight:stuffed_pumpkin_block',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:rice_roll_medley_block'
    ])
})