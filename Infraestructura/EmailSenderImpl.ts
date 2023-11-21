import { IEmailSender } from "../Aplicacion/IEmailSender";

export class EmailSenderImpl implements IEmailSender {
    enviarEmail(email: string, mensaje: string): void {
        console.log(mensaje)
    }

}