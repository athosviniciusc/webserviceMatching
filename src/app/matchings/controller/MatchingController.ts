import * as Hapi from "@hapi/hapi";
import {IServerSettings} from "../../../setting";
import {Sequelize} from "sequelize";
import {Matching} from "../model/Matching";
import {GenericController, IGenericController} from "../../../common/controller/GenericController";
import {MatchingData} from "../data/MatchingData";

export class MatchingController extends GenericController<Matching> implements IMatchingController {
    private static matchingController: MatchingController = null;
    private matchingData: MatchingData;

    private constructor(protected server: Hapi.server, protected  configs: IServerSettings, protected database: Sequelize) {
        super(server, configs, database, MatchingData.getInstance(server, configs, database));
        this.matchingData = MatchingData.getInstance(server, configs, database);
    }

    public static getInstance(server: Hapi.server, configs: IServerSettings, database: Sequelize) {
        if (this.matchingController == null) {
            this.matchingController = new MatchingController(server, configs, database);
        }
        return this.matchingController;
    }
}
export interface IMatchingController extends IGenericController<Matching> {}
