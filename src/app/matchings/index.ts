import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../setting/index";
import {Sequelize} from "sequelize";
import MatchingRoutes from "./routes/MatchingRoutes";
import {MatchingService} from "./service/MatchingService";

export function init(server: Hapi.Server, settings: IServerSettings, database: Sequelize) {
    MatchingRoutes(server, settings, database);
    new MatchingService(server, settings, database);
}
