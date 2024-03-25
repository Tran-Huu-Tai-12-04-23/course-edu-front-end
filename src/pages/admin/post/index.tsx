import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import AdminLayout from '../../../layouts/AdminLayout';
import { path } from '../../../enum/path';
import { useNavigate } from 'react-router-dom';
import FilterBarPost from './FilterBarPost';
import Table from './Table';
import { useEffect, useState } from 'react';
import { IPostItem } from '../../../model/Post.model';
import { Constant } from '../../../constant';

type IFilterPost = {
    tags: string;
    state: string;
    searchKey: string;
    typeOrder: string;
};

const getAllPost = async (): Promise<IPostItem[] | null> => {
    try {
        const response = await fetch(Constant.BASE_URL_API + 'post', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData: IPostItem[] = await response.json();

        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

function Post() {
    const history = useNavigate();
    const [data, setData] = useState<IPostItem[]>([]);
    const [filterData, setFilterData] = useState<IFilterPost>({
        tags: '',
        searchKey: '',
        state: '',
        typeOrder: '',
    });

    useEffect(() => {
        const initData = async () => {
            const posts = await getAllPost();
            posts && setData(posts);
        };

        initData();
    }, []);
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
                    <Table data={data} />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Post;
