interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>;
}

export {
  IMailTo,
  IMailMessage,
};
