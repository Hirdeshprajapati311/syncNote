export const ApiRoutes = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    LOGOUT: "/api/v1/auth/logout",
  },

  NOTE: {
    GET_ALL: "/api/v1/notes",
    GET: (id: string) => `/api/v1/notes/${id}`,
    CREATE: "/api/v1/notes",
    UPDATE: (id: string) => `/api/v1/notes/${id}`,
    DELETE: (id: string) => `/api/notes/${id}`,
  },
};
