import express from 'express';

export const verifyToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401).json({ message: 'No token provided' });
        
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

