// const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { user, pass } = req.body

    if(!user || !pass) {
        res.status(400).json({msg: "Bad Request"});
    }

    res.status(200).json({msg: "Created", user, pass});
}

module.exports = {login};