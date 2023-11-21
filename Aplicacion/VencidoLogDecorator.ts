import { ILogger } from "./ILogger";
import { ServiceDecorator } from "./ServiceDecorator";

export class VencidoLogDecorator<TService> extends ServiceDecorator<TService> {
    logger: ILogger;

    execute<T>(s: TService): void {
        console.log('esta vencido, decorado')
    }

}