import express from 'express';
import * as companyController from '../controllers/company.controllers';
import { verifyToken } from '../middlewares/verifyToken';

export default (router: express.Router) => {
    router.get('/companies', verifyToken, companyController.getCompanies);
    router.get('/company', verifyToken, companyController.getCompany);
    router.post('/company', verifyToken, companyController.setCompany);
    router.delete('/company', verifyToken, companyController.deleteCompany);
}