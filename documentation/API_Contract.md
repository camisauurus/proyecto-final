# USERS
GET /users
    USER: ADMIN
        response:
            [
                {
                    id: Number,
                    name: String,
                    email: String,
                    role: String,
                    location: String,
                    avatar_url: String
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
                location: String,
                avatar_url: String
            } 

POST /users
    request:
        payload:
            {
                name: String,
                email: String,
                role: String
                location: String,
                avatar_url: String
            }
    response:
        {
            message: String
            id: Number
        }
    
PUT /users/:id
    request:
        payload:
            {
                name: String,
                email: String,
                role: String,
                location: String,
                avatar_url: String
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
                    location: String,
                    avatar_url: String
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
                category_id: Number,
                seller_id: Number,
                location: String,
                created_at: String,
                images:
                    [
                        {
                            url: String,
                            position: Number
                        },
                        {
                            ...
                        }
                    ]
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
            category_id: Number,
            seller_id: Number,
            location: String,
            created_at: String,
            images:
                [
                    {
                        url: String,
                        position: Number
                    },
                    {
                        ...
                    }
                ]
        }


POST /products
    request:
        payload: {
            name: String,
            price: Number
            description: String,
            stock: Number,
            category_id: Number,
            seller_id: Number,
            location: String,
            images:
                [
                    {
                        url: String,
                        position: Number
                    },
                    {
                        ...
                    }
                ]
        }
    response:
        {
            id: Number
            name: String,
            price: Number
            description: String,
            stock: Number,
            category_id: Number
            seller_id: Number,
            location: String,
            images:
                [
                    {
                        url: String,
                        position: Number
                    },
                    {
                        ...
                    }
                ]
        }


PUT /products/:id
        payload: {
            name: String,
            price: Number
            description: String,
            stock: Number,
            category_id: Number,
            seller_id: Number,
            location: String,
            images:
                [
                    {
                        url: String,
                        position: Number
                    },
                    {
                        ...
                    }
                ]
        }

DELETE /products/:id
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
                buyer_id: Number,
                status: String,
                created_at: String,
                total_price: Number
                items: [
                    {
                        products_id: Number,
                        quantity: Number,
                        unit_price_at_purchase: Number
                    }
                ]
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
            buyer_id: Number,
            status: String,
            created_at: String,
            total_price: Number,
            items: [
                {
                    id: Number,
                    products_id: Number,
                    quantity: Number,
                    unit_price_at_purchase: Number
                }
            ]
        }

POST /orders
    request:
            payload:
                {
                    buyer_id: Number,
                    total_price: Number,
                    status: String,
                    items:
                    [
                        {
                            products_id: Number,
                            quantity: Number
                            unit_price_at_purchase: Number
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

# USER_FAVORITES
POST /favorites
request:
    payload: {
        user_id: Number,
        product_id: Number
    }
response:
    {
        message: String
    }

GET /users/:id/favorites
response:
    [
        {
            id: Number,
            name: String,
            price: Number,
            description: String,
            stock: Number,
            category_id: Number,
            seller_id: Number,
            location: String,
            created_at: String,
            images:
                [
                    {
                        url: String,
                        position: Number
                    },
                    {
                        ...
                    }
                ]
        },
        {
            ...
        }
        ...
    ]

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
        location: String,
        avatar_url: String
    }
response:
    {
        message: String
    }