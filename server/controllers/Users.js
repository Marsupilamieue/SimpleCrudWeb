import User from '../models/User.js';

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }catch(e) {
        res.status(500).json(e);
    }
};
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(e) {
        res.status(500).json(e);
    }
};
export const createUser = async (req,res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            status: req.body.status,
        });
    
        await newUser.save();
        res.status(200).json(newUser);
    }catch(err) {
        res.status(500).json(err);
    }
}
export const deleteUser = async (req, res) =>  {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("account has been deleted");
    }catch(err) {
        res.status(500).json(err);
    }
}
export const updateUser = async (req, res) =>  {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set : req.body});
        res.status(200).json("account has been updated");
    }catch(err) {
        res.status(500).json(err);
    }
}