import jwt from 'jsonwebtoken'
import config from '../config'
import user from '../models/user'
import role from '../models/role'

export const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(403).json({ message: 'no token provided' });
        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id
        const userfound = await user.findById(req.userId, { password: 0 })
        console.log(userfound);
        if (!userfound) return res.status(404).json({ message: "user not found" });
        next();
    } catch (err) {
        return res.status(401).json({ message: "unauthorized" });
    }
}

export const isShopkeeper = async(req, res, next) => {
    const users = await user.findById(req.userId);
    const roles = await role.find({ _id: { $in: users.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i] === "comerciante") {
            next();
            return;
        }
    }
    return res.status(403).json({ message: "Require Shopkeeper role" })
}

export const isWorker = async(req, res, next) => {
    const users = await user.findById(req.userId);
    const roles = await role.find({ _id: { $in: users.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i] === "trabajador") {
            next();
            return;
        }
    }
    return res.status(403).json({ message: "Require Worker role" })
}