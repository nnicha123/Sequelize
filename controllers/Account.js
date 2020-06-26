const db = require('../models')

const getAllAccounts = async (req,res) => {
    const allAccounts = await db.Account.findAll()
    res.status(200).send(allAccounts)
}
module.exports = {
    getAllAccounts
}