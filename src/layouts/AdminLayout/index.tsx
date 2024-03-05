import Sidebar from './Sidebar';
import Header from './header';
type AdminLayoutProps = {
    children: React.ReactNode;
};
function AdminLayout(props: AdminLayoutProps) {
    return (
        <div className="max-w-screen flex justify-between m-auto min-h-screen select-none">
            <Sidebar />
            <Header />
            <div style={{}} className="w-full relative overflow-hidden">
                {props.children}
            </div>
        </div>
    );
}

export default AdminLayout;
