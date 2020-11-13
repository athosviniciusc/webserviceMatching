/**
 *  * Created by Wilton O. Ferreira on 22/05/2020
 */

import {IBaseError} from "./BaseError";

export class InstantTreatmentError extends Error implements IBaseError {
    constructor (public message: string) {
        super(message);
        Object.setPrototypeOf(this, InstantTreatmentError.prototype);
    }

    getError() {
        return {
            message: this.message,
            code: 422,
            description: 'Você não habilitou o atendimento instantâneo!'
        };
    }
}
