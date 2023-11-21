export interface IEmailSender {
    enviarEmail(email: string, mensaje: string): void
}