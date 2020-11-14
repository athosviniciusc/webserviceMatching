import * as Joi from "joi";
import {GenericValidator} from "../../../common/validator/GenericValidator";

export class TabulacaoValidator extends GenericValidator {

    static tabulacoes = Joi.array().items(Joi.object({
        id:  Joi.number().max(999999).allow(null).allow('').optional(),
        nomeCliente: Joi.string().allow(null).allow('').optional(),
        protocolo: Joi.string().allow(null).allow('').optional(),
        dataAtendimento: Joi.date().allow(null).allow('').optional(),
        numeroBinado: Joi.string().allow(null).allow('').optional(),
        numeroAcesso: Joi.string().allow(null).allow('').optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createdAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),
    }));

    static tabulacao = Joi.object({
        id:  Joi.number().max(999999).allow(null).allow('').optional(),
        nomeCliente: Joi.string().allow(null).allow('').optional(),
        protocolo: Joi.string().allow(null).allow('').optional(),
        dataAtendimento: Joi.date().allow(null).allow('').optional(),
        numeroBinado: Joi.string().allow(null).allow('').optional(),
        numeroAcesso: Joi.string().allow(null).allow('').optional(),
        updatedAt: Joi.date().allow(null).allow('').optional(),
        createdAt: Joi.date().allow(null).allow('').optional(),
        deletedAt: Joi.date().allow(null).allow('').optional(),
    });

}
