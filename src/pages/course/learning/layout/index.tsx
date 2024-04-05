import Header from './Header';
import Footer from './Footer';
import UtilsButton from './UtilsButton';
import { ICourse } from '../../../../model/Course.model';

type LearningLayoutProps = {
   children: React.ReactNode;
   data: ICourse;
};
function LearningLayout(props: LearningLayoutProps) {
   return (
      <div className="w-screen min-h-screen ">
         <Header data={props.data} />
         {props.children}
         <Footer />
         <UtilsButton />
      </div>
   );
}

export default LearningLayout;
