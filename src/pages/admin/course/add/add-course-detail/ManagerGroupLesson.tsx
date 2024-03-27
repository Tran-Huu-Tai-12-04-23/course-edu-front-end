import Group from './Group';
import { IGroupLesson, ILesson } from '../../../../../model/Course.model';
import { Button, Image } from '@nextui-org/react';
import { IoAdd } from 'react-icons/io5';
import { useState } from 'react';
import ModalAddLesson from './ModalAddLesson';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import ModalAddGroupLesson from './ModalAddGroupLesson';
import Lesson from './Lesson';

function ManagerGroupLesson() {
    const [isAddNewLesson, setIsAddNewLesson] = useState(false);
    const [lessons, setLessons] = useState<ILesson[]>([]);
    const [groupLesson, setGroupLesson] = useState<IGroupLesson[]>([]);
    const [groupLessonSelected, setGroupLessonSelected] = useState<IGroupLesson | null>(null);

    function handleOnDragEnd(result: any): void {
        console.log(result);
        if (!result.destination) return;
        const indexDes = result.destination.index;
        const indexSource = result.source.index;
        console.log(indexDes);
        console.log(indexSource);
        const newItems = Array.from(groupLesson);
        const [reorderedItem] = newItems.splice(indexSource, 1);
        newItems.splice(indexDes, 0, reorderedItem);
        const clonedItems = newItems.map((item: IGroupLesson, index) => ({ ...item, index }));
        console.log(clonedItems);
        setGroupLesson(clonedItems);
    }

    return (
        <>
            <div className="w-full flex ">
                <div className="border-r-[1px] border-solid border-gray-500/10">
                    <div className="max-w-[26rem] pb-2 p-4 border-b-[1px] border-solid border-gray-500/10">
                        <h5 className="text-2xl font-extrabold">Quản lý danh sách nhóm bài học</h5>
                        <h5>
                            Dựa vào nhóm bài học , bạn chia bài học thành từng nhóm. Kéo thả sắp xếp vị trí của bài học
                        </h5>
                    </div>

                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="group-lesson-board" type="COLUMN">
                            {(provided) => {
                                return (
                                    <div
                                        className={`flex w-[26rem] flex-wrap flex-col gap-4 justify-start items-start`}
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {groupLesson.map((item) => (
                                            <Group
                                                onSelect={(res) => setGroupLessonSelected(res)}
                                                key={item.id}
                                                data={item}
                                            />
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                );
                            }}
                        </Droppable>
                    </DragDropContext>
                    <ModalAddGroupLesson
                        onAdd={function (res: IGroupLesson): void {
                            const index = groupLesson.length > 0 ? groupLesson[groupLesson.length - 1].index + 1 : 0;
                            setGroupLesson((prev) => [...prev, { ...res, index }]);
                        }}
                    >
                        <div className="flex justify-center items-center p-4 hover:bg-primary/20 cursor-pointer bg-primary/10 w-full">
                            Thêm nhóm bài học
                        </div>
                    </ModalAddGroupLesson>
                </div>

                {/*  group lesson -> lessons */}
                {groupLessonSelected && (
                    <div className="w-full">
                        <div className="flex justify-between p-6 pb-6 border-b-[1px] border-solid border-gray-500/10">
                            <div className="">
                                <h5 className="text-2xl font-extrabold">
                                    {groupLessonSelected.index + 1}. {groupLessonSelected.title}
                                </h5>
                                <h5>
                                    Dựa vào bài học , bạn có các loại bài học khác nhau. Kéo thả sắp xếp vị trí của bài
                                    học
                                </h5>
                            </div>
                            <Button
                                onClick={() => setIsAddNewLesson(true)}
                                startContent={<IoAdd className="text-xl" />}
                                color="primary"
                            >
                                Thêm bài học
                            </Button>
                        </div>

                        <div className="w-full p-10">
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="lesson-board" type="COLUMN">
                                    {(provided) => {
                                        return (
                                            <div
                                                className={`flex w-full flex-wrap flex-col gap-4 justify-start items-start`}
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                            >
                                                {groupLessonSelected.lessons.map((le) => (
                                                    <Lesson key={le.id} data={le} index={le.index} />
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </DragDropContext>
                        </div>
                    </div>
                )}

                {!groupLessonSelected && (
                    <div className="w-full flex justify-center items-center flex-col p-20">
                        <Image
                            width={300}
                            src={
                                'https://firebasestorage.googleapis.com/v0/b/appmapdemo-b2a39.appspot.com/o/9169253-removebg-preview.png?alt=media&token=78d72f04-e43e-40e1-8e55-fa5767f4e189'
                            }
                        />
                        <h5>Chọn nhóm bài học</h5>
                    </div>
                )}

                <ModalAddLesson
                    isOpen={isAddNewLesson}
                    onOpenChange={function (): void {}}
                    onClose={function (): void {
                        setIsAddNewLesson(false);
                    }}
                    onResult={function (res: ILesson): void {
                        if (!groupLessonSelected) return;
                        setGroupLesson((prev) => {
                            return prev.map((it) => {
                                if (it.id === groupLessonSelected?.id) {
                                    const index =
                                        groupLessonSelected.lessons.length > 0
                                            ? groupLessonSelected.lessons[groupLessonSelected.lessons.length - 1].index
                                            : 0;
                                    setGroupLessonSelected({
                                        ...it,
                                        lessons: [...it.lessons, { ...res, index }],
                                    });
                                    return {
                                        ...it,
                                        lessons: [...it.lessons, { ...res }],
                                    };
                                }
                                return it;
                            });
                        });
                    }}
                />
            </div>
        </>
    );
}

export default ManagerGroupLesson;
