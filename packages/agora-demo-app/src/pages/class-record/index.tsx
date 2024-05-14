import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import './index.css';
import { HomeIcon } from '@app/utils/classicons';
export const ClassRecord = observer(() => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };
  return (
    <div className="classtalk-record-wrapper ">
      <header>
        <nav className=" fcr-ml-8 fcr-text-white fcr-p-8 fcr-font-bold fcr-flex fcr-justify-between">
          <span style={{ fontSize: '2rem' }}> 智 能 录 播 系 统</span>
          <div
            className="fcr-w-6 fcr-flex fcr-justify-items-center fcr-items-center fcr-mr-12"
            onClick={handleBack}>
            <ImageIcon className="fcr-w-full" iconSrc={HomeIcon}></ImageIcon>
          </div>
        </nav>
      </header>
      <div className="classtalk-content-wrapper">
        <div>canvas</div>
        <div>miaoshu</div>
        <div>record</div>
      </div>
    </div>
  );
});

const ImageIcon = (props: { className: string; iconSrc: string }) => {
  const className = props.className || '';
  return <img key={Math.random()} src={props.iconSrc} className={className} />;
};
