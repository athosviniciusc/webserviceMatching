/**
 * Created by wilton on 18/03/2019.
 */

import * as Joi from "joi";

export abstract class GenericValidator {

    static requestLanguageCode = Joi.object().keys({
        languageCode: Joi.string().required().default('pt')
    });

    static responsePostPutAndDelete = Joi.object().keys({
        message: Joi.string().required(),
        description: Joi.string().required(),
        code: Joi.number().required()
    });

    static byId = Joi.object().keys({
        id: Joi.string().required()
    });

    static byStatus = Joi.object().keys({
        status: Joi.bool().required()
    });

    static jwtValidator = Joi.object({'authorization': Joi.string().required().default(process.env.AUTH_TOKEN)}).unknown();
    static jwtValidatorQuery = Joi.object({'token': Joi.string().required()}).unknown();


    static requestLanguageAndIdCode = Joi.object().keys({
        languageCode: Joi.string().required().default('pt'),
        id: Joi.number().max(9999999).required()
    });

    static postPayload = Joi.object().keys({
    });

    static putPayload = Joi.object().keys({
        id: Joi.number().max(999999).required()
    });

    static paginationInput = Joi.object().keys({
        offset: Joi.number().max(999999).allow(null).optional(),
        limit: Joi.number().max(999999).allow(null).optional(),
        search: Joi.string().allow(null).allow('').optional(),
    });

    static paginationAndRangeDateInput = Joi.object().keys({
        offset: Joi.number().max(999999).allow(null).optional(),
        limit: Joi.number().max(999999).allow(null).optional(),
        search: Joi.string().allow(null).allow('').optional(),
        rangeDateStart: Joi.date().allow(null).allow('').optional(),
        rangeDateEnd: Joi.date().allow(null).allow('').optional(),
    });

    static paginationOffisetAndLimet= Joi.object().keys({
        offset: Joi.number().max(999999).allow(null).optional(),
        limit: Joi.number().max(999999).allow(null).optional()
    });

    static getById = Joi.object().keys({
        id: Joi.number().max(999999).allow(null).allow(''),
        createAt: Joi.date().allow(null).allow(''),
        updateAt: Joi.date().allow(null).allow(''),
        deletedAt: Joi.date().allow(null).allow('')
    }).allow(null);

    static getList = Joi.array().items(Joi.object().keys({
        id: Joi.number().max(999999).allow(null).allow(''),
        createAt: Joi.date().allow(null).allow(''),
        updateAt: Joi.date().allow(null).allow(''),
        deletedAt: Joi.date().allow(null).allow('')
    })).allow(null);

    static filter = Joi.object().keys({
        fieldName: Joi.string().required(),
        fieldValue: Joi.array().items(Joi.string().allow(null).allow('').optional()),
        matchMode: Joi.string().required(),
    }).allow(null);

    static filters = Joi.object().keys({
        fieldName: Joi.string().required(),
        fieldValue: Joi.array().items(Joi.string().allow(null).allow('').optional()),
        matchMode: Joi.string().required(),
    }).allow(null);

    static include = Joi.object().keys({
        attributes: Joi.array().items(Joi.string().required()).allow([]).optional(),
        model: Joi.string().required(),
        as: Joi.string().required(),
        through: Joi.bool().required(),
        throughField: Joi.string().allow(null).allow('').optional(),
        throughRequired:  Joi.bool().optional(),
        include: Joi.array().items(Joi.any()).allow([]).optional(),
        filters: Joi.array().items(GenericValidator.filter.allow(null).allow('').optional()).allow(null).allow('').allow([]).optional()
    });

    static order = Joi.object().keys({
        field: Joi.string().required(),
        value: Joi.string().required(),
    });

    static period = Joi.object().keys({
        period: Joi.string().valid('week', 'month', 'year').required(),
    });

    static filterPayload = Joi.object().keys({
        attributes: Joi.array().items(Joi.string().required()).allow([]).optional(),
        filters: Joi.array().items(GenericValidator.filter.allow(null).allow('').optional()).allow(null).allow('').allow([]).optional(),
        includes: Joi.array().items(GenericValidator.include.optional()).allow([]).optional(),
        orders: Joi.array().items(GenericValidator.order.optional()).allow([]).optional(),
    }).allow(null);

    static autorization = Joi.object({'X-API-KEY': Joi.string().required()}).unknown();
}
