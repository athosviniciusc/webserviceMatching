import * as Hapi from '@hapi/hapi';
import {Tabulacao} from "../model/Tabulacao";
import {Sequelize} from "sequelize";
import {IServerSettings} from "../../../setting";
import {GenericData} from "../../common/data/GenericData";

export class TabulacaoData extends GenericData<Tabulacao> {
    private static tabulacaoData: TabulacaoData = null;

    private constructor( protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, 'Tabulacao');
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.tabulacaoData == null) {
            this.tabulacaoData = new TabulacaoData(configs, database);
        }
        return this.tabulacaoData;
    }
}
