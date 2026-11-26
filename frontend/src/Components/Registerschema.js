import z from "zod";
export const Registerschema=z.object({
    name:z.string().min(3,"Name must Contain 3 letter"),
    email:z.string().email("Enetr a valid Email"),
    password: z.string().min(8, "Password must contain 8 characters"),
    age:z.coerce.number().min(18,"Age must be minimum of 18"),
})