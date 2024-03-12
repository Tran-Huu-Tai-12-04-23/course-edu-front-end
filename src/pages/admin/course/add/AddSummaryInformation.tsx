import { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import UploadFile from '../../../../components/UploadFile';
import { MdOutlineSubtitles, MdTitle } from 'react-icons/md';
import { FaHeading } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/gr';
import SelectCategoryCourse from '../SelectCategoryCourse';
import { EStep } from '.';

type AddSummaryInformationProps = {
    onNextStep: () => void;
};
function AddSummaryInformation(props: AddSummaryInformationProps) {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [subTitle, setSubtitle] = useState<string>('');
    return (
        <div className="w-full h-full">
            <h1 className="font-bold text-xl">Điền thông tin cơ bản của khóa học</h1>

            <div className="mt-10 flex justify-between items-center gap-10">
                <UploadFile
                    onFinished={function (res: string): void {
                        throw new Error('Function not implemented.');
                    }}
                    value={''}
                />

                <div className="w-full flex flex-col gap-6">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        startContent={<FaHeading className="text-xl" />}
                        type="text"
                        className="w-full"
                        label="Nhập tiêu đề của bài post (Bắt buộc)"
                        labelPlacement={'outside'}
                        placeholder=""
                    />

                    <Input
                        value={subTitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        startContent={<MdOutlineSubtitles className="text-xl" />}
                        label="Nhập tiêu đề phụ của bạn"
                        labelPlacement={'outside'}
                        className="w-full"
                    />
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        startContent={<MdTitle className="text-xl" />}
                        label="Nhập mô tả của bài post"
                        placeholder="..."
                        labelPlacement={'outside'}
                        className="w-full"
                    />

                    <SelectCategoryCourse
                        onResult={function (res: string): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-end items-center">
                <Button
                    onClick={() => props.onNextStep()}
                    startContent={<GrFormNextLink className="text-xl" />}
                    color="success"
                    className="text-white"
                >
                    Tiếp theo
                </Button>
            </div>
        </div>
    );
}

export default AddSummaryInformation;
