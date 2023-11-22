import express from 'express';
import token from './token.routes';
import employee from './employee.routes';
import company from './company.routes';

const router = express.Router();

export default () => {
    token(router);
    employee(router);
    company(router);
    return router;
};