function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let printLine = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length !== 0) {
                printLine += '\nComments:';
                this.comments.forEach(el => printLine += `\n * ${el}`);
            }

            return printLine;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const classes = solution();
let post = new classes.Post('Post', 'Content');

console.log(post.toString());

let scm = new classes.SocialMediaPost('TestTitle', 'TestContent', 25, 30);

scm.addComment('Good post');
scm.addComment('Very good post');
scm.addComment('Wow!');

console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

const blogPost = new classes.BlogPost('TestTitle', 'TestContent', 25);
console.log(blogPost.toString());
console.log(blogPost.view());
console.log(blogPost.view());
console.log(blogPost.view());
console.log(blogPost.view());
console.log(blogPost.view());
console.log(blogPost.toString());
