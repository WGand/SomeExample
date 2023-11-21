import { ILogger } from "../Aplicacion/ILogger";

export class LoggerImpl implements ILogger{
    log<T>(mensaje: string): void {
        console.log('logg' + mensaje);
    }

}