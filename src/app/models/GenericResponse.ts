export class GenericResponse {
    constructor(public code: number, public message: string) {}

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }
}
