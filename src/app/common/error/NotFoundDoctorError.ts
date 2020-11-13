/**
 *  * Created by Lucas H. M. Meira on 19/05/2020
 */
import {IBaseError} from "./BaseError";

export class NotFoundDoctorError extends Error implements IBaseError {
    constructor (public message: string, public description?: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundDoctorError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 404,
            description: this.description || 'Todos os médicos estão em atendimento!'
        };
    }
}
