const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const userSchema = moongose.Schema({
    username:{
        type:String,
        required:[true, "Adicione o nome de usuário"]
    },
    email:{
        type:String,
        required:[true, "Adicione o endereço de e-mail"],
        unique:[true, "E-mail já cadastrado"]
    },
    password:{
        type:String,
        required:[true, 'Digite sua senha'],

    }
},
    {
        timestamps: true, // precisa ser o segundo argumento da função Schema
    }
)

module.exports = mongoose.model("User", userSchema)