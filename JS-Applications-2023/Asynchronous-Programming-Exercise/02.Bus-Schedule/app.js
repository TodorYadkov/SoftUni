function solve() {
    let url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const output = { message: document.querySelector('#info span') };
    const btnDepart = document.getElementById('depart');
    const btnArrive = document.getElementById('arrive');
    const nextStop = { name: null, next: 'depot' };

    async function depart() {
        try {
            const responseNextStop = await fetch(`${url}${nextStop.next}`);
            if (responseNextStop.status !== 200) {
                throw new Error('Error');
            }

            const data = await responseNextStop.json();
            nextStop.name = data.name;
            nextStop.next = data.next;
            btnDepart.disabled = true;
            btnArrive.disabled = false;

            output.message.textContent = `Next stop ${nextStop.name}`;
        } catch (error) {
            output.message.textContent = error.message;
            btnDepart.disabled = true;
            btnArrive.disabled = true;
        }
    }

    async function arrive() {
        btnArrive.disabled = true;
        btnDepart.disabled = false;

        output.message.textContent = `Arriving at ${nextStop.name}`;
    }

    return {
        depart,
        arrive
    };
}

const result = solve();