import { Button, Card } from '@nextui-org/react';
import { FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { Draggable } from '@hello-pangea/dnd';
import { memo } from 'react';
import { ILesson } from '../../../../../model/Course.model';
import uuid from 'react-uuid';

type LessonProps = {
    data: ILesson;
    index: number;
};
function Lesson(props: LessonProps) {
    return (
        <Draggable
            key={props.data.id}
            draggableId={props.data.id ? props.data.id.toString() : uuid()}
            index={props.index}
        >
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-full group  "
                    >
                        <Card className="w-full p-4">
                            <div className=" flex justify-between items-center">
                                <h1 className="h-10">
                                    {props.index + 1}. {props.data.title}
                                </h1>
                                <div className="hidden justify-end group-hover:flex items-center gap-4">
                                    <Button isIconOnly variant="flat" startContent={<MdEdit />} size="sm" />
                                    <Button isIconOnly startContent={<FaTrash className="text-red-600 " />} size="sm" />
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            }}
        </Draggable>
    );
}

export default memo(Lesson);
