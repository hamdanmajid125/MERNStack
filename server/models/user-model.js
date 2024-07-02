const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

//secure password with bcrypt
userSchema.pre('save', function () {
    const user = this;
    if (!user.isModified('password')) {
        next()
    }

    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash

    } catch (error) {
        next(error)

    }
})
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY, {
                expiresIn: "30d"
            }

        )
        return token
    } catch (error) {
        console.error(error);
    }
}

// define model or mongoose collection name
const User = new mongoose.model("User", userSchema)

module.exports = User;