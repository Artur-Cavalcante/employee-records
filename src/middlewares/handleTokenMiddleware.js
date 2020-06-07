function handleTokenMiddleware(request, response, next) {
    let bearerHeader = request.headers['authorization']
    console.log("Request ->", request.headers['authorization'].split(' '));
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        request.token = bearerToken;
        next();
    } else {
        return response.sendStatus(403);
    };
    
};

module.exports =  handleTokenMiddleware ;