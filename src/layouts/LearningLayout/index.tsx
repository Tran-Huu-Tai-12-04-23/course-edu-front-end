import Header from './Header';
import Footer from './Footer';
import UtilsButton from './UtilsButton';

type LearningLayoutProps = {
    children: React.ReactNode;
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
