onEvent('recipes', event => {
    let castingNoTools = (material) => {
        casting(material, false)
    }

    let castingWithTools = (material) => {
        casting(material, true)
    }

    let casting = (material, hasTools) => {
        castingWithMold(material, 'ingot')

        if (hasTools) {
            castingWithMold(material, 'pickaxe_head')
            castingWithMold(material, 'propick_head')
            castingWithMold(material, 'axe_head')
            castingWithMold(material, 'shovel_head')
            castingWithMold(material, 'hoe_head')
            castingWithMold(material, 'chisel_head')
            castingWithMold(material, 'hammer_head')
            castingWithMold(material, 'saw_blade')
            castingWithMold(material, 'javelin_head')
            castingWithMold(material, 'sword_blade')
            castingWithMold(material, 'mace_head')
            castingWithMold(material, 'knife_blade')
            castingWithMold(material, 'scythe_blade')
        }
    }

    let castingWithMold = (material, type) => {
        event.recipes.createFilling(
            'tfc:metal/' + type + '/' + material,
            [
                Fluid.of('tfc:metal/' + material, 100),
                'tfc:ceramic/' + type + '_mold'
            ]
        )
    }

    castingWithTools('bismuth_bronze')
    castingWithTools('black_bronze')
    castingWithTools('bronze')
    castingWithTools('copper')
    castingWithTools('wrought_iron')
    castingWithTools('steel')
    castingWithTools('black_steel')
    castingWithTools('blue_steel')
    castingWithTools('red_steel')
    
    castingNoTools('bismuth')
    castingNoTools('brass')
    castingNoTools('gold')
    castingNoTools('nickel')
    castingNoTools('rose_gold')
    castingNoTools('silver')
    castingNoTools('tin')
    castingNoTools('zinc')
    castingNoTools('sterling_silver')
    castingNoTools('cast_iron')
    
    event.recipes.createFilling(
        'tfc:brass_bell',
        [
            Fluid.of('tfc:metal/brass', 100),
            'tfc:ceramic/bell_mold'
        ]
    )

    event.recipes.createFilling(
        'tfc:bronze_bell',
        [
            Fluid.of('tfc:metal/bronze', 100),
            'tfc:ceramic/bell_mold'
        ]
    )
})