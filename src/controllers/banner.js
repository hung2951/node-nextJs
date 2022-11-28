import Banner from "../models/banner";
export const list = async(req, res) => {
        try {
            const ListBanner = await Banner.find();
            res.json(ListBanner);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    // thêm sản phẩm
export const post = async(req, res) => {
        try {
            const banner = await new Banner(req.body).save();
            res.json(banner);
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm"
            })
        }

    }
    //update 
export const update = async(req, res) => {
        try {
            const UpdateBanner = await Banner.findByIdAndUpdate(req.params.id, req.body)
            res.json(UpdateBanner);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    //

export const remove = async(req, res) => {
        try {
            const removeBanner = await Banner.findByIdAndDelete(req.params.id)
            res.json(removeBanner);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    //
export const read = async(req, res) => {
    try {
        const readBanner = await Banner.findById(req.params.id);
        res.json(readBanner);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }
}