import { request } from "../api-requester-services/requester";
import { ENDPOINTS } from "../../environments/constants";

export const userLogin = async ({ email, password }, context) => request.post(ENDPOINTS.login, { email, password }, context);

export const userRegister = async ({ email, password }, context) => request.post(ENDPOINTS.register, { email, password }, context);;

export const userLogout = async (context) => request.get(ENDPOINTS.logout, context);