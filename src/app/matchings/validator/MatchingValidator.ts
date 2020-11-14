import * as Joi from "joi";
import {GenericValidator} from "../../../common/validator/GenericValidator";

export class MatchingValidator extends GenericValidator {

    static matchings = Joi.array().items(Joi.object({
        id:  Joi.number().max(999999).allow(null).allow('').optional(),
        gravacaoId: Joi.number().allow('').allow(null).optional(),
        tabulacaoId: Joi.number().allow('').allow(null).optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createdAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),

    }));

    static matching = Joi.object({
        id:  Joi.number().max(999999).allow(null).allow('').optional(),
        gravacaoId: Joi.number().allow('').allow(null).optional(),
        tabulacaoId: Joi.number().allow('').allow(null).optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createdAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),
    });

}
