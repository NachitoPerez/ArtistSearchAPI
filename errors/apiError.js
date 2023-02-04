class ApiError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    static resourceNotFound(msg) {
        return new ApiError(404, msg);
    }

    static internalError(msg) {
        return new ApiError(500, msg);
    }
}