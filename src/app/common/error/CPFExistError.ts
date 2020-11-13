/**
 *  * Created by Wilton O. Ferreira on 22/05/2020
 */

import {IBaseError} from "./BaseError";

export class CPFExistError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, CPFExistError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 422,
            description: 'Erro ao persistir no banco. CPF já existe'
        };
    }
}
