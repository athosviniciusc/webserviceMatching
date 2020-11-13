import * as Joi from "joi";
import {GenericValidator} from "../../common/validator/GenericValidator";


export class GravacaoValidator extends GenericValidator {

    static gravacoes = Joi.array().items(Joi.object({
        gravacaoId:  Joi.number().max(999999).allow(null).allow('').optional(),
        telefone: Joi.string().allow(null).allow('').optional(),
        ramal: Joi.string().allow(null).allow('').optional(),
        dataGravacao: Joi.date().allow(null).allow('').optional(),
        updateAt: Joi.date().allow(null).allow('').optional(),
        createAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),

    }));

    static gravacao = Joi.object({
        gravacaoId:  Joi.number().max(999999).allow(null).allow('').optional(),
        telefone: Joi.string().allow(null).allow('').optional(),
        ramal: Joi.string().allow(null).allow('').optional(),
        dataGravacao: Joi.date().allow(null).allow('').optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),
    });

}
