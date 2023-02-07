class ApiError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    static internalError(msg) {
        return new ApiError(500, msg);
    }
}