const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { user, pass } = req.body

    if (!user || !pass) {
        res.status(400).json({ msg: "Bad Request" });
    }

    const token = jwt.sign({ user, pass }, process.env.JWT_SECRET);

    res.status(200).json({ msg: "Created", user, pass, token });
}

const data = async (req, res) => {
    console.log(req.user);
    res.status(200).json({msg: `Your user name : ${req.user.user}`, username: `${req.user.user}`, password: `${req.user.pass}`});
}

module.exports = { login, data };