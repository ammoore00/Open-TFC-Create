onEvent('recipes', event => {
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:milling/dripstone_block'})

    let igneousRocks = [
        'granite',
        'diorite',
        'gabbro',
        'rhyolite',
        'basalt',
        'andesite',
        'dacite'
    ]
    
    for (const rockType of igneousRocks) {
        event.recipes.tfc.heating(
            'tfc:rock/magma/' + rockType,
            '#kubejs:' + rockType,
            1000
        )

        event.recipes.createMixing(
            'tfc:rock/magma/' + rockType,
            [
                '#kubejs:' + rockType
            ]
        ).heated()
    }

    event.replaceInput({id: 'create:crafting/materials/andesite_alloy'}, 'minecraft:iron_nugget', '#kubejs:mafic_alloy_components')
    event.replaceInput({id: 'create:crafting/materials/andesite_alloy'}, 'minecraft:andesite', '#kubejs:magma')
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})

    event.replaceInput({id: 'create:mixing/andesite_alloy'}, 'minecraft:iron_nugget', '#kubejs:mafic_alloy_components')
    event.replaceInput({id: 'create:mixing/andesite_alloy'}, 'minecraft:andesite', '#kubejs:magma')
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})

    event.recipes.createMilling(
        'kubejs:quartz_powder',
        '#minecraft:sand'
    ).id('kubejs:milling/sand')

    event.recipes.createCrushing(
        [
            'kubejs:quartz_powder',
            Item.of('kubejs:quartz_powder').withChance(0.5)
        ],
        '#minecraft:sand'
    ).id('kubejs:crushing/sand')

    event.recipes.createSplashing(
        Item.of('minecraft:clay_ball').withChance(0.125),
        '#minecraft:sand'
    ).id('kubejs:splashing/sand')

    event.recipes.createCompacting(
        'tfc:rock/raw/quartzite',
        [
            '8x kubejs:quartz_powder'
        ]
    ).heated()
    .id('kubejs:compacting/quartzite')

    const uncommon = 0.04
    const rare = 0.02
    const ultraRare = 0.01

    //------ Igneous Extrusive ------//

    let rhyolite = {
        'tfc:ore/small_native_copper': uncommon,
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_hematite': uncommon,
        'tfc:ore/cinnabar': uncommon,
        'tfc:ore/sulfur': uncommon,
    }

    let basalt = {
        'tfc:ore/small_native_copper': uncommon,
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_hematite': uncommon,
        'tfc:ore/cinnabar': uncommon,
        'tfc:ore/sulfur': uncommon,
    }

    let andesite = {
        'tfc:ore/small_native_copper': uncommon,
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_hematite': uncommon,
        'tfc:ore/cinnabar': uncommon,
        'tfc:ore/sulfur': uncommon,
    }

    let dacite = {
        'tfc:ore/small_native_copper': uncommon,
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_hematite': uncommon,
        'tfc:ore/cinnabar': uncommon,
        'tfc:ore/sulfur': uncommon,
    }

    //------ Igneous Intrusive ------//

    let granite = {
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_native_silver': uncommon,
        'tfc:ore/small_cassiterite': uncommon,
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/cryolite': uncommon,
        'tfc:ore/emerald': rare,
        'tfc:ore/topaz': rare,

        'tfc:ore/small_garnierite': rare,
    }

    let diorite = {
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_cassiterite': uncommon,
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/cryolite': uncommon,
        'tfc:ore/emerald': rare,

        'tfc:ore/small_garnierite': rare,
    }

    let gabbro = {
        'tfc:ore/small_native_gold': uncommon,
        'tfc:ore/small_cassiterite': uncommon,
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_garnierite': uncommon,
        'tfc:ore/cryolite': uncommon,
        'tfc:ore/emerald': rare,
        'tfc:ore/diamond': ultraRare,
    }

    //------ Sedimentary ------//

    let shale = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/cinnabar': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/sylvite': uncommon,
        'tfc:ore/borax': uncommon,
        'tfc:ore/halite': uncommon,
        
        'tfc:ore/ruby': ultraRare,
    }

    let claystone = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/sylvite': uncommon,
        'tfc:ore/borax': uncommon,
    }

    let limestone = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_malachite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/borax': uncommon,
        'tfc:ore/halite': uncommon,
        'tfc:ore/lapis_lazuli': uncommon,
        
        'tfc:ore/ruby': ultraRare,
        'tfc:ore/gypsum': rare,
    }

    let conglomerate = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/halite': uncommon,
    }

    let dolomite = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/halite': uncommon,
        
        'tfc:ore/small_malachite': rare,
    }

    let chert = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/sylvite': uncommon,
        'tfc:ore/halite': uncommon,
    }

    let chalk = {
        'tfc:ore/small_bismuthinite': uncommon,
        'tfc:ore/small_magnetite': uncommon,
        'tfc:ore/small_limonite': uncommon,
        'tfc:ore/lignite': uncommon,
        'tfc:ore/kaolinite': uncommon,
        'tfc:ore/saltpeter': uncommon,
        'tfc:ore/halite': uncommon,
        
        'tfc:ore/small_malachite': rare,
    }

    //------ Metamorphic ------//

    let quartzite = {
        'tfc:ore/small_sphalerite': uncommon,
        'tfc:ore/small_tetrahedrite': uncommon,
        'tfc:ore/bituminous_coal': uncommon,
        'tfc:ore/graphite': uncommon,
        'tfc:ore/cinnabar': uncommon,
        'tfc:ore/gypsum': uncommon,
        
        'tfc:ore/opal': ultraRare,
        'tfc:ore/small_native_silver': rare,
    }

    let slate = {
        'tfc:ore/small_sphalerite': uncommon,
        'tfc:ore/small_tetrahedrite': uncommon,
        'tfc:ore/bituminous_coal': uncommon,
        'tfc:ore/gypsum': uncommon,
        
        'tfc:ore/small_native_silver': rare,
    }

    let phyllite = {
        'tfc:ore/small_sphalerite': uncommon,
        'tfc:ore/small_tetrahedrite': uncommon,
        'tfc:ore/bituminous_coal': uncommon,
        'tfc:ore/gypsum': uncommon,
        
        'tfc:ore/small_malachite': rare,
        'tfc:ore/small_native_silver': rare,
    }

    let schist = {
        'tfc:ore/small_sphalerite': uncommon,
        'tfc:ore/small_tetrahedrite': uncommon,
        'tfc:ore/bituminous_coal': uncommon,
        'tfc:ore/graphite': uncommon,
        'tfc:ore/gypsum': uncommon,
        
        'tfc:ore/small_native_silver': rare,
    }

    let gneiss = {
        'tfc:ore/small_native_silver': uncommon,
        'tfc:ore/small_sphalerite': uncommon,
        'tfc:ore/small_tetrahedrite': uncommon,
        'tfc:ore/bituminous_coal': uncommon,
        'tfc:ore/graphite': uncommon,
        'tfc:ore/lapis_lazuli': uncommon,
        'tfc:ore/gypsum': uncommon,
    }

    let marble = {
        'tfc:ore/small_malachite': uncommon,
        'tfc:ore/small_sphalerite': uncommon,
        'tfc:ore/small_tetrahedrite': uncommon,
        'tfc:ore/bituminous_coal': uncommon,
        'tfc:ore/graphite': uncommon,
        'tfc:ore/gypsum': uncommon,
        
        'tfc:ore/small_native_silver': rare,
    }

    let rockTypes = {
        'granite': granite,
        'diorite': diorite,
        'gabbro': gabbro,
        'rhyolite': rhyolite,
        'basalt': basalt,
        'andesite': andesite,
        'dacite': dacite,
        'shale': shale,
        'claystone': claystone,
        'limestone': limestone,
        'conglomerate': conglomerate,
        'dolomite': dolomite,
        'chert': chert,
        'chalk': chalk,
        'quartzite': quartzite,
        'slate': slate,
        'phyllite': phyllite,
        'schist': schist,
        'gneiss': gneiss,
        'marble': marble,
    }

    let sandMap = {
        'granite': 'white',
        'diorite': 'white',
        'gabbro': 'black',
        'rhyolite': 'pink',
        'basalt': 'black',
        'andesite': 'white',
        'dacite': 'white',
        'shale': 'black',
        'claystone': 'red',
        'limestone': 'yellow',
        'conglomerate': 'yellow',
        'dolomite': 'black',
        'chert': 'brown',
        'chalk': 'white',
        'quartzite': 'pink',
        'slate': 'green',
        'phyllite': 'pink',
        'schist': 'green',
        'gneiss': 'yellow',
        'marble': 'white',
    }

    event.remove({id: 'create:splashing/sand'})

    for (const [name, outputMap] of Object.entries(rockTypes)) {
        let stone = '#kubejs:' + name
        let gravel = 'tfc:rock/gravel/' + name
        let sand = 'tfc:sand/' + sandMap[name]
        
        let outputs = []

        for (const [item, chance] of Object.entries(outputMap)) {
            outputs.push(Item.of(item).withChance(chance))
        }

        event.recipes.createCrushing(
            gravel,
            stone
        ).id('kubejs:crushing/' + name)

        event.recipes.createMilling(
            sand,
            gravel
        ).id('kubejs:milling/' + name + '_gravel')

        event.recipes.createSplashing(
            outputs,
            gravel
        ).id('kubejs:washing/' + name + '_gravel')

        event.recipes.createCompacting(
            'tfc:rock/raw/' + name,
            '8x tfc:rock/loose/' + name
        ).superheated()
        .id('kubejs:compacting/' + name)
    }

    event.remove({id: 'create:compacting/granite_from_flint'})
    event.remove({id: 'create:compacting/diorite_from_flint'})
    event.remove({id: 'create:compacting/andesite_from_flint'})
})