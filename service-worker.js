'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:927293a82f606e5384592442a9746480cc78b075b8cbb01c8f3523c296602d3c","manifestFormat":2,"cacheName":"rosterbot-app-927293a82f606e5384592442a9746480cc78b075b8cbb01c8f3523c296602d3c","completeBuildMarker":"rosterbot-complete-927293a82f606e5384592442a9746480cc78b075b8cbb01c8f3523c296602d3c","markerPath":".rosterbot/complete/927293a82f606e5384592442a9746480cc78b075b8cbb01c8f3523c296602d3c.json","offlineSetDigest":"12e6dc11790f31eca42e24be83e317090b7fd7015a8db61abc92e5227cca8f69","required":[{"url":"index.html","sha256":"1c5f4757b9a028ffff0d23a7175a46fca44565040f62f94cfd778d509653e182","bytes":181614,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"98f989c8571152afa5233860cfa5df0beab95c79c4b0d2bc9e6cbb609d6c202b","bytes":233290,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"ea89d8c774bb5ab9d5975f6eb90423e1eb63e94e3ba599386ebd48b253ff2bc8","bytes":5848,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"4fe10a3cd2d839f51aabd15bafe48a3e6b0c9689f2d7250001f0b5d97f0e752e","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"cdd9e3b390ceb77350b331892d4fb80685e3623d758c2ece07c99491f752dca2","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"156746be799888fc4edb86756352f94e425185cf364a2c08c73ccc302fd157a3","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"f2bed8ed35fe8b8946f9433c6f1fcad6e947cb739b7ba676dbea8ba8b1b8816c","bytes":21883,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"7ef6e557f49c010b1bc4c7742325925c91aee5f92772a08f36e156843452b127","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"c134dab90e41b0ea5c8f2e553d9900776f9f717f1aa630f4104c46aae7a880a9","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"5b16ca21bb8aa7f6a1ded5b5c7694a7a7e7a3f438ce35bb7fee0247357380f85","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"84b382b9cd703b8e49cec02d7174079ec1f52f1a3563c1485793934ef5e6f393","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"52e5b8069cfbc319da3ba20762f61e962c64a1e1ef9c1ce19a1e58accd68fdc3","bytes":42211,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"1d70ba64746611e15341bce38270ff9fd378c43bb7ac0b2c0f25ac113be6ef4e","bytes":24037,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"9b41744c60710c1e4a08c62f7d46ae1bab7d2d910a38ff8d0b2caa9d817779a5","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"9dca755ff8de970500a95f40436eeca92c1008abc7f403848572e4d591c8bb59","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"de5d069ee69482054418f0ca74aba5c119406e29bd3acc329ef182625b2f8d91","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"f206c66a7e502672440486f719ae85807825e82f035da35680cc43469bd4d26d","bytes":5917,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"02ecbbc1617cb0d4497eed70ff80c9ab6ee18d7b5607f8cc6bd4e8817b9067b0","bytes":14406,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"d6c2c772885bb9d9726eef029a96910e57a4988a169012f659a9cadf01378a02","bytes":103700,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"adaae6b97cb4bc4d69fb7e95489989134cc7fabc93f2a299228ad8cfdea5547a","bytes":5365,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"dd2338b2761e02aa93c173559423e6f01700921282661cc8162380311d68be29","bytes":1233,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"1a58c37c05e70c2625d7d7c6dfd73452f786ea71dc6e17a55a0787e3c07cef6d","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"beb11b2dbb41fe36e978a779b7fc5fd236a409f2c97ecb33084b2079b59aca97","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"bd485ed3c61a15e857bdae2aa2ec62d707a56730a67f4d49da1bacb11d2b93e5","bytes":74282,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"8493a26db1742f4209a5cc1f67c7789b4627c9e32b4d3b287d9ddc39ea4b6536","bytes":17329,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"ee62dac26d4e482afb70a786bad453ba390e3a987a1d10112dde8809a1b92876","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"ac10324cb4b364e4bec61688bd00a1824070c18b5bc9bdd9074ed8e074c89674","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"9efc058c82ebbab8083cf5734155fed4f984f3e49b49b8889a0cdabf80c1bcb8","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"6212e1be200d5e68778e34b8b198ea8774cb29ebdf141a14f06ff20739221bab","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"2b7feb592cffc254eb6aa5d9eb09a1f433023b2197e57c265c09f97521bc7d10","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"0f02ec71318a2debf7f0b3324e3d11389f6c13329e39b0f2d87d04d19ac528a8","bytes":128926,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"b0717310b299db5f22072a6d5a939cf12e120ba9ce89074ca1199ca0286063ad","bytes":42991,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"61de1f29c66ccb4f391ffac95ec63d98170b65277755d474c7a0171c74121d63","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"10a815088c66f5fbc45c75e420ec059434e918b4e949089db4dc191159413f6e","bytes":5012,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"3dc083b0fe11ff94fa07f4073fe627b1899a2b1bc83e42d6f41d3b6a2d0bc5ce","bytes":36572,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"f572d68bd886cf1fa928f6538289cd2ec2c065a8089b5c45b492b919eae0f67a","bytes":24247,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"6493372349bbb0e7b22ad438154d04898d65a180bc4d684d2e8de0e633d9bc74","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"81a4fab3d78e2ab0c1558de96e36fa736d5ac24d8a73afd07a0df782f14bba05","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"cdebde3430cfdfd65319a7dc931f9ce61bf1aaea61b36118d78c0b7dc3d4b3f2","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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
