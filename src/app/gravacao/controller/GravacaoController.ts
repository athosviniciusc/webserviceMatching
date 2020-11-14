import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../../setting";
import {Sequelize} from "sequelize";
import {Gravacao} from "../model/Gravacao";
import {GenericController, IGenericController} from "../../../common/controller/GenericController";
import {GravacaoData} from "../data/GravacaoData";

export class GravacaoController extends GenericController<Gravacao> implements IGravacaoController {
    private static gravacaoController: GravacaoController = null;
    private gravacoesData: GravacaoData;

    private constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        super(server, configs, database, GravacaoData.getInstance(server, configs, database));
        this.gravacoesData = GravacaoData.getInstance(server, configs, database);
    }

    public static getInstance(server: Hapi.server, configs: IServerSettings, database: Sequelize) {
        if (this.gravacaoController == null) {
            this.gravacaoController = new GravacaoController(server, configs, database);
        }
        return this.gravacaoController;
    }
}
export interface IGravacaoController extends IGenericController<Gravacao> {}
