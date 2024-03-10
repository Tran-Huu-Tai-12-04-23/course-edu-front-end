import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import AdminLayout from '../../../layouts/AdminLayout';
import { path } from '../../../enum/path';
import { useNavigate } from 'react-router-dom';
import FilterBarUser from './FilterBarUser';
import Table from './Table';

function User() {
    const history = useNavigate();
    return (
        <AdminLayout>
            <div className="w-full  p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => history(path.ADMIN.USER)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Người dùng</BreadcrumbItem>
                </Breadcrumbs>

                <FilterBarUser />

                <div className="pt-5">
                    <Table />
                </div>
            </div>
        </AdminLayout>
    );
}

export default User;
