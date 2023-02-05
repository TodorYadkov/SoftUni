import { generateEl } from '../src/dom.js';
import { urlEdnPoint } from '../src/utility.js';
import { loadDetails } from './detailsMovie.js';

// Like movie
export async function likeMovie(event, movieId, likeBtn, divCol) {
    event.preventDefault();
    let spanNumbersLikes;
    try {
        const response = await fetch('http://localhost:3030' + urlEdnPoint.addLikePOST, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(sessionStorage.userInfo).authToken
            },
            body: JSON.stringify({ movieId })
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        const data = await response.json();
        // Get a like ID to use for removal
        const likeId = data._id;
        // Show movie likes
        const numberLikes = await getNumberLikes(movieId);
        spanNumbersLikes = generateEl('span', {
            className: 'enrolled-span', textContent: `Liked ${numberLikes}`,
            eventListeners: { click: () => removeLike(likeId) }
        }, divCol);
        likeBtn.remove();
    } catch (error) {
        alert(error.message);
    }

    // Remove like
    async function removeLike(likeId) {
        try {
            const response = await fetch('http://localhost:3030' + urlEdnPoint.revokeLikeDELETE + likeId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(sessionStorage.userInfo).authToken
                }
            });

            if (response.ok === false) {
                throw new Error(`Error: ${response.statusText} - ${response.status}`);
            }

            // Remove span and display [Like] button  
            spanNumbersLikes.remove();
            divCol.appendChild(likeBtn);
        } catch (error) {
            alert(error.message);
        }
    }
}

// Check if this movie is liked by the user
export async function checkIfLiked(movieId) {
    try {
        const userId = JSON.parse(sessionStorage.userInfo).userId;
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
        if (response.ok === false) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        alert(error.message);
    }
}

// Get movie likes
export async function getNumberLikes(movieId) {

    try {
        const userId = JSON.parse(sessionStorage.userInfo).userId;
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
        if (response.ok === false) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        alert(error.message);
    }
}