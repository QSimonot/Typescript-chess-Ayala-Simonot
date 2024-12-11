import config from '@/config.json';

const ApiUrl = config.VUE_APP_API_BASE_URL;

export const ApiUrlConnection = `${ApiUrl}/auth`;
export const ApiUrlUser = `${ApiUrl}/users`;
export const ApiGetUser = `${ApiUrl}/users/name/`;

export const ApiGetGameOfUser = `${ApiUrl}/games/user/`;
export const ApiPostNewGame = `${ApiUrl}/games`;

export const ApiGetMovesOfGame = `${ApiUrl}/moves/`;

