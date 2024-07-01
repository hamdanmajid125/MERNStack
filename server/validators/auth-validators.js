const {
    z
} = require('zod')

const signedUpSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).trim().email({
        message: "Invalid email address"
    }).min(3, {
        message: "Email must be 3 characters long"
    }),
    name: z.string({
        required_error: "Name is required"
    }).trim(),
    phone: z.string({
        required_error: "Phone is required"
    }).trim().min(11, {
        message: "Phone must be 11 characters long"
    }),
    password: z.string({
        required_error: "Password is required"
    }).trim().min(7, {
        message: "Password must be at least 11 characters long"
    }),
})

module.exports = signedUpSchema