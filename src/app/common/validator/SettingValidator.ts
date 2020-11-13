import * as Joi from "joi";
import {GenericValidator} from "../../common/validator/GenericValidator";

export class SettingValidator extends GenericValidator {

    static setting = Joi.object().keys({
        id: Joi.string().allow(null).allow('').optional(),
        value: Joi.string().required(),
        key: Joi.string().required()
    });

    static settings = Joi.array().items(Joi.object().keys({
        id: Joi.string().required(),
        value: Joi.string().required(),
        key: Joi.string().required()
    })).allow(null);
}
