try{if(typeof window!=='undefined'&&typeof document!=='undefined')window.__rosterbotRequireBuildComponent('js/31-changelog.js','rb-build:8578d00808dd5d3143d9a88c339b37341af3f262d56e682fa4318e0b8e4183d3')}catch(error){throw error}
(function () {
  'use strict';
  const modal = document.getElementById('changelogModal');
  const openBtn = document.getElementById('changelogOpenBtn');
  const closeBtn = document.getElementById('changelogCloseBtn');
  if (!modal || !openBtn || !closeBtn) return;

  function openModal() {
    window.RosterBotDialogs.open(modal,{invoker:document.activeElement,initialFocus:closeBtn,onRequestClose:closeModal});
  }
  function closeModal() {
    window.RosterBotDialogs.close(modal);
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
})();
