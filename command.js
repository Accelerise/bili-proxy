import Koa from 'koa';
import Router from 'koa-router';
import compose from 'koa-compose';

const router = new Router();

router
    .get('/test', async function test(ctx) {
        ctx.body = {
          url: ctx.url,
          params: ctx.params
        };
    });

const port = process.env.PORT || 8091;
const server = new Koa();

server.use(async (ctx, next) => {
  const body = {
    url: ctx.url,
      params: ctx.params || {},
      query: ctx.query
  }
  console.log(body)
   ctx.body = body;
})
// server.use(compose([router.routes(), router.allowedMethods()]));

server.listen(port);

/* eslint-disable-next-line */
console.log(`Server is listening on port ${port} 👏`)
