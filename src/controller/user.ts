import { Request, Response } from "express";

const users = [
  {
    name: "Wellington",
    email: "wellington.santana@ezdevs.com.br",
  },
];

const index = async (req: Request, resp: Response) => {
  return resp.json(users);
};

export { index };
