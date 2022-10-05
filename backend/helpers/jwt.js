const expressJwt = require("express-jwt");

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ["HS256"],
        isRevoked: isRevokedCallback,
    }).unless({
        path: [
              { url: `${api}/farm`, method: ["GET","POST", "OPTIONS"] },
            //   { url: `${api}/category`, method: ["GET","POST", "OPTIONS"] },
            // { url: /\/public\/uploads(.*)/, methods: ["GET", "OPTIONS"] },
            { url: /\/api\/v1\/product(.*)/, methods: ["GET","POST", "OPTIONS"] },
             { url: /\/api\/v1\/category(.*)/, methods: ["GET","POST", "OPTIONS"] },
            //  { url: /\/api\/v1\/user(.*)/, methods: ["GET","POST", "OPTIONS"] },
            // {
            //     url: /\/api\/v1\/orders(.*)/,
            //     methods: ["GET", "OPTIONS", "POST"],
            // },
            `${api}/user/login`,
            `${api}/user/register`,
            // {url:`${api}/users`, method: ["GET","POST", "OPTIONS"]},
        ],
    });
}

async function isRevokedCallback(req, payload, done) {
    if (!payload.isAdmin) {
        //done(null, true);
    }
    done();
}
module.exports = authJwt;
