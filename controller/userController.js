const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const registerUser = async (req,res) => {
    try{
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error('Todos os campos são obrigatórios')
    }
    const userAvailability = await User.findOne({email})
    if(userAvailability){
        res.status(400)
        throw new Error('E-mail já cadastrado')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    res.json({message: "Usuário registrado!"})

    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })
    console.log(`Usuário criado ${user}`)
    if (user){
        res.status(201).json({_id: user.id, email: user.email})
    }
    else{
        res.status(400).json({ error: 'Dados inválidos' })
    }
    }

    catch(error){
        res.status(500).json({error:error.message})
    }
}

const loginUser = async(req,res) => {
    res.json({ message: "Usuário logado"})
}

const sessionUser = async(req,res) =>{
    res.json({message: "Informações do usuário logado"})
}

module.exports = {registerUser, loginUser, sessionUser}