import * as Hapi from "@hapi/hapi";
import { IServerSettings } from "../../../setting/index";
import { Sequelize } from "sequelize";
import {TabulacaoController} from "../controller/tabulacaoController";
import {TabulacaoFacade} from "../facade/TabulacaoFacade";
import {TabulacaoValidator} from "../../tabulacao/validator/TabulacaoValidator";

export default function (server: Hapi.server, settings: IServerSettings, sequelize: Sequelize) {

    const facade = new TabulacaoFacade(settings, sequelize, TabulacaoController.getInstance(settings, sequelize));
    server.bind(facade);

    server.route({
        method: 'POST',
        path: '/tabulacao/create',
        config: {
            handler: facade.create,
            auth: 'simple',
            tags: ['api', "tabulacao"], // ADD THIS TAG
            description: 'Criar tabulacao',
            validate: {
                headers: TabulacaoValidator.autorization,
                payload: TabulacaoValidator.tabulacao
            },
            plugins: {
                'hapiAuthorization': {
                    roles: ['CREATE_TABULACOES']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            description: 'BadRequest'
                        }
                    }
                }
            },
            response: {
                schema: TabulacaoValidator.tabulacao
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/tabulacao/update/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['UPDATE_TABULACOES']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Atualizar tabulacao',
            notes: 'Serviço para atualizar de tabulacao',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: TabulacaoValidator.autorization,
                params:  TabulacaoValidator.byId,
                payload: TabulacaoValidator.tabulacao
            },
            handler: facade.update
        }
    });



    server.route({
        method: 'GET',
        path: '/tabulacao/list',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['VIEW_TABULACOES']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            response: {
                schema: TabulacaoValidator.tabulacoes
            },
            description: 'Listar todos as tabulacao',
            notes: 'Serviço para listar todos as tabulacao',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: TabulacaoValidator.autorization,
                query: TabulacaoValidator.paginationInput
            },
            handler: facade.list
        }
    });

    server.route({
        method: 'DELETE',
        path: '/tabulacao/delete/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['DELETE_TABULACOES']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Apagar tabulacao por id',
            notes: 'Serviço para apagar tabulacao por id',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: TabulacaoValidator.autorization,
                params: TabulacaoValidator.byId
            },
            handler: facade.delete
        }
    });

}
