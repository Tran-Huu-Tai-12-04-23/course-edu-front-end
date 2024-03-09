import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import AdminLayout from '../../../layouts/AdminLayout';
import { path } from '../../../enum/path';
import { useNavigate } from 'react-router-dom';
import FilterBarPost from './FilterBarPost';
import Table from '../../../components/Table';

function Post() {
    const history = useNavigate();

    return (
        <AdminLayout>
            <div className="w-full  p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => history(path.ADMIN.DASHBOARD)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Bài viết</BreadcrumbItem>
                </Breadcrumbs>

                <FilterBarPost />

                <div className="pt-5">
                    <Table />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Post;
