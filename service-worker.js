'use strict';
// Generated from rosterbot-build-manifest.json. Do not maintain an asset list here.
const BUILD={"applicationVersion":"0.31.0","buildId":"rb-build:ef7c5596c94332896b8658b2f2530d335e83e6503f28bf047362dcf1c44ac4ce","manifestFormat":2,"cacheName":"rosterbot-app-ef7c5596c94332896b8658b2f2530d335e83e6503f28bf047362dcf1c44ac4ce","completeBuildMarker":"rosterbot-complete-ef7c5596c94332896b8658b2f2530d335e83e6503f28bf047362dcf1c44ac4ce","markerPath":".rosterbot/complete/ef7c5596c94332896b8658b2f2530d335e83e6503f28bf047362dcf1c44ac4ce.json","offlineSetDigest":"d9a0f8822093fd1d28ef598b19f8ea11db24c8162f63d4e113b9fecc96454d01","required":[{"url":"index.html","sha256":"4573c1368ebd20c9453eba3bab45074254e6e69eac24071123540fd7c0b17a26","bytes":201974,"type":"text/html"},{"url":"css/rosterbot.css","sha256":"41368d53e05cf1af9abf58e3c53306d5ab9cbba65e4ecfb4e4e3c75067e6ccd6","bytes":258668,"type":"text/css"},{"url":"js/00-build-identity.js","sha256":"1317db001d54a1dec2cc54e93ded1da223cc854ece21a07fcb7e2afcb0d38dc6","bytes":5973,"type":"text/javascript"},{"url":"js/00-canonical-origin.js","sha256":"238125e5fe1dbf8a8405f18ee2650cc53e0591fb427e46391e6db3cc69a56100","bytes":1457,"type":"text/javascript"},{"url":"js/00-error-handler.js","sha256":"052a9bae491c86a3855b98d04135c52cc1a0e48fbdad93481f71e7c9053aae99","bytes":2054,"type":"text/javascript"},{"url":"js/01-storage-compatibility.js","sha256":"cb616783fb90e4f5dd9f1208599351b1c57a766a6c07606c29ef1e3d73d695dc","bytes":9839,"type":"text/javascript"},{"url":"js/01-persistence-registry.js","sha256":"a3a880ec62902d358d1d125e741a5af5c523305129ca8cc2e90b5cab8df1dfdd","bytes":22950,"type":"text/javascript"},{"url":"js/02-canonical-state.js","sha256":"33bb4726707ae69e68605f4eebd0d3fb09cf6b6ae9881a1e2e1cc73f87d60002","bytes":11629,"type":"text/javascript"},{"url":"js/02-persistence-safety.js","sha256":"41dd781278872b245eaed05d025ceaeb808178c0b1a377f3264f7809b86109ad","bytes":46705,"type":"text/javascript"},{"url":"js/02-schema5.js","sha256":"8353ff80fa87353e0cfe2b699a7aff87d17c89ee97d8282a4e13f69727f4d4b9","bytes":23920,"type":"text/javascript"},{"url":"js/03-recovery-ui.js","sha256":"24a3f9b85304bbbdc84ffae17cbda477dd3b0690b17833fe26f8931878db5761","bytes":18743,"type":"text/javascript"},{"url":"js/03-schema5-migration.js","sha256":"8d6b2f53f7de9f00a965d1bdf893a3f4af88dff4703b77e3573df672258bcd89","bytes":49894,"type":"text/javascript"},{"url":"js/03-persistence-bootstrap.js","sha256":"25bff906fd90ee664d56d5c720a26a5899d1ebebb437b2c70d4856ec2f7b9ac8","bytes":25686,"type":"text/javascript"},{"url":"data/rosters-fp64-fp68-20260908.js","sha256":"170b95a3bb69928ee7151db41b2b5125199a671065b68e971f3365570bf6034d","bytes":3201466,"type":"text/javascript"},{"url":"js/10-roster-official.js","sha256":"d15ddce9a6e7c95acd5498b51e5ce0782bbe550efd452f21af58075fd689df7d","bytes":9138,"type":"text/javascript"},{"url":"js/11-roster-engine.js","sha256":"e2629161c99db01125f48fc6303a30364fb1755b1ba53ac1ba943a86e66b3eed","bytes":18771,"type":"text/javascript"},{"url":"js/12-roster-effective-dates.js","sha256":"d5d151f87deefdbd2e69d4f715ae5037b32ae2c8f1eef51b0ebf9f42a106c324","bytes":5917,"type":"text/javascript"},{"url":"js/32-dialog-controller.js","sha256":"c37955ebb152150706e2a0761b0113e62f254134c86765a7b49991f2eee706a6","bytes":5507,"type":"text/javascript"},{"url":"js/40-employment-profile.js","sha256":"e0973892b82c9bb30cd5006b7d1fdc523a9516078cb6e1869eaa3bec6748df98","bytes":15023,"type":"text/javascript"},{"url":"js/20-roster-ui.js","sha256":"5d3a5de3feefb065035da00fa6c19af49a413e62f8b9f16065d0e7d579250856","bytes":113502,"type":"text/javascript"},{"url":"js/30-feedback.js","sha256":"cb901f5334e45530044c57a7bc6c9eb26925f2dcde8d2a7bae9f45e78b8d21fc","bytes":4940,"type":"text/javascript"},{"url":"js/31-changelog.js","sha256":"0b59ded344e1ed4f6257d9177de31e8d3433d537d03de43693ec322b1e694626","bytes":824,"type":"text/javascript"},{"url":"data/pay-reference-20260923.js","sha256":"88be7a4747687cd07492e913298f1d2e948fb281a07b3e6ec3cb1479050d494d","bytes":2324962,"type":"text/javascript"},{"url":"js/41-pay-rate-official.js","sha256":"a4b0ad17cb4cb222827e94c7fcd6da4da614225d4e2eda852aaa54f751a108f3","bytes":1610,"type":"text/javascript"},{"url":"js/42-paybot.js","sha256":"f015d7bc75f16b9155c02508f998187d6d67c2f84ee61d76060da6d3d888ceec","bytes":76258,"type":"text/javascript"},{"url":"js/50-data-backup.js","sha256":"7ccfaa5c6d70b30882c5f468ef72ca5cebcc4dcaa73c27b2d9a85f5a1b7cbfdc","bytes":17552,"type":"text/javascript"},{"url":"js/04-cloud-error-contract.js","sha256":"7bf1ad7834a7b5670739a8e770eecffd533ae93851560e647795b5a66abb6e9d","bytes":3089,"type":"text/javascript"},{"url":"js/05-cloud-deployment-profile.js","sha256":"a854e51256e40c770f65f1005d0826e84cd78e85f598e6d10877faccd4fdc8f9","bytes":853,"type":"text/javascript"},{"url":"js/06-cloud-config.js","sha256":"a57d9f9228690322a6fd8f6ea1b4d7f7c46d43119b304ffdc616e1ebfa084219","bytes":6873,"type":"text/javascript"},{"url":"js/07-cloud-schema5.js","sha256":"5f98868bb6de62d58b2fb6b9bde6c8788979dd26ee4d21cf47ad11659fcec191","bytes":7021,"type":"text/javascript"},{"url":"js/08-connectivity-state.js","sha256":"bd0bbffa316575a43bbb11bfd5c5def2d045bc6854c112ce0c2da045f27e2933","bytes":7464,"type":"text/javascript"},{"url":"js/51-cloud-sync.js","sha256":"ce4f2b28159f90b159a335552e84fb4d7fed3b790f86487663ebe3737784f821","bytes":128739,"type":"text/javascript"},{"url":"js/60-diary.js","sha256":"d008f59ae11bef8bb0b27fc30e2b54d5d2162b326a633900b02105515e576cb3","bytes":43369,"type":"text/javascript"},{"url":"js/61-page-bridge.js","sha256":"83c82bff4f0cbfad08b2df26c9d660578002493991dfac3cdaff184defa119bd","bytes":1102,"type":"text/javascript"},{"url":"js/75-sources.js","sha256":"1a950a1386eb1c3732a91b1c333f746b3a35dccf857dfb9cdd63615edf71cec0","bytes":4751,"type":"text/javascript"},{"url":"js/70-navigation.js","sha256":"0163f811efc553ee8cb167eb0b54cdb1a6d17c2423c9c93761a7c2dfe8707a03","bytes":57968,"type":"text/javascript"},{"url":"js/80-calendar-subscription.js","sha256":"313e4e5bd7f6c225978379675714d64d155130020d72fa37366b75b755fd99ab","bytes":24362,"type":"text/javascript"},{"url":"js/00-display-mode.js","sha256":"ae738c71a9ce924143a2aa2523e995710a23a136a45508eed8caa9a9fa55c706","bytes":8006,"type":"text/javascript"},{"url":"js/90-service-worker-registration.js","sha256":"c951cd3f6f6d770b07053e5d169965993849a23d193b362cc177a9f6016a1f22","bytes":8277,"type":"text/javascript"},{"url":"js/91-update-lifecycle.js","sha256":"f40b2f829051d2641a1b81ba1741e0b933cb0f25b70a1d1a5c18c2075108d551","bytes":13237,"type":"text/javascript"},{"url":"manifest.webmanifest","sha256":"07d594562ea3433efcb6adb827315f2d7d95c9052dd3285024bb68dcc05620ba","bytes":875,"type":"application/manifest+json"},{"url":"assets/icons/rosterbot-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-192.png","sha256":"05246126e2a15371836e77e5084d6f0f3509de04e3dbe79f990b82a1cfa9b5b5","bytes":48443,"type":"image/png"},{"url":"assets/icons/rosterbot-maskable-512.png","sha256":"3661bb243b7db5467faf7331a5f14f128d4e74d1b34ea968f2a1d22a987f59ba","bytes":315830,"type":"image/png"},{"url":"assets/icons/apple-touch-icon.png","sha256":"bdac53960fe711a34f8fa42d789602065089194ccc2f0758fc1dfe0f0ee85125","bytes":42933,"type":"image/png"}],"cosmetic":[{"url":"favicon.ico","sha256":"9bcbaf720320ce8525d373887ec26a935a78c40a6d2b0bca6030b74169b655c0","bytes":3192,"type":"image/x-icon"},{"url":"assets/icons/favicon-16.png","sha256":"a1a39d885b52d412c7f64da679d195b0356949bc1cc30c3a74ff0e79e776ddef","bytes":826,"type":"image/png"},{"url":"assets/icons/favicon-32.png","sha256":"aee076dc99209bcf7f0fb60d87da5957cf1794d0a15efcf9b5165bbd9045fd77","bytes":2328,"type":"image/png"}]};
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
