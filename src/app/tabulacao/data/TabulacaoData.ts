import * as Hapi from '@hapi/hapi';
import {Tabulacao} from "../model/Tabulacao";
import {Op, Sequelize} from "sequelize";
import {IServerSettings} from "../../../setting";
import {GenericData} from "../../../common/data/GenericData";
import {Matching} from "../../matchings/model/Matching";

export class TabulacaoData extends GenericData<Tabulacao> {
    private static tabulacaoData: TabulacaoData = null;


    private constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        super(server, configs, database, 'Tabulacao');
    }

    public static getInstance(server: Hapi.server, configs: IServerSettings, database: Sequelize) {
        if (this.tabulacaoData == null) {
            this.tabulacaoData = new TabulacaoData(server, configs, database);
        }
        return this.tabulacaoData;
    }

    public async findAllTabulacoes() {
        return await Tabulacao.findAll({
            attributes: ['id', 'nomeCliente', 'protocolo', 'dataAtendimento', 'numeroBinado', 'numeroAcesso'],
            where: {},
        });
    }

    public async findAllByTelefoneGravacao(telefone) {
        try {
            if (telefone === undefined || telefone === null) {
                return [];
            }
            let where = telefone
                ? {
                    [Op.or]: [
                        {numeroBinado: {[Op.like]: telefone}},
                        {numeroAcesso: {[Op.like]: telefone}},
                    ]
                } : {};

            return await Tabulacao.findAll({
                attributes: ['id', 'nomeCliente', 'protocolo', 'dataAtendimento', 'numeroBinado', 'numeroAcesso'],
                where: where
            });
        } catch (e) {

        }
    }
}
