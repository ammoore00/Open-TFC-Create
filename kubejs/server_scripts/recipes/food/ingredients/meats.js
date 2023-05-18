onEvent('recipes', event => {
    event.remove({id: 'firmalife:crafting/bacon'})
    event.remove({id: 'firmalife:heating/bacon'})

    let tfcMeats = [
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

    for (const meat of tfcMeats) {
        event.smoking('tfc:food/cooked_' + meat, 'tfc:food/' + meat)
        event.campfireCooking('tfc:food/cooked_' + meat, 'tfc:food/' + meat)
    }

    let heating = (output, input) => {
        event.recipes.tfc.heating(
            ItemStackProvider.of(output).copyFood(),
            input,
            200
        )
    }

    let cutting = (output, input) => {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                Ingredient.of(input).toJson()
            ],
            tool: Ingredient.of('#tfc:knives').toJson(),
            result: [
                Item.of('2x ' + output).toResultJson()
            ]
        })
    }

    let meatRecipes = (cooked, raw, source) => {
        cutting(raw, '#kubejs:' + source)
        cutting(cooked, '#kubejs:cooked_' + source)

        heating(cooked, raw)
    }

    event.remove({id: 'farmersdelight:cutting/porkchop'})
    event.remove({id: 'farmersdelight:cutting/chicken'})
    event.remove({id: 'farmersdelight:cutting/mutton'})
    event.remove({id: 'farmersdelight:cutting/cod'})
    event.remove({id: 'farmersdelight:cutting/salmon'})
    event.remove({id: 'farmersdelight:cutting/beef'})
    
    event.remove({id: 'farmersdelight:cutting/cooked_chicken'})
    event.remove({id: 'farmersdelight:cutting/cooked_mutton'})
    event.remove({id: 'farmersdelight:cutting/cooked_cod'})
    event.remove({id: 'farmersdelight:cutting/cooked_salmon'})

    meatRecipes('farmersdelight:cooked_bacon', 'farmersdelight:bacon', 'bacon_meats')
    meatRecipes('farmersdelight:cooked_chicken_cuts', 'farmersdelight:chicken_cuts', 'poultry')
    meatRecipes('farmersdelight:cooked_mutton_chops', 'farmersdelight:mutton_chops', 'chops_meats')
    meatRecipes('farmersdelight:cooked_cod_slice', 'farmersdelight:cod_slice', 'white_fish')
    meatRecipes('farmersdelight:cooked_salmon_slice', 'farmersdelight:salmon_slice', 'salmon')
    meatRecipes('farmersdelight:beef_patty', 'farmersdelight:minced_beef', 'hamburger_meats')
})