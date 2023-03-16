import { delete_, get, post, put } from './api.js';

const endpoints = {
    RECIPE_LIST: (page) => `/data/recipes?select=&offset=${(page - 1) * 5}&pageSize=5`,
    RECIPE_COUNT: '/data/recipes?count',
    RECENT_RECIPES: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn desc&pageSize=3',
    RECIPES: '/data/recipes',
    RECIPE_BY_ID: '/data/recipes/',
    COMMENTS: '/data/comments',
    COMMENTS_BY_RECIPE_ID: (id) => `/data/comments?where=recipeId%3D%22${id}%22 `,
};


export async function getRecipes(page = 1) {
    return await get(endpoints.RECIPE_LIST(page));
}

export async function getRecipeCount() {
    return await get(endpoints.RECIPE_COUNT);
}

export async function getRecent() {
    return await get(endpoints.RECENT_RECIPES);
}

export async function getRecipeById(id) {
    return await get(endpoints.RECIPE_BY_ID + id);
}

export async function createRecipe(recipe) {
    return await post(endpoints.RECIPES, recipe);
}

export async function editRecipe(id, recipe) {
    return await put(endpoints.RECIPE_BY_ID + id, recipe);
}

export async function deleteRecipeById(id) {
    return await delete_(endpoints.RECIPE_BY_ID + id);
}

export async function getCommentsByRecipeId(recipeId) {
    return await get(endpoints.COMMENTS_BY_RECIPE_ID(recipeId));
}

export async function createComment(comment) {
    return await post(endpoints.COMMENTS, comment);
}