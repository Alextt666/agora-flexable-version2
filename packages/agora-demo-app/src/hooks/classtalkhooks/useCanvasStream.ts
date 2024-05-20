import { aMessage } from '@app/components/message';
export const useCanvasStream = () => {
  let frameTimer: number;
  // 渲染视频流
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
  // 渲染播放流
  const rendPlayStream = async (videoDom: HTMLVideoElement, url: string) => {
    console.log(videoDom, url, '===========>video local');
    videoDom.src = url;
    videoDom.play();
    videoDom.style.display = 'block'
  };
  // 渲染函数
  const canvasRander = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
  ) => {
    return () => {
      frameTimer = window.requestAnimationFrame(canvasRander(ctx, canvas, video));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };
  };
  // 开始渲染
  const createProcess: (config: { isLocal: boolean; localURL?: string }) => void = async (
    config = { isLocal: true },
  ) => {
    const { isLocal, localURL } = config;
    const video = document.querySelector('#video') as HTMLVideoElement;
    const canvas = document.querySelector('#render') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.height = 460;
    canvas.width = canvas.height / (9 / 16);
    video.addEventListener('play', () => {
      canvasRander(ctx, canvas, video)();
    });
    try {
      if (isLocal) {
        await rendStream(video);
        return;
      }
      if (!localURL) {
        aMessage.warning({
          key: 'localURL',
          content: '请选择本地播放地址',
          duration: 1,
        });
        return;
      }
      await rendPlayStream(video, localURL);
    } catch (e) {
      aMessage.warning({
        key: 'compileFail',
        content: '播放解析失败',
        duration: 1,
      });
    }
  };

  // 停止渲染
  const stopProcess = () => {
    window.cancelAnimationFrame(frameTimer);
  };

  return { createProcess, stopProcess };
};
