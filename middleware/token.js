const jwt = require('jsonwebtoken');

const tokenVarify = async (req, res, next) => {

    const authToken = req.headers.authorization
    console.log(authToken);


    const token = authToken.split(' ')[1]

    console.log("hello");
    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { user, pass } = decoded;
        req.user = { user, pass };
        // res.json({ msg: "your username and pass is safe", user, pass })
        next();

    } catch (error) {

    }
};

module.exports = tokenVarify;