import user from '../models/user'
import role from '../models/role'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async(req, res) => {
    const { username, email, password, phone, roles } = req.body;
    const newuser = await new user({
        username,
        email,
        password: await user.encryptPassword(password),
        phone,
        roles
    });
    if (roles) {
        const foundRoles = await role.find({ name: { $in: roles } });
        newuser.roles = foundRoles.map(role => role._id)
    } else {
        const foundRoles = await role.findOne({ name: 'comprador' });
        newuser.roles = [foundRoles._id];
    }
    const saveuser = await newuser.save()
    const token = jwt.sign({ id: saveuser._id }, config.SECRET, {
        expiresIn: 43200 // 12 horas
    })
    res.status(200).json({ token });
}

export const signIn = async(req, res) => {
    const userfound = await user.findOne({ username: req.body.username }).populate('roles');
    if (!userfound) return res.status(400).json({ message: "user not found" });
    if (!await user.comparePassword(req.body.password, userfound.password)) {
        return res.status(401).json({ token: null, message: "password not valid" });
    }
    const token = jwt.sign({ id: userfound._id }, config.SECRET, {
        expiresIn: 43200 // 12 horas
    })
    res.json({ token });
}