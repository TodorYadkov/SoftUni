class Story {
    #comments = [];
    #likes = [];
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        }

        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }

        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this.#likes.includes(username) === false) {
            throw new Error('You can\'t dislike this story!');
        }

        this.#likes = this.#likes.filter(like => like !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const searchedPrimaryId = this.#comments.find(i => i.id === id);
        if (searchedPrimaryId === undefined) {
            this.#comments.push({
                username,
                content,
                id: this.#comments.length + 1,
                replies: []
            });

            return `${username} commented on ${this.title}`;
        }
        // If searchedPrimaryId is not a undefined add a new object into a replies with a correct id
        searchedPrimaryId.replies.push({
            username,
            content,
            id: `${searchedPrimaryId.id}.${searchedPrimaryId.replies.length + 1}`
        });

        return 'You replied successfully';
    }

    toString(sortingType) {
        // Create array with initials values
        const printArr = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this.#likes.length}`, 'Comments:'];
        // If the array is empty return only initials values from printArr
        if (this.#comments.length === 0) {
            return printArr.join('\n');
        }
        // Add sorting function
        const sorting = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),
        };

        // Sort the main array first and then sort the replies if replies.length > 0 and push into printArr
        this.#comments
            .sort(sorting[sortingType])
            .forEach(obj => {
                printArr.push(`-- ${obj.id}. ${obj.username}: ${obj.content}`);
                if (obj.replies.length > 0) {
                    obj.replies
                        .sort(sorting[sortingType])
                        .forEach(innerObj => printArr.push(`--- ${innerObj.id}. ${innerObj.username}: ${innerObj.content}`));
                }
            });

        return printArr.join('\n');
    }
}

let art = new Story('My Story', 'Anny');
art.like('John');
console.log(art.likes);                          // John likes this story!
art.dislike('John');
console.log(art.likes);                          // My Story has 0 likes
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content')); // Ammy commented on My Story
art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));  // You replied successfully
console.log();
console.log(art.toString('username'));              // Title: My Story       
                                                    // Creator: Anny
                                                    // Likes: 0
                                                    // Comments:
                                                    // -- 2. Ammy: New Content
                                                    // -- 3. Jessy: Nice :)
                                                    // -- 1. Sammy: Some Content
                                                    // --- 1.2. SAmmy: Reply@
                                                    // --- 1.1. Zane: Reply
console.log();
art.like('Zane');
console.log(art.toString('desc'));                  // Title: My Story
                                                    // Creator: Anny
                                                    // Likes: 1
                                                    // Comments:
                                                    // -- 3. Jessy: Nice :)
                                                    // -- 2. Ammy: New Content
                                                    // -- 1. Sammy: Some Content
                                                    // --- 1.2. SAmmy: Reply@
                                                    // --- 1.1. Zane: Reply