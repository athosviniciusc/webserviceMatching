import * as Hapi from '@hapi/hapi';
import {Matching} from "../model/Matching";
import {Sequelize} from "sequelize";
import {IServerSettings} from "../../../setting";
import {GenericData, IGenericData} from "../../common/data/GenericData";

export class MatchingData extends GenericData<Matching> implements IMatchingData {
    private static matchingData: MatchingData = null;

    private constructor(protected  configs: IServerSettings, protected database: Sequelize) {
        super(configs, database, 'Matching');
    }

    public static getInstance(configs: IServerSettings, database: Sequelize) {
        if (this.matchingData == null) {
            this.matchingData = new MatchingData(configs, database);
        }
        return this.matchingData;
    }
}
interface IMatchingData extends IGenericData {

}
