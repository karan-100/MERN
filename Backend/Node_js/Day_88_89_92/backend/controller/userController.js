const { default: mongoose } = require("mongoose");
const User = require("../models/userSchema");

async function  createUser(req, res) {
    
    try {
        const {name,email,password}=req.body;
        if(req.body.length === 0){
            return res.status(400).json({success:false,message: 'Body is required'});   
        }
        if(!name){
            return res.status(400).json({success:false,message: 'Name is required'});
        }
        if(!email){
            return res.status(400).json({success:false,message: 'Email is required'});
        }
        if(!password){
            return res.status(400).json({success:false,message: 'Password is required'});
        }
        const isUserExist =await User.findOne({email: email});

        if(isUserExist){
            return res.status(400).json({
                success:false,
                message: 'User already exist'
            });
        }
        // const newUser = new User(req.body);
        const newUser =await User.create({
            name,
            email,
            password
        })
        return res.status(201).json({
            success:true,
            message: 'User created successfully',
            data: newUser
        });

    } catch (error) {
        return res.status(500).json({success:false,message: error.message});
    }
}

async function allUser(req, res) {
    try {
        const users =await User.find();
        if(users){
            return res.status(200).json({
                success:true,
                message: 'Users fetched successfully',
                data: users
            })
        }
        else{
            return res.status(404).json({
                success:false,
                message: 'No user found'
            })
        }
    } catch (error) {
        return res.status(500).json({success:false,message: error.message});        
    }
}

async function getUser(req, res) {
    try {
        const id = req.params.id;

        // Convert id to ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format"
            });
        }

        const user = await User.findOne({ _id: new mongoose.Types.ObjectId(id) });

        if (user) {
            return res.status(200).json({
                success: true,
                message: "Fetched successfully",
                data: user
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function updateUser(req, res){
    try {
        const id = req.params.id;
        const {name,email,password}=req.body;
        // Convert id to ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format"
            });
        }

        const updateUser=await User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)},{name,email,password},{new:true});
         
        if(!updateUser){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        return res.status(200).json({
            success:true,
            message: 'User updated successfully',
            data:updateUser
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        });
    }
}

async function deleteUser(req, res){
    try { 

        const id = req.params.id;
        const {name,email,password}=req.body;
        // Convert id to ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format"
            });
        }

        const deleteUser=await User.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
         
        if(!deleteUser){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        return res.status(200).json({
            success:true,
            message: 'User deleted successfully',
            data:deleteUser
        });
        // const {id} = req.params;
        // const filteredUsers = users.filter((item) => item.id != id);
        // users = filteredUsers;
        // return res.status(200).json({success:true,message: 'User deleted successfully'});
    } catch (error) {
        return res.status(500).json({success:false,message: error.message});
    }
}
module.exports={createUser,allUser,getUser,updateUser,deleteUser};