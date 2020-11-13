import * as Hapi from '@hapi/hapi';
import {Gravacao} from "../model/Gravacao";
import {Sequelize} from "sequelize";
import {IServerSettings} from "../../../setting";
import {GenericData, IGenericData} from "../../common/data/GenericData";

export class GravacaoData extends GenericData<Gravacao> implements IGravacaoData {
    private static gravacoesData: GravacaoData = null;

    private constructor(protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, 'Gravacao');
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.gravacoesData == null) {
            this.gravacoesData = new GravacaoData(configs, database);
        }
        return this.gravacoesData;
    }
}

    interface IGravacaoData extends IGenericData {
}
