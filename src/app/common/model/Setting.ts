import {Column, Table} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from "../../common/model/AbstractModel";

@Table({tableName:'settings', modelName:'Setting'})
export class Setting extends AbstractModel<Setting> implements ISetting {

    @Column({allowNull: false})
    key: string;

    @Column({allowNull: false})
    value: string;
}
export interface ISetting extends IAbstractModel {
    key: string;
    value: string;
}
