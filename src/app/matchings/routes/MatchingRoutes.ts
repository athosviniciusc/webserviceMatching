import * as Hapi from "@hapi/hapi";
import { IServerSettings } from "../../../setting/index";
import { Sequelize } from "sequelize";
import {MatchingController} from "../controller/MatchingController";
import {MatchingFacade} from "../facade/MatchingFacade";
import {MatchingValidator} from "../validator/MatchingValidator";

export default function (server: Hapi.server, settings: IServerSettings, sequelize: Sequelize) {

    const facade = new MatchingFacade(settings, sequelize, MatchingController.getInstance(server, settings, sequelize));
    server.bind(facade);

    server.route({
        method: 'POST',
        path: '/matching/create',
        config: {
            handler: facade.create,
            auth: 'simple',
            tags: ['api', "matching"], // ADD THIS TAG
            description: 'Criar matchings',
            validate: {
                headers: MatchingValidator.autorization,
                payload: MatchingValidator.matching
            },
            plugins: {
                'hapiAuthorization': {
                    roles: ['CREATE_MATCHINGS']
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
                schema: MatchingValidator.matching
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/matching/update/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['UPDATE_MATCHINGS']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Atualizar matchings',
            notes: 'Serviço para atualizar de matchings',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: MatchingValidator.autorization,
                params:  MatchingValidator.byId,
                payload: MatchingValidator.matching
            },
            handler: facade.update
        }
    });

    server.route({
        method: 'GET',
        path: '/matching/find/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['VIEW_MATCHINGS']
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
                schema: MatchingValidator.matching
            },
            description: 'Localizar matchings por id',
            notes: 'Serviço para localizar matchings por id',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: MatchingValidator.autorization,
                params: MatchingValidator.byId
            },
            handler: facade.findById
        }
    });

    server.route({
        method: 'GET',
        path: '/matching/list',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['VIEW_MATCHINGS']
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
                schema: MatchingValidator.matchings
            },
            description: 'Listar todos as matchings',
            notes: 'Serviço para listar todos as matchings',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: MatchingValidator.autorization,
                query: MatchingValidator.paginationInput
            },
            handler: facade.list
        }
    });

    server.route({
        method: 'DELETE',
        path: '/matching/delete/{id}',
        config: {
            auth: 'simple',
            plugins: {
                'hapiAuthorization': {
                    roles: ['DELETE_MATCHINGS']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Apagar matchings por id',
            notes: 'Serviço para apagar matchings por id',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: MatchingValidator.autorization,
                params: MatchingValidator.byId
            },
            handler: facade.delete
        }
    });
}
