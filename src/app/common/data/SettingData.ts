import {IServerSettings} from "../../../setting";
import {Op, Sequelize} from "sequelize";
import {GenericData, IGenericData} from "./GenericData";
import {Setting} from "../model/Setting";

export class SettingData extends GenericData<Setting> implements ISettingData {
    private static settingData: SettingData = null;
    constructor(protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, 'Setting');
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.settingData == null) {
            this.settingData = new SettingData(configs, database);
        }
        return this.settingData;
    }

}

export interface ISettingData extends IGenericData {

}
