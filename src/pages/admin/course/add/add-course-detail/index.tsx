import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import uuid from 'react-uuid';
import { IGroupLesson, ITypeLesson } from '../../../../../model/Course.model';
import { path } from '../../../../../enum/path';
import AdminLayout from '../../../../../layouts/AdminLayout';
import { useRouter } from '../../../../../hook';
import Sidebar from './SideBar';
import ManagerGroupLesson from './ManagerGroupLesson';
import { IoIosArrowRoundBack } from 'react-icons/io';

const GroupLessonDataExample = [
    {
        id: 1,
        title: 'Tim hieu ve php sdadasdasdasdas',
        numberLesson: 0,
        lessons: [],
        index: 0,
        type: ITypeLesson.Post,
    },
    {
        id: 2,
        title: 'Dde quy',
        numberLesson: 0,
        index: 1,
        type: ITypeLesson.Post,
        lessons: [
            {
                id: 1,
                index: 0,
                title: ' Hoc flexbox qua vi du',
            },
        ],
    },
];

export type TypeGroupLesson = (typeof GroupLessonDataExample)[0];
function AddCourseDetail() {
    const router = useRouter();
    const [activeSidebar, setActiveSidebar] = useState<number>(0);
    const [isOpenModalAddGroupLesson, setIsOpenModalAddGroupLesson] = useState<boolean>(false);
    const [groupLessons, setGroupLessons] = useState<IGroupLesson[]>([]);
    const [title, setTitle] = useState<string>('');
    const handleAddGroupLesson = () => {
        if (title.trim() === '') {
            toast.error('Vui lòng nhập tiêu đề cho nhóm bài học!');
            return;
        }
        setGroupLessons((prev) => [
            ...prev,
            {
                id: uuid(),
                title: title,
                totalLesson: 0,
                lessons: [],
                index: prev.length - 1 >= 0 ? prev[prev.length - 1].index + 1 : 0,
            },
        ]);
        setIsOpenModalAddGroupLesson(false);
        setTitle('');
    };

    const handleRemoveGroupLesson = (id: any) => {
        setGroupLessons((prev) => prev.filter((p) => p.id !== id));
    };
    function handleOnDragEnd(result: any): void {
        if (!result.destination) return;
        if (result.type === 'COLUMN') {
            const indexDes = result.destination.index;
            const indexSource = result.source.index;
            console.log(indexDes);
            console.log(indexSource);
            const newItems = Array.from(groupLessons);
            const [reorderedItem] = newItems.splice(indexSource, 1);
            newItems.splice(indexDes, 0, reorderedItem);
            const clonedItems = newItems.map((item: IGroupLesson, index) => ({ ...item, index }));
            setGroupLessons(clonedItems);
        } else if (result.type === 'DEFAULT') {
            console.log(result);
            const indexDes = result.destination.index;
            const idDes = +result.destination.droppableId.split('-')[2];
            const indexSource = result.source.index;
            const idSource = +result.source.droppableId.split('-')[2];
            console.log({
                indexDes,
                idDes,
                indexSource,
                idSource,
            });
            const colDes = groupLessons.find((gr) => gr.id === idDes);
            if (!colDes) {
                console.log('Khong tim thay dich den');
                return;
            }

            const colSource = groupLessons.find((gr) => gr.id === idSource);
            if (!colSource) {
                console.log('Khong tim thay nguon');
                return;
            }

            console.log(colSource);
            console.log(colDes);
            const targetLesson =
                colSource.lessons.slice(indexSource, 1).length > 0
                    ? { ...colSource.lessons.slice(indexSource, 1)[0] }
                    : null;

            console.log(targetLesson);
            colSource.lessons.splice(indexSource, 1);
            if (!targetLesson) {
                console.log('Vi tri cua lesson nguon khong hop le');
                return;
            }

            colDes.lessons.splice(indexDes, 1, targetLesson);
        }
    }

    useEffect(() => {
        const handleCloseModal = () => {
            setIsOpenModalAddGroupLesson(false);
        };

        window.addEventListener('click', handleCloseModal);

        return () => {
            window.removeEventListener('click', handleCloseModal);
        };
    }, []);

    return (
        <AdminLayout>
            <div className="w-full p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => router.replace(path.ADMIN.COURSE)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Chi tiết khóa học</BreadcrumbItem>
                </Breadcrumbs>
                <div className="w-full rounded-lg h-full bg-light-sidebar dark:bg-dark-sidebar mt-4">
                    {/* {step === EStep.ADD_SUMMARY_INFORMATION && <AddSummaryInformation />} */}
                    <div className="hover:bg-primary/10 cursor-pointer flex justify-start items-center gap-4 w-full pb-2 p-4 border-b-[1px] border-solid border-gray-500/10">
                        <IoIosArrowRoundBack className="text-2xl" />
                        <div>
                            <h5 className="text-2xl font-extrabold">Khóa học PHP cơ bản</h5>
                            <h5>..... mô tả</h5>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="border-r-[1px] border-solid border-gray-500/10">
                            <Sidebar
                                active={activeSidebar}
                                onChangeSidebar={function (key: number): void {
                                    setActiveSidebar(key);
                                }}
                            />
                        </div>

                        {activeSidebar === 0 && <ManagerGroupLesson />}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default memo(AddCourseDetail);
