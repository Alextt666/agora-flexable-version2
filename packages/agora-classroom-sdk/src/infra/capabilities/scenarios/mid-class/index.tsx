import classnames from 'classnames';
import { Layout } from '@classroom/ui-kit/components/layout';
import { DialogContainer } from '@classroom/infra/capabilities/containers/dialog';
import { HandsUpContainer } from '@classroom/infra/capabilities/containers/hand-up';
import { LoadingContainer } from '@classroom/infra/capabilities/containers/loading';
import { NavigationBar } from '@classroom/infra/capabilities/containers/nav';
import { FixedAspectRatioRootBox } from '@classroom/infra/capabilities/containers/root-box';
import { SceneSwitch } from '@classroom/infra/capabilities/containers/scene-switch';
import { RoomMidStreamsContainer } from '@classroom/infra/capabilities/containers/stream/room-mid-player';
import { ToastContainer } from '@classroom/infra/capabilities/containers/toast';
import { Award } from '../../containers/award';
import Room from '../room';
import { useStore } from '@classroom/infra/hooks/ui-store';
import { Float } from '@classroom/ui-kit';
import { ScenesController } from '../../containers/scenes-controller';
import { ScreenShareContainer } from '../../containers/screen-share';
import { WhiteboardToolbar } from '../../containers/toolbar';
import { WidgetContainer } from '../../containers/widget';
import { Chat, Watermark, Whiteboard } from '../../containers/widget/slots';
import { StreamWindowsContainer } from '../../containers/stream-window';
import CameraPreview from '../../containers/camera-preview';
import { useEffect, useState } from 'react';

export const MidClassScenario = () => {
  const [isSingle, setIsSingle] = useState<boolean>(false);
  // Screen-Num-Config-alex-tag
  const screenNumLimit = 2;
  useEffect(() => {
    // const role = sessionStorage.getItem('role');
    const screenNum = sessionStorage.getItem('screen');
    if (screenNum && +screenNum >= screenNumLimit) {
      setIsSingle(false);
    }
  });
  return <Room>{isSingle ? <AgoraOriginSingle /> : <ClassTalkDouble />}</Room>;
};

// Agora-origin-single
const AgoraOriginSingle = () => {
  // layout
  const layoutCls = classnames('edu-room', 'mid-class-room');
  const { shareUIStore } = useStore();
  return (
    <FixedAspectRatioRootBox trackMargin={{ top: shareUIStore.navHeight }}>
      <SceneSwitch>
        <Layout className={layoutCls} direction="col">
          <NavigationBar />
          <Layout
            className="fcr-flex-grow fcr-items-stretch fcr-relative fcr-justify-center fcr-room-bg"
            direction="col">
            <RoomMidStreamsContainer />
            <Whiteboard />
            <ScreenShareContainer />
            <StreamWindowsContainer />
          </Layout>
          <WhiteboardToolbar />
          <ScenesController />
          <Float bottom={15} right={10} align="flex-end" gap={2}>
            <HandsUpContainer />
            <Chat />
          </Float>
          <DialogContainer />
          <LoadingContainer />
        </Layout>
        <WidgetContainer />
        <ToastContainer />
        <Award />
        <CameraPreview />
        <Watermark />
        {/* <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <button onClick={expandPlayerUIStore.openWindow}>Open expand player</button>
          <button onClick={expandPlayerUIStore.closeWindow}>Close expand player</button>
        </div> */}
      </SceneSwitch>
    </FixedAspectRatioRootBox>
  );
};

// class-talk-double
const ClassTalkDouble = () => {
  const layoutCls = classnames('edu-room', 'mid-class-room');
  const { shareUIStore } = useStore();
  return (
    <FixedAspectRatioRootBox trackMargin={{ top: shareUIStore.navHeight }}>
      <SceneSwitch>
        <Layout className={layoutCls} direction="col">
          <NavigationBar />
          <Layout
            className="fcr-flex-grow fcr-items-stretch fcr-relative fcr-justify-center fcr-room-bg"
            direction="col">
            <RoomMidStreamsContainer />
            <Whiteboard />
            <ScreenShareContainer />
            <StreamWindowsContainer />
          </Layout>
          <WhiteboardToolbar />
          <ScenesController />
          <Float bottom={15} right={10} align="flex-end" gap={2}>
            <HandsUpContainer />
            <Chat />
          </Float>
          <DialogContainer />
          <LoadingContainer />
        </Layout>
        <WidgetContainer />
        <ToastContainer />
        <Award />
        <CameraPreview />
        <Watermark />
      </SceneSwitch>
    </FixedAspectRatioRootBox>
  );
};
