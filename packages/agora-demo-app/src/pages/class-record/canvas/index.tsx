import { useEffect } from 'react';

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

const createProcess = async () => {
  const video = document.querySelector('#video') as HTMLVideoElement;
  const canvas = document.querySelector('#render') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.height = 460;
  canvas.width = canvas.height / (9 / 16);
  video.addEventListener('play', () => {
    canvasRander(ctx, canvas, video)();
  });
  await rendStream(video);
};

export const CanvasComp = (props: { isRecording: boolean }) => {
  useEffect(() => {
    createProcess();
  }, []);

  return (
    <div
      className=" fcr-flex fcr-justify-center fcr-items-center"
      style={{ border: '1px solid black' }}>
      <div style={{ border: '1px solid #ccc' }} className="fcr-relative">
        <canvas id="render"></canvas>
        {props.isRecording && (
          <span
            className="fcr-text-red fcr-font-bold fcr-text-2xl fcr-left-5"
            style={{ position: 'absolute', top: '10px' }}>
            录制中
          </span>
        )}
      </div>
      <div>
        <video autoPlay id="video" controls style={{ display: 'none' }}></video>
      </div>
    </div>
  );
};
