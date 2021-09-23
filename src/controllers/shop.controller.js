import shop from '../models/shop'

export const createShop = async(req, res) => {
    var { name, address, products } = req.body;
    var shopadd = new shop({
        name,
        address,
        products
    });
    var shopsave = await shopadd.save();
    res.status(200).json(shopsave);
}
export const getShop = async(req, res) => {
    console.log(req.params)
    var shoplist = await shop.find();
    res.status(200).json(shoplist);
}
export const getShopById = async(req, res) => {
    var shopproduct = await shop.findById(req.params.shopById);
    res.status(200).json(shopproduct);
}
export const updateShopById = async(req, res) => {
    var updateshop = await shop.findByIdAndUpdate(req.params.shopById, req.body, {
        new: true // para que devuelva los datos recien actualizados
    });
    res.status(200).json(updateshop); // 204 
}
export const deleteShopById = async(req, res) => {
    var shopdelete = await shop.findByIdAndDelete(req.params.shopById);
    res.status(200).json(shopdelete);
}