import * as Hapi from "@hapi/hapi";
import { IServerSettings } from "../../../setting/index";
import { Sequelize } from "sequelize";
import {GravacaoController} from "../controller/GravacaoController";
import {GravacaoFacade} from "../facade/GravacaoFacade";
import {GravacaoValidator} from "../validator/GravacaoValidator";

export default function (server: Hapi.server, settings: IServerSettings, sequelize: Sequelize) {

    const facade = new GravacaoFacade(settings, sequelize, GravacaoController.getInstance(server, settings, sequelize));
    server.bind(facade);

    server.route({
        method: 'POST',
        path: '/gravacao/create',
        config: {
            handler: facade.create,
            auth: 'simple',
            tags: ['api', "gravacao"], // ADD THIS TAG
            description: 'Criar gravacao',
            validate: {
                headers: GravacaoValidator.autorization,
                payload: GravacaoValidator.gravacao
            },
            plugins: {
                'hapiAuthorization': {
                    roles: ['CREATE_GRAVACAO']
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
                schema: GravacaoValidator.gravacao
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/gravacao/update/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['UPDATE_GRAVACAO']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Atualizar gravacao',
            notes: 'Serviço para atualizar de gravacao',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: GravacaoValidator.autorization,
                params:  GravacaoValidator.byId,
                payload: GravacaoValidator.gravacao
            },
            handler: facade.update
        }
    });

    server.route({
        method: 'GET',
        path: '/gravacao/find/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['VIEW_GRAVACAO']
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
                schema: GravacaoValidator.gravacao
            },
            description: 'Localizar gravacao por id',
            notes: 'Serviço para localizar gravacao por id',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: GravacaoValidator.autorization,
                params: GravacaoValidator.byId
            },
            handler: facade.findById
        }
    });

    server.route({
        method: 'GET',
        path: '/gravacao/list',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['VIEW_GRAVACAO']
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
                schema: GravacaoValidator.gravacoes
            },
            description: 'Listar todos as gravacoes',
            notes: 'Serviço para listar todos as gravacoes',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: GravacaoValidator.autorization,
                query: GravacaoValidator.paginationInput
            },
            handler: facade.list
        }
    });

    server.route({
        method: 'DELETE',
        path: '/gravacao/delete/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['DELETE_GRAVACAO']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Apagar gravacao por id',
            notes: 'Serviço para apagar gravacao por id',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: GravacaoValidator.autorization,
                params: GravacaoValidator.byId
            },
            handler: facade.delete
        }
    });

}
