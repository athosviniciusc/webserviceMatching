import {IBaseError} from "./BaseError";

export class DeleteTransactionError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, DeleteTransactionError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 501,
            description: 'Erro interno no servidor'
        };
    }
}
