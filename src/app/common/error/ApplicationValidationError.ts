/**
 *  * Created by Lucas H. M. Meira on 19/05/2020
 */
import {IBaseError} from "./BaseError";

export class ApplicationValidationError extends Error implements IBaseError {
    constructor (public message: string, public description?: string) {
        super(message);
        Object.setPrototypeOf(this, ApplicationValidationError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 406,
            description: this.description || 'Dados requeridos não informados.'
        };
    }
}
