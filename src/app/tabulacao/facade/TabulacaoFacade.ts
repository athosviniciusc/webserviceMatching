
import {IServerSettings} from "../../../setting/index";
import {Sequelize} from "sequelize";
import {Tabulacao} from "../model/Tabulacao";
import {ITabulacaoController} from "../controller/tabulacaoController";
import {GenericFacade} from "../../common/facade/GenericFacade";



export class TabulacaoFacade extends GenericFacade<Tabulacao> {
    constructor(protected configs: IServerSettings, protected database: Sequelize, protected controller: ITabulacaoController) {
        super(configs, database, controller);
    }
}
