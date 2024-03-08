import { Button, Input, Image, BreadcrumbItem, Breadcrumbs, Textarea } from '@nextui-org/react';
import { MdOutlineSubtitles } from 'react-icons/md';
import { MdTitle } from 'react-icons/md';
import UploadFile from '../../../components/UploadFile';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from './Editor';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../enum/path';

function CreatePost() {
    const history = useNavigate();
    const [thumbnail, setThumbnail] = useState<string>('');
    return (
        <motion.div
            initial={{ transform: 'translateY(200px)' }}
            animate={{ transform: 'translateY(0)' }}
            className="w-full h-full overflow-auto fixed pb-20 top-0 bottom-0 right-0 left-0 dark:bg-black bg-white z-[100000000]"
        >
            <Breadcrumbs className="p-10">
                <BreadcrumbItem onClick={() => history(path.HOME)}>Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>Bài viết</BreadcrumbItem>
                <BreadcrumbItem>Thêm bài viết</BreadcrumbItem>
            </Breadcrumbs>

            <div className="w-full items-center pb-12 flex justify-center gap-24">
                <div className="w-[30rem]">
                    <Button variant="light" className="mt-5 mb-5">
                        Xem trước
                    </Button>
                    {!thumbnail && (
                        <UploadFile
                            onFinished={(res: string) => {
                                setThumbnail(res);
                            }}
                        />
                    )}
                    {thumbnail && (
                        <Image alt={thumbnail} className="h-[12rem] min-w-[24rem] w-full bg-contain" src={thumbnail} />
                    )}
                </div>
                <div className="p-10 w-[30rem] flex flex-col gap-4">
                    <Input
                        startContent={<MdOutlineSubtitles className="text-xl" />}
                        type="text"
                        className="w-full"
                        label="Nhập tiêu đề của bài post (Bắt buộc)"
                        labelPlacement={'outside'}
                        placeholder=""
                    />

                    <Textarea
                        startContent={<MdTitle className="text-xl" />}
                        label="Nhập mô tả của bài post"
                        placeholder="Enter your description"
                        labelPlacement={'outside'}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="max-w-4xl m-auto mt-5 select-none">
                <Editor />
            </div>

            <motion.div
                initial={{ transform: 'translateY(400px)', opacity: 0 }}
                animate={{ transform: 'translateY(0)', opacity: 1 }}
                transition={{
                    delay: 0.5,
                }}
                className="w-full flex flex-col gap-5 justify-center items-center"
            >
                <h5>(Lưu ý : Bài viết của bạn sẽ được quản trị viên duyệt trước khi được đăng lên...)</h5>
                <Button color="success" className="text-white dark:text-black">
                    Xác nhận đăng
                </Button>
            </motion.div>
        </motion.div>
    );
}

export default CreatePost;
