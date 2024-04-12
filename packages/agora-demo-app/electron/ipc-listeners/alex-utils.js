const os = require('os');
const electron = require('electron');
function checkMac() {
  const interfaces = os.networkInterfaces();
  let macAddress;
  for (let iface of Object.values(interfaces)) {
    for (let alias of iface) {
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        macAddress = alias.mac;
        break;
      }
    }
    if (macAddress) break;
  }
  return macAddress;
}

function checkSys() {
  const displays = electron.screen.getAllDisplays();
  const restMemo = os.freemem();
  const memo = os.totalmem();
  const sysObj = {
    screenNum: displays.length,
    restMemo,
    memo,
  };
  return sysObj;
}

module.exports = {
  checkMac,
  checkSys,
};
