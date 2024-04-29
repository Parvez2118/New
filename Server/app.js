const mongoose=require('mongoose');
const express = require('express') ;
const app=express();
const jwt= require("jsonwebtoken");
const DB='mongodb+srv://redskull:redskull2118@cluster0.ti3awfp.mongodb.net/ProfileLocator?retryWrites=true&w=majority';
 mongoose.connect(DB,{ useNewUrlParser:true }).then(()=>{ console.log(`Connected to DB`); }).
 catch((err)=>{ console.log(err); })
 const bcrypt=require('bcrypt');
 const cookieParser = require('cookie-parser')
 const cors=require('cors');
 const Profile= require('../Server/models/ProfileSchema');
 const admin= require('../Server/models/AdminSchema');
 const multer= require('multer');
 app.use(express.json());
 app.use(cookieParser());
 app.use('/public',express.static('public'));
 const corsOptions = {
    origin: 'http://localhost:3000/', 
    credentials: true, 
  };
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now()+'_'+file.originalname);
    }
  })
  
const upload = multer({ storage: storage })

app.post("/Loginadmin", async (req,res)=>
{
 try{ 
    // let token;
    const {email,password}=req.body; 
    console.log(req.body); 

    if(!email || !password) {
        console.log("Please fill field");
        return res.status(400).json({error:"Please fill field"});
    }
     const userLogin= await admin.findOne({email :email});
     if(userLogin)
     {
        const isMatch= await bcrypt.compare(password ,userLogin.password);
        // token= await userLogin.generateAuthToken();
        // res.cookie("jwttoken" ,token ,{
        //     expires :new Date(Date.now() +25892000000),
        //     httpOnly:true
        // });

        if(!isMatch)
        {
            console.log("Invalid password");
           return res.status(422).json({error:"Invalid password"});
        }
        else
        {
            console.log("Logged in");
          return res.json({message:"Logged in"});
        }
       
     }
     else
     {
        console.log("Invalid email");
        return res.status(422).json({error:"Invalid email"});
     }
   
}
catch(err){
      console.log(err);
}
});

app.post("/register",(req,res)=>{ 
    const {email,password}=req.body; 
    console.log(req.body); 
    if(!email || !password) {
     return res.status(400).json({error:"Please fill field"});
     }
     admin.findOne({email:email}).then((userexists)=>{ 
    if(userexists) { 
    return res.status(404).json({err:"email already exists"}); 
    }
     const user=new admin({email,password});///passing data to the schema and then send to nongodb
     user.save().then(()=>{ 
    return res.status(200).json({Message:req.body});
     }).catch((err)=>{ return res.status(500).json({err:"failed to register"}); });
    }).catch((err)=>{ console.log(err); }) });

app.post("/addprofile",upload.single('myFile'),(req,res)=>{ 
    let profile=(req.file) ?req.file.filename:null;

    const {name,email,MobileNumber,Age,Occupation,Address,description}=req.body; 
    
     console.log(profile);
    if(!name || !email  ||!Age|| !Address) {
        console.log("Please fill field"); 
     return res.status(400).json({error:"Please fill field"});

     }
     const user=new Profile({name,email,MobileNumber,Age,Occupation,Address,description,profile});///passing data to the schema and then send to nongodb
     user.save().then(()=>{ 
        console.log("data added"); 
    return res.status(200).json({Message:req.body});
     }).catch((err)=>{
        console.log(err);
         return res.status(500).json({err:"failed to register"}); });
    // }).catch((err)=>{ console.log(err); })
 });

 app.get('/vals', (req,res)=>{
    Profile.find({}).then((items)=>{
        res.json(items);
    }).catch((err)=>{
        console.log(err);
    })
    
  });

  app.delete('/delete', async (req, res) => {
    try {
      const { userId } = req.body;
 
      // Find the user by their unique ID
      const user = await Profile.deleteOne({ _id: userId });
 
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
 
     
  
 
      return res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
      console.error('Error deleting User:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  });

  app.post('/userr', async (req,res)=>{
    let user2= req.body;
    const updateuser =new Profile(user2);
    try{
     await Profile.updateOne({ _id:user2._id},updateuser);
     res.status(200).json(updateuser);
    }
    catch(err){
        console.log("error occuresd");
    }
    
  });
 
 app.listen(8000);