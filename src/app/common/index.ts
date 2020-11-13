/**
 * Created by Wilto Oliveira Ferreira on 23/02/2020.
 */
import * as Hapi from "@hapi/hapi";
import { IServerSettings} from '../../setting/index';
import {Sequelize} from 'sequelize';
import SettingRoutes from "./routes/SettingRoutes";

export function init(server: Hapi.Server, settings: IServerSettings, database: Sequelize) {
    SettingRoutes(server, settings, database);
}
