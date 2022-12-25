function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convertFn)
    const objUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convertFn() {
        const inputUnit = document.getElementById('inputUnits').value;
        const inputDistance = Number(document.getElementById('inputDistance').value);
        const outputUnit = document.getElementById('outputUnits').value;
        const outputDistance = document.getElementById('outputDistance');

        let result = (inputDistance * objUnits[inputUnit]) / objUnits[outputUnit];
        outputDistance.value = result;
    }
}