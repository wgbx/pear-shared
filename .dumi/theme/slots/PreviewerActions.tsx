import DumiPreviewerActions from 'dumi/theme-default/slots/PreviewerActions';

const PreviewerActions: typeof DumiPreviewerActions = (props) => {
  return (
    <DumiPreviewerActions {...props} disabledActions={['CSB', 'STACKBLITZ']} />
  );
};

export default PreviewerActions;
