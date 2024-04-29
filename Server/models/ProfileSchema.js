const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt= require("jsonwebtoken");
const proflieSchema = mongoose.Schema({
   
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    MobileNumber: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },
    Occupation: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    profile: {
        type: String
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
}, {
    timestamps: true
})

proflieSchema.pre('save' ,async function(next){
    if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,12);
    }
    next();
});

proflieSchema.methods.generateAuthToken= async function(){
    try{
        const token= jwt.sign({_id:this._id},"MYNAMEISLEAVEMANAGEMENTSYSTEMAPPLICATIONAUTHENTICATION");
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        // console.log(token);
        return token;
    }
    catch(err){
        res.send(err);
    }
}

const Profile = mongoose.model('Profile', proflieSchema)

module.exports=Profile;