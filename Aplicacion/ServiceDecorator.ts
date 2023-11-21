import { IService } from "./IService";
import { TService } from "./TService";

export abstract class ServiceDecorator<TService> implements IService<TService>{
    servicioDecorado: IService<TService>;
    constructor(servicioDecorado: IService<TService>){
        this.servicioDecorado = servicioDecorado;
    }


    abstract execute<T>(s: TService): void 

}