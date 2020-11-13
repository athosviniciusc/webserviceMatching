import {Sequelize, Transaction} from "sequelize";
import {AbstractModel} from "../../common/model/AbstractModel";
import {IServerSettings} from "../../../setting";
import {IGenericData} from "../data/GenericData";
import {IFilter, IInclude, IOrder} from "../util/QueryUtil";

export abstract class GenericController<T extends AbstractModel<T>> implements IGenericController<T> {

    constructor(
        protected configs: IServerSettings,
        protected database: Sequelize,
        protected data: IGenericData
    ) {

    }


    public async list(attributes: string[] = null, limit: number = null, offset: number = null) {
        return await this.data.list(attributes, limit, offset);
    }


    public async create(obj: T) {
        return await this.data.create(obj);
    }


    public async update(obj: T, id: string) {
        return await this.data.update(obj, id);
    }


    public async delete(id: string, physic: boolean) {
        return await this.data.delete(id, physic);
    }


    public async getAttributs(obj: T) {
        let keys: string[] = [];
        const objectKeys = Object.keys(obj) as Array<keyof T>;
        for (let key of objectKeys) {
            keys.push(String(key));
        }
        return new Promise((resolve, reject) => {
            resolve(keys);
        });
    }
}

export interface IGenericController<T extends AbstractModel<T>> {
    list(attributes: string[], limit: number, offset: number );
    create(ojb: T);
    update(ojb: T, id: string);
    delete(id: string, physic: boolean);
}
