const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const adminschema = mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,   
    }
})
adminschema.pre('save' ,async function(next){
    if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,12);
    }
    next();
});

const admin = mongoose.model('Admindata', adminschema)

module.exports=admin;