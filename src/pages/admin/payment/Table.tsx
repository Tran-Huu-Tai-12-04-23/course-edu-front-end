import React, { useCallback, useState } from 'react';
import {
   Table as TableNextUI,
   TableHeader,
   TableColumn,
   TableBody,
   TableRow,
   TableCell,
   Chip,
   Tooltip,
   Switch,
   Avatar,
   Spinner,
} from '@nextui-org/react';
import { TfiEye } from 'react-icons/tfi';
import dayjs from 'dayjs';
import { IPayment } from '../../../model/Payment.model';

const columns = [
   { name: 'Người dùng', uid: 'user' },
   { name: 'Loại thanh toán', uid: 'typePayment' },
   { name: 'Giá trị', uid: 'amount' },
   { name: 'Thanh toán lúc', uid: 'payment' },
   { name: 'Trạng thái', uid: 'status' },
   { name: '', uid: 'actions' },
];

type PropsType = {
   data: IPayment[];
   isLoading?: boolean;
};
export default function Table({ data, isLoading }: PropsType) {
   const [userIdSelect, setUserIdSelect] = useState<any>(null);

   const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
      const cellValue = data[columnKey as keyof IPayment];
      switch (columnKey) {
         case 'user':
            return (
               <h5>
                  {data.user && data.user.firstName ? (
                     data.user.firstName + ' ' + data.user.lastName
                  ) : (
                     <Chip color="danger" variant="flat">
                        Chưa cập nhật
                     </Chip>
                  )}
               </h5>
            );
         case 'typePayment':
            return <Chip color="secondary">{data.typePayment}</Chip>;
         case 'amount':
            return <h5 className="text-orange-500">{data.amount}</h5>;
         case 'paymentAt':
            return (
               <Chip className="capitalize" color="secondary" size="sm" variant="flat">
                  Thanh toán vào lúc ({dayjs(data.paymentAt).format('HH:MM, DD-MM-yyyy')})
               </Chip>
            );
         case 'status': {
            return (
               <Chip className="capitalize" color={data?.isPayment ? 'success' : 'danger'} size="sm" variant="flat">
                  {data?.isPayment ? `Đã thanh toán` : 'Chưa thanh toán'}
               </Chip>
            );
         }
         case 'actions':
            return (
               <div className="flex justify-end items-center gap-4">
                  <Tooltip size="sm" color="warning" className="text-white" content="Xem thông tin chi tiết">
                     <span onClick={() => {}} className="text-lg text-danger cursor-pointer active:opacity-50">
                        <TfiEye className="text-xl" />
                     </span>
                  </Tooltip>
               </div>
            );
         default:
            return cellValue;
      }
   }, []);

   const totalAmount = useCallback(() => {
      return data.reduce((acc, item) => acc + item.amount, 0);
   }, [data]);
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
               isLoading={isLoading}
               loadingContent={<Spinner label="Loading..." />}
               emptyContent={<h5>Không có kết quả nào</h5>}
               items={data}
            >
               {(item) => (
                  <TableRow className="hover:bg-[rgba(0,0,0,0.1)] cursor-pointer rounded-lg" key={item.id}>
                     {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
               )}
            </TableBody>
         </TableNextUI>
         <div className="flex p-10 w-full items-center  justify-end gap-10 font-bold text-xl">
            <h5 className="">Tổng thanh toán:</h5>
            <h5 className="text-orange-500 text-3xl">{totalAmount()}đ</h5>
         </div>
      </>
   );
}
