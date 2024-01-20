const dateMiddleware = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = ` ${hour}: ${minutes}: ${seconds}`;
    req.dateType = `Son las ${formattedTime}. Solicitud recibida: ${req.method} path:${req.url}`;
    next();
  };
  
  module.exports = dateMiddleware;