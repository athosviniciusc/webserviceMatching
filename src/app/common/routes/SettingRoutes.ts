import * as Hapi from "@hapi/hapi";
import { IServerSettings } from "../../../setting/index";
import { Sequelize } from "sequelize";
import {SettingFacade} from "../facade/SettingFacade";
import {SettingController} from "../controller/SettingController";
import {SettingValidator} from "../validator/SettingValidator";



export default function (server: Hapi.server, settings: IServerSettings, sequelize: Sequelize) {

    const settingFacade = new SettingFacade(settings, sequelize, SettingController.getInstance(settings, sequelize));
    server.bind(settingFacade);

    server.route({
        method: 'POST',
        path: '/configuration/create',
        config: {
            auth: 'jwt',
            plugins: {
                'hapiAuthorization': {
                    roles: ['CREATE_SETTING']
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
                schema: SettingValidator.responsePostPutAndDelete
            },
            description: 'Criar configuração',
            notes: 'Serviço para criar configuração',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: SettingValidator.jwtValidator,
                payload: SettingValidator.setting,
            },
            handler: settingFacade.create
        }
    });

    server.route({
        method: 'PUT',
        path: '/configuration/update/{id}',
        config: {
            auth: 'jwt',
            plugins: {
                'hapiAuthorization': {
                    roles: ['UPDATE_SETTING']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Atualizar configuração',
            notes: 'Serviço para atualizar configuração',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: SettingValidator.jwtValidator,
                params:  SettingValidator.byId,
                payload: SettingValidator.setting,
            },
            handler: settingFacade.update
        }
    });


    server.route({
        method: 'GET',
        path: '/configuration/list',
        config: {
            auth: 'jwt',
            plugins: {
                'hapiAuthorization': {
                    roles: ['VIEW_SETTING']
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
                schema: SettingValidator.settings
            },
            description: 'Listar todas as configurações',
            notes: 'Serviço para listar todas as configurações',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: SettingValidator.jwtValidator
            },
            handler: settingFacade.list
        }
    });


    server.route({
        method: 'DELETE',
        path: '/configuration/delete/{id}',
        config: {
            auth: 'jwt',
            plugins: {
                'hapiAuthorization': {
                    roles: ['DELETE_SETTING']
                },
                'hapi-swagger': {
                    responses: {
                        '400': {
                            'description': 'BadRequest'
                        }
                    }
                }
            },
            description: 'Apagar configuração por id',
            notes: 'Serviço para apagar uma configuração por id',
            tags: ['api'], // ADD THIS TAG
            validate: {
                headers: SettingValidator.jwtValidator,
                params: SettingValidator.byId
            },
            handler: settingFacade.delete
        }
    });
}
