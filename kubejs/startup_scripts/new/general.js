onEvent('item.registry', event => {
    event.create('quartz_powder')
    event.create('wood_pulp')
    event.create('sawdust')

    event.create('incomplete_brass_mechanisms', 'create:sequenced_assembly')
})