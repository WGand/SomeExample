export interface IService<TService>{
    execute<T>(s: TService): void;
}