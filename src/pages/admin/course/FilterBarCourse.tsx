import { Button } from '@nextui-org/react';
import Search from '../../../components/Search';
import { GrPowerReset } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { IFilterCourse } from '.';
import { IoAdd } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectOrderType from '../SelectOrderType';
import SelectCategoryCourse from './SelectCategoryCourse';
import SelectStateCourse from './SeelctStatusCourse';
import { IStatusCourse } from '../../../model/Course.model';

type FilterBarCourseProps = {
    onChange: (value: IFilterCourse) => void;
};
function FilterBarCourse(props: FilterBarCourseProps) {
    const history = useNavigate();
    const { pathname } = useLocation();

    const [state, setState] = useState<IStatusCourse | -1>(-1);
    const [key, setKey] = useState<string>('');
    const [orderType, setOrderType] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        let filter = {
            orderType: orderType,
            category,
            state,
            key,
        };
        props.onChange({
            ...filter,
        });
    }, [key, state, category, orderType]);
    return (
        <div className="flex mt-10 justify-between  flex-wrap items-end gap-6 rounded-xl shadow-xl bg-light-sidebar backdrop-blur-xl dark:bg-dark-sidebar w-full p-4">
            <div className="flex justify-start items-center gap-6 min-w-[40rem]">
                <SelectCategoryCourse
                    onResult={function (res: string): void {
                        setCategory(res);
                    }}
                />
                <SelectStateCourse
                    onResult={function (res: IStatusCourse): void {
                        setState(res);
                    }}
                />

                <SelectOrderType
                    onResult={function (res: string): void {
                        setOrderType(res);
                    }}
                />
            </div>

            <div className=" flex justify-start items-center gap-6">
                <Search onChange={(val) => setKey(val)} placeholder="Tìm kiếm theo tiều đề, thể loại, ..." />
                <Button
                    onClick={() => {
                        setCategory('');
                        setKey('');
                        setState(-1);

                        props.onChange({
                            orderType: -1,
                            category: '',
                            state: -1,
                            key: '',
                        });
                    }}
                    startContent={<GrPowerReset className="text-xl" />}
                    variant="flat"
                    color="primary"
                >
                    Làm mới lọc
                </Button>
                <Button
                    onClick={() => {
                        history(pathname + '/add');
                    }}
                    startContent={<IoAdd className="text-xl" />}
                    color="primary"
                >
                    Thêm khóa học
                </Button>
            </div>
        </div>
    );
}

export default FilterBarCourse;
