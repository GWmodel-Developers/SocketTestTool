function SocketMessage(params) {
    this.title = "";
    this.type = "";
    this.content = "";
    if (params) {
        for (const key in this) {
            if (this.hasOwnProperty(key) && params.hasOwnProperty(key)) {
                this[key] = params[key];
            }
        }
    }
}