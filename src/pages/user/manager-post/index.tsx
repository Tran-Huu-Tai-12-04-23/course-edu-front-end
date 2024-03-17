import { BreadcrumbItem, Breadcrumbs, Button } from '@nextui-org/react';
import PostUserItem from './PostUserItem';
import { path } from '../../../enum/path';
import { useNavigate } from 'react-router-dom';
import { IPostItem } from '../../../model/Post.model';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/authContext';

const getAllPostByUserId = async (userId: number): Promise<IPostItem[] | null> => {
    try {
        const response = await fetch('https://localhost:7005/api/post/user/' + userId, {
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
        return null;
    }
};

function UserManagerPost() {
    const history = useNavigate();
    const [posts, setPosts] = useState<IPostItem[]>([]);
    const { user } = useAuth();

    const handleRemovePost = (id: any) => {
        setPosts((prev) => prev.filter((i) => i.id !== id));
    };

    useEffect(() => {
        const getData = async () => {
            if (user) {
                const data = await getAllPostByUserId(user.id ?? 0);
                if (data) {
                    setPosts(data);
                    console.log(data);
                }
            }
        };

        getData();
    }, [user]);

    return (
        <>
            <Breadcrumbs className="mt-5">
                <BreadcrumbItem
                    onClick={() => {
                        history(path.HOME);
                    }}
                >
                    Trang chủ
                </BreadcrumbItem>
                <BreadcrumbItem>Người dùng</BreadcrumbItem>
                <BreadcrumbItem>Tất cả bài viết đã đăng</BreadcrumbItem>
            </Breadcrumbs>

            {/* <h1 className="mt-5 mb-5 text-2xl font-semibold">Tất cả bài viết đã đăng</h1> */}
            <div className="flex justify-start items-center flex-wrap w-full mt-5">
                {posts.map((post, i) => (
                    <PostUserItem key={i} data={post} onRemove={handleRemovePost} />
                ))}
            </div>
            <div className="w-fit m-auto mt-5">
                <Button variant="light" color="primary">
                    Xem thêm
                </Button>
            </div>
        </>
    );
}

export default UserManagerPost;
