import { fetchRecordList } from '@app/api/classhome';
import { useEffect, useState } from 'react';
import { Archeron, LeftIcon, RightIcon } from '@app/utils/classicons';
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
      <div>远端录制件</div>
      <div
        className="fcr-flex fcr-justify-items-center fcr-items-center"
        style={{ border: '1px solid #ccc' }}>
        <div className="fcr-w-1/6 fcr-flex fcr-justify-end fcr-mr-8">
          <img src={LeftIcon} alt="icon" className="fcr-w-12 fcr-cursor-pointer" />
        </div>
        <div className="fcr-grid fcr-grid-cols-5 fcr-gap-3 fcr-flex-1">
          {recordList &&
            recordList.map((item) => (
              <GridItem
                key={item.id}
                name={item.name}
                fileUrl={item.fileUrl}
                cover={item.cover}></GridItem>
            ))}
        </div>
        <div className="fcr-w-1/6 fcr-text-left fcr-ml-8">
          <img src={RightIcon} alt="icon" className="fcr-w-12 fcr-cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const GridItem = (props: { name: string; cover: string; fileUrl: string }) => {
  const { name, cover, fileUrl } = props;
  return (
    <div className=" fcr-cursor-pointer fcr-bg-black" style={{ border: '1px solid #ccc' }}>
      <img src={cover || Archeron} alt="cover" />
      <div className="fcr-text-white fcr-text-center ">{`${name.substring(0, 8)}...`}</div>
    </div>
  );
};
