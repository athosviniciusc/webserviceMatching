import {Sequelize, Op, Transaction, ValidationErrorItem} from "sequelize";
import {AbstractModel} from "../../common/model/AbstractModel";
import {IServerSettings} from "../../../setting";
import {CreateError} from "../error/CreateError";
import {DeleteError} from "../error/DeleteError";
import {UpdateError} from "../error/UpdateError";
import {FindError} from "../error/FindError";
import {ListError} from "../error/ListError";
import {MessageUtil} from "../util/MessageUtil";
import {DataType} from "sequelize-typescript";
import {ApplicationValidationError} from "../error/ApplicationValidationError";


export abstract class GenericData<T extends AbstractModel<T>> implements IGenericData {

    constructor(
        protected  configs: IServerSettings,
        protected database: Sequelize,
        protected entity: string
    ) { }

    public async create<T>(obj: any) {
        try {
            obj.id = DataType.UUIDV4;
            return await this.database.models[this.entity].create(JSON.parse(JSON.stringify(obj)));
        } catch (e) {
            console.log(e);
            if (e instanceof ValidationErrorItem) {
                throw new ApplicationValidationError(MessageUtil.APPLICATION_VALIDATION_ERROR_DATA);
            } else {
                throw new CreateError(MessageUtil.CREATE_ERROR_DATA);
            }
        }
    }


    public async delete(id: string, physic: boolean = true) {
        try {
            return await this.database.models[this.entity].destroy({where:{ id: id}, force: physic});
        } catch (e) {
            throw new DeleteError(MessageUtil.DELETE_ERROR_DATA);
        }
    }

    public async update(obj: any, id: string) {
        try {
            return await this.database.models[this.entity].update(JSON.parse(JSON.stringify(obj)), {where:{ id: id}});
        } catch (e) {
            if (e instanceof ValidationErrorItem) {
                throw new ApplicationValidationError(MessageUtil.APPLICATION_VALIDATION_ERROR_DATA);
            } else {
                throw new UpdateError(MessageUtil.UPDATE_ERROR_DATA);
            }
        }
    }


    public async list(attributes: string[] = null, offset: number = null, limit: number = null) {
        let params = {
            attributes: attributes,
            limit: limit || 10000,
            offset: offset || 0
        };

        try {
            if (attributes != null && attributes.length > 0) {
                return await this.database.models[this.entity].findAll({
                    attributes: params.attributes,
                    order: [
                        ['createAt', 'DESC']
                    ],
                    offset: params.offset,
                    limit: params.limit
                });
            } else {
                return await this.database.models[this.entity].findAll(
                    {
                        order: [
                            ['createAt', 'DESC']
                        ],
                        offset: params.offset,
                        limit: params.limit
                    }
                );
            }
        } catch (e) {
            throw new ListError(MessageUtil.LIST_ERROR_DATA);
        }
    }


}

export interface IGenericData {
    list(attributes: string[], offset: number, limit: number);
    create(obj: any);
    update(obj: any, id: string);
    delete(id: string, physic: boolean);
}

