import { VideoIcon, FilesIcon } from '../icons';
const UnderSection = () => {
  return (
    <div className="fcr-mt-6 fcr-grid fcr-grid-cols-2 fcr-gap-6 fcr-text-white fcr-font-bold fcr-text-lg">
      <div className="sys-shadow fcr-flex fcr-flex-col fcr-gap-2 fcr-justify-center fcr-items-center fcr-cursor-pointer">
        <span>本地录课</span>
        <img src={VideoIcon} alt="video" />
      </div>
      <div className="sys-shadow fcr-flex fcr-flex-col fcr-gap-2 fcr-justify-center fcr-items-center fcr-cursor-pointer">
        <span>课程资源</span>
        <img src={FilesIcon} alt="video" />
      </div>
    </div>
  );
};

export default UnderSection;
