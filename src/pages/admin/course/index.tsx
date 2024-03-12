import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { path } from '../../../enum/path';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FilterBarCourse from './FilterBarCourse';
import Table from './Table';
import { IStateCourse } from '../../../model/Course.model';

export type IFilterCourse = {
    category: string;
    state: IStateCourse | -1;
    orderType: string | -1;
    key: string;
};
function Course() {
    const history = useNavigate();

    const [filterData, setFilterData] = useState<IFilterCourse>({
        category: '',
        state: -1,
        orderType: -1,
        key: '',
    });

    console.log(filterData);
    return (
        <AdminLayout>
            <div className="w-full  p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => history(path.ADMIN.COURSE)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Khóa học</BreadcrumbItem>
                </Breadcrumbs>

                <FilterBarCourse onChange={(res: IFilterCourse) => setFilterData(res)} />
                <div className="pt-5">
                    <Table />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Course;
