onEvent('recipes', event => {
    let castingNoTools = (material) => {
        casting(material, false)
    }

    let castingWithTools = (material) => {
        casting(material, true)
    }

    let casting = (material, hasTools) => {
        castingWithMold(material, 'ingot', 100)

        if (hasTools) {
            castingWithMold(material, 'pickaxe_head', 100)
            castingWithMold(material, 'propick_head', 100)
            castingWithMold(material, 'axe_head', 100)
            castingWithMold(material, 'shovel_head', 100)
            castingWithMold(material, 'hoe_head', 100)
            castingWithMold(material, 'chisel_head', 100)
            castingWithMold(material, 'hammer_head', 100)
            castingWithMold(material, 'saw_blade', 100)
            castingWithMold(material, 'javelin_head', 100)
            castingWithMold(material, 'sword_blade', 200)
            castingWithMold(material, 'mace_head', 200)
            castingWithMold(material, 'knife_blade', 100)
            castingWithMold(material, 'scythe_blade', 100)
        }
    }

    let castingWithMold = (material, type, amount) => {
        event.recipes.createFilling(
            Item.of('tfc:ceramic/' + type + '_mold', '{tank:{Amount:100,FluidName:"tfc:metal/' + material + '"}}'),
            [
                Fluid.of('tfc:metal/' + material, amount),
                Item.of('tfc:ceramic/' + type + '_mold', '{tank:{Amount:0}}')
            ]
        )

        event.recipes.createPressing(
            [
                'tfc:metal/' + type + '/' + material,
                'tfc:ceramic/' + type + '_mold'
            ],
            Item.of('tfc:ceramic/' + type + '_mold', '{tank:{Amount:' + amount + ',FluidName:"tfc:metal/' + material + '"}}')
        )
    }

    castingWithTools('bismuth_bronze')
    castingWithTools('black_bronze')
    castingWithTools('bronze')
    castingWithTools('copper')

    castingNoTools('wrought_iron')
    castingNoTools('steel')
    castingNoTools('black_steel')
    castingNoTools('blue_steel')
    castingNoTools('red_steel')
    
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