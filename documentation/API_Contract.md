# USERS
GET /users
    USER: ADMIN
        response:
            [
                {
                    id: Number,
                    name: String,
                    email: String,
                    role: String
                },
                {
                    ...
                }
                ...
            ]

GET /users/:id
    USER: ADMIN
        response:
            {
                id: Number
                name: String,
                email: String,
                role: String
            } 

POST /users
    USER: ADMIN
        request:
            payload:
                {
                    id: Number,
                    name: String,
                    email: String,
                    role: String
                }
        response:
            {
                messsage: String
                id: Number
            }
    
PUT /users/:id
    USER: ADMIN
        request:
            payload:
                {
                    name: String,
                    email: String,
                    role: String
                }
        response:
            {
                message: String,
                user:
                    { 
                        id: Number,
                        name: String,
                        email: String,
                        role: String
                    }
            }

DELETE /users/:id
    USER: ADMIN
        response:
            {
                message: String
            }


# PRODUCTS
GET /products
    response:
        [
            {
                id: Number,
                name: String,
                price: Number,
                description: String,
                stock: Number,
                image_url: String,
                category_id: Number
            },
            {
                ...
            }
            ...
        ]

GET /products/:id
    response:
        {
            id: Number,
            name: String,
            price: Number,
            description: String,
            stock: Number,
            image_url: String,
            category_id: Number
        }


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
        response:
            {
                message: String
            }

# CATEGORIES
GET /categories
    response:
        [
            {
                id: Number,
                name: String
            },
            {...
            }...
        ]

GET /categories/:id
    response:
        {
            id: Number,
            name: String
        }

POST /categories
    USER: ADMIN
        request:
            payload:
                {
                    name: String
                }
        response:
            {
                id: Number,
                name: String
            }

PUT /categories/:id
    USER: ADMIN
        request:
            payload:
                {
                    name: String
                }
        response:
            {
                id: Number,
                name: String
            }

DELETE /categories/:id
    USER: ADMIN
        response:
            {
                message: String
            }


# ORDERS
GET /orders
    response:
        [
            {
                id: Number,
                user_id: Number,
                status: String,
                created_at: String,
                total_price: Number
            },
            {
                ...
            }
            ...
        ]

GET /orders/:id
    response:
        {
            id: Number,
            user_id: Number,
            status: String,
            created_at: String,
            total_price: Number,
            items: [
                {
                    id: Number,
                    products_id: Number,
                    quantity: Number
                }
                ]
        }

POST /orders
    request:
            payload:
                {
                    user_id: Number,
                    total_price: Number,
                    status: String,
                    items:
                    [
                        {
                            products_id: Number,
                            quantity: Number
                        }
                    ]
                }
        response:
            {
                message: String,
                order_id: Number
            }

PUT /orders/:id
    USER: ADMIN
        request:
            payload:
                {
                    status: String
                }
        response:
            {
                message: String,
                id: Number
                status: String

            }

DELETE /orders/:id
    response:
        {
            message: String
        }


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