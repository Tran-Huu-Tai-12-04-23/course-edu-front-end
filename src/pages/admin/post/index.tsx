import { BreadcrumbItem, Breadcrumbs, Pagination } from '@nextui-org/react';
import AdminLayout from '../../../layouts/AdminLayout';
import { path } from '../../../enum/path';
import { useNavigate } from 'react-router-dom';
import FilterBarPost from './FilterBarPost';
import Table from './Table';
import { useEffect, useState } from 'react';
import { IPostItem } from '../../../model/Post.model';
import { Constant } from '../../../constant';
import { IPaginationClientData, IPaginationResponseDto } from '../../../assets/data/PaginatedResponse.dto';
import { IPostQueryDto } from '../../../assets/data/PostQuery.Dto';
import { IPaginationRequestDto } from '../../../assets/data/PaginationRequest.Dto';

const getPaginationPost = async (
   queryData: IPaginationRequestDto<IPostQueryDto>,
): Promise<IPaginationResponseDto<IPostItem> | null> => {
   try {
      const response = await fetch(Constant.BASE_URL_API + 'post/pagination', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(queryData),
      });

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: IPaginationResponseDto<IPostItem> = await response.json();
      return responseData;
   } catch (error) {
      console.error('Error during registration:', error);
      return null;
   }
};

const countTotalPost = async (queryData: IPostQueryDto): Promise<number> => {
   try {
      const response = await fetch(Constant.BASE_URL_API + 'post/count', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(queryData),
      });

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: number = await response.json();
      return responseData;
   } catch (error) {
      console.error('Error during registration:', error);
      return 0;
   }
};
function Post() {
   const history = useNavigate();
   const [data, setData] = useState<IPostItem[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [paginationData, setPaginationData] = useState<IPaginationClientData>({
      totalPages: -1,
      size: 5,
      currentPage: 1,
   });
   const [filterData, setFilterData] = useState<IPostQueryDto>({
      tags: null,
      query: null,
      status: null,
      IsApprove: null,
   });

   const handleChangePage = async (page: number) => {
      const queryData: IPaginationRequestDto<IPostQueryDto> = {
         where: filterData,
         pageNumber: page,
         pageSize: paginationData.size,
      };
      setPaginationData((prev) => {
         return {
            ...prev,
            currentPage: page,
         };
      });
      setIsLoading(true);
      const res = await getPaginationPost(queryData);
      setIsLoading(false);
      res && setData(res.data);
   };

   const getTotalCourse = async () => {
      const queryData: IPostQueryDto = {
         ...filterData,
      };
      const totalCourse = await countTotalPost(queryData);
      setPaginationData((prev) => {
         return {
            ...prev,
            totalPages: Math.ceil(+totalCourse / paginationData.size),
            isHasNextPage: totalCourse > paginationData.size,
         };
      });
   };

   useEffect(() => {
      const initData = async () => {
         setIsLoading(true);
         await getTotalCourse();
         const queryData: IPaginationRequestDto<IPostQueryDto> = {
            where: {},
            pageNumber: 1,
            pageSize: paginationData.size,
         };
         const res = await getPaginationPost(queryData);
         setIsLoading(false);
         res && setData(res.data);
      };

      initData();
   }, []);

   useEffect(() => {
      const filterData = async () => {
         await getTotalCourse();
         await handleChangePage(paginationData.currentPage);
      };
      setIsLoading(true);
      const queryTimeout = setTimeout(() => {
         filterData();
         setIsLoading(false);
      }, 1000);
      return () => {
         clearTimeout(queryTimeout);
      };
   }, [filterData]);

   return (
      <AdminLayout>
         <div className="w-full  p-4">
            <Breadcrumbs>
               <BreadcrumbItem onClick={() => history(path.ADMIN.DASHBOARD)}>Quản trị</BreadcrumbItem>
               <BreadcrumbItem>Quản lý</BreadcrumbItem>
               <BreadcrumbItem>Bài viết</BreadcrumbItem>
            </Breadcrumbs>

            <FilterBarPost onChange={(res: IPostQueryDto) => setFilterData(res)} />

            <div className="pt-5">
               <Table data={data} isLoading={isLoading} />
            </div>
            <div className="p-4 mt-5 rounded-xl  flex justify-end items-center ">
               <Pagination total={paginationData.totalPages} initialPage={1} className="" />
            </div>
         </div>
      </AdminLayout>
   );
}

export default Post;
