export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST')return res.status(405).json({error:'Please use the quote form.'});
  const b=req.body||{};
  if(b.website)return res.status(400).json({error:'Request could not be processed.'});
  if(typeof b.name!=='string'||!b.name.trim()||b.name.length>120||typeof b.email!=='string'||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)||b.email.length>254||typeof b.message!=='string'||b.message.trim().length<10||b.message.length>3000||b.consent!==true)return res.status(400).json({error:'Please check your name, email, project details and consent.'});
  const url=process.env.LEAD_WEBHOOK_URL;
  if(!url)return res.status(503).json({error:'Quote delivery is not set up yet. Save your request below; it has not been sent.',offline:true});
  try{if(new URL(url).protocol!=='https:')throw Error();const upstream=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.LEAD_WEBHOOK_TOKEN?{'Authorization':`Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({name:b.name.trim(),email:b.email.trim(),business:String(b.business||'').slice(0,200),package:String(b.package||'').slice(0,100),message:b.message.trim(),consent:true,source:'Front Door Web Co.',submittedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000)});if(!upstream.ok)throw Error();return res.status(200).json({ok:true});}catch{return res.status(502).json({error:'We could not deliver your request. Please try again or save a copy. It has not been confirmed as received.'});}
}
