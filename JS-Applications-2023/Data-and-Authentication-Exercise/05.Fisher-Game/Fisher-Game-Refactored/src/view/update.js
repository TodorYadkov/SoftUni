import { updateCatch } from '../api/data.js';

let ctx = null;

export async function updateCurrCatch(catchId, currCatch, context) {
    ctx = context;
    const userInputs = {
        angler: currCatch.querySelector('.angler').value.trim(),
        weight: currCatch.querySelector('.weight').value.trim(),
        species: currCatch.querySelector('.species').value.trim(),
        location: currCatch.querySelector('.location').value.trim(),
        bait: currCatch.querySelector('.bait').value.trim(),
        captureTime: currCatch.querySelector('.captureTime').value.trim(),
    };

    await updateCatch(catchId, userInputs);
    ctx.page.redirect('/');
}