import {IBaseError} from "./BaseError";

export class UpdateTransactionError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, UpdateTransactionError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 422,
            description: 'Erro ao persistir no banco.'
        };
    }
}
