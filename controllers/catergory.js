import Catergory from "../models/catergory"
export const list = async(req,res)=>{
    try {
        const catergory = await Catergory.find().exec();
        res.json(catergory)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const create = async (req,res)=>{
    try {
        const catergory =  await Catergory(req.body).save()
        res.json(catergory)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const remove = async (req,res)=>{
    try {
        const catergory = await Catergory.findOneAndDelete({_id:req.params.id}).exec()
        res.json(catergory)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const upload = async (req,res)=>{
    const condition = { _id: req.params.id};
    const document = req.body;
    const options = { new: true}
    try {
        const catergory = await Catergory.findByIdAndUpdate(condition,document,options).exec()
        res.json(catergory)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const read = async (req,res)=>{
    const condition ={_id:req.params.id}
    try {
        const catergory =await Catergory.findOne(condition).exec()
        res.json(catergory)
    } catch (error) {
        res.status(400).json({error})
    }
}