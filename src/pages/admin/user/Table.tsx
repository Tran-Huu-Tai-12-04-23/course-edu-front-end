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
    Switch,
    Button,
} from '@nextui-org/react';
import { TfiEye } from 'react-icons/tfi';
import { users } from './data';

const columns = [
    { name: 'Họ và tên', uid: 'firstName' },
    { name: 'Ảnh đại diện', uid: 'avatar' },
    { name: 'Email', uid: 'email' },
    { name: 'Chức vụ', uid: 'role' },
    { name: '', uid: 'actions' },
];

type User = (typeof users)[0];

export default function Table() {
    const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof User];
        switch (columnKey) {
            case 'firstName':
                return <h5>{user.firstName + ' ' + user.lastName ?? 'Chưa cập nhật'}</h5>;
            case 'avatar':
                return <Image width={50} alt={user.firstName} src={user.avatar} />;
            case 'email':
                return <h5>{user.email}</h5>;
            case 'role':
                return (
                    <Chip className="capitalize" color="secondary" size="sm" variant="flat">
                        {user.role}
                    </Chip>
                );
            case 'actions':
                return (
                    <div className="flex justify-end items-center gap-4">
                        {user.role === 'USER' && (
                            <>
                                <Tooltip size="sm" color="warning" className="text-white" content="Khóa học đã đăng ký">
                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                        <TfiEye className="text-xl" />
                                    </span>
                                </Tooltip>
                                <Tooltip size="sm" color="secondary" content="Khóa người dùng">
                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                        <Switch color="secondary" defaultSelected size="sm">
                                            Khóa
                                        </Switch>
                                    </span>
                                </Tooltip>
                            </>
                        )}
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
                <TableBody items={users}>
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
