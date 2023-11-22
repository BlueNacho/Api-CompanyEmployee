import express from 'express';
import * as tokenController from '../controllers/token.controllers';

export default (router: express.Router) => {
    router.get('/token', tokenController.getToken);
}