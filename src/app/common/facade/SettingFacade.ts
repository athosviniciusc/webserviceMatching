import {IServerSettings} from '../../../setting/index';
import {Sequelize} from 'sequelize';
import {ISettingController} from "../controller/SettingController";
import {Setting} from "../model/Setting";
import {GenericFacade} from "./GenericFacade";

export class SettingFacade extends GenericFacade<Setting> {
    constructor(protected configs: IServerSettings, protected database: Sequelize, protected controller: ISettingController) {
        super(configs, database, controller);
    }

}
