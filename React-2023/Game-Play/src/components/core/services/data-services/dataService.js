import { request as api } from "../api-requester-services/requester";
import { ENDPOINTS } from "../../environments/constants";

export const getLastThreeGames = async (context) => api.get(ENDPOINTS.home, context);

export const getAllGames = async (context) => api.get(ENDPOINTS.allGames, context);

export const getGameById = async (gameId, context) => api.get(ENDPOINTS.details(gameId), context);

export const createGame = async (data, context) => api.post(ENDPOINTS.create, data, context)

export const updateGame = async (gameId, data, context) => api.put(ENDPOINTS.details(gameId), data, context);

export const deleteGame = async (gameId, context) => api.delete(ENDPOINTS.delete(gameId), context);

export const getAllCommentsForGameById = async (gameId, context) => api.get(ENDPOINTS.comments(gameId), context);

export const postComment = async ({ gameId, comment }, context) => api.post(ENDPOINTS.postComments, { gameId, comment }, context);