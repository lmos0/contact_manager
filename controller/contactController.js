const Contact = require('../models/contactModel')

const getContacts =  async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)}

const createContact = async (req, res) => {
    try{
    console.log(req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        return
    }
    res.status(201).json({
        mensagem: `Contato criado com sucesso`,
        name,
        email,
        phone
    })}

    catch(error){
        console.error(error)
        res.status(500).json({error: "Erro ao executar requisição"})
    }
    
}

const getContact = async (req,res) => {
    res.status(200).json({
        mensagem: `Contato encontrado: ${req.params.id}`
    })

}

const updateContact = async (req, res) => {
    res.status(200).json({
        mensagem: `Você atualizou o contato para ${req.params.id}`
    })
}

const deleteContact = async (req,res) => {
    res.status(200).json({
        mensagem: `Você deletou o contato ${req.params.id}`
    })

}
module.exports = {getContacts, createContact, getContact, deleteContact, updateContact}