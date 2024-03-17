import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../../../layouts/AdminLayout';
import Table from './Table';
import { path } from '../../../../enum/path';

function Course() {
    const history = useNavigate();

    return (
        <AdminLayout>
            <div className="w-full  p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => history(path.ADMIN.COURSE)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Danh mục khóa học</BreadcrumbItem>
                </Breadcrumbs>

                <div className="pt-5">
                    <Table />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Course;
