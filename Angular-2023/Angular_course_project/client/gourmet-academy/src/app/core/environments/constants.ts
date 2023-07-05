export const constants = {
    hostBackEnd: 'http://localhost:3000/',
    userTokenName: '65c227bd8f4eb7fe5ee3cd2ad13a5a8c',
    defaultPaginationPageNum: '1',
    defaultPaginationLimitNum: '6',
    weatherGetCityByIP_URL: (apiKey: string, ipAddress: string) => `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${ipAddress}&language=en-us&details=false`,
    forecastDaily_Url: (apiKey: string, cityKey: string) => `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=en-us&details=false&metric=true`,
};

export const endpoints = {
    register: 'users/register', // post
    login: 'users/login', // post
    logout: 'users/logout', // get
    getUserById: (userId: string) => `users/${userId}`, // get 
    getUserBought: (userId: string) => `users/orders/${userId}`, // get
    getAllRestaurants: (page: string, limit: string) => `restaurants?page=${page}&limit=${limit}`, // get // Usage: from front with quey ?page=1&limit=6 {page: "currentNum", limit: 6}
    getRestaurantsBySearch: (restaurantName: string, location: string) => `restaurants/search?name=${restaurantName}&location=${location}`, // get
    getRestaurantById: (restaurantId: string) => `restaurants/${restaurantId}`, // get
    addNewRestaurant: 'restaurants', // post
    updateRestaurant: (restaurantId: string) => `restaurants/${restaurantId}`, // put
    deleteRestaurant: (restaurantId: string) => `restaurants/${restaurantId}`, // delete
    getRestaurantOrders: (restaurantId: string) => `restaurants/orders/${restaurantId}`, // get
    getAllProductsRestaurant: (restaurantId: string) => `restaurants/products/${restaurantId}`, // get
    getProductById: (productId: string) => `restaurants/products/product/${productId}`, // get
    addNewProduct: (restaurantId: string) => `restaurants/products/${restaurantId}`, // post
    updateProduct: (productId: string) => `restaurants/products/edit/${productId}`, // put
    deleteProduct: (productId: string) => `restaurants/products/delete/${productId}`, // delete
    buyFromRestaurant: (restaurantId: string) => `restaurants/buys/${restaurantId}`, // post
    getCommentById: (commentId: string) => `restaurants/comments/comment/${commentId}`, // get
    getAllCommentsRestaurant: (restaurantId: string) => `restaurants/comments/${restaurantId}`, // get
    addNewComment: (restaurantId: string) => `restaurants/comments/${restaurantId}`, // post
    updateComment: (commentId: string) => `restaurants/comments/edit/${commentId}`, // put
    deleteComment: (commentId: string) => `restaurants/comments/delete/${commentId}`, // delete
    getApiKeys: 'security/keys', // get
    getUserRestaurants: (usreId: string) => `restaurants/my-restaurants/${usreId}`, // get

};

// Translate the errors and if they are different from the current ones show them in English
export const translateErrorsFromServer: Map<string, string> = new Map([
    ['Email is already used!', 'Имейлът е вече зает моля използвайте друг'],
    ['Invalid username or password!', 'Невалиден потребител или парола'],
    ['Invalid email', 'Въведеният имейл е невалиден']
]);