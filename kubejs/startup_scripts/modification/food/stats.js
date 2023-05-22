onEvent('item.modification', event => {
    let modifyFoodStats = (hunger, isMeal, names) => {
        for (const name of names) {
            event.modify(name, item => {
                item.foodProperties = food => {
                    food.hunger(hunger)

                    // Saturation values are ratio of hunger values
                    // Also scaled by half, for some reason
                    if (isMeal) {
                        food.saturation(0.5)
                    }
                    else {
                        food.saturation(0.25)
                    }
                }
            })
        }
    }

    //------ Meats ------//

    let meats = [
        'beef',
        'pork',
        'chicken',
        'quail',
        'mutton',
        'bear',
        'horse_meat',
        'pheasant',
        'grouse',
        'turkey',
        'venison',
        'wolf',
        'rabbit',
        'hyena',
        'duck',
        'chevon',
        'gran_feline',
        'camelidae',
        'shellfish',
        'cod',
        'salmon',
        'bluegill',
        'tropical_fish',
        'turtle',
        'calamari'
    ]

    for (const meat of meats) {
        modifyFoodStats(3, false, ['tfc:food/' + meat])
        modifyFoodStats(6, false, ['tfc:food/cooked_' + meat])
    }

    modifyFoodStats(2, false, [
        'farmersdelight:bacon',
        'farmersdelight:chicken_cuts',
        'farmersdelight:minced_beef',
        'farmersdelight:mutton_chops',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice'
    ])

    modifyFoodStats(4, false, [
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:beef_patty',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_salmon_slice'
    ])

    //------ Fruits ------//

    modifyFoodStats(2, false, [
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

    modifyFoodStats(1, false, [
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

    //------ Vegetables ------//

    modifyFoodStats(2, false, [
        'tfc:food/cabbage',
        'tfc:food/green_bean',
        'tfc:food/soybean',
        'tfc:food/squash',
        'tfc:food/cattail_root',
        'tfc:food/taro_root',
        'tfc:food/dried_seaweed',
        'tfc:food/dried_kelp',
        'firmalife:food/soy_mixture',
        'tfc:food/beet',
        'tfc:food/potato',
        'tfc:food/garlic',
        'tfc:food/onion',
        'tfc:food/carrot',
        'tfc:food/sugarcane',
        'firmalife:food/cocoa_beans',
        'firmalife:food/roasted_cocoa_beans'
    ])

    modifyFoodStats(4, false, [
        'minecraft:baked_potato',
        'farmersdelight:tomato_sauce',
        'tfc:food/cooked_rice',
        'firmalife:food/tofu'
    ])

    //------ Dairy ------//

    modifyFoodStats(4, false, [
        'tfc:food/cooked_egg',
        'tfc:food/boiled_egg'
    ])

    modifyFoodStats(2, false, [
        'firmalife:food/butter',
        'firmalife:food/milk_curd',
        'firmalife:food/yak_curd',
        'firmalife:food/goat_curd'
    ])

    modifyFoodStats(1, false,  [
        'firmalife:food/cocoa_butter',
        'firmalife:food/cocoa_powder'
    ])

    modifyFoodStats(4, false, [
        'firmalife:foods/white_chocolate',
        'firmalife:foods/milk_chocolate',
        'firmalife:foods/dark_chocolate'
    ])

    //------ Grains ------//

    let breadGrains = [
        'barley',
        'maize',
        'oat',
        'rice',
        'rye',
        'wheat'
    ]
    
    for (const grain of breadGrains) {
        modifyFoodStats(2, false, ['tfc:food/' + grain])
        modifyFoodStats(1, false, [
            'tfc:food/' + grain + '_grain',
            'tfc:food/' + grain + '_flour',
            'tfc:food/' + grain + '_dough'
        ])
        modifyFoodStats(2, false, ['firmalife:food/' + grain + '_dough'])
        modifyFoodStats(6, false, ['tfc:food/' + grain + '_bread'])
        modifyFoodStats(4, false, ['firmalife:food/' + grain + '_flatbread'])
        modifyFoodStats(3, false, ['firmalife:food/' + grain + '_slice'])
    }
    
    modifyFoodStats(1, false, [
        'firmalife:food/cured_maize',
        'firmalife:food/nixtamal',
        'firmalife:food/masa_flour'
    ])
    modifyFoodStats(2, false, ['firmalife:food/masa'])
    modifyFoodStats(4, false, ['firmalife:food/corn_tortilla'])
    modifyFoodStats(4, false, ['firmalife:food/taco_shell'])

    modifyFoodStats(4, false, ['firmalife:food/toast'])
    modifyFoodStats(5, false, ['firmalife:food/toast_with_butter'])
    modifyFoodStats(6, false, ['firmalife:food/toast_with_jam'])
    modifyFoodStats(6, false, ['firmalife:food/garlic_bread'])
    
    modifyFoodStats(2, false, ['farmersdelight:raw_pasta'])

    //------ Desserts ------//

    modifyFoodStats(4, true, [
        'farmersdelight:apple_pie_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:chocolate_pie_slice',
        'create_central_kitchen:pumpkin_pie_slice',
        'farmersdelight:cake_slice',
        'create_central_kitchen:chocolate_cake_slice',
        'create_central_kitchen:honey_cake_slice'
    ])

    modifyFoodStats(2, true, [
        'minecraft:cookie',
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:honey_cookie'
    ])
    
    modifyFoodStats(6, true, [
        'create:chocolate_glazed_berries',
        'create:honeyed_apple'
    ])

    modifyFoodStats(8, true, ['create:sweet_roll'])

    modifyFoodStats(2, true, ['farmersdelight:pie_crust'])

    modifyFoodStats(8, true, [
        'farmersdelight:glow_berry_custard',
        'firmalife:food/vanilla_ice_cream',
        'firmalife:food/chocolate_ice_cream',
        'firmalife:food/strawberry_ice_cream'
    ])

    //------ Meals ------//

    modifyFoodStats(8, true, [
        'farmersdelight:salmon_roll',
        'farmersdelight:cod_roll',
        'farmersdelight:kelp_roll_slice'
    ])
    
    modifyFoodStats(8, true, [
        'farmersdelight:egg_sandwich',
        'farmersdelight:cabbage_rolls',
    ])

    modifyFoodStats(10, true, [
        'farmersdelight:bone_broth',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie'
    ])

    modifyFoodStats(10, true, [
        'farmersdelight:chicken_sandwich',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:mutton_wrap',
        'farmersdelight:dumplings'
    ])

    modifyFoodStats(12, true, [
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

    modifyFoodStats(12, true, [
        'farmersdelight:hamburger',
        'firmalife:food/burrito',
        'firmalife:food/taco'
    ])

    modifyFoodStats(14, true, [
        'farmersdelight:beef_stew',
        'farmersdelight:chicken_soup',
        'farmersdelight:fried_rice',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:grilled_salmon',
        'farmersdelight:kelp_roll'
    ])
})