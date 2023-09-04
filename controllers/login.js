const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { user, pass } = req.body

    if (!user || !pass) {
        res.status(400).json({ msg: "Bad Request" });
    }

    const token = jwt.sign({ user, pass }, process.env.JWT_SECRET);

    res.status(200).json({ msg: "Created", user, pass, token });
}

module.exports = { login };