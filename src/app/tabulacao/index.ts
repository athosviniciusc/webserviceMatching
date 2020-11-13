import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../setting/index";
import {Sequelize} from "sequelize";
import  TabulacaoRoutes from "./routes/TabulacaoRoutes";

export function init(server: Hapi.Server, settings: IServerSettings, database: Sequelize) {
    TabulacaoRoutes(server, settings, database);
}
