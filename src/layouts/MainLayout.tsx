import Header from '../components/Header';
import NavigateBar from '../components/NavigateBar';
import Footer from '../components/Footer';

type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout(props: MainLayoutProps) {
    return (
        <div className="max-w-screen min-h-screen select-none">
            <Header />
            <div className="flex pt-header gap-2 justify-start items-start w-full overflow-hidden pb-32">
                <div className="w-full">{props.children}</div>
            </div>
            <NavigateBar />

            <Footer />
        </div>
    );
}

export default MainLayout;
