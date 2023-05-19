onEvent('recipes', event => {

    //------ General ------//
    
    event.remove({id: 'farmersdelight:cooking/dog_food'})
    event.remove({id: 'farmersdelight:horse_feed'})

    event.remove({id: 'farmersdelight:cooking/mushroom_rice'})

    event.remove({id: 'firmalife:crafting/raw_pizza'})
    event.remove({id: 'firmalife:oven/cooked_pizza'})

    event.replaceInput({output: 'farmersdelight:barbecue_stick'}, 'farmersdelight:tomato', '#kubejs:salad_vegetables')
    event.replaceInput({output: 'farmersdelight:barbecue_stick'}, 'farmersdelight:onion', '#kubejs:salad_vegetables')

    event.remove({id: 'farmersdelight:cooking/dumplings'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('2x farmersdelight:dumplings').toResultJson(),
        ingredients: [
            Ingredient.of('#forge:dough').toJson(),
            Ingredient.of('#kubejs:cut_meats').toJson(),
            Ingredient.of('#kubejs:leafy_vegetables').toJson(),
            Ingredient.of('#kubejs:salad_vegetables').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/dumplings')

    event.remove({output: 'farmersdelight:stuffed_potato'})
    event.shapeless(
        'farmersdelight:stuffed_potato',
        [
            'minecraft:baked_potato',
            [
                'farmersdelight:beef_patty',
                'farmersdelight:cooked_mutton_chops',
                'farmersdelight:cooked_bacon',
                'farmersdelight:cooked_chicken_cuts'
            ],
            '#kubejs:spices',
            {
                type: 'tfc:fluid_item',
                fluid_ingredient: {
                    ingredient: {
                        fluid: 'firmalife:cream'
                    },
                    amount: 100
                }
            }
        ]
    ).id('kubejs:stuffed_potato')

    event.remove({id: 'farmersdelight:cooking/cabbage_rolls'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:cabbage_rolls').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/cabbage').toJson(),
            Ingredient.of('#kubejs:cut_meats').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/cabbage_rolls')

    //------ Rice Dishes ------//

    event.replaceInput({id: 'farmersdelight:salmon_roll'}, 'farmersdelight:cooked_rice', 'tfc:food/cooked_rice')

    event.replaceInput({id: 'farmersdelight:cod_roll'}, 'farmersdelight:cooked_rice', 'tfc:food/cooked_rice')

    event.replaceInput({id: 'farmersdelight:kelp_roll'}, 'farmersdelight:cooked_rice', 'tfc:food/cooked_rice')
    event.replaceInput({id: 'farmersdelight:kelp_roll'}, 'minecraft:carrot', '#kubejs:seafood')
    event.replaceInput({id: 'farmersdelight:kelp_roll'}, 'minecraft:dried_kelp', ['tfc:food/dried_kelp', 'tfc:food/dried_seaweed'])

    event.remove({id: 'farmersdelight:cooking/fried_rice'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:fried_rice').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/rice_grain').toJson(),
            [
                Ingredient.of('#kubejs:cut_meats').toJson(),
                Ingredient.of('#kubejs:seafood').toJson()
            ],
            Ingredient.of('#forge:eggs').toJson(),
            Ingredient.of('#kubejs:fried_rice_vegetables').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/fried_rice')

    //------ Salads ------//
    
    event.remove({id: 'farmersdelight:nether_salad'})

    event.remove({id: 'farmersdelight:fruit_salad'})
    event.shapeless(
        'farmersdelight:fruit_salad',
        [
            '2x #kubejs:berries',
            '2x #kubejs:fruit_salad_fruits',
            '2x #kubejs:fruit_slices',
            'minecraft:bowl'
        ]
    ).id('kubejs:fruit_salad')

    event.remove({id: 'farmersdelight:mixed_salad'})
    event.shapeless(
        'farmersdelight:mixed_salad',
        [
            '#kubejs:leafy_vegetables',
            '#kubejs:salad_vegetables',
            '#kubejs:salad_vegetables',
            'minecraft:bowl'
        ]
    ).id('kubejs:mixed_salad')

    //------ Plates ------//

    event.replaceInput({id: 'farmersdelight:bacon_and_eggs'}, 'farmersdelight:fried_egg', 'tfc:food/cooked_egg')

    event.replaceInput({id: 'farmersdelight:roasted_mutton_chops'}, 'minecraft:beetroot', '#kubejs:plate_vegetables')
    event.replaceInput({id: 'farmersdelight:roasted_mutton_chops'}, 'minecraft:tomato', '#kubejs:plate_vegetables')
    event.replaceInput({id: 'farmersdelight:roasted_mutton_chops'}, 'farmersdelight:cooked_rice', 'tfc:food/cooked_rice')

    event.remove({id: 'farmersdelight:cooking/vegetable_noodles'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:vegetable_noodles').toResultJson(),
        ingredients: [
            Ingredient.of('farmersdelight:raw_pasta').toJson(),
            Ingredient.of('#kubejs:leafy_vegetables').toJson(),
            Ingredient.of('#kubejs:salad_vegetables').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/vegetable_noodles')
    
    event.replaceInput({id: 'farmersdelight:steak_and_potatoes'}, 'minecraft:cooked_beef', '#kubejs:steaks')
    event.replaceInput({id: 'farmersdelight:steak_and_potatoes'}, 'farmersdelight:onion', '#kubejs:plate_vegetables')
    event.replaceInput({id: 'farmersdelight:steak_and_potatoes'}, 'farmersdelight:cooked_rice', 'tfc:food/cooked_rice')

    event.remove({id: 'farmersdelight:cooking/ratatouille'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:ratatouille').toResultJson(),
        ingredients: [
            Ingredient.of('tfc:food/tomato').toJson(),
            Ingredient.of('tfc:food/onion').toJson(),
            Ingredient.of('tfc:food/beet').toJson(),
            Ingredient.of('tfc:food/squash').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/ratatouille')

    event.remove({id: 'farmersdelight:cooking/squid_ink_pasta'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:squid_ink_pasta').toResultJson(),
        ingredients: [
            Ingredient.of('#forge:raw_fishes').toJson(),
            Ingredient.of('farmersdelight:raw_pasta').toJson(),
            Ingredient.of('#kubejs:salad_vegetables').toJson(),
            Ingredient.of('minecraft:ink_sac').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/squid_ink_pasta')

    event.remove({id: 'farmersdelight:grilled_salmon'})
    event.shapeless(
        'farmersdelight:grilled_salmon',
        [
            'minecraft:bowl',
            '#forge:cooked_fishes',
            '#kubejs:berries',
            '#kubejs:leafy_vegetables',
            '#kubejs:plate_vegetables'
        ]
    ).id('kubejs:grilled_salmon')

    //------ Large Plates ------//

    event.remove({id: 'farmersdelight:roast_chicken_block'})
    event.shaped(
        'farmersdelight:roast_chicken_block',
        [
            'FBY',
            'LPV',
            'LWV'
        ],
        {
            F: '#kubejs:fruit_salad_fruits',
            B: '#tfc:foods/breads',
            Y: '#kubejs:berries',
            L: '#kubejs:leafy_vegetables',
            P: '#kubejs:poultry',
            V: '#kubejs:plate_vegetables',
            W: 'minecraft:bowl'
        }
    ).id('kubejs:roast_chicken_block')

    event.remove({id: 'farmersdelight:stuffed_pumpkin_block'})
    event.shaped(
        'farmersdelight:stuffed_pumpkin_block',
        [
            'BMB',
            'VVV',
            'RPR'
        ],
        {
            B: '#kubejs:berries',
            M: {
                type: 'tfc:fluid_item',
                fluid_ingredient: {
                    ingredient: {
                        tag: 'tfc:milks'
                    },
                    amount: 100
                }
            },
            V: '#kubejs:plate_vegetables',
            R: 'tfc:food/cooked_rice',
            P: 'tfc:pumpkin'
        }
    ).id('kubejs:stuffed_pumpkin_block')

    event.remove({id: 'farmersdelight:honey_glazed_ham_block'})
    event.shaped(
        'farmersdelight:honey_glazed_ham_block',
        [
            'BNB',
            'BHB',
            'RWR'
        ],
        {
            B: '#kubejs:berries',
            N: 'firmalife:raw_honey',
            H: '#kubejs:bacon_meats',
            R: 'tfc:food/cooked_rice',
            W: 'minecraft:bowl'
        }
    ).id('kubejs:honey_glazed_ham_block')

    event.remove({id: 'farmersdelight:shepherds_pie_block'})
    event.shaped(
        'farmersdelight:shepherds_pie_block',
        [
            'PMP',
            'CCC',
            'VWV'
        ],
        {
            P: 'minecraft:baked_potato',
            M: {
                type: 'tfc:fluid_item',
                fluid_ingredient: {
                    ingredient: {
                        tag: 'tfc:milks'
                    },
                    amount: 100
                }
            },
            C: 'farmersdelight:cooked_mutton_chops',
            V: '#kubejs:plate_vegetables',
            W: 'minecraft:bowl'
        }
    ).id('kubejs:shepherds_pie_block')
})