import { fetchRecordList } from '@app/api/classhome';
import { useEffect, useState } from 'react';
interface RecordListItem {
  cover: string;
  name: string;
  fileUrl: string;
  id: number;
}
export const RecordArea = () => {
  const [recordList, setRecordList] = useState<RecordListItem[]>();
  const initRecord = async () => {
    const res = await fetchRecordList({});
    console.log(res);
    const filterArr = res.rows.map((row: any) => {
      return {
        name: row.name || 'default',
        cover: row.cover,
        fileUrl: row.fileUrl,
        id: row.id,
      };
    });
    setRecordList(filterArr);
  };
  useEffect(() => {
    initRecord();
  }, []);
  return (
    <div>
      <div>title</div>
      <div
        className="fcr-flex fcr-justify-items-center fcr-items-center"
        style={{ border: '1px solid #ccc' }}>
        <div className="fcr-w-1/6 fcr-text-right">{'<'}</div>
        <div className="fcr-grid fcr-grid-cols-5 fcr-gap-2 fcr-flex-1">
          {recordList &&
            recordList.map((item) => (
              <GridItem
                key={item.id}
                name={item.name}
                fileUrl={item.fileUrl}
                cover={item.cover}></GridItem>
            ))}
        </div>
        <div className="fcr-w-1/6 fcr-text-left">{'>'}</div>
      </div>
      {/* <div>{recordList && recordList.map((item) => <div key={item.id}>{`${item.name.substring(0,8)}...`}</div>)}</div> */}
    </div>
  );
};

const GridItem = (props: { name: string; cover: string; fileUrl: string }) => {
  const { name, cover, fileUrl } = props;
  return (
    <div className="fcr-h-36 fcr-cursor-pointer" style={{ border: '1px solid #ccc' }}>
      {`${name.substring(0, 8)}...`}
    </div>
  );
};
