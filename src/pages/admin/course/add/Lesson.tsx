import { Button } from '@nextui-org/react';
import { FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { Draggable } from '@hello-pangea/dnd';
import { memo } from 'react';
import RenderHTMLContent from '../../../../components/RenderHtmlContent';

type LessonProps = {
    data: any;
    index: number;
};
function Lesson(props: LessonProps) {
    return (
        <Draggable key={props.data.id} draggableId={'lesson-' + props.data.id.toString()} index={props.index}>
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-full group p-3 h-12 shadow-2xl rounded-lg border-[1px] flex justify-between items-center border-dashed border-[#757575]"
                    >
                        <h1 className="">
                            {props.index + 1}. {props.data.title}
                        </h1>
                        <div className="hidden justify-end grozup-hover:flex items-center gap-4">
                            <Button isIconOnly variant="flat" startContent={<MdEdit />} size="sm" />
                            <Button isIconOnly startContent={<FaTrash className="text-red-600 " />} size="sm" />
                        </div>
                    </div>
                );
            }}
        </Draggable>
    );
}

export default memo(Lesson);
