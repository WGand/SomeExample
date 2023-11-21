import { IPushSender } from "./IPushSender";
import { IService } from "./IService";
import { ServiceDecorator } from "./ServiceDecorator";

export class PushDecorator<TService> extends ServiceDecorator<TService> {
    sender: IPushSender;
    
    constructor(sender: IPushSender, decorador: IService<TService>){
        super(decorador);
        this.sender = sender;
    }

    execute<T>(s: TService): void {
        this.servicioDecorado.execute(s);
        console.log('Push, decorado');
    }

}