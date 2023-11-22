import express from 'express';
import * as employeeController from '../controllers/employee.controllers';
import { verifyToken } from '../middlewares/verifyToken';

export default (router: express.Router) => {
    router.get('/employees', verifyToken, employeeController.getEmployees);
    router.get('/employee', verifyToken, employeeController.getEmployee);
    router.post('/employee', verifyToken, employeeController.setEmployee);
    router.delete('/employee', verifyToken, employeeController.deleteEmployee);
}