import * as Koa from "koa";
const app = new Koa();
require('module-alias/register')
require('dotenv').config()
const cors = require('@koa/cors');
const URL = require('url')
var bodyParser = require("koa-bodyparser");

const Router = require("koa-router");

const router =  new Router()

import home from "./src/routers";

app.use(bodyParser());
app.use(cors({
    credentials: true,
    origin: (ctx: Koa.Context) => {
        // 动态 origin
        const origin = URL.parse(ctx.get('origin') || ctx.get('referer') || '');
        return `${origin.protocol}//${origin.host}`
    }
}))

router.use("/", home.routes(), home.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT);