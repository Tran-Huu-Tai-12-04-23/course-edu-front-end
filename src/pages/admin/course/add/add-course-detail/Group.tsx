import { useState } from 'react';
import { IGroupLesson } from '../../../../../model/Course.model';
import { Button, Input } from '@nextui-org/react';
import { IoIosSave } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import ModalConfirmRemove from './ModalConfirmRemove';
import { MdDragIndicator } from 'react-icons/md';

type GroupProps = {
    data: IGroupLesson;
};
function Group(props: GroupProps) {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState('');
    return (
        <div className="p-4 group flex justify-between items-center gap-4 hover:bg-primary/10 cursor-pointer group">
            {/* {item.index + 1}. {item.title} */}
            <div className="flex justify-start items-center w-[70%]">
                <MdDragIndicator className="text-xl hover:cursor-move" />
                {isEdit && (
                    <Input
                        startContent={<h5>{props.data.index + 1}.</h5>}
                        type="email"
                        variant="underlined"
                        disabled={!isEdit}
                        value={title}
                        className={`bg-transparent `}
                        label=""
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        defaultValue={props.data.title}
                        labelPlacement="outside"
                    />
                )}

                {!isEdit && (
                    <h5 className="p-2 w-full truncate">
                        {props.data.index + 1}.{props.data.title}
                    </h5>
                )}
            </div>
            <div className={`group-hover:flex hidden justify-end items-center gap-4 `}>
                {!isEdit && (
                    <Button
                        size="sm"
                        className="bg-blue-600 "
                        isIconOnly
                        onClick={() => setIsEdit(true)}
                        startContent={<MdModeEditOutline className=" text-white" />}
                    />
                )}
                {isEdit && (
                    <Button
                        size="sm"
                        className="bg-blue-600"
                        isIconOnly
                        onClick={() => {
                            // if (title.trim() === '') {
                            //     toast.error('Vui lòng không bỏ trống trường này!');
                            //     props.onChangeTitle(props.data.title, props.data.id);
                            //     return;
                            // }
                            // props.onChangeTitle(title, props.data.id);
                            setIsEdit(false);
                        }}
                        startContent={<IoIosSave className=" text-white" />}
                    />
                )}
                <ModalConfirmRemove id={0}>
                    <div className="p-2 rounded-lg bg-danger-400">
                        <FaTrash />
                    </div>
                </ModalConfirmRemove>{' '}
                {/* <Button
                                    onClick={onOpen}
                                    size="sm"
                                    color="secondary"
                                    isIconOnly
                                    startContent={<IoMdAdd />}
                                />
                                <Popover isOpen={isOpenConfirmRemove} placement="bottom-end" offset={20} showArrow>
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
                                                    onClick={() => {
                                                        props.onRemove(props.data.id);
                                                        setIsOpenConfirmRemove(false);
                                                    }}
                                                >
                                                    Chắc chắn
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover> */}
            </div>
        </div>
    );
}

export default Group;
