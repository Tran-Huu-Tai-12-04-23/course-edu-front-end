import { Button, Input } from '@nextui-org/react';
import { MdAdd } from 'react-icons/md';
import { BsFillImageFill } from 'react-icons/bs';

function AddQuizLesson() {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Tạo bài trắc nghiệm mới</h1>
                <Button isIconOnly startContent={<MdAdd />} color="primary" />
            </div>

            <div className="mt-5">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 rounded-lg bg-white dark:bg-black">
                    <Input label="Nhập câu hỏi : " placeholder=" " labelPlacement="outside" />
                    <div className="h-full">
                        <h1>Thêm hình ảnh</h1>
                        <Button isIconOnly startContent={<BsFillImageFill />} />
                    </div>
                    <Input label="Nhập câu trả lời 1 : " placeholder=" " labelPlacement="outside" />
                    <Input label="Nhập câu trả lời 2 :" placeholder=" " labelPlacement="outside" />
                    <Input label="Nhập câu trả lời 3 :" placeholder=" " labelPlacement="outside" />
                    <Input label="Nhập câu trả lời 4" placeholder=" " labelPlacement="outside" />
                </div>
                <Button startContent={<MdAdd />} color="secondary" className="mt-10">
                    Thêm câu hỏi
                </Button>
            </div>
        </div>
    );
}

export default AddQuizLesson;
