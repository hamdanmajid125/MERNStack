const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send('Hello Hamdean')
    } catch (error) {
        res.status(404).send({
            msg: "Page Not Found"
        })

    }
}
const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({
            email: email
        });
        if (!user) {
            return res.status(400).json({
                message: "Invalid Credientials"
            })
        }
        const passwordCompared = await user.comparePassword(password)
        if (passwordCompared) {
            return res.status(200).json({
                msg: "Logged in Successfully",
                token: await user.generateToken(),
                userId: await user._id
            })
        } else {
            return res.status(400).json({
                message: "Invalid Email or Password"
            })
        }

    } catch (error) {
        console.log(error);
        // return res.status(500).send("Internal Server Error")
        next(error)

    }
}
const register = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            password
        } = req.body;
        const user = await User.findOne({
            email: email
        });
        if (user) {
            return res.status(400).json({
                msg: "This email is already exists"
            })
        }

        let data = await User.create({
            email,
            phone,
            password,
            name
        });

        return res.status(201).send({
            msg: 'Registered Successfully',
            data,
            token: await data.generateToken(),
            userId: data._id.toString()
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {
    home,
    register, 
    login
}