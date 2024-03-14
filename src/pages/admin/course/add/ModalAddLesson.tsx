import { Button, Tab, Tabs } from '@nextui-org/react';
import { IoMdClose } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
import { TiVideo } from 'react-icons/ti';
import { BsPostcardFill } from 'react-icons/bs';
import AddQuizLesson from './AddQuizLesson';

type ModalAddLessonProps = {
    isOpen: boolean;
    onOpenChange: () => void;
};
function ModalAddLesson(props: ModalAddLessonProps) {
    return (
        props.isOpen && (
            <div
                className="fixed flex justify-center items-center bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)] top-0 bottom-0 left-0 right-0 pt-10 pb-10"
                style={{
                    zIndex: 100000000000,
                }}
            >
                <div className="relative max-w-[60rem] w-1/2 min-w-[20rem] dark:bg-second-dark bg-second-light p-4 rounded-lg h-full ">
                    <h1 className="text-xl font-bold"> Thêm bài học</h1>
                    <Button
                        className="absolute top-4 right-4 hover:text-primary"
                        isIconOnly
                        variant="flat"
                        startContent={<IoMdClose className="cursor-pointer text-xl  " />}
                    ></Button>

                    <Tabs aria-label="Options" color="secondary" className="mt-5">
                        <Tab
                            key="quiz"
                            title={
                                <div className="flex items-center space-x-2">
                                    <MdModeEditOutline />
                                    <span>Bài trắc nghiệm</span>
                                </div>
                            }
                        >
                            <AddQuizLesson />
                        </Tab>
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
                            key="póst"
                            title={
                                <div className="flex items-center space-x-2">
                                    <BsPostcardFill />
                                    <span>Bài viết hướng dẫn</span>
                                </div>
                            }
                        />
                    </Tabs>
                </div>
            </div>
        )
    );
}

export default ModalAddLesson;
