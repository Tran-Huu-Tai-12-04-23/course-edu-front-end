import { Button, ScrollShadow, Tab, Tabs } from '@nextui-org/react';
import { IoMdClose } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
import { TiVideo } from 'react-icons/ti';
import { BsPostcardFill } from 'react-icons/bs';
import AddQuizLesson from './quiz/AddQuizLesson';
import { memo, useState } from 'react';
import FormAddVideo from './video/FormAddVideo';
import FormAddPost from './post/FormAddPost';

type ModalAddLessonProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    onClose: () => void;
};
function ModalAddLesson(props: ModalAddLessonProps) {
    return (
        props.isOpen && (
            <div
                className="fixed flex justify-center items-center dark:bg-second-dark bg-second-light top-0 bottom-0 left-0 right-0 "
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
                <div className="relative max-w-[60rem] w-1/2 min-w-[20rem]  p-4 rounded-lg h-full ">
                    <ScrollShadow size={100} className="w-full h-screen">
                        <Tabs aria-label="Options" color="secondary" className="mt-12">
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
                            >
                                <FormAddVideo />
                            </Tab>
                            <Tab
                                key="post"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <BsPostcardFill />
                                        <span>Bài viết hướng dẫn</span>
                                    </div>
                                }
                            >
                                <FormAddPost />
                            </Tab>
                        </Tabs>
                    </ScrollShadow>
                </div>
            </div>
        )
    );
}

export default memo(ModalAddLesson);
