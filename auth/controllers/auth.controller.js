const jwt = require('jsonwebtoken');

const login = async ( req, res ) => {
    try {
        const { username, password } = req.body;
        //provere za usera
        const token = jwt.sign(
            {
              username,
            },
            process.env.SECRET_KEY,
            { expiresIn: '3h' }
          );
        res.status(200).json(`Bearer ${token}`)
    } catch (error) {
        res.status(403).json({ message: error.message});
    }
}


exports.login = login;