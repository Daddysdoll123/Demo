const Joi=require('@hapi/joi')

const authSchema=Joi.object({
    email:Joi.string().email().lowercase().required()
    .min(3)
    .max(30),
    password:Joi.string().min(8).required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

})
module.exports={
    authSchema
}