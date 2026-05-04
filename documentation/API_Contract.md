# USERS
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id

# PRODUCTS
GET /products
GET /products/:id
POST /products
    USER: ADMIN
    request:
        payload: {
            id: number
            name: String,
            price: Number
            description: String,
            strock: Number,
            image_url: String
            category_id: number
        }
    response:
        {
            id: number
            name: String,
            price: Number
            description: String,
            strock: Number,
            image_url: String
            category_id: number
        }


PUT /products/:id
    USER: ADMIN
        payload: {
            id: number
            name: String,
            price: Number
            description: String,
            strock: Number,
            image_url: String
            category_id: number
        }

DELETE /products/:id
    USER: ADMIN

# CATEGORIES
GET /categories
GET /categories/:id
POST /categories
PUT /categories/:id
DELETE /categories/:id


# ORDERS
GET /orders
GET /orders/:id
POST /orders
PUT /orders/:id
DELETE /orders/:id

# AUTH
POST /login
request:
    payload: {
        email: String,
        password: String
    }
response:
    {
        token: String,
        user: {
            id: Number,
            email: String,
            role: admin/client
        }
    }

POST /register
request:
    payload: {
        email: String,
        name: String,
        password: String,
        role: String
    }
response:
    {
        message: String
    }