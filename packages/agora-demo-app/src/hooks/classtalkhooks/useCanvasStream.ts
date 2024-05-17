export const useCanvasStream = () => {
  const rendStream = async (videoDom: HTMLVideoElement) => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter((device) => device.kind === 'videoinput');
    const OBS = videoDevices.filter((device) => device.label.includes('OBS Virtual Camera'));
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: OBS[0].deviceId },
      audio: false,
    });
    if (videoDom) {
      videoDom.srcObject = stream;
    }
  };

  const canvasRander = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
  ) => {
    return () => {
      window.requestAnimationFrame(canvasRander(ctx, canvas, video));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };
  };

  const createProcess = async (config = { isLocal: true }) => {
    const { isLocal } = config;
    const video = document.querySelector('#video') as HTMLVideoElement;
    const canvas = document.querySelector('#render') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.height = 460;
    canvas.width = canvas.height / (9 / 16);
    video.addEventListener('play', () => {
      canvasRander(ctx, canvas, video)();
    });
    if (isLocal) {
      await rendStream(video);
    } else {
      console.log('file');
    }
  };

  return { createProcess };
};
