/**
 *  * Created by Wilton O. Ferreira on 22/05/2020
 */

import {IBaseError} from "./BaseError";

export class EmailExistError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, EmailExistError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 409,
            description: 'Erro ao persistir no banco. Email já existe'
        };
    }
}
