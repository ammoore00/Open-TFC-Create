onEvent('recipes', event => {

    //------ General ------//
    
    event.remove({id: 'farmersdelight:cooking/dog_food'})
    event.remove({id: 'farmersdelight:horse_feed'})

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

    //------ Large Plates ------//


})