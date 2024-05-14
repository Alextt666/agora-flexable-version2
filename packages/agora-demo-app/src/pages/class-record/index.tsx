import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
export const ClassRecord = observer(() => {
    const history = useHistory();

    const handleBack = ()=>{
        history.push('/')
    }
  return (
    <div className="fcr-h-full fcr-flex fcr-justify-center fcr-items-center fcr-font-bold fcr-text-xl">
      Record
      <div onClick={handleBack}>back</div>
    </div>
  );
});
