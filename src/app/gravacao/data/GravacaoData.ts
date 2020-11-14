import * as Hapi from '@hapi/hapi';
import {Gravacao} from "../model/Gravacao";
import {Sequelize} from "sequelize";
import {IServerSettings} from "../../../setting";
import {GenericData} from "../../../common/data/GenericData";

export class GravacaoData extends GenericData<Gravacao> {
    private static gravacoesData: GravacaoData = null;

    private constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        super(server, configs, database, 'Gravacao');
    }

    public static getInstance(server: Hapi.server, configs: IServerSettings, database: Sequelize) {
        if (this.gravacoesData == null) {
            this.gravacoesData = new GravacaoData(server, configs, database);
        }
        return this.gravacoesData;
    }

    public async findAllGravacoes() {
        return await Gravacao.findAll({
            attributes: ['id', 'telefone', 'ramal', 'dataGravacao'],
            where: {}
        });
    }
}
