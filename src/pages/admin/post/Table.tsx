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
    Spinner,
} from '@nextui-org/react';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { IPostItem, IStatusPost } from '../../../model/Post.model';

const columns = [
    { name: 'Tiêu đề', uid: 'title' },
    { name: 'Ảnh đại diện', uid: 'thumbnail' },
    { name: 'Mô tả', uid: 'description' },
    { name: 'Trạng thái', uid: 'status' },
    { name: 'Danh mục', uid: 'tags' },
    { name: '', uid: 'actions' },
];

type TableProps = {
    data: IPostItem[];
    isLoading?: boolean;
};

export default function Table(props: TableProps) {
    const renderCell = React.useCallback((post: IPostItem, columnKey: any) => {
        switch (columnKey) {
            case 'title':
                return <h5>{post.title}</h5>;
            case 'thumbnail':
                return <Image width={200} alt={post.title} src={post.thumbnail} />;
            case 'status':
                return (
                    <Chip
                        className="capitalize"
                        color={post.status === IStatusPost.Published ? 'success' : 'danger'}
                        size="sm"
                        variant="flat"
                    >
                        {post.status === IStatusPost.Published ? 'Đã xuất bản' : 'Chưa xuất bản'}
                    </Chip>
                );
            case 'description':
                return <h5 className="w-10rem truncate">{post.description}</h5>;
            case 'tags':
                return (
                    <div className="flex justify-start items-center gap-2 ">
                        {post.tags &&
                            post.tags.split(',').map((tag) => (
                                <Chip variant="flat" color="secondary" key={tag}>
                                    #{tag.toUpperCase()}
                                </Chip>
                            ))}
                    </div>
                );
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <AiFillEdit className="text-xl" />
                        </span>
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <IoMdTrash className="text-xl" />
                        </span>
                    </div>
                );
            default:
                return <h5></h5>;
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
                <TableBody
                    isLoading={props.isLoading}
                    loadingContent={<Spinner label="Loading..." />}
                    emptyContent={<h5>Không có kết quả nào</h5>}
                    items={props.data}
                >
                    {(item) => (
                        <TableRow className="hover:bg-[rgba(0,0,0,0.1)] cursor-pointer rounded-lg" key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </TableNextUI>
        </>
    );
}
