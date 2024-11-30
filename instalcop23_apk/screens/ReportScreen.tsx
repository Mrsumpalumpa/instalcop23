import Report from '../components/Report';
import ReportProvider from '../providers/ReportProvider';
import { ReportScreenProps } from '../models/generics';

const ReportScreen = (props:ReportScreenProps) => {
    return (
      <ReportProvider>
        <Report {...props}/>
      </ReportProvider>
  )};
export default ReportScreen