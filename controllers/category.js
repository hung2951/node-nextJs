import Category from "../models/category"
export const list = async(req,res)=>{
    try {
        const category = await Category.find().exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const create = async (req,res)=>{
    try {
        const category =  await Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const remove = async (req,res)=>{
    try {
        const category = await Category.findOneAndDelete({_id:req.params.id}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const upload = async (req,res)=>{
    const condition = { _id: req.params.id};
    const document = req.body;
    const options = { new: true}
    try {
        const category = await Category.findOneAndUpdate(condition,document,options).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const read = async (req,res)=>{
    const condition ={_id:req.params.id}
    try {
        const category =await Category.findOne(condition).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
