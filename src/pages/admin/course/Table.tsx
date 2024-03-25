import React from 'react';
import {
    Table as TableNextUI,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Image,
    Chip,
    Tooltip,
    Pagination,
} from '@nextui-org/react';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { ICourse, IStatusCourse } from '../../../model/Course.model';

const columns = [
    { name: 'Tiêu đề', uid: 'title' },
    { name: 'Ảnh đại diện', uid: 'thumbnail' },
    { name: 'Mô tả', uid: 'description' },
    { name: 'Trạng thái', uid: 'status' },
    { name: 'Danh mục', uid: 'category' },
    { name: 'actions', uid: 'actions' },
];

const course = [
    {
        id: 1,
        title: 'Course 1',
        description: 'Description 1',
        price: 109.99,
        subtitle: 'F8 duqc nhåc tdi d moi ndi, d dåu c6 cd håi viéc låm cho ghé IT...',
        thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
        status: IStatusCourse.COMING_SOON,
        category: {
            nameCategory: 'BACKEND',
        },
    },
];

type TableProps = {
    data: ICourse[];
};
export default function Table(props: TableProps) {
    const renderCell = React.useCallback((course: ICourse, columnKey: any) => {
        switch (columnKey) {
            case 'title':
                return <h5>{course.title}</h5>;
            case 'thumbnail':
                return <Image width={200} alt={course.title} src={course.thumbnail} />;
            case 'status':
                return (
                    <Chip
                        className="capitalize"
                        color={course.status === IStatusCourse.COMING_SOON ? 'danger' : 'success'}
                        size="sm"
                        variant="flat"
                    >
                        {course.status === IStatusCourse.COMING_SOON ? 'Chuẩn bị ra mắt' : 'Đã ra mắt'}
                    </Chip>
                );
            case 'description':
                return <h5 className="w-10rem truncate">{course.description}</h5>;
            case 'category':
                return (
                    <div className="flex justify-start items-center gap-2 ">
                        <Chip variant="flat" color="secondary">
                            #{course?.categoryCourse?.categoryName.toUpperCase() ?? ''}
                        </Chip>
                    </div>
                );
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Chỉnh sửa khóa học" color="secondary">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <AiFillEdit className="text-xl" />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Xóa khóa học">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <IoMdTrash className="text-xl" />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return null;
        }
    }, []);

    return (
        <>
            <TableNextUI aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            className="font-extrabold"
                            key={column.uid}
                            align={column.uid === 'actions' ? 'center' : 'start'}
                        >
                            {column.name.toUpperCase()}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={props.data}>
                    {(item) => (
                        <TableRow className="hover:bg-[rgba(0,0,0,0.1)] cursor-pointer rounded-lg" key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </TableNextUI>
            <div className="p-4 mt-5 rounded-xl  flex justify-end items-center ">
                <Pagination total={10} initialPage={1} className="" />
            </div>
        </>
    );
}
