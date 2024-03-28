import { Button, Chip, Input, ScrollShadow, Tab, Tabs, Textarea } from '@nextui-org/react';
import { IoMdClose } from 'react-icons/io';
import { MdModeEditOutline, MdTitle } from 'react-icons/md';
import { TiVideo } from 'react-icons/ti';
import { BsPostcardFill } from 'react-icons/bs';
import AddQuizLesson from '../quiz/AddQuizLesson';
import { memo, useState } from 'react';
import FormAddVideo from '../video/FormAddVideo';
import FormAddPost from '../post/FormAddPost';
import { ILesson, IQuestion, ITypeLesson, IVideoLesson } from '../../../../../model/Course.model';
import { FaHeading } from 'react-icons/fa6';
import uuid from 'react-uuid';

type ModalAddLessonProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    onClose: () => void;
    onResult: (res: ILesson) => void;
};
type IInput = {
    title: string;
    description: string;
};
function ModalAddLesson(props: ModalAddLessonProps) {
    const [selected, setSelected] = useState<any>('quiz');
    const [input, setInput] = useState<IInput>({
        title: '',
        description: '',
    });

    const handleChangeInput = (key: keyof IInput, value: string) => {
        setInput((prev) => {
            return {
                ...prev,
                [key]: value,
            };
        });
    };
    return (
        props.isOpen && (
            <div
                className="fixed flex justify-center items-start pt-10 dark:bg-second-dark bg-second-light top-0 bottom-0 left-0 right-0 "
                style={{
                    zIndex: 100000000000,
                }}
            >
                <Button
                    onClick={props.onClose}
                    className="absolute top-4 right-4 hover:text-primary"
                    isIconOnly
                    variant="flat"
                    startContent={<IoMdClose className="cursor-pointer text-xl  " />}
                ></Button>

                <div className="flex flex-col gap-4 fixed z-50 top-4 shadow-2xl ">
                    <h1 className="text-xl font-bold"> Thêm bài học</h1>
                </div>
                <div className="flex w-full justify-center ">
                    <div className="relative max-w-screen-2xl w-3/4 min-w-[20rem]  p-4 rounded-lg h-full ">
                        <div className="">
                            <Input
                                value={input.title}
                                onChange={(e) => handleChangeInput('title', e.target.value)}
                                startContent={<FaHeading className="text-xl" />}
                                type="text"
                                className="w-full"
                                label="Nhập tiêu đề của bài post (Bắt buộc)"
                                labelPlacement={'outside'}
                                placeholder=""
                            />

                            <Textarea
                                value={input.description}
                                onChange={(e) => handleChangeInput('description', e.target.value)}
                                startContent={<MdTitle className="text-xl" />}
                                label="Nhập mô tả của bài post"
                                placeholder="..."
                                labelPlacement={'outside'}
                                className="w-full"
                            />
                        </div>

                        <Tabs
                            onSelectionChange={(key) => setSelected(key)}
                            aria-label="Options"
                            color="secondary"
                            className="mt-12"
                        >
                            <Tab
                                key="quiz"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <MdModeEditOutline />
                                        <span>Bài trắc nghiệm</span>
                                    </div>
                                }
                            />
                            <Tab
                                key="video"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <TiVideo />
                                        <span>Video bài giảng</span>
                                    </div>
                                }
                            />
                            <Tab
                                key="post"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <BsPostcardFill />
                                        <span>Bài viết hướng dẫn</span>
                                    </div>
                                }
                            />
                        </Tabs>
                        <ScrollShadow size={10} className="w-full h-[70vh] p-4">
                            {selected === 'quiz' && (
                                <AddQuizLesson
                                    onResult={function (res: IQuestion[]): void {
                                        props.onClose();
                                        props.onResult({
                                            id: uuid(),
                                            ...input,
                                            index: -1,
                                            quiz: [...res],
                                            type: ITypeLesson.Quiz,
                                        });
                                        props.onClose();
                                    }}
                                />
                            )}
                            {selected === 'video' && (
                                <FormAddVideo
                                    onResult={function (res: IVideoLesson): void {
                                        props.onResult({
                                            id: uuid(),
                                            ...input,
                                            index: -1,
                                            video: { ...res },
                                            type: ITypeLesson.Video,
                                        });
                                        props.onClose();
                                    }}
                                />
                            )}
                            {selected === 'post' && (
                                <FormAddPost
                                    onResult={(res) => {
                                        props.onResult({
                                            id: uuid(),
                                            ...input,
                                            index: -1,
                                            post: { ...res },
                                            type: ITypeLesson.Post,
                                        });
                                        props.onClose();
                                    }}
                                />
                            )}
                        </ScrollShadow>
                    </div>
                </div>
            </div>
        )
    );
}

export default memo(ModalAddLesson);
