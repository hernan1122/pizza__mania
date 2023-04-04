//si existe el puerto lo toma, sino usa el 3000
export const PORT = process.env.PORT || 3000

//si existe que lea la variable, sino que use la otra
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'axel'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_NAME = process.env.DB_NAME || 'pizzamania'
