import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:4000/', // change to your backend api url
  changeOrigin: true,
});

export default defineEventHandler((event) => {
  return new Promise((resolve) => {
    const options = {};
    
    const origEnd = event.res.end;
    event.res.end = function() {
      resolve(null);
      return origEnd.call(event.res);
    }
    console.log(event.req)
    proxy.web(event.req, event.res, options); // proxy.web() works asynchronously
  });
});