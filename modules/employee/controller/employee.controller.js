import mongoose from 'mongoose';
import Employe from '../model/employee.model.js'

export const createEmploye = async (req, res) => {
    try {
        let { employeEmail } = req.body;
        let employeExist = await Employe.findOne({ employeEmail })
        if (employeExist) {
            return res.status(400).json({ message: 'Employee already exist' })
        }

        let employeData = new Employe(req.body)
        let savedEmploye = await employeData.save();
        res.status(201).json({ result: savedEmploye, message: 'Employee data save successfully' })

    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}
export const getEmployes = async (req, res) => {
    try {
        let employes = await Employe.find().lean();
        if (employes.length === 0) {
            return res.status(404).json({ message: "Employe not found" })
        }
        res.status(200).json({ result: employes, message: "Employe found" })
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}
export const updateEmploye = async (req, res) => {
    try {
        const id = req.params.id
        let employeExist = await Employe.findOne({ _id: id }).lean()
        if (!employeExist) {
            return res.status(400).json({ message: 'Employee not exist' })
        }

        let updateEmp = await Employe.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({ result: updateEmp, message: 'Employee data updated successfully' })

    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}
export const deleteEmploye = async (req, res) => {
    try {
        const id = req.params.id
        let employeExist = await Employe.findOne({ _id: id }).lean()
        if (!employeExist) {
            return res.status(400).json({ message: 'Employee not exist' })
        }

        let deleteEmp = await Employe.findByIdAndDelete(id)
        res.status(201).json({ result: deleteEmp, message: 'Employee deleted successfully' })

    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' })
    }
}
