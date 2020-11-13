import * as Hapi from "@hapi/hapi";
import {Sequelize} from "sequelize";
import {IGenericController} from "../controller/GenericController";
import {IServerSettings} from "../../../setting";
import {AbstractModel} from "../../common/model/AbstractModel";
import {MessageUtil} from "../util/MessageUtil";
import {ExceptionUtil} from "../error/ExceptionUtil";


export abstract class GenericFacade<T extends AbstractModel<T>> {

    constructor(protected configs: IServerSettings, protected database: Sequelize, protected controller: IGenericController<T>) {}

    public async list(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
        try {
            let list: T[] = await this.controller.list([], request.query.offset, request.query.limit);
            return reply.response(JSON.parse(JSON.stringify(list))).code(201);
        } catch (e) {
            return ExceptionUtil.exception(e, reply);
        }
    }

    public async create(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
        try {
            await this.controller.create(request.payload);
            let msg = {
                message: MessageUtil.REGISTRY_SUCCESS_CREATED,
                description: 'Registro criado com sucesso!',
                code: 201
            };
            return reply.response(JSON.parse(JSON.stringify(msg))).code(201);
        } catch (e) {
            return ExceptionUtil.exception(e, reply);
        }
    }

    public async update(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
        try {
            await this.controller.update(request.payload, request.params.id);
            let msg = {
                message: MessageUtil.REGISTRY_SUCCESS_UPDATED,
                description: 'Registro atualizado com sucesso!',
                code: 201
            };
            return reply.response(JSON.parse(JSON.stringify(msg))).code(201);
        } catch (e) {
            return ExceptionUtil.exception(e, reply);
        }
    }

    public async delete(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
        try {
            await this.controller.delete(request.params.id, false);
            let msg = {
                message: MessageUtil.REGISTRY_SUCCESS_DELETE,
                description: 'Registro apagado com sucesso!',
                code: 201
            };
            return reply.response(JSON.parse(JSON.stringify(msg))).code(201);
        } catch (e) {
            return ExceptionUtil.exception(e, reply);
        }
    }
}
