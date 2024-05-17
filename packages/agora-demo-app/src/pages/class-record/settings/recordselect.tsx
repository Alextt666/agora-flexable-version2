import { useCanvasStream } from '@app/hooks/classtalkhooks/useCanvasStream';
export const RecordSelect = () => {
  const { createProcess } = useCanvasStream();
  const handleOpenRecord = () => {
    const iptDom = document.createElement('input');
    iptDom.type = 'file';
    iptDom.addEventListener('change', (event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files ? input.files[0] : null;
      if (file) {
        createProcess({ isLocal: false });
        // videoPlayer.src =;
        // videoPlayer.play();
      }
    });
    iptDom.click();
  };
  return (
    <div
      className="fcr-text-white fcr-w-1/2 fcr-p-2 fcr-cursor-pointer"
      style={{ border: '1px solid #ccc', boxShadow: '0 0 10px #ccc' }}
      onClick={handleOpenRecord}>
      回放录像
    </div>
  );
};
