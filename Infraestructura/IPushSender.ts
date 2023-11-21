import { IPushSender } from "../Aplicacion/IPushSender";


export class PushSenderImpl implements IPushSender{
    enviarPush<T>(usuario: number, mensaje: string): void {
        console.log('mandado por push' + mensaje);
    }

}