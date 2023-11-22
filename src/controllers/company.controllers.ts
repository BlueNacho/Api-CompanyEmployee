import express from 'express';
import { ICompany } from 'types';
import { employees } from './employee.controllers';

export const companies: ICompany[] = [];

export const getCompanies = (req: express.Request, res: express.Response) => {
    try {
        return res.status(200).json({ companies });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCompany = (req: express.Request, res: express.Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const company = companies.find(company => company.name === name);

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        return res.status(200).json({ company });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const setCompany = (req: express.Request, res: express.Response) => {
    try {
        const { name, website, description } = req.body;

        if (!name || !website || !description) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const company: ICompany = {
            name,
            website,
            description
        };

        companies.push(company);
        return res.status(200).json({ message: 'Company created' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteCompany = (req: express.Request, res: express.Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const companyIndex = companies.findIndex(company => company.name === name);

        if (companyIndex === -1) {
            return res.status(404).json({ message: 'Company not found' });
        }

        if(employees.some(employee => employee.companyName === name)) {
            return res.status(400).json({ message: 'Company has employees' });
        }

        companies.splice(companyIndex, 1);

        return res.status(200).json({ message: 'Company deleted' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}