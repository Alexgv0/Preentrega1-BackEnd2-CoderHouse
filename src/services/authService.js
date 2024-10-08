const authService = {
    // Crear un nuevo usuario
    createUser: async userData => {
        const { username, password } = userData;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            throw new Error("El usuario ya existe");
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        return await newUser.save();
    },

    // Obtener un usuario por su ID
    getUserById: async id => {
        return await User.findById(id);
    },

    // Eliminar un usuario por su ID
    deleteUser: async id => {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error("Usuario no encontrado");
        }
        return deletedUser;
    },
};

export default authService;