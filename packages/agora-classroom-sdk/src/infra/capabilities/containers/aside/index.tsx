import { useStore } from '@classroom/infra/hooks/ui-store';
import { LectureRoomStreamUIStore } from '@classroom/infra/stores/lecture/stream';
import { OneToOneStreamUIStore } from '@classroom/infra/stores/one-on-one/stream';
import { observer } from 'mobx-react';
import { FC, PropsWithChildren } from 'react';
import { Aside } from '@classroom/ui-kit';
//@ts-ignore
export const BigClassAside: FC<PropsWithChildren> = observer(({ children }) => {
  const { streamUIStore } = useStore();
  return (
    <Aside
      style={{ width: (streamUIStore as LectureRoomStreamUIStore).teacherVideoStreamSize.width }}>
      {children}
    </Aside>
  );
});
//@ts-ignore
export const OneToOneClassAside: FC<PropsWithChildren> = observer(({ children }) => {
  const { streamUIStore } = useStore();
  return (
    <Aside style={{ width: (streamUIStore as OneToOneStreamUIStore).videoStreamSize.width }}>
      {children}
    </Aside>
  );
});
