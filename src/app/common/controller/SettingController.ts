
import {GenericController, IGenericController} from './GenericController';
import * as path from 'path';
import {IServerSettings} from '../../../setting';
import {Sequelize} from 'sequelize';
import {Setting} from "../model/Setting";
import {ISettingData, SettingData} from "../data/SettingData";


export class SettingController extends GenericController<Setting> implements ISettingController {
    private static settingController: SettingController = null;
    private settingData: SettingData;
    private appDir: string = path.dirname(require.main.filename);

    private constructor(protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, SettingData.getInstance(configs, database));
        this.settingData = SettingData.getInstance(configs, database);
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.settingController == null) {
            this.settingController = new SettingController(configs, database);
        }
        return this.settingController;
    }

    public async list(attributes: string[] = null) {
        let settings = await this.settingData.list(['id', 'value', 'key']);
        return settings;
    }


}

export interface ISettingController extends IGenericController<Setting> {
}
