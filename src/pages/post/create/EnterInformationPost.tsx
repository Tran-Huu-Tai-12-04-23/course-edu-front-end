import { Button, Input } from '@nextui-org/react';
import { MdOutlineSubtitles } from 'react-icons/md';
import { MdTitle } from 'react-icons/md';
import UploadFile from '../../../components/UploadFile';

function EnterInformationPost() {
    return (
        <div className="w-full h-full fixed top-0 bottom-0 right-0 left-0 dark:bg-black bg-white z-[100000000]">
            <div className="w-full items-center p-24 pb-12 flex justify-center gap-24">
                <div className="w-[30rem]">
                    <h5 className="mb-5">Xem trước</h5>
                    <UploadFile />
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

                    <Input
                        startContent={<MdTitle className="text-xl" />}
                        type="text"
                        className="w-full"
                        label="Nhập mô tả của bài post"
                        labelPlacement={'outside'}
                        placeholder=""
                    />
                </div>
            </div>
            <div className="w-full flex flex-col gap-5 justify-center items-center">
                <h5>(Lưu ý : Bài viết của bạn sẽ được quản trị viên duyệt trước khi được đăng lên...)</h5>
                <Button color="success" className="text-white dark:text-black">
                    Xác nhận đăng
                </Button>
            </div>
        </div>
    );
}

export default EnterInformationPost;
