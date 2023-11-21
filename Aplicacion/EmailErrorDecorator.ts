import { ILogger } from "./ILogger";
import { IService } from "./IService";
import { ServiceDecorator } from "./ServiceDecorator";

export class EmailErrorDecorator<TService> extends ServiceDecorator<TService>{
    sender: ILogger;
    
    constructor(sender: ILogger, decorador: IService<TService>){
        super(decorador);
        this.sender = sender;
    }

    execute<T>(s: TService): void {
        this.servicioDecorado.execute(s);
        console.log('EmailError, decorado')
    }

}