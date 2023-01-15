import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
    if (!req.headers.authorization || req.headers.authorization === '') {
        res.status(500)
        throw new Error('No token provided')
    }

    const token = req.headers.authorization.split(" ")[1]
    const isAuthTokenCustom = token.length < 500

    let decodedData

    if (token && isAuthTokenCustom) {
        decodedData = jwt.verify(token, process.env.SECRET)
        req.userType = decodedData.type
        req.userId = decodedData.id
    } else {
        decodedData = jwt.decode(token)
        req.userId = decodedData.sub
    }

    next()
})

export default protect