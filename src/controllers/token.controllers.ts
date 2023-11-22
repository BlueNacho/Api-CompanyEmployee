import express from 'express';
import jwt from 'jsonwebtoken';

export const getToken = (req: express.Request, res: express.Response) => {
    try {
        const token = jwt.sign({ token: "token" }, "secret")
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

