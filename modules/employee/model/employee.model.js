import mongoose from "mongoose";

const employeSchema = new mongoose.Schema(
    {
        employeName: { type: String, required: true },
        employeEmail: { type: String, required: true },
        employeAddress: { type: String, required: true },
        employeDesignation: { type: String, required: true },
        employeSalary: { type: Number, required: true },
    },
    {
        timestamps: true
    }
)

const Employe = mongoose.model('Employe', employeSchema)

export default Employe;