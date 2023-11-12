const express = require('express')
const router = express.Router()
const {getContacts, getContact, updateContact, deleteContact, createContact} = require('../controller/contactController')

const {validateToken} = require('../middleware/validationHandler')

router.use(validateToken)

router.get('/', getContacts)

router.get('/:id', getContact)

router.post('/', createContact)
    
router.put('/:id', updateContact)


router.delete('/:id', deleteContact)

module.exports = router

// Controller contém a lógica das funções de Callback a serem executadas no código