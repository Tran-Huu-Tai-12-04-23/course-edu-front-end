import Header from './Header';
import Footer from './Footer';
import UtilsButton from './UtilsButton';
import { Roles } from '../../App';

type LearningLayoutProps = {
    children: React.ReactNode;
    isAuthenticated: boolean;
    roles?: Roles[];
};
function LearningLayout(props: LearningLayoutProps) {
    return (
        <div className="w-screen min-h-screen">
            <Header />
            {props.children}
            <Footer />

            <UtilsButton />
        </div>
    );
}

export default LearningLayout;
