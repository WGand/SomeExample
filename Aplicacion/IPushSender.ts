export interface IPushSender {
    enviarPush<T>(usuario: number, mensaje: string): void
}