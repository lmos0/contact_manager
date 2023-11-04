const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Por favor adicione um nome para o contato"]
    },

    email:{
        type: String,
        required: [true, "Por favor adicione um e-mail para o contato"]
    },

    phone:{
        type: String,
        required: [true, "Por favor adicione um telefone para o contato"]
    },
},

{
    timestamps:true
} 
    
)

module.exports = mongoose.model("Contact", contactSchema)
