import { Helmet } from 'react-helmet-async';
import AdminLayout from '../../../layouts/AdminLayout';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { path } from '../../../enum/path';
import { useRouter } from '../../../hook';
import Table from './Table';
import { examplePayments } from '../../../model/Payment.model';

function PaymentManager() {
   const router = useRouter();
   return (
      <AdminLayout>
         <Helmet>
            <title>Lịch sử giao dịch</title>
         </Helmet>

         <div className="w-full  p-4">
            <Breadcrumbs>
               <BreadcrumbItem onClick={() => router.push(path.ADMIN.PAYMENT)}>Quản trị</BreadcrumbItem>
               <BreadcrumbItem>Quản lý</BreadcrumbItem>
               <BreadcrumbItem>Người dùng</BreadcrumbItem>
            </Breadcrumbs>

            <div className="pt-5">
               <Table isLoading={false} data={examplePayments} />
            </div>
            {/* <div className="p-4 mt-5 rounded-xl  flex justify-end items-center ">
               <Pagination total={paginationData.totalPages} initialPage={1} className="" />
            </div> */}
         </div>
      </AdminLayout>
   );
}

export default PaymentManager;
