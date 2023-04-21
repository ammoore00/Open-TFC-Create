onEvent('item.registry', event => {
    event.create('integrated_circuit')
    event.create('incomplete_integrated_circuit', 'create:sequenced_assembly')
    event.create('incomplete_capacitor', 'create:sequenced_assembly')
    event.create('incomplete_electron_tube', 'create:sequenced_assembly')
})