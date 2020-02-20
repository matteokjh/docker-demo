import * as Koa from "koa";
import Router = require("koa-router");


const home = new Router()

home.get('/', async (ctx: Koa.Context) => {
    ctx.body = {
        code: 200,
        msg: `Hello Docker!!! now is ${new Date().toLocaleString('zh-CN')}`
    }
})


export default home
