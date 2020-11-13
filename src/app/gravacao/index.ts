import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../setting/index";
import {Sequelize} from "sequelize";
import  GravacaoRoutes from "./routes/GravacaoRoutes";

export function init(server: Hapi.Server, settings: IServerSettings, database: Sequelize) {
    GravacaoRoutes(server, settings, database);
}
