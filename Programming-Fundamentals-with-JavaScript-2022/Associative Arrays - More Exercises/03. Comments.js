function comments(input) {
  let userData = {
    user: [],
    article: [],
    comment: {},
  };

  // main loop
  for (let el of input) {
    let tokens = el.split(" ");
    let user = "";
    let article = "";
    let comment = "";
    // get user and article to add in userData
    while (tokens.length > 0) {
      if (tokens[0] === "user") {
        user = tokens[1];
        addUser(user);
      } else if (tokens[0] === "article") {
        article = tokens[1];
        addArticle(article);
      }
      tokens.shift();
    }
    // split again and get comment for user and article
    tokens = el.split(": ");
    while (tokens.length > 0) {
      if (tokens[0].includes("posts on")) {
        comment = tokens.pop();
        comment = comment.replace(/,/g, " -");
        [user, article] = tokens.join().split(" posts on ");
        addComment(user, article, comment);
      }
      tokens.shift();
    }
  }

  // sort user ASC
  userData.user = userData.user.sort((a, b) => a.localeCompare(b));

  // sort article by a count of comments
  let sortedComments = Object.entries(userData.comment).sort((a, b) => b[1].length - a[1].length);

  // print final result
  for (let [item, comments] of sortedComments) {
    console.log(`Comments on ${item}`)
    for (let name of userData.user) {
      for (let token of Object.values(comments)) {
        if (token.hasOwnProperty(name)) {
          console.log(token[name]);
        }
      }
    }
  }

  // function
  function addUser(user) {
    if (!userData.user.includes(user)) {
      userData.user.push(user);
    }
    return userData;
  }

  function addArticle(article) {
    if (!userData.article.includes(article)) {
      userData.article.push(article);
    }
    return userData;
  }

  function addComment(user, article, comment) {
    if (userData.user.includes(user) && userData.article.includes(article)) {
      if (userData.comment.hasOwnProperty(article)) {
        userData.comment[article].push({ [user]: `--- From user ${user}: ${comment}` });
      } else {
        userData.comment[article] = [{ [user]: `--- From user ${user}: ${comment}` }];
      }
    }
    return userData;
  }
}

comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);