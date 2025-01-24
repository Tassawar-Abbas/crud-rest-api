import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        employeeName: { type: String, required: true },
        employeeEmail: { type: String, required: true },
        employeeAddress: { type: String, required: true },
        employeeDesignation: { type: String, required: true },
        employeeSalary: { type: Number, required: true },
    },
    {
        timestamps: true
    }
)

const EmployeeModel = mongoose.model('employee', employeeSchema)
module.exports ={ EmployeeModel }