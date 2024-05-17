import { useEffect } from 'react';
import { useCanvasStream } from '@app/hooks/classtalkhooks/useCanvasStream';

export const CanvasComp = (props: { isRecording: boolean }) => {
  const { createProcess } = useCanvasStream();
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
