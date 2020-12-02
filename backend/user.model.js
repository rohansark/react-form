const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        phoneNumber:{
            type:Number
        },
        image:{
            type:String
        }
    }
);
module.exports = mongoose.model('UserSchema', UserSchema)