import { IMailTo, IMailMessage } from "../model/mail";

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
