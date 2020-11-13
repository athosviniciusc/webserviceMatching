
import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../../setting";
import {Sequelize} from "sequelize";
import {Tabulacao} from "../model/Tabulacao";
import {GenericController, IGenericController} from "../../common/controller/GenericController";
import {TabulacaoData} from "../data/TabulacaoData";


export class TabulacaoController extends GenericController<Tabulacao> implements ITabulacaoController {
    private static tabulacaoController: TabulacaoController = null;
    private tabulacaoData: TabulacaoData;


    private constructor(protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, TabulacaoData.getInstance(configs, database));
        this.tabulacaoData = TabulacaoData.getInstance(configs, database);
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.tabulacaoController == null) {
            this.tabulacaoController = new TabulacaoController(configs, database);
        }
        return this.tabulacaoController;
    }

/*    public async list(attributes: string[], offset: number, limit: number) {
        return await this.tabulacaoData.list(['tabulacaoId', 'nomeCliente', 'protocolo', 'dataAtendimento', 'numeroBinado', 'numeroAcesso'], offset, limit);
    }


    public async delete(id: number) {
        await this.tabulacaoData.findById(id);
        return await this.tabulacaoData.delete(id);
    }*/

/*    public async create(tabulacao: Tabulacao) {
        let tabulacaoUnic = await this.tabulacaoData.findById(tabulacao.id);
        if (tabulacaoUnic != null) {
            this.server.log(['error'], {error: `[Gravacoes]:create:UniqueConstraintError: ID: ${tabulacao.id} já existe na base de dados!`});
            throw new CreateUniqueConstraintError('UniqueConstraintError');
        } else {
            return await this.tabulacaoData.create(tabulacao);
        }
    }*/
}
export interface ITabulacaoController extends IGenericController<Tabulacao> {}
