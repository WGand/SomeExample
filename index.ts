import { EmailErrorDecorator } from "./Aplicacion/EmailErrorDecorator";
import { FelicitarActivosServices } from "./Aplicacion/FelicitarActivosServices";
import { FelicitarCumpleanerosService } from "./Aplicacion/FelicitarCumpleanerosService";
import { FelicitarRecienVecidosServices } from "./Aplicacion/FelicitarRecienVencidosServices";
import { PushDecorator } from "./Aplicacion/PushDecorator";
import { CumpleaneroService } from "./Dominio/CumpleaneroService";
import { EmailSenderImpl } from "./Infraestructura/EmailSenderImpl";
import { PushSenderImpl } from "./Infraestructura/IPushSender";
import { LoggerImpl } from "./Infraestructura/LoggerImpl";
import { SuscripcionRepositoryImpl } from "./Infraestructura/SuscripcionRepositoryImpl";
import { UsuarioRepositoryImpl } from "./Infraestructura/UsuarioRepositoryImpl";



let userRepo = new UsuarioRepositoryImpl();
let susRepo = new SuscripcionRepositoryImpl();
let servicioD = new CumpleaneroService(userRepo, susRepo);
let appServiFelicitar = new FelicitarCumpleanerosService(servicioD);
let appServ = new FelicitarActivosServices(new PushSenderImpl());
// appServiFelicitar.servicios.push(appServ);

let whatever = new PushDecorator(new PushSenderImpl(), new EmailErrorDecorator(
    new LoggerImpl(), new FelicitarRecienVecidosServices( new SuscripcionRepositoryImpl(),
    new EmailSenderImpl())
))

appServiFelicitar.servicios.push(whatever);
appServiFelicitar.felicitarCumpleaneros();