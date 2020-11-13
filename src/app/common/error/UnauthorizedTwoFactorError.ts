import {IBaseError} from "./BaseError";

export class UnauthorizedTwoFactorError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, UnauthorizedTwoFactorError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 401,
            description: 'Erro na validação do segundo fator'
        };
    }
}
