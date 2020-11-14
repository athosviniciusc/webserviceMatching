import * as Hapi from '@hapi/hapi';
import {Matching} from "../model/Matching";
import {Sequelize} from "sequelize";
import {IServerSettings} from "../../../setting";
import {GenericData} from "../../../common/data/GenericData";
import {Gravacao} from "../../gravacao/model/Gravacao";
import {Tabulacao} from "../../tabulacao/model/Tabulacao";

export class MatchingData extends GenericData<Matching> {
    private static matchingData: MatchingData = null;

    private constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        super(server, configs, database, 'Matching');
    }

    public static getInstance(server: Hapi.server, configs: IServerSettings, database: Sequelize) {
        if (this.matchingData == null) {
            this.matchingData = new MatchingData(server, configs, database);
        }
        return this.matchingData;
    }

    public async findByIdMatchigTabulacao(id: number) {
        try {
            let matching = await Matching.findOne(
                {
                    attributes: ['id', 'tabulacaoId'],
                    include: [
                        {
                            attributes: ['id', 'nomeCliente', 'protocolo', 'dataAtendimento', 'numeroBinado', 'numeroAcesso'],
                            model: Tabulacao,
                            as: 'tabulacao',
                        },
                    ],
                    where: {
                        tabulacaoId: id
                    }
                }
            );
            return matching;
        } catch (e) {
            throw new Error(e);
        }
    }
    public async findByIdMatchigGravacao(id: number) {
        try {
            let matching = await Matching.findOne(
                {
                    attributes: ['id', 'gravacaoId'],
                    include: [
                        {
                            attributes: ['id', 'telefone', 'ramal', 'dataGravacao'],
                            model: Gravacao,
                            as: 'gravacao',
                        },
                    ],
                    where: {
                        gravacaoId: id
                    }
                }
            );
            return matching;
        } catch (e) {
            throw new Error(e);
        }
    }
}
