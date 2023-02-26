const mongoose = require('mongoose')

const defineModel = (modelName, schemaDefinition) => {
     const schema = new mongoose.Schema(schemaDefinition)
    return mongoose.model(modelName,schema)
}

module.exports = { defineModel }