import express from 'express'
import { getEmployee } from '../controller/employee.controller.js'

const route = express.Router();

route.get('/getemployee', getEmployee)


export default route;