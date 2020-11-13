import {IServerSettings} from "../../../setting";
import {Sequelize} from "sequelize";
import {Gravacao} from "../model/Gravacao";
import {GenericController, IGenericController} from "../../common/controller/GenericController";
import {GravacaoData} from "../data/GravacaoData";
import * as path from "path";

export class GravacaoController extends GenericController<Gravacao> implements IGravacaoController {
    private static gravacaoController: GravacaoController = null;
    private gravacoesData: GravacaoData;
    private appDir: string = path.dirname(require.main.filename);

    private constructor(protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, GravacaoData.getInstance(configs, database));
        this.gravacoesData = GravacaoData.getInstance(configs, database);
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.gravacaoController == null) {
            this.gravacaoController = new GravacaoController(configs, database);
        }
        return this.gravacaoController;
    }

/*
        public async list(attributes: string[], offset: number, limit: number) {
            return await this.gravacoesData.list(null, offset, limit);
        }

        public async findById(id: number, attributes: string[]) {
            return await this.gravacoesData.findById(id, null);
        }
*/

    /*public async delete(id: number) {
        await this.gravacoesData.findById(id);
        return await this.gravacoesData.delete(id);
    }

    public async create(gravacao: Gravacao) {
        let gravacaoUnic = await this.gravacoesData.findById(gravacao.gravacaoId);
        if (gravacaoUnic != null) {
            this.server.log(['error'], {error: `[Gravacao]:create:UniqueConstraintError: ID: ${gravacao.gravacaoId} já existe na base de dados!`});
            throw new CreateUniqueConstraintError('UniqueConstraintError');
        } else {
            return await this.gravacoesData.create(gravacao);
        }
    }*/
}
export interface IGravacaoController extends IGenericController<Gravacao> {}
