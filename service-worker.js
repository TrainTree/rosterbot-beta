'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:e6241f74e5737041a76cb22ee667a9d767744478c5e6484ae9679f46c1d52210","manifestFormat":2,"cacheName":"rosterbot-app-e6241f74e5737041a76cb22ee667a9d767744478c5e6484ae9679f46c1d52210","completeBuildMarker":"rosterbot-complete-e6241f74e5737041a76cb22ee667a9d767744478c5e6484ae9679f46c1d52210","markerPath":".rosterbot/complete/e6241f74e5737041a76cb22ee667a9d767744478c5e6484ae9679f46c1d52210.json","offlineSetDigest":"c2e1f38dcc74b860a5b829fddf1708a9b7166bd1a2034955dbccc58670f6cfe6","required":[{"url":"index.html","sha256":"07112ef427505f6e00613b33c4870c6eafe0e63efabf27f9f76b638e991540e0","bytes":197052,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"e71b59715432e134ab8358041f938c3e3942d84ca1714100e7b2abc4d43f86fe","bytes":262110,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"2465365ab16b99020b13be841b585b94ad4cd6015a1dea5af99d9c8a3d59ba4f","bytes":5973,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"b6df56a577ca9087d78df614118ed0c5f5332c11894fcf2b183f75b3908f56cb","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"245d99439127e678c2db721fe851a5d96c889abce404e9ddb74c2d21c7cda0aa","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"d99a895a0f3b262a635c6d3678592ad37220bee22fe44940f8e78c7cc2231b94","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"1768693debfd9465b784f943c87efee09bb81d1a717822a09715e4526f268794","bytes":22950,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"aea4eb271e0816fcb63c908c5a2a8d4cce8cace4c1ec1865a2c5fd49c1f228ab","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"cb166cecf3ec6bae825b14c8614c08d86c46fa346ba1c17667e5427851a75f7c","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"2d616ab5e70fdcd2166804b7d763a9dd9de71a1316b66117ace45f39f4c6809f","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"8982dcb62648f21e232ebe26479771088564a87544ba5b967f91b23a79b91a79","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"bd1ef23d5e7af1baa2dd237e54663f4c4ac442132cff53fff45dfc8dd5987901","bytes":49894,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"d6c44286b58d8981d7a4cb1491903c445c41c3a935a247e9e5bc2d9146494b23","bytes":25686,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"2247de41b4a497768776371d130d07356a008e43de594554a29e3fbb9994468c","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"8c9871ce1a5872cc0d49d619aefb683c1e961178ab7d50151c1dd14cb2ac51c6","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"92b836d4e9be092a84d68c4ca05e13e91e71d18505b7c4c1640c8f36bfc62ea9","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"60d4fab48f0250e9d90ab509a01f6b0ded99761a2624dd1284d715c109f8cfd4","bytes":5917,"type":"text/javascript"},{"url":"js/32-dialog-controller.js","sha256":"75dfeac9e7d626a17dc70d5a9e8757a2e1ce279e5a9331e63e7cc05e9da178e8","bytes":5507,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"c0ab2ff17df75a90ef27ef1f70323a874d4b1739a30243e5880613bc1b2c230b","bytes":14373,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"ae2bba9e58aef70639a16390f1c2a1a40d2327b0200481e1a3e97a536d5e5875","bytes":112209,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"3cc4e34e4a040484cb3520c2e3228ac8e6c92b2a5626c1085980900c45963619","bytes":4940,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"c83ed9a5dd08500eea434c2c620a9309a8f9530b61b3b8f212e74f623671e17f","bytes":824,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"c0219452b42ce390550bb4c4c69e4565645bfe0884fc637e0a2d98d3800efa72","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"15da1ea13daecefedae66c0162a0211f7aed2fdaf26861c8c57cfadab018aeda","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"43e9f1cd8e174107c4f9392d9aeb94abf349103decd3144cee639df45bf7d8cd","bytes":74526,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"24055ad0710dc9c90a6dd56cde20740efea481ff1992ed592790327bfa2eb28a","bytes":17427,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"92206027e32e36143212634b451e72026c4cb2f73b4c0ee0bfbd2f4db2b6e5de","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"f345c4c56366354e5ca0cd723214ac3b51cd532b1b09f3ae3e3d1995866671ae","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"79f793c45f6650040212b85d199bf5d76cf61f1064b58d31661906172a8f159d","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"c5a2980d0dcff6293ff0350de39f202ec47fb0957f6f75855c193d675d8353fd","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"6943c5be21799d58aeb594795200501f772224ab354a3001f6fa8e6d22ad0208","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"4694a8e3917ed1a52d0365034488e23ae1a1c0bb5248f1f4555483e726e0dc94","bytes":128739,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"56d65536bc34fcdde596899b7cd454760ff756fe4836308857955ed3db3a95f0","bytes":43369,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"512cf383eefbd8f6547e43a6374e5d7980b6ae4a50ee6c55602924fd0dd89aaf","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"412b36b45476a4d8aa9e17247ec6cb735389590238edf3002ee85c640b7bb750","bytes":4751,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"6d5fdbe704b92558b89f035c27b95ff041b62a4f6e2a1eb667c67f01dce4d26b","bytes":55955,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"4cc5d2100501d164ab8b30a435f76f715464296f4a0d2a64043f8a44fe727076","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"7fa9699111d2b3c79751fd5d3fda0683ce0001018365cefed57944c64fe5d2f1","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"93f303ab115b33a536f3807142ffcd7f28a99d8d836b5542167cc834f78f4743","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"0ce2722049c35546a837b6d23ed34be24973049e398eba31a5f1ac508c816f21","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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
