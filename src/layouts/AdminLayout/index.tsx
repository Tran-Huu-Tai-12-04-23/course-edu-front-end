import Sidebar from './Sidebar';
import Header from './header';
type AdminLayoutProps = {
    children: React.ReactNode;
};
function AdminLayout(props: AdminLayoutProps) {
    return (
        <div className="max-w-screen flex  justify-between m-auto min-h-screen select-none">
            <Sidebar />
            <div className="min-w-[14rem] dark:bg-second-dark bg-light-primary"></div>
            <Header />
            <div style={{}} className="w-full relative overflow-hidden dark:bg-second-dark bg-light-primary p-10 pt-20">
                {props.children}
            </div>
        </div>
    );
}

export default AdminLayout;
