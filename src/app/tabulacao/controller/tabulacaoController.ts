
import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../../setting";
import {Sequelize} from "sequelize";
import {Tabulacao} from "../model/Tabulacao";
import {GenericController, IGenericController} from "../../../common/controller/GenericController";
import {TabulacaoData} from "../data/TabulacaoData";
import {CreateUniqueConstraintError} from "../../../common/error/CreateUniqueConstraintError";

export class TabulacaoController extends GenericController<Tabulacao> implements ITabulacaoController {
    private static tabulacaoController: TabulacaoController = null;
    private tabulacaoData: TabulacaoData;


    private constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        super(server, configs, database, TabulacaoData.getInstance(server, configs, database));
        this.tabulacaoData = TabulacaoData.getInstance(server, configs, database);
    }

    public static getInstance(server: Hapi.server, configs: IServerSettings, database: Sequelize) {
        if (this.tabulacaoController == null) {
            this.tabulacaoController = new TabulacaoController(server, configs, database);
        }
        return this.tabulacaoController;
    }

}
export interface ITabulacaoController extends IGenericController<Tabulacao> {}
