onEvent('recipes', event => {
    event.remove({output: 'create:zinc_block'})
    event.remove({output: 'create:brass_block'})
    event.remove({output: 'minecraft:gold_nugget'})
    event.remove({output: 'create:zinc_nugget'})
    event.remove({output: 'create:copper_nugget'})
    event.remove({output: 'create:brass_nugget'})
    
    event.remove({output: 'create:peculiar_bell'})
})