
import {IServerSettings} from "../../../setting/index";
import {Sequelize} from "sequelize";
import {Gravacao} from "../model/Gravacao";
import {IGravacaoController} from "../controller/GravacaoController";
import {GenericFacade} from "../../common/facade/GenericFacade";



export class GravacaoFacade extends GenericFacade<Gravacao> {
    constructor(protected configs: IServerSettings, protected database: Sequelize, protected controller: IGravacaoController) {
        super(configs, database, controller);
    }
}
