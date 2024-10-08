import mongoose from "mongoose";

/* 
    Crear un modelo User el cual contará con los campos:
        first_name:String,
        last_name:String,
        email:String (único)
        age:Number,s
        cart:Id con referencia a Carts
        role:String(default:’user’)

    Encriptar la contraseña del usuario mediante el paquete bcrypt (Utilizar el método “hashSync”). 
*/

const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        password: { type: String, required: true },
        cart: { type: mongoose.Schema.Types.ObjectId, ref: "Carts" },
        role: { type: String, default: "user" },
    },
    {
        versionKey: false,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
