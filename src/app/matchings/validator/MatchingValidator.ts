import * as Joi from "joi";
import {GenericValidator} from "../../common/validator/GenericValidator";
import {GravacaoValidator} from "../../gravacao/validator/GravacaoValidator";
import {TabulacaoValidator} from "../../tabulacao/validator/TabulacaoValidator";


export class MatchingValidator extends GenericValidator {

    static matchings = Joi.array().items(Joi.object({
        matchingId:  Joi.number().max(999999).allow(null).allow('').optional(),
        gravacao: GravacaoValidator.gravacao.allow('').allow(null).optional(),
        gravacaoId: Joi.string().allow('').allow(null).optional(),
        tabulacao: TabulacaoValidator.tabulacao.allow('').allow(null).optional(),
        tabulacaoId: Joi.string().allow('').allow(null).optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),

    }));

    static matching = Joi.object({
        matchingId:  Joi.number().max(999999).allow(null).allow('').optional(),
        gravacao: GravacaoValidator.gravacao.allow('').allow(null).optional(),
        gravacaoId: Joi.string().allow('').allow(null).optional(),
        tabulacao: TabulacaoValidator.tabulacao.allow('').allow(null).optional(),
        tabulacaoId: Joi.string().allow('').allow(null).optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),
    });

}
