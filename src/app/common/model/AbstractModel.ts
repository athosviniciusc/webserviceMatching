/**
 * Created by Wilton O. Ferreira on 21/02/2020.
 */

import {Column, CreatedAt, DataType, DeletedAt, Model, UpdatedAt} from "sequelize-typescript";


export class AbstractModel<T> extends Model<T> {

    @CreatedAt
    createAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;

}

export interface IAbstractModel {
    createAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
