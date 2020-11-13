import {IBaseError} from "./BaseError";

export class CreateTransactionError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, CreateTransactionError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 422,
            description: 'Erro ao persistir transação no banco.'
        };
    }
}
