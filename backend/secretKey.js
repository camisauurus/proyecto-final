require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
    console.warn("Advertencia: JWT_SECRET no está definido en las variables de entorno.")
}

module.exports = JWT_SECRET