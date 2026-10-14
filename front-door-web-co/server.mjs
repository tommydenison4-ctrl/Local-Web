import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import quote from './api/quote.js';
const root=path.resolve('public');
http.createServer(async(req,res)=>{if(req.url==='/api/quote'){let data='';for await(const c of req){data+=c;if(data.length>20000){res.writeHead(413).end();return;}}try{req.body=JSON.parse(data||'{}');}catch{res.writeHead(400).end();return;}res.status=n=>{res.statusCode=n;return res};res.json=v=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify(v))};return quote(req,res);}try{const name=decodeURIComponent(req.url.split('?')[0]);const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));if(!file.startsWith(root+path.sep))throw Error();res.setHeader('Content-Type',({'html':'text/html','css':'text/css','js':'text/javascript','svg':'image/svg+xml','txt':'text/plain'})[file.split('.').pop()]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404).end('Not found');}}).listen(3000,'127.0.0.1',()=>console.log('http://127.0.0.1:3000'));
