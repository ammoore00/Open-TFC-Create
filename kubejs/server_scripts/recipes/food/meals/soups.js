onEvent('recipes', event => {
    event.remove({id: 'tfc:pot/soup_3'})
    event.remove({id: 'tfc:pot/soup_4'})
    event.remove({id: 'tfc:pot/soup_5'})

    event.remove({id: 'farmersdelight:cooking/bone_broth'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:bone_broth').toResultJson(),
        ingredients: [
            Ingredient.of('minecraft:bone').toJson(),
            Ingredient.of('#kubejs:spices').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/bone_broth')

    event.remove({id: 'farmersdelight:cooking/beef_stew'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:beef_stew').toResultJson(),
        ingredients: [
            [
                Ingredient.of('farmersdelight:minced_beef').toJson(),
                Ingredient.of('farmersdelight:mutton_chops').toJson(),
                Ingredient.of('farmersdelight:bacon').toJson()
            ],
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:spices').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/beef_stew')

    event.remove({id: 'farmersdelight:cooking/chicken_soup'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:chicken_soup').toResultJson(),
        ingredients: [
            Ingredient.of('farmersdelight:chicken_cuts').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:leafy_vegetables').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/chicken_soup')

    event.remove({id: 'farmersdelight:cooking/vegetable_soup'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:vegetable_soup').toResultJson(),
        ingredients: [
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:leafy_vegetables').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/vegetable_soup')

    event.remove({id: 'farmersdelight:cooking/fish_stew'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:fish_stew').toResultJson(),
        ingredients: [
            Ingredient.of('#kubejs:seafood').toJson(),
            Ingredient.of('farmersdelight:tomato_sauce').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/fish_stew')

    event.remove({id: 'farmersdelight:cooking/pumpkin_soup'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:pumpkin_soup').toResultJson(),
        ingredients: [
            [
                Ingredient.of('farmersdelight:minced_beef').toJson(),
                Ingredient.of('farmersdelight:mutton_chops').toJson(),
                Ingredient.of('farmersdelight:chicken_cuts').toJson(),
                Ingredient.of('farmersdelight:bacon').toJson()
            ],
            Ingredient.of('farmersdelight:pumpkin_slice').toJson(),
            Ingredient.of('#kubejs:leafy_vegetables').toJson(),
            {
                type: 'tfc:fluid_item',
                fluid_ingredient: {
                    ingredient: {
                        tag: 'tfc:milks'
                    },
                    amount: 100
                }
            }
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/pumpkin_soup')

    event.remove({id: 'farmersdelight:cooking/baked_cod_stew'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:baked_cod_stew').toResultJson(),
        ingredients: [
            Ingredient.of('#forge:raw_fishes').toJson(),
            Ingredient.of('#kubejs:stew_vegetables').toJson(),
            Ingredient.of('#kubejs:spices').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/baked_cod_stew')

    event.remove({id: 'farmersdelight:cooking/noodle_soup'})
    event.custom({
        type: 'farmersdelight:cooking',
        result: Item.of('farmersdelight:noodle_soup').toResultJson(),
        ingredients: [
            Ingredient.of('farmersdelight:raw_pasta').toJson(),
            Ingredient.of('tfc:food/cooked_egg').toJson(),
            Ingredient.of('#kubejs:leafy_vegetables').toJson(),
            Ingredient.of('#kubejs:cut_meats').toJson()
        ],
        experience: 0,
        cooking_time: 200
    }).id('kubejs:cooking/noodle_soup')
})