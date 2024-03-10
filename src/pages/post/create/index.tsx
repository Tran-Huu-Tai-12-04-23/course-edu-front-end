import { Button, Input, BreadcrumbItem, Breadcrumbs, Textarea } from '@nextui-org/react';
import { MdOutlineSubtitles } from 'react-icons/md';
import { MdTitle } from 'react-icons/md';
import UploadFile from '../../../components/UploadFile';
import { useState } from 'react';
import Editor from './Editor';
import { useLocation, useNavigate } from 'react-router-dom';
import { path } from '../../../enum/path';
import SelectCategoryBlog from '../../../components/SelectCategoryBlog';
import { TypeFragmentBlogItem } from '../../../components/FragmentBlogItem/FragmentBlogItem.type';
import { motion } from 'framer-motion';
import BlogView from '../../../components/BlogView';
import { IoClose } from 'react-icons/io5';

function CreatePost() {
    const pathname = useLocation();
    const history = useNavigate();
    const [thumbnail, setThumbnail] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [items, setItems] = useState<TypeFragmentBlogItem[]>([]);
    const [isPreview, setIsPreview] = useState<boolean>(false);
    return (
        <div className="w-full h-full overflow-auto  pb-20 top-0 bottom-0 right-0 left-0  z-[100000000]">
            {isPreview && (
                <>
                    <motion.div
                        initial={{
                            transform: 'translateY(200px)',
                            opacity: 0,
                        }}
                        animate={{
                            transform: 'translateY(0)',
                            opacity: 1,
                        }}
                        className="overflow-auto bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(0,0,0,0.1)] backdrop-blur-3xl z-[10000000] fixed top-0 left-0 right-0 bottom-0"
                    >
                        <BlogView
                            data={{
                                thumbnail,
                                tags,
                                title,
                                description,
                                items,
                            }}
                        />
                    </motion.div>
                    <Button
                        className="fixed top-10 right-1/2 translate-x-1/2 z-[10000000]"
                        onClick={() => setIsPreview(false)}
                        startContent={<IoClose className="text-xl" />}
                        isIconOnly
                    ></Button>
                </>
            )}
            <Breadcrumbs className="p-10">
                <BreadcrumbItem
                    onClick={() => {
                        if (pathname.pathname.includes(path.ADMIN.POST)) {
                            history(path.ADMIN.POST);
                        } else {
                            history(path.HOME);
                        }
                    }}
                >
                    {pathname.pathname.includes(path.ADMIN.POST) ? 'Quản trị ' : 'Trang chủ'}
                </BreadcrumbItem>
                <BreadcrumbItem>Bài viết</BreadcrumbItem>
                <BreadcrumbItem>Thêm bài viết</BreadcrumbItem>
            </Breadcrumbs>

            <div className="w-full items-center pb-12 flex justify-center gap-10">
                <div className="w-[30rem]">
                    <Button onClick={() => setIsPreview(true)} variant="light" className="mt-5 mb-5">
                        Xem trước
                    </Button>
                    <UploadFile
                        value={thumbnail}
                        onFinished={(res: string) => {
                            setThumbnail(res);
                        }}
                    />
                </div>
                <div className="p-10 w-[30rem] mt-[5rem] flex flex-col gap-4">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        startContent={<MdOutlineSubtitles className="text-xl" />}
                        type="text"
                        className="w-full"
                        label="Nhập tiêu đề của bài post (Bắt buộc)"
                        labelPlacement={'outside'}
                        placeholder=""
                    />

                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        startContent={<MdTitle className="text-xl" />}
                        label="Nhập mô tả của bài post"
                        placeholder="Enter your description"
                        labelPlacement={'outside'}
                        className="w-full"
                    />

                    <SelectCategoryBlog onResult={(res: string) => setTags(res)} />
                </div>
            </div>
            <div className="max-w-4xl m-auto mt-5 select-none">
                <Editor onResult={(res: TypeFragmentBlogItem[]) => setItems(res)} />
            </div>

            <div className="w-full flex flex-col gap-5 justify-center items-center">
                <h5>(Lưu ý : Bài viết của bạn sẽ được quản trị viên duyệt trước khi được đăng lên...)</h5>
                <Button color="success" className="text-white ">
                    Xác nhận đăng
                </Button>
            </div>
        </div>
    );
}

export default CreatePost;
