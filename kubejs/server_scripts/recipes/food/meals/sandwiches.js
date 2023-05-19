onEvent('recipes', event => {
    let grains = [
        'barley',
        'maize',
        'oat',
        'rice',
        'rye',
        'wheat'
    ]

    for (const grain of grains) {
        event.remove({id: 'tfc:crafting/' + grain + '_sandwich'})
        event.remove({id: 'firmalife:crafting/' + grain + '_slice_sandwich'})
        event.remove({id: 'firmalife:crafting/' + grain + '_flatbread_sandwich'})
    }

    // Egg Sandwich

    event.remove({id: 'farmersdelight:egg_sandwich'})
    event.shapeless(
        'farmersdelight:egg_sandwich',
        [
            '#kubejs:sandwich_breads',
            '2x tfc:food/cooked_egg'
        ]
    ).id('kubejs:egg_sandwich')

    event.remove({id: 'create_central_kitchen:sequenced_assembly/egg_sandwich'})
    event.recipes.createSequencedAssembly(
        'farmersdelight:egg_sandwich',
        '#kubejs:sandwich_breads',
        [
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_egg_sandwich',
                [
                    'create_central_kitchen:incomplete_egg_sandwich',
                    'tfc:food/cooked_egg'
                ]
            )
        ]
    ).loops(2)
    .transitionalItem('create_central_kitchen:incomplete_egg_sandwich')
    .id('kubejs:sequenced_assembly/egg_sandwich')

    // Chicken Sandwich

    event.remove({id: 'farmersdelight:chicken_sandwich'})
    event.shapeless(
        'farmersdelight:chicken_sandwich',
        [
            '#kubejs:sandwich_breads',
            'farmersdelight:cooked_chicken_cuts',
            '#kubejs:leafy_vegetables',
            '#kubejs:sandwich_vegetables'
        ]
    ).id('kubejs:chicken_sandwich')

    event.remove({id: 'create_central_kitchen:sequenced_assembly/chicken_sandwich'})
    event.recipes.createSequencedAssembly(
        'farmersdelight:chicken_sandwich',
        '#kubejs:sandwich_breads',
        [
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_chicken_sandwich',
                [
                    'create_central_kitchen:incomplete_chicken_sandwich',
                    'farmersdelight:cooked_chicken_cuts'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_chicken_sandwich',
                [
                    'create_central_kitchen:incomplete_chicken_sandwich',
                    '#kubejs:leafy_vegetables'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_chicken_sandwich',
                [
                    'create_central_kitchen:incomplete_chicken_sandwich',
                    '#kubejs:sandwich_vegetables'
                ]
            )
        ]
    ).loops(1)
    .transitionalItem('create_central_kitchen:incomplete_chicken_sandwich')
    .id('kubejs:sequenced_assembly/chicken_sandwich')

    // Hamburger

    event.remove({id: 'farmersdelight:hamburger'})
    event.shapeless(
        'farmersdelight:hamburger',
        [
            '#kubejs:sandwich_breads',
            'farmersdelight:beef_patty',
            '#firmalife:foods/cheeses',
            '#kubejs:leafy_vegetables',
            '#kubejs:sandwich_vegetables'
        ]
    ).id('kubejs:hamburger')

    event.remove({id: 'create_central_kitchen:sequenced_assembly/hamburger'})
    event.recipes.createSequencedAssembly(
        'farmersdelight:hamburger',
        '#kubejs:sandwich_breads',
        [
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_hamburger',
                [
                    'create_central_kitchen:incomplete_hamburger',
                    'farmersdelight:beef_patty'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_hamburger',
                [
                    'create_central_kitchen:incomplete_hamburger',
                    '#firmalife:foods/cheeses'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_hamburger',
                [
                    'create_central_kitchen:incomplete_hamburger',
                    '#kubejs:leafy_vegetables'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_hamburger',
                [
                    'create_central_kitchen:incomplete_hamburger',
                    '#kubejs:sandwich_vegetables'
                ]
            )
        ]
    ).loops(1)
    .transitionalItem('create_central_kitchen:incomplete_hamburger')
    .id('kubejs:sequenced_assembly/hamburger')

    // Bacon Sandwich

    event.remove({id: 'farmersdelight:bacon_sandwich'})
    event.shapeless(
        'farmersdelight:bacon_sandwich',
        [
            '#kubejs:sandwich_breads',
            'farmersdelight:cooked_bacon',
            '#kubejs:leafy_vegetables',
            '#kubejs:sandwich_vegetables'
        ]
    ).id('kubejs:bacon_sandwich')

    event.remove({id: 'create_central_kitchen:sequenced_assembly/bacon_sandwich'})
    event.recipes.createSequencedAssembly(
        'farmersdelight:bacon_sandwich',
        '#kubejs:sandwich_breads',
        [
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_bacon_sandwich',
                [
                    'create_central_kitchen:incomplete_bacon_sandwich',
                    'farmersdelight:cooked_bacon'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_bacon_sandwich',
                [
                    'create_central_kitchen:incomplete_bacon_sandwich',
                    '#kubejs:leafy_vegetables'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_bacon_sandwich',
                [
                    'create_central_kitchen:incomplete_bacon_sandwich',
                    '#kubejs:sandwich_vegetables'
                ]
            )
        ]
    ).loops(1)
    .transitionalItem('create_central_kitchen:incomplete_bacon_sandwich')
    .id('kubejs:sequenced_assembly/bacon_sandwich')

    // Wrap

    event.remove({id: 'farmersdelight:mutton_wrap'})
    event.shapeless(
        'farmersdelight:mutton_wrap',
        [
            '#kubejs:wraps',
            'farmersdelight:cooked_mutton_chops',
            '#kubejs:leafy_vegetables',
            '#kubejs:sandwich_vegetables'
        ]
    ).id('kubejs:mutton_wrap')

    event.remove({id: 'create_central_kitchen:sequenced_assembly/mutton_wrap'})
    event.recipes.createSequencedAssembly(
        'farmersdelight:mutton_wrap',
        '#kubejs:wraps',
        [
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_mutton_wrap',
                [
                    'create_central_kitchen:incomplete_mutton_wrap',
                    'farmersdelight:cooked_mutton_chops'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_mutton_wrap',
                [
                    'create_central_kitchen:incomplete_mutton_wrap',
                    '#kubejs:leafy_vegetables'
                ]
            ),
            event.recipes.createDeploying(
                'create_central_kitchen:incomplete_mutton_wrap',
                [
                    'create_central_kitchen:incomplete_mutton_wrap',
                    '#kubejs:sandwich_vegetables'
                ]
            )
        ]
    ).loops(1)
    .transitionalItem('create_central_kitchen:incomplete_mutton_wrap')
    .id('kubejs:sequenced_assembly/mutton_wrap')

    // Burrito

    event.remove({id: 'firmalife:crafting/burrito'})
    event.shapeless(
        'firmalife:food/burrito',
        [
            'firmalife:food/corn_tortilla',
            '#kubejs:cooked_cut_meats',
            'farmersdelight:tomato_sauce',
            'firmalife:food/shredded_cheese',
            '#kubejs:sandwich_vegetables'
        ]
    ).id('kubejs:burrito')

    // Burrito

    event.remove({id: 'firmalife:crafting/taco'})
    event.shapeless(
        'firmalife:food/taco',
        [
            'firmalife:food/taco_shell',
            '#kubejs:cooked_cut_meats',
            'farmersdelight:tomato_sauce',
            'firmalife:food/shredded_cheese',
            '#kubejs:leafy_vegetables'
        ]
    ).id('kubejs:taco')
})