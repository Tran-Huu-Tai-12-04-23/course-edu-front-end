import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { IoMdAdd } from 'react-icons/io';
import GroupLesson from './GroupLesson';
import { memo, useEffect, useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

const GroupLessonDataExample = [
    {
        id: 1,
        title: 'Tim hieu ve php',
        numberLesson: 0,
        lessons: [],
        index: 0,
    },
    {
        id: 2,
        title: 'Dde quy',
        numberLesson: 0,
        index: 1,
        lessons: [
            {
                id: 1,
                index: 0,
                title: ' Hoc flexbox qua vi du',
            },
        ],
    },
];

export type TypeGroupLesson = (typeof GroupLessonDataExample)[0];
function AddDetailInformation() {
    const [isOpenModalAddGroupLesson, setIsOpenModalAddGroupLesson] = useState<boolean>(false);
    const [groupLessons, setGroupLessons] = useState<typeof GroupLessonDataExample>(GroupLessonDataExample);
    const [title, setTitle] = useState<string>('');
    const handleAddGroupLesson = () => {
        setGroupLessons((prev) => [
            ...prev,
            {
                id: prev.length - 1 >= 0 ? prev[prev.length - 1].id + 1 : 0,
                title: title,
                numberLesson: 0,
                lessons: [],
                index: prev.length - 1 >= 0 ? prev[prev.length - 1].index + 1 : 0,
            },
        ]);
        setIsOpenModalAddGroupLesson(false);
        setTitle('');
    };

    const handleRemoveGroupLesson = (id: any) => {
        setGroupLessons((prev) => prev.filter((p) => p.id !== id));
    };
    function handleOnDragEnd(result: any): void {
        if (!result.destination) return;
        if (result.type === 'COLUMN') {
            const indexDes = result.destination.index;
            const indexSource = result.source.index;
            console.log(indexDes);
            console.log(indexSource);
            const newItems = Array.from(groupLessons);
            const [reorderedItem] = newItems.splice(indexSource, 1);
            newItems.splice(indexDes, 0, reorderedItem);
            const clonedItems = newItems.map((item: TypeGroupLesson, index) => ({ ...item, index }));
            setGroupLessons(clonedItems);
        } else if (result.type === 'DEFAULT') {
            console.log(result);
            const indexDes = result.destination.index;
            const idDes = +result.destination.droppableId.split('-')[2];
            const indexSource = result.source.index;
            const idSource = +result.source.droppableId.split('-')[2];
            console.log({
                indexDes,
                idDes,
                indexSource,
                idSource,
            });
            const colDes = groupLessons.find((gr) => gr.id === idDes);
            if (!colDes) {
                console.log('Khong tim thay dich den');
                return;
            }

            const colSource = groupLessons.find((gr) => gr.id === idSource);
            if (!colSource) {
                console.log('Khong tim thay nguon');
                return;
            }

            console.log(colSource);
            console.log(colDes);
            const targetLesson =
                colSource.lessons.slice(indexSource, 1).length > 0
                    ? { ...colSource.lessons.slice(indexSource, 1)[0] }
                    : null;

            console.log(targetLesson);
            colSource.lessons.splice(indexSource, 1);
            if (!targetLesson) {
                console.log('Vi tri cua lesson nguon khong hop le');
                return;
            }

            colDes.lessons.splice(indexDes, 1, targetLesson);
        }
    }

    console.log(groupLessons);

    useEffect(() => {
        const handleCloseModal = () => {
            setIsOpenModalAddGroupLesson(false);
        };

        window.addEventListener('click', handleCloseModal);

        return () => {
            window.removeEventListener('click', handleCloseModal);
        };
    }, []);
    return (
        <div>
            <h5 className="text-xl font-bold mb-5">Tạo bài học cho khóa học</h5>
            <div className="flex flex-wrap flex-col gap-4 justify-start items-start w-full">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="board" type="COLUMN">
                        {(provided, snapshot) => (
                            <div
                                className={` flex w-full flex-wrap flex-col gap-4 justify-start items-start`}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {groupLessons.map((item: TypeGroupLesson, index) => (
                                    <GroupLesson
                                        key={index}
                                        index={index}
                                        data={item}
                                        onRemove={handleRemoveGroupLesson}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <Popover isOpen={isOpenModalAddGroupLesson} placement="top" showArrow={true}>
                    <PopoverTrigger>
                        <Button
                            onClick={() => setIsOpenModalAddGroupLesson(true)}
                            startContent={<IoMdAdd className="text-2xl" />}
                            className="w-[30rem]"
                        >
                            Thêm nhóm khóa học
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-2 rounded-lg ">
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 w-[30rem] rounded-lg bg-[rgba(0,0,0,0.1) backdrop-blur-2xl "
                        >
                            <Input
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                placeholder="   "
                                labelPlacement="outside"
                                label="Tên nhóm bài học"
                            />

                            <div className="mt-5 w-full flex justify-end items-center gap-4">
                                <Button
                                    color="danger"
                                    onClick={() => {
                                        setIsOpenModalAddGroupLesson(false);
                                    }}
                                >
                                    Hủy
                                </Button>
                                <Button className="text-white" color="success" onClick={handleAddGroupLesson}>
                                    Thêm
                                </Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export default memo(AddDetailInformation);
