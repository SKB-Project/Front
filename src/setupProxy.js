const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports=function(app){
    app.use(
        "/",
        createProxyMiddleware({
            target: "http://23.23.240.178:8080",
            changeOrigin : true,
        })
    );
};