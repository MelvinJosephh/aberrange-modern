// pages/api/hire.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { services, industries, hubs, name, email, company, tasks, hours, budget } = req.body;

    // Simulate storing data (replace with your database logic, e.g., Prisma)
    console.log('Hire Submission:', { services, industries, hubs, name, email, company, tasks, hours, budget });

    // Simulate email sending (replace with SendGrid/Nodemailer)
    console.log(`Email sent to ${email} with confirmation`);

    res.status(200).json({ message: 'Submission successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}