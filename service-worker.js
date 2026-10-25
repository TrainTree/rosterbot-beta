'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:3fd5bd47ea16b791c2e8119446b9c50f8e6c9773fadf054cbaf254373eb1dd30","manifestFormat":2,"cacheName":"rosterbot-app-3fd5bd47ea16b791c2e8119446b9c50f8e6c9773fadf054cbaf254373eb1dd30","completeBuildMarker":"rosterbot-complete-3fd5bd47ea16b791c2e8119446b9c50f8e6c9773fadf054cbaf254373eb1dd30","markerPath":".rosterbot/complete/3fd5bd47ea16b791c2e8119446b9c50f8e6c9773fadf054cbaf254373eb1dd30.json","offlineSetDigest":"03dee75c304cd3d6f8b52456b93b5194e861140ac7fd81e93d4139e2203501d8","required":[{"url":"index.html","sha256":"847a3f6ab8c5afc9b7bdf72387f719e17ac9d3c23da39861db8014fac3a9eee1","bytes":187360,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"5a55068306ad59fb9689845a4e24fec3cc14e5b8a7dc9cae6254d0d41254d5f5","bytes":247533,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"11e1831186f4e76b8040a0fb73657ce158e5399301f01829ee973d8ab6a67d61","bytes":5973,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"4ddaf13040b5b122c0189edcb1026e2096272c06da7094706b1ef8ff0746ec70","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"0db4dc69236ac7388b7b360b1d8cb7f1ad4b17a4a4db8851a8c28baad00b6fba","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"a4a2daf8323edae5dbaaeb19a2271922adf05a04c4801f072c00ba84fae19347","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"f05fe37765e126a75f567280bb180e7de7b3b48f79eea897aa3c9a2957e59d09","bytes":22043,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"61d49e119682be71e7df38ee24bbc3cca9029c9c2b08d3fedb7a951a959c3ac4","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"6f2aac4aadbebc92320d6ee158927d4f9d71975c014288bfb30d33ca468424f4","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"f76561bcfe4e11f6dcf24b41c4922e71b9cf900baa4777836cbbc3d2139d8808","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"63594d42d46e1b322e8f5c94e3049d63711a8b19a1eeac219a6115adcba14cdc","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"506eb18cf7f2084cb612404f0e42eb684e6571588487867bfa88076ea153c3d5","bytes":49894,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"2ee63bcee18091151d5d80a91f5a3f0d7818cc795f11da08554e55fbb39b1833","bytes":25686,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"30163246ff6a21b32bf6199c07b41201c9cdac9539c890e5b8f57697022c5bc4","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"27ae47a79edba3792bcda844524c2a3959abd5aea7ef334ed996b6c6a8385835","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"0a30edbe22836911398fdd540a76bb500ab4d2fc80562796aaf080d2675fed5f","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"56ebd54b7667e2f46f7901407180e3b82fdbb8d5d2b80c71ee86f87e4ccd359b","bytes":5917,"type":"text/javascript"},{"url":"js/32-dialog-controller.js","sha256":"3e2678a1c7cf5b7d0e5d19e2a3d79822d3d0f4f4ef1c92ab136e759b859d2a0f","bytes":5507,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"4728842c5c3ceca8f4d9583ecbc91e7c19adb33047f58c752694acd213be8009","bytes":14373,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"d9a3fd957c1116eaa96ce65bb99cefe79fed9bfe4011d57fba6ca46b191095e0","bytes":105006,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"abf5941eac7886231c0e2cc796bb7ed7295cc0f7ad06bc2f755990ba5043fdf4","bytes":4940,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"c0d42231b8c48cf0a344ff70a2a7dc3c28977723e15abb624218806e74bfd1f3","bytes":824,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"e4436432d5a7ca6ea693bbafafaa0b4436e723ba3516cf7129fbf146ef056bd7","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"a44990cccd0bec58d7f09a9c5e05d187ab5c158c033ef4e1c1f66d63751c03a7","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"5cbaac47b3b320b9616b64219eee88e78308fca53eb6978be8a637b72ad4e9a8","bytes":74526,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"ca94f47d12cd5496b575aca310cfd1745b337ad045d9a8f384d293d3ea6d3690","bytes":17070,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"d77491f65d3ba973885ef0eadaa1063f725dc241d4951f2ada3059bde57ad935","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"ee4b2944446868b9bbf1fda64ae9476f240e7f508691b091b2bb9e9731981693","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"a4faf95852303621b7bbe5403956660ad6159796cd0d0ab5bc5f2b89df63cd2e","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"c4f481b5c588e595cf21294138753958663d11b1b344705db93ff01b5e4bc524","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"61da1c45284674b31c9ceb3fc7d20e8514955b0a675db225d9bbc341c6cf7da6","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"49db81dc72a5db57ffc989329176be9e64883a15ac0a84b5d60bb93fa0ecd8e7","bytes":128926,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"4671c24fab1bccc2f28bd009b7f675a1d9dfb9a7a80bfd26885ae82a9684955a","bytes":43369,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"971126217f35b145462affc6c68287aeedc10b825e39bca928621b524d5c3634","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"d558c48302ec7bc63106e6f037643ba00b3258f84bc3d56b65819f05fc6e6886","bytes":4751,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"791bbe57d60f7d6c6d69da51bffb2ecf09dd80b34ce7739590996282f6258d9c","bytes":44475,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"016ac530e02be9ef74c28f1b7badad05fb614ab6a47fa0b7df52e7a21afecfb7","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"1fd2093200056720c91c1cbb2f744acfe5acf1097019792847105098c1a4316b","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"1e6a3904b65f0f9997269ada38882184fd2ec28063b3f7df61acbcebab7d0096","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"8831299fc591f710059d71237c1fe2d9281b3f5caf7b6933730918852a38648c","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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
