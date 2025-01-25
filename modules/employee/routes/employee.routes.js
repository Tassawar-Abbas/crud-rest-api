import express from 'express'
import {createEmploye, getEmployes,updateEmploye,deleteEmploye } from '../controller/employee.controller.js'

const route = express.Router();

route.post('/createemploye', createEmploye)
route.get('/getallemploye', getEmployes)
route.put('/updateemploye/:id', updateEmploye)
route.delete('/deleteemploye/:id', deleteEmploye)


export default route;