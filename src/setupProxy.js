const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports=function(app){
    app.use(
        createProxyMiddleware(
            ['/auth','/home'],    
            {
            target: "http://localhost:8080",
            changeOrigin : true,
            onProxyRes: function(proxyRes, req, res) {
                proxyRes.headers['Access-Control-Allow-Private-Network'] = 'true';
             }
         }
        )
    );
};