export const WEBRTC_CREATE_SESSION = 'WEBRTC_CREATE_SESSION';
export const WEBRTC_FOUND_PEER = 'WEBRTC_FOUND_PEER';

function createOffer(pc) {
  pc.createOffer(function(desc) {
    console.log('desc', desc);
    pc.setLocalDescription(
      desc,
      function () {
        console.log('args', arguments);
      },
      function(e) {
        console.log(e);
      }
    );
  }, function(e) {
    console.log('final', e);
  });
}

export function findPeers() {

}

export function stopFinding() {

}

export const handlers = {
  [WEBRTC_CREATE_SESSION]: createOffer,
};
