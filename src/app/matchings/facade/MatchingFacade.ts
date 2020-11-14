import {IServerSettings} from "../../../setting/index";
import {Sequelize} from "sequelize";
import {Matching} from "../model/Matching";
import {IMatchingController} from "../controller/MatchingController";
import {GenericFacade} from "../../../common/facade/GenericFacade";

export class MatchingFacade extends GenericFacade<Matching> {
    constructor(protected configs: IServerSettings, protected database: Sequelize, protected controller: IMatchingController) {
        super(configs, database, controller);
    }
}
