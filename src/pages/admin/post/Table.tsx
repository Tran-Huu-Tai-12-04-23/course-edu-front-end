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
import { IoEyeOutline } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';

const columns = [
    { name: 'Tiêu đề', uid: 'title' },
    { name: 'Ảnh đại diện', uid: 'thumbnail' },
    { name: 'Mô tả', uid: 'description' },
    { name: 'Trạng thái', uid: 'status' },
    { name: 'Danh mục', uid: 'tags' },
    { name: '', uid: 'actions' },
];

const posts = [
    {
        id: 1,
        thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
        title: 'Blog Post 1',
        description: 'Description for Blog Post 1',
        tags: 'tech, PHP',
        items: [],
        status: true,
    },
    {
        id: 2,
        thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
        title: 'Blog Post 2',
        description: 'Description for Blog Post 1',
        tags: 'tech, PHP',
        items: [],
        status: false,
    },
];

type Post = (typeof posts)[0];

export default function Table() {
    const renderCell = React.useCallback((post: Post, columnKey: React.Key) => {
        const cellValue = post[columnKey as keyof Post];
        switch (columnKey) {
            case 'title':
                return <h5>{post.title}</h5>;
            case 'thumbnail':
                return <Image width={200} alt={post.title} src={post.thumbnail} />;
            case 'status':
                return (
                    <Chip className="capitalize" color={post.status ? 'success' : 'danger'} size="sm" variant="flat">
                        {post.status ? 'Đã xuất bản' : 'Chưa xuất bản'}
                    </Chip>
                );
            case 'description':
                return <h5 className="w-10rem truncate">{post.description}</h5>;
            case 'tags':
                return (
                    <div className="flex justify-start items-center gap-2 ">
                        {post.tags.split(',').map((tag) => (
                            <Chip variant="flat" color="secondary" key={tag}>
                                #{tag.toUpperCase()}
                            </Chip>
                        ))}
                    </div>
                );
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Chỉnh sửa bài viết" color="secondary">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <AiFillEdit className="text-xl" />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Xóa bài viêt">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <IoMdTrash className="text-xl" />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
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
                <TableBody items={posts}>
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
