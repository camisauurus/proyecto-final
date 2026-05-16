const jwt = require("jsonwebtoken")
const secretKey = require("./secretKey")

const reportarConsulta = async (req, res, next) => {
    const url = req.url
    const metodo = req.method
    const body = req.body
    
    console.log(`=== Nueva Petición Recibida ===`)
    console.log(`Fecha/Hora: ${new Date().toLocaleString()}`)
    console.log(`Método: ${metodo} | Ruta: ${url}`)
    
    if (body && Object.keys(body).length > 0) {
        const copiaBody = { ...body }
        if (copiaBody.password) copiaBody.password = "********"
        console.log(`Payload:`, copiaBody)
    }
    
    console.log(`==================================\n`)
    next()
};


const verificarToken = (req, res, next) => {
    const authorizationHeader = req.header("Authorization")
    
    if (!authorizationHeader) {
        return res.status(401).json({ 
            message: "Acceso denegado. No se proporcionó la cabecera Authorization con el token de seguridad." 
        })
    }

    const token = authorizationHeader.split("Bearer ")[1]

    if (!token) {
        return res.status(401).json({ 
            message: "Formato de autenticación inválido. Debe utilizar el formato 'Bearer [token]'." 
        })
    }

    try {
        const payload = jwt.verify(token, secretKey)
        req.user = payload
        
        next();
    } catch (error) {
        return res.status(401).json({ 
            message: "El token de autenticación proporcionado es inválido, ha sido adulterado o ya expiró." 
        })
    }
}

const esAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ 
            message: "Acceso denegado. Esta operación es exclusiva para usuarios con rol de administrador." 
        })
    }
    next()
};

module.exports = {
    reportarConsulta,
    verificarToken,
    esAdmin
};