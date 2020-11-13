/**
 *  * Created by Wilton O. Ferreira on 22/05/2020
 */

import {IBaseError} from "./BaseError";

export class ExistError extends Error implements IBaseError {
    constructor (public message: string, public item?: string) {
        super(message);
        Object.setPrototypeOf(this, ExistError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 422,
            description: `Erro ao persistir no banco. ${this.item || 'Item'} já existe`
        };
    }
}
