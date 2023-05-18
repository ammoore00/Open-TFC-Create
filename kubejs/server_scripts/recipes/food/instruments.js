onEvent('recipes', event => {
    event.remove({id: 'tfc:anvil/wrought_iron_grill'})
    event.remove({id: 'tfc:heating/grill'})

    event.remove({id: 'tfc:clay_knapping/pot'})
    event.remove({id: 'tfc:heating/fired_pot'})
})