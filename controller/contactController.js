const Contact = require('../models/contactModel')

const getContacts =  async (req, res) => {
    const contacts = await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)}

const createContact = async (req, res) => {
    try{
    console.log(req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        return
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(
    contact)}

    catch(error){
        console.error(error)
        res.status(500).json({error: "Erro ao executar requisição"})
    }
    
}

const getContact = async (req,res) => {
    try{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contato não encontrado")
    }
    res.status(200).json(contact)
}
catch(error){
    res.status(500).json({error:error.message})
}

}

const updateContact = async (req, res) => {
    try{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contato não econtrado")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.status(200).json(updateContact)

    }

    catch(error){
        res.status(500).json({error:error.message})
    }

}

const deleteContact = async (req,res) => {
    try{
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if(!contact) {
        res.status(404)
            throw new Error("Contato não econtrado")
        

    }
    res.status(200).json({
        mensagem: `Você deletou o contato ${contact}`
    })

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
module.exports = {getContacts, createContact, getContact, deleteContact, updateContact}