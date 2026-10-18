'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:711f8d539192cb498dbafb997acf0e250906b55393c9b9956c77e47730055392","manifestFormat":2,"cacheName":"rosterbot-app-711f8d539192cb498dbafb997acf0e250906b55393c9b9956c77e47730055392","completeBuildMarker":"rosterbot-complete-711f8d539192cb498dbafb997acf0e250906b55393c9b9956c77e47730055392","markerPath":".rosterbot/complete/711f8d539192cb498dbafb997acf0e250906b55393c9b9956c77e47730055392.json","offlineSetDigest":"e6d24863ea5e2e0ec6c82634b1a3cf4dc8ea23b5bef8acb6b7eae3db9cc2068f","required":[{"url":"index.html","sha256":"8bdef52c255b533766ef563b796857c48c895e66ea26828a7bfc3211976022aa","bytes":181614,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"edeb0b7ebd1c8cc1ddcc1f45aa80f446b7b099d8497549ba76af0cf6d679fc5c","bytes":232259,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"d6d437b726c1f4e891f21f060dd601e85006ac765bdd0a70185d7ab2f4b9f2eb","bytes":5848,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"b0bb60ad7b95cc0e66a9e60753dcd1c2e7b0a74ae33a0b0bb3d861039e8b4cef","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"5e5b444e3163c6ebd77f6d110fe47ee3f5eea77b7e9716115624a5614688f746","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"105480b481ee45281d0838535808c7943d4905cd01f0eb1e728d13b3b82b79a6","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"fba919026247955a2a1c1c304e3e21ead6140c58dfd27b5d2bc603b38c2ad88c","bytes":21883,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"978b3250f7438d228de8a890993401a8afa881acc4c0bb8f7d42c4cfc59e064a","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"dbfdacadf090dc51e13fccb548011b4f7aa88cae6dc9250b43fb2f23492e1f3f","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"27c20223d885a8b4dcfb726a0d0cd858d76332279b390ee6569fe334c661258c","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"0f0e7f68e8857955e1fee7dc1e071c7a2632e2654f5f25cf2aa92191318d4ab8","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"b1d722179eddd8127da8ea359e3293dba2e8698a56e32dbfcda83b350e161d00","bytes":42211,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"a47dc898e93e2df40dc4decbd55df37359a5adbb274dfebe37760b94f81ce482","bytes":24037,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"a4f4c6be36fb6e3dbd9a8e29ad2809b53c87e6e7878e6fcd43aa5da0fbf3ccc0","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"e85de426fb81b9bc6c5388e5f0e9143598a724af006696e9a0d63d71c04568c1","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"f1f5e51f009fffa37771f695efcdfa8447ea58830aef6f783525fa0f71cc481f","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"57933a27b909a306506a4c59d5b1fcbeadce706d611fb88528840b5596a39029","bytes":5917,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"3c89b817881a16fdb07815dae893d5ed6882c6f44d853e08bf82cc11e079e5e3","bytes":14406,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"1d10bb642232ef77817e7fd10534498848ac545491410a941b494b2bc28c64eb","bytes":103700,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"6e773b897650aee76375de7019e02f39c2e95c5accfaaeef3978249fedbf3ea5","bytes":5365,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"329bd86d1f1ac9b24b6c0325e7d873efecaa583ccf1262bf321892ddf8f9d67d","bytes":1233,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"2e980e93fcf790371d2dcdffb2a440a6844f1187064f2a75f08669b592a37701","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"51cdd6ace67cbd7923f0c9bfba5dfd070c1e5bf9afcdb3e36e195094dfbc6989","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"659fe5fa8d55e76e748f88c1f87105bc0a28f7dd703a57b41b99dba6507ad0e4","bytes":74282,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"a44a7f50f60f30fba35ffa54c1c8e49c7769fa1c0fecdd70e177b09f1c5fa528","bytes":17329,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"4f1b2aa3978323fca17e821d92834c6b2c6a651337d7d7d7b1e2e89fcf3a2a41","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"5244018df491a9b9ee4af8d324232df92ecb5e3eb07d38d873b2fed8d7cedf18","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"706a5ec92642152400181b4d3584a0e79bb44f23097d16b5ee1eff9213cb4f1a","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"2838efd0d3c7cc98f7607054fd79e4f1bd3423186ab66f9f8b7fb876c9e4d0a5","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"f76e9ae10d2bc04879105aa87fcc24a9c1f5a7ca2753aef20530fb73b0cced44","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"1fff87731f647fc483bf3fc92febf83aa26fdbff61e81b3316775766619c653a","bytes":128926,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"e850ad052f12680dc51911b0326c01bac0a9ba9c7c17cb2c9c638e7d2010f705","bytes":42991,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"cad3cd122be12c10b374c8bda5d60e538c0ee21b7015f254f2c50861c1e13efc","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"5bbaadeadb2d9aab8ffc53a80c77f6e028cc6c28526cd67e559dbf7f3e2f8b31","bytes":5012,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"16741ea73bb0b7c821f69470bbec756e3f21907060aaf6f82013361995d50001","bytes":36572,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"10cda1250957c60deeb25379261d18a7d3e3d7f85a42ed87e4cdae462eea0a27","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"9060d26054de3df0f8f6617f5736ee9caaa37c32ead2c1edf02cca2f5d378d9b","bytes":4815,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"98bfebca207c0b4cd5ce6ffb49714178a8cebad2eaeee18166a54ae7a762ac9c","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"6dd05c0390b488ea93dfb2a952a209b7327243b02392f1e1ea622d3b2e23ad7b","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
for(const key of ['required','cosmetic']){for(const asset of BUILD[key])Object.freeze(asset);Object.freeze(BUILD[key])}Object.freeze(BUILD);
const CACHE_PREFIX='rosterbot-app-',assetByPath=new Map();let lifecycle='parsed',lastFailure=null;

function absoluteUrl(relative){return new URL(relative,self.registration.scope).href}
function markerUrl(){return absoluteUrl(BUILD.markerPath)}
function activationUrl(){return absoluteUrl('.rosterbot/update/'+BUILD.buildId.slice('rb-build:'.length)+'.json')}
for(const asset of [...BUILD.required,...BUILD.cosmetic])assetByPath.set(new URL(asset.url,self.registration.scope).pathname,asset);
function safeFailure(error){return String(error?.name||error?.code||'offline-shell-failure').slice(0,80)}
async function digestHex(buffer){const digest=await crypto.subtle.digest('SHA-256',buffer);return [...new Uint8Array(digest)].map(byte=>byte.toString(16).padStart(2,'0')).join('')}
async function validateResponse(asset,response){
  if(!response||!response.ok||response.type==='opaque')throw new Error('OFFLINE_ASSET_HTTP_'+asset.url);
  const bytes=await response.clone().arrayBuffer();
  if(bytes.byteLength!==asset.bytes)throw new Error('OFFLINE_ASSET_SIZE_'+asset.url);
  if(await digestHex(bytes)!==asset.sha256)throw new Error('OFFLINE_ASSET_HASH_'+asset.url);
  return true;
}
async function fetchValidated(asset){
  const request=new Request(absoluteUrl(asset.url),{method:'GET',credentials:'same-origin',cache:'reload',redirect:'error'}),response=await fetch(request);
  await validateResponse(asset,response);return response;
}
function exactMarker(marker){return marker&&marker.format==='rosterbot-complete-build'&&marker.manifestFormat===BUILD.manifestFormat&&marker.buildId===BUILD.buildId&&marker.cacheName===BUILD.cacheName&&marker.completeBuildMarker===BUILD.completeBuildMarker&&marker.offlineSetDigest===BUILD.offlineSetDigest&&marker.requiredCount===BUILD.required.length}
async function readExactMarker(cache){try{const response=await cache.match(markerUrl());if(!response?.ok)return null;const marker=await response.json();return exactMarker(marker)?marker:null}catch(_){return null}}
async function installBuild(){
  lifecycle='installing';lastFailure=null;
  const priorNames=await caches.keys(),priorMarker=priorNames.includes(BUILD.cacheName)?await readExactMarker(await caches.open(BUILD.cacheName)):null;
  if(priorMarker){lifecycle='installed';return}
  const cache=await caches.open(BUILD.cacheName);
  try{
    // Concurrent installers for the same immutable build may safely write the
    // same validated bytes. No installer deletes the shared target cache.
    for(const asset of BUILD.required){const response=await fetchValidated(asset);await cache.put(absoluteUrl(asset.url),response.clone())}
    for(const asset of BUILD.cosmetic){try{const response=await fetchValidated(asset);await cache.put(absoluteUrl(asset.url),response.clone())}catch(_){}}
    const marker={format:'rosterbot-complete-build',manifestFormat:BUILD.manifestFormat,applicationVersion:BUILD.applicationVersion,buildId:BUILD.buildId,cacheName:BUILD.cacheName,completeBuildMarker:BUILD.completeBuildMarker,offlineSetDigest:BUILD.offlineSetDigest,requiredCount:BUILD.required.length,installedAt:Date.now()};
    await cache.put(markerUrl(),new Response(JSON.stringify(marker),{status:200,headers:{'content-type':'application/json','cache-control':'no-store'}}));
    lifecycle='installed';
  }catch(error){lifecycle='failed';lastFailure=safeFailure(error);throw error}
}
async function cleanupCaches(){
  // Phase 3 cannot prove that a cache is unused by every old client or by a
  // concurrently installing worker. Cache retirement is deferred to the
  // coordinated update lifecycle; activation never deletes foreign caches.
  return (await caches.keys()).filter(name=>name.startsWith(CACHE_PREFIX));
}
async function readActivation(){try{const cache=await caches.open(BUILD.cacheName),response=await cache.match(activationUrl());return response?.ok?await response.json():null}catch(_){return null}}
async function writeActivation(value){const cache=await caches.open(BUILD.cacheName);await cache.put(activationUrl(),new Response(JSON.stringify(value),{status:200,headers:{'content-type':'application/json','cache-control':'no-store'}}))}
async function verifiedComplete(){return !!await readExactMarker(await caches.open(BUILD.cacheName))}
async function broadcast(message){const clients=await self.clients.matchAll?.({type:'window',includeUncontrolled:true})||[];for(const client of clients)try{client.postMessage(message)}catch(_){}return clients.length}
async function retireObsoleteCaches(previousBuildId){
  const clients=await self.clients.matchAll?.({type:'window',includeUncontrolled:true})||[];if(clients.length>1)return {removed:[],deferred:'multiple-clients'};
  const complete=[];for(const name of await caches.keys()){if(!name.startsWith(CACHE_PREFIX)||name===BUILD.cacheName)continue;try{const cache=await caches.open(name),request=(await cache.keys()).find(item=>new URL(item.url).pathname.includes('/.rosterbot/complete/'));if(!request)continue;const marker=await (await cache.match(request)).json();if(marker?.format==='rosterbot-complete-build'&&marker.cacheName===name)complete.push(marker)}catch(_){}}
  const previousName=typeof previousBuildId==='string'?CACHE_PREFIX+previousBuildId.slice('rb-build:'.length):null,newest=complete.sort((a,b)=>Number(b.installedAt||0)-Number(a.installedAt||0))[0]?.cacheName,keep=new Set([BUILD.cacheName,previousName,newest].filter(Boolean)),removed=[];
  for(const marker of complete)if(!keep.has(marker.cacheName)&&await caches.delete(marker.cacheName))removed.push(marker.cacheName);
  return {removed,deferred:null};
}
async function activateBuild(){
  lifecycle='activating';const cache=await caches.open(BUILD.cacheName);
  if(!await readExactMarker(cache)){lifecycle='failed';lastFailure='complete-marker-missing';throw new Error('RosterBot active cache is incomplete')}
  await cleanupCaches();lifecycle='active';await self.clients.claim();
}
async function coherentAsset(asset){
  const cache=await caches.open(BUILD.cacheName);
  if(!await readExactMarker(cache))throw new Error('OFFLINE_COMPLETE_MARKER_MISSING');
  const url=absoluteUrl(asset.url),cached=await cache.match(url);
  if(cached){try{await validateResponse(asset,cached);return cached}catch(_){}}
  try{const repaired=await fetchValidated(asset);await cache.put(url,repaired.clone());return repaired}catch(error){throw new Error('OFFLINE_ASSET_UNAVAILABLE_'+asset.url,{cause:error})}
}
function damagedNavigation(error){
  const detail=safeFailure(error),html='<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b5364"><title>RosterBot application files unavailable</title><style>body{margin:0;background:#0b0c0e;color:#f2f4f7;font:16px system-ui;padding:28px}.card{max-width:620px;margin:10vh auto;padding:24px;border:1px solid #36544e;border-radius:16px;background:#131518}code{overflow-wrap:anywhere;color:#a9f3e4}</style><div class="card"><h1>RosterBot application files are unavailable</h1><p>The saved offline app shell is incomplete or damaged. Reconnect to the internet and reopen RosterBot to install one complete version.</p><p>Your roster data has not been changed.</p><code>Build '+BUILD.buildId+' · '+detail+'</code></div></html>';
  return new Response(html,{status:503,headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','x-rosterbot-offline-shell':'damaged'}})
}
function damagedAsset(error){return new Response('RosterBot application asset unavailable: '+safeFailure(error),{status:503,headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store','x-rosterbot-offline-shell':'damaged'}})}
function route(request){
  if(request.method!=='GET')return null;const url=new URL(request.url),scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return null;
  if(request.mode==='navigate')return {asset:assetByPath.get(new URL('index.html',self.registration.scope).pathname),navigation:true};
  const asset=assetByPath.get(url.pathname);return asset?{asset,navigation:false}:null;
}
async function statusMessage(){
  const cache=await caches.open(BUILD.cacheName),cacheComplete=!!await readExactMarker(cache);let reportedLifecycle=lifecycle;
  if(cacheComplete&&reportedLifecycle==='parsed'){
    if(self.registration.active?.scriptURL===self.location.href)reportedLifecycle='active';
    else if(self.registration.waiting?.scriptURL===self.location.href)reportedLifecycle='installed';
    else if(self.registration.installing?.scriptURL===self.location.href)reportedLifecycle='installing';
  }
  return {type:'ROSTERBOT_OFFLINE_STATUS',applicationVersion:BUILD.applicationVersion,buildId:BUILD.buildId,manifestFormat:BUILD.manifestFormat,cacheName:BUILD.cacheName,completeBuildMarker:BUILD.completeBuildMarker,markerPath:BUILD.markerPath,offlineSetDigest:BUILD.offlineSetDigest,offlineRequiredCount:BUILD.required.length,cacheComplete,lifecycle:reportedLifecycle,failure:lastFailure,activation:await readActivation()}
}
async function activationMessage(event){
  const reply=value=>{try{event.ports?.[0]?.postMessage(value)}catch(_){}};
  if(event.data?.buildId!==BUILD.buildId){reply({ok:false,reason:'activation-build-mismatch'});return}
  if(!await verifiedComplete()){reply({ok:false,reason:'activation-complete-marker-invalid'});return}
  const record={format:'rosterbot-update-activation-v1',buildId:BUILD.buildId,fromBuildId:event.data?.fromBuildId||null,requestedAt:Date.now(),provenReady:false};await writeActivation(record);await broadcast({type:'ROSTERBOT_UPDATE_ACTIVATING',buildId:BUILD.buildId,fromBuildId:record.fromBuildId});reply({ok:true,reason:'activation-accepted',buildId:BUILD.buildId});await self.skipWaiting()
}
async function buildReadyMessage(event){
  if(event.data?.buildId!==BUILD.buildId||event.data?.coherent!==true||!await verifiedComplete())return;
  const prior=await readActivation(),record={...(prior||{}),format:'rosterbot-update-activation-v1',buildId:BUILD.buildId,provenReady:true,readyAt:Date.now()};await writeActivation(record);const retirement=await retireObsoleteCaches(record.fromBuildId);await broadcast({type:'ROSTERBOT_UPDATE_READY_PROVEN',buildId:BUILD.buildId,retirement})
}
async function coordinateMessage(event){if(!event.data?.payload||event.data.payload.protocol!=='rosterbot-update-v1')return;await broadcast({type:'ROSTERBOT_UPDATE_COORDINATION',payload:event.data.payload})}

self.addEventListener('install',event=>{event.waitUntil(installBuild())});
self.addEventListener('activate',event=>{event.waitUntil(activateBuild())});
self.addEventListener('fetch',event=>{const target=route(event.request);if(!target)return;event.respondWith(coherentAsset(target.asset).catch(error=>target.navigation?damagedNavigation(error):damagedAsset(error)))});
self.addEventListener('message',event=>{const type=event.data?.type;if(type==='ROSTERBOT_OFFLINE_STATUS'&&event.ports?.[0])event.waitUntil?.(statusMessage().then(value=>event.ports[0].postMessage(value)));else if(type==='ACTIVATE_THIS_COMPLETE_BUILD')event.waitUntil?.(activationMessage(event));else if(type==='ROSTERBOT_BUILD_READY')event.waitUntil?.(buildReadyMessage(event));else if(type==='ROSTERBOT_UPDATE_COORDINATE')event.waitUntil?.(coordinateMessage(event))});
Object.defineProperty(self,'__ROSTERBOT_SERVICE_WORKER_BUILD__',{value:BUILD,writable:false,configurable:false});
