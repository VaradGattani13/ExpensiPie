import userModel from "../models/userModel.js"


//Lohgin
export const loginController =async (req,res) => {
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({email,password})
        if(!user){
            return res.status(404).send('No User Found');

        }
        res.status(200).json(user);

    }catch(e){
        res.status(500).json({err:e.message});
    }
  
}

// Register=()=>{}
export const registerController=async(req,res)=>{
    try{
        const newUser=new userModel(req.body);
        await newUser.save();
        res.staus(201).json(newUser);
        

    }catch(e){
        res.status(500).json({err:e.message});
    }

}




