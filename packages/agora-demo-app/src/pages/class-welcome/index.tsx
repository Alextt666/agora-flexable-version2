import { observer } from 'mobx-react';
import ClasstalkInfo from './info/Info';
import CompositeArea from './composite/index';
import type { InClassTalkConfig, TableInfo, AgoraConfig, TableInfoProps } from '@app/ctype';
import { useHistory } from 'react-router';
import { useState, useContext } from 'react';
import { GlobalStoreContext } from '@app/stores';
import './index.css';
import NoClass from '@app/assets/classtalk/noclass.svg';

export const ClassWelcome = observer(() => {
  const [agoraLaunchConfig, setAgoraLaunchConfig] = useState<AgoraConfig | null>(null);
  const [tableConfig, setTableConfig] = useState<TableInfo | null>(null);
  const history = useHistory();
  const { language, region, setLaunchConfig } = useContext(GlobalStoreContext);
  const handleFetchDone = async (params: InClassTalkConfig) => {
    console.log('handleFetchDone', params);
    setTableConfig(params.tableInfo);
    setAgoraLaunchConfig(params.agoraConfig);
  };
  const handleEnter = () => {
    //@ts-ignore
    setLaunchConfig({ language, region, ...agoraLaunchConfig });
    history.push('/launch');
  };
  return (
    <div className="classtalk-enter-wrapper">
      <ClasstalkInfo onDone={(params: InClassTalkConfig) => handleFetchDone(params)} />
      <div className=" fcr-w-full fcr-flex fcr-justify-center">
        <div className="classtalk-content fcr-w-7/12">
          <div className='regular-class fcr-flex fcr-flex-col'>
            <div className="fcr-p-4 fcr-text-white fcr-font-bold fcr-text-lg">今日课程</div>
            {tableConfig ? (
              <InterItem tableConfig={tableConfig} onEnter={handleEnter} />
            ) : (
              <div className="fcr-mt-4 fcr-w-full fcr-flex fcr-justify-center fcr-flex-1">
                <img className="fcr-w-1/2" src={NoClass} alt="noclass" />
              </div>
            )}
          </div>
          <CompositeArea />
        </div>
      </div>
    </div>
  );
});

const InterItem = (props: TableInfoProps) => {
  const { tableConfig, onEnter } = props;
  const { startTime, endTime, subjectName, onlineTeacher, offlineTeacher, courseName } =
    tableConfig;
  return (
    <div className="inter-item">
      <div className="fcr-p-2 fcr-pl-6 fcr-text-white fcr-text-lg fcr-font-bold">
        <div>{`${startTime}-${endTime}`}</div>
        <div className="fcr-mt-1 fcr-text-md fcr-font-normal">{`${subjectName}`}</div>
      </div>
      <div className="fcr-p-2 fcr-pl-6 fcr-text-white fcr-text-lg fcr-font-bold">
        <div>{`${onlineTeacher}/${offlineTeacher}`}</div>
        <div className="fcr-mt-1 fcr-text-md fcr-font-normal">{`${courseName}`}</div>
      </div>
      <div
        className="fcr-flex fcr-justify-center fcr-items-center fcr-cursor-pointer"
        onClick={onEnter}>
        👉
      </div>
    </div>
  );
};
