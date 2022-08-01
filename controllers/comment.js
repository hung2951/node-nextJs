import Comment from "../models/comment";
import Product from "../models/product";
export const list = async(req, res) => {
    try {
        const ListComment = await Comment.find();
        res.json(ListComment);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const post = async(req, res) => {
    try {
        const post = await new Comment(req.body).save();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }

}
export const remove = async(req, res) => {
    try {
        const removeComment = await Comment.findByIdAndDelete(req.params.id)
        res.json(removeComment);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const readID = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const products = await Product.findOne(condition).exec();
        const comment = await Comment.find({ IdProduct: products }).exec();
        res.json({
            products,
            comment
        })
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }
}