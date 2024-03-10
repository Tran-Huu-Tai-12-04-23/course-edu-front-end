import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import AdminLayout from '../../../layouts/AdminLayout';
import { path } from '../../../enum/path';
import { useNavigate } from 'react-router-dom';
import FilterBarPost from './FilterBarPost';
import Table from './Table';
import { useState } from 'react';

type IFilterPost = {
    tags: string;
    state: string;
    searchKey: string;
    typeOrder: string;
};
function Post() {
    const history = useNavigate();
    const [filterData, setFilterData] = useState<IFilterPost>({
        tags: '',
        searchKey: '',
        state: '',
        typeOrder: '',
    });

    console.log(filterData);

    return (
        <AdminLayout>
            <div className="w-full  p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => history(path.ADMIN.DASHBOARD)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Bài viết</BreadcrumbItem>
                </Breadcrumbs>

                <FilterBarPost onChange={(res: IFilterPost) => setFilterData(res)} />

                <div className="pt-5">
                    <Table />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Post;
