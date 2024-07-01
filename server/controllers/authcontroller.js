const home = async (req, res) => {
    try {
        res.status(200).send('Hello Hamdean') 
    } catch (error) {
        res.status(404).send({msg:"Page Not Found"}) 
        
    }
}
const register = async (req, res) => {
    try {
        res.status(200).json({message: req.body}) 
        // res.status(200).send('Welcome to register') 
    } catch (error) {
        res.status(404).send({msg:"Page Not Found"}) 
        
    }
}
module.exports = {home ,register}
