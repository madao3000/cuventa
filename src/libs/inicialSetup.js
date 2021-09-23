import role from '../models/role'

export const createRoles = async() => {
    const count = await role.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
        new role({ name: 'comprador' }).save(),
        new role({ name: 'vendedor' }).save(),
        new role({ name: 'comerciante' }).save()
    ]);

    console.log('roles creados: ' + values);
}