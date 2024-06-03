const UserModel = require("../models/userModel")
const bcryptjs = require('bcryptjs')

const  registerUser= async(req,res)=>{
    try {
        const {name,email,password,profile_pic} = req.body
        console.log(name,email,"name and email");
        const checkEmail = await UserModel.findOne({email})
        if(checkEmail){
            return res.status(400).json({
                message: 'Already user exits', 
                error:true
            })
        }
        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password,salt)
        const payload ={
            name,
            email,
            profile_pic,
            password:hashpassword
        }

        const user = new UserModel(payload)
        const userSave = await user.save()
        return res.status(201).json({
            message:'user created successfully',
            data:userSave,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message|| error,
            error:true
        })
    }
}

const userLogin =async(req,res)=>{
    
}

module.exports={
    registerUser
}
