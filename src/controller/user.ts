import { Request, Response } from "express";
import EmailService from "../services/EmailServices";

const users = [
  {
    name: "Wellington",
    email: "wellington.santana@ezdevs.com.br",
  },
];

const index = async (req: Request, resp: Response) => {
  return resp.json(users);
};

const create = async (req: Request, resp: Response) => {
  const emailService = new EmailService();

  emailService.sendMail({
    name: "Wellington",
    email: "wellington.santana@gmail.com",
  }, {
    subject: "Olá seja bem vindo",
    body: "Seja bem-vindo",
  });

  return resp.send();
};

export { index, create };
