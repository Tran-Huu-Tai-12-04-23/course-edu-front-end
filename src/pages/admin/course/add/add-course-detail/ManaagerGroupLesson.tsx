import Group from './Group';
import { IGroupLesson, ILesson, ITypeLesson } from '../../../../../model/Course.model';
import { Button } from '@nextui-org/react';
import { IoAdd } from 'react-icons/io5';
import { useState } from 'react';
import ModalAddLesson from './ModalAddLesson';

const GroupLessonDataExample = [
    {
        id: 1,
        title: 'Tim hieu ve php ',
        totalLesson: 0,
        lessons: [],
        index: 0,
        type: ITypeLesson.Post,
    },
    {
        id: 2,
        title: 'Dde quy',
        totalLesson: 1,
        index: 1,
        type: ITypeLesson.Post,
        lessons: [
            {
                id: 1,
                index: 0,
                title: ' Hoc flexbox qua vi du',
            },
        ],
    },
];
function ManagerGroupLesson() {
    const [isAddNewLesson, setIsAddNewLesson] = useState(false);
    const [lessons, setLessons] = useState<ILesson[]>([]);
    const [groupLesson, setGroupLesson] = useState<IGroupLesson[]>([]);
    return (
        <div className="w-full flex ">
            <div className="border-r-[1px] border-solid border-gray-500/10">
                <div className="max-w-[26rem] pb-2 p-4 border-b-[1px] border-solid border-gray-500/10">
                    <h5 className="text-2xl font-extrabold">Quản lý danh sách nhóm bài học</h5>
                    <h5>Dựa vào nhóm bài học , bạn chia bài học thành từng nhóm. Kéo thả sắp xếp vị trí của bài học</h5>
                </div>

                <div className="w-[26rem]">
                    {GroupLessonDataExample.map((item) => (
                        <Group data={item} />
                    ))}
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between p-6 pb-6 border-b-[1px] border-solid border-gray-500/10">
                    <div className="">
                        <h5 className="text-2xl font-extrabold">1. Tim hieu ve php </h5>
                        <h5>Dựa vào bài học , bạn có các loại bài học khác nhau. Kéo thả sắp xếp vị trí của bài học</h5>
                    </div>
                    <Button
                        onClick={() => setIsAddNewLesson(true)}
                        startContent={<IoAdd className="text-xl" />}
                        color="primary"
                    >
                        Thêm bài học
                    </Button>
                </div>

                <div className=""></div>
            </div>

            <ModalAddLesson
                isOpen={isAddNewLesson}
                onOpenChange={function (): void {}}
                onClose={function (): void {
                    setIsAddNewLesson(false);
                }}
                onResult={function (res: ILesson): void {
                    setLessons((prev) => [...prev, { ...res }]);
                }}
            />
        </div>
    );
}

export default ManagerGroupLesson;
