import Category from "../models/category";
import product from "../models/product";
export const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        // Nếu mảng không có sản phẩm nào thì trả về 404
        if (categories.length === 0) {
            res.status(404).json({
                message: "Không có danh mục nào",
            });
        }
        // Nếu có sản phẩm thì trả về 200 và mảng sản phẩm
        return res.status(200).json(categories);
    } catch (error) {
        // Nếu có lỗi thì trả về 500 và lỗi
        return res.status(500).json({
            message: error,
        });
    }
};
export const get = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products")
        if (!category) {
            return res.status(404).json({
                message: "Không có danh mục nào",
            });
        }
        const products = await product.find({ categoryId: category._id });

        if (category) {
            category.products = products
        }

        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server",
        });
    }
};
export const create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        if (!category) {
            return res.status(400).json({
                message: "Không thể tạo danh mục",
            });
        }
        return res.status(201).json({
            message: "category created",
            data: category,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "  dANH MỤC đã được xóa thành công",
            category,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.status(200).json({
            message: "Sản phẩm đã được cập nhật thành công",
            data: category,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
