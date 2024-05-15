import { PlayIcon, StopIcon } from '@app/utils/classicons';

export const SettingComp = (props: {
  onBtnChange: (state: boolean) => void;
  isRecording: boolean;
}) => {
  const handleStart = () => {
    props.onBtnChange(true);
  };
  const handleEnd = () => {
    props.onBtnChange(false);
  };

  return (
    <div className="fcr-flex fcr-justify-center fcr-items-center fcr-text-center">
      <div className="fcr-w-1/4">left</div>
      <div className="fcr-text-white fcr-flex-1 fcr-h-full fcr-flex fcr-items-center fcr-flex-col">
        <div className="fcr-flex fcr-w-full fcr-justify-evenly fcr-pt-4 fcr-h-1/3">
          {/* <div>课程名称: xxxx小学 </div> */}
          <div>摄像头地址: rtsp://192.168.1.88/4</div>
        </div>
        {!props.isRecording ? (
          <div onClick={handleStart} className="fcr-cursor-pointer">
            <ImageIcon iconSrc={PlayIcon} className=""></ImageIcon>
          </div>
        ) : (
          <div onClick={handleEnd} className="fcr-cursor-pointer">
            <ImageIcon iconSrc={StopIcon} className=""></ImageIcon>
          </div>
        )}
      </div>
      <div className="fcr-w-1/4">right</div>
    </div>
  );
};

const ImageIcon = (props: { className: string; iconSrc: string }) => {
  const className = props.className || '';
  return <img key={Math.random()} src={props.iconSrc} className={className} />;
};
