class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLocaleLowerCase();
        if (this.possibleArticles.hasOwnProperty(articleModel) === false) {
            throw new Error('This article model is not included in this gallery!');
        }

        const searchedArticle = this.listOfArticles.find(a => a.articleName === articleName);
        let isAvailable = true;
        if (searchedArticle === undefined) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
            isAvailable = false;
        }

        if (isAvailable) {
            searchedArticle.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        const searchedGuest = this.guests.find(g => g.guestName === guestName);
        if (searchedGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        const points = personality === 'Vip' ? 500 : personality === 'Middle' ? 250 : 50;
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        const searchedArticle = this.listOfArticles.find(a => a.articleName === articleName);
        if (searchedArticle === undefined || searchedArticle.articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }

        if (searchedArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        const searchedGuest = this.guests.find(g => g.guestName === guestName);
        if (searchedGuest === undefined) {
            return 'This guest is not invited.';
        }
        const neededPoints = this.possibleArticles[articleModel.toLocaleLowerCase()];
        if (searchedGuest.points < neededPoints) {
            return 'You need to more points to purchase the article.';
        }

        searchedGuest.points -= neededPoints;
        searchedGuest.purchaseArticle++;
        searchedArticle.quantity--;
        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        const result = [];
        if (criteria === 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        } else if (criteria === 'guest') {
            result.push('Guests information:');
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));  // Successfully added article Mona Liza with a new quantity- 3.
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));  // Successfully added article Ancient vase with a new quantity- 2.
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));  // Successfully added article Mona Liza with a new quantity- 1.

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));     // You have successfully invited John!
// console.log(artGallery.inviteGuest('Peter', 'Middle')); // You have successfully invited Peter!
// console.log(artGallery.inviteGuest('John', 'Middle'));  // John has already been invited.

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));    // John successfully purchased the article worth 200 points.
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));   // Peter successfully purchased the article worth 250 points.
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));       // This article is not found.

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article')); // Articles information:
//                                                     // picture - Mona Liza - 3
//                                                     // item - Ancient vase - 1
// console.log(artGallery.showGalleryInfo('guest'));   // Guests information:
//                                                     // John - 1
//                                                     // Peter - 1





