function result(command) {
    switch (command) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let balance = this.upvotes - this.downvotes;
            let totalScore = this.upvotes + this.downvotes;
            if (totalScore > 50) {
                let inflatedScore = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
                let reportedUpvotes = this.upvotes + inflatedScore;
                let reportedDownvotes = this.downvotes + inflatedScore;
                return [reportedUpvotes, reportedDownvotes, balance, rating(this.upvotes, this.downvotes, balance)];

            } else {
                return [this.upvotes, this.downvotes, balance, rating(this.upvotes, this.downvotes, balance)];
            }

            break;
    }

    function rating(upVotes, downVotes, balance) {
        let totalVotes = upVotes + downVotes;
        let rating = '';
        if (totalVotes < 10) {
            rating = 'new';
        } else if ((upVotes / totalVotes) > 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        
        return rating;
    }
}


 let post = {
     id: '3',
     author: 'emil',
     content: 'wazaaaaa',
     upvotes: 100,
     downvotes: 100
 };
 result.call(post, 'upvote');
 result.call(post, 'downvote');
 let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
 for (let i = 0; i < 50; i++) {
     solution.call(post, 'downvote');          // (executed 50 times)
 }
 score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']