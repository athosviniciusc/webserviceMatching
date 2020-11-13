import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../setting/index";
import {Sequelize} from "sequelize";
import MatchingRoutes from "./routes/MatchingRoutes";

export function init(server: Hapi.Server, settings: IServerSettings, database: Sequelize) {
    MatchingRoutes(server, settings, database);
}
