import { Button, Popover, PopoverContent, PopoverTrigger, Tooltip, useDisclosure } from '@nextui-org/react';
import { IoMdAdd } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import Lesson from './Lesson';
import { TypeGroupLesson } from './AddDetailInformation';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { MdModeEditOutline } from 'react-icons/md';
import ModalAddLesson from './ModalAddLesson';

type GroupLessonProps = {
    onRemove: (id: any) => void;
    data: TypeGroupLesson;
    index: number;
};

const lesson = {
    id: 1,
    index: 0,
    title: 'hello',
};

export type TypeLesson = typeof lesson;

function GroupLesson(props: GroupLessonProps) {
    const [isOpenConfirmRemove, setIsOpenConfirmRemove] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <>
            <Draggable key={props.data.id} draggableId={'lesson-group-' + props.data.id} index={props.index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => {
                            setIsOpenConfirmRemove(false);
                        }}
                        className={`${
                            snapshot.isDragging ? 'bg-[rgb(64,150,255,0.4)]' : 'bg-second-light dark:bg-second-dark'
                        } group cursor-pointer p-2 rounded-lg  border-[1px] border-second border-solid w-full`}
                    >
                        <div className="border-b-[1px] pb-4 flex justify-between items-center gap-4 border-dashed border-second w-full">
                            <h1 className="h-8">
                                {props.index + 1}. {props.data.title}
                            </h1>
                            <div
                                className={`${
                                    isHovered ? '' : 'translate-x-[50%] opacity-0 '
                                }  justify-end items-center gap-4 flex`}
                            >
                                <Tooltip content="Chỉnh sửa tên nhóm bài học">
                                    <Button
                                        size="sm"
                                        className="bg-blue-600"
                                        isIconOnly
                                        startContent={<MdModeEditOutline className=" text-white" />}
                                    />
                                </Tooltip>
                                <Tooltip content="Thêm bài học">
                                    <Button
                                        onClick={onOpen}
                                        size="sm"
                                        color="secondary"
                                        isIconOnly
                                        startContent={<IoMdAdd />}
                                    />
                                </Tooltip>
                                <Popover isOpen={isOpenConfirmRemove} placement="top-end" offset={20} showArrow>
                                    <PopoverTrigger>
                                        <Button
                                            onClick={() => {
                                                setIsOpenConfirmRemove(true);
                                            }}
                                            size="sm"
                                            color="danger"
                                            isIconOnly
                                            startContent={<FaTrash />}
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="p-2 rounded-lg bg-[rgba(0,0,0,0.1) backdrop-blur-2xl ">
                                            <h1 className="mb-5 text-2xl font-bold">Xác nhận xóa</h1>
                                            <h5>Bạn có chắc chắn muốn xóa nhóm khóa học này</h5>

                                            <div className="mt-5 w-full flex justify-center items-center gap-4">
                                                <Button
                                                    size="sm"
                                                    onClick={() => {
                                                        setIsOpenConfirmRemove(false);
                                                    }}
                                                >
                                                    Hủy
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    color="danger"
                                                    onClick={() => props.onRemove(props.data.id)}
                                                >
                                                    Chắc chắn
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <Droppable droppableId={'lesson-group-' + props.data.id} direction="vertical">
                            {(provided) => (
                                <ul
                                    className="characters flex flex-col flex-wrap gap-4 justify-start items-start"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {props.data.lessons.map((item: TypeLesson, index) => (
                                        <Lesson key={item.id} data={item} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
            <ModalAddLesson isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
        </>
    );
}

export default GroupLesson;
