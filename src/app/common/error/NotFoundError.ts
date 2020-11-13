/**
 *  * Created by Lucas H. M. Meira on 19/05/2020
 */
import {IBaseError} from "./BaseError";

export class NotFoundError extends Error implements IBaseError {
    constructor (public message: string, public description?: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 404,
            description: this.description || 'Elemento não encontrado.'
        };
    }
}
