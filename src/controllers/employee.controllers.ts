import express from 'express';
import { IEmployee } from 'types';
import { companies } from './company.controllers';

export const employees: IEmployee[] = [];

export const getEmployees = (req: express.Request, res: express.Response) => {
    try {
        return res.status(200).json({ employees });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getEmployee = (req: express.Request, res: express.Response) => {
    try {
        const { name, lastName } = req.body;

        if (!name || !lastName) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const employee = employees.find(employee => employee.name === name && employee.lastName === lastName);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        return res.status(200).json({ employee });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const setEmployee = (req: express.Request, res: express.Response) => {
    try {
        const { name, lastName, email, phoneNumber, companyName } = req.body;

        if (!name || !lastName || !email || !phoneNumber || !companyName) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        if (!companies.find(company => company.name === companyName)) {
            return res.status(404).json({ message: 'Company not found' });
        }

        const employee: IEmployee = {
            name,
            lastName,
            email,
            phoneNumber,
            companyName
        };

        employees.push(employee);
        return res.status(200).json({ message: 'Employee created' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteEmployee = (req: express.Request, res: express.Response) => {
    try {
        const { name, lastName } = req.body;

        if (!name || !lastName) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const employeeIndex = employees.findIndex(employee => employee.name === name && employee.lastName === lastName);

        if (employeeIndex === -1) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        employees.splice(employeeIndex, 1);

        return res.status(200).json({ message: 'Employee deleted' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

