import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { path } from '../../../enum/path';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilterBarCourse from './FilterBarCourse';
import Table from './Table';
import { ICourse, IStatusCourse } from '../../../model/Course.model';
import { Constant } from '../../../constant';

export type IFilterCourse = {
    category: string;
    state: IStatusCourse | -1;
    orderType: string | -1;
    key: string;
};

const getAllCourse = async (): Promise<ICourse[] | null> => {
    try {
        const response = await fetch(Constant.BASE_URL_API + 'course', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData: ICourse[] = await response.json();

        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

function Course() {
    const history = useNavigate();
    const [data, setData] = useState<ICourse[]>([]);
    const [filterData, setFilterData] = useState<IFilterCourse>({
        category: '',
        state: -1,
        orderType: -1,
        key: '',
    });

    useEffect(() => {
        const initData = async () => {
            const courses = await getAllCourse();
            courses && setData(courses);
        };

        initData();
    }, []);

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
                    <Table data={data} />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Course;
