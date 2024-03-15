import { Button } from '@nextui-org/react';
import SelectCategoryBlog from '../../../components/SelectCategoryBlog';
import Search from '../../../components/Search';
import { GrPowerReset } from 'react-icons/gr';
import SelectStatePost from './SeelctStatusPost';
import { useEffect, useState } from 'react';
import SelectOrderType from '../SelectOrderType';
import { IoAdd } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

type FilterBarPostProps = {
    onChange: (value: { tags: string; state: string; searchKey: string; typeOrder: string }) => void;
};
function FilterBarPost(props: FilterBarPostProps) {
    const history = useNavigate();
    const { pathname } = useLocation();
    const [tags, setTags] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [key, setKey] = useState<string>('');
    const [typeOrder, setTypeOrder] = useState<string>('');

    useEffect(() => {
        let filter = {
            tags,
            state,
            searchKey: key,
            typeOrder,
        };
        props.onChange(filter);
    }, [tags, key, state]);
    return (
        <div className="flex mt-10 justify-between  flex-wrap items-end gap-6 rounded-xl shadow-xl bg-light-sidebar backdrop-blur-xl dark:bg-dark-sidebar w-full p-4">
            <div className="flex justify-start min-w-[40rem] items-center gap-6">
                <SelectCategoryBlog
                    onResult={function (res: string): void {
                        setTags(res);
                    }}
                />
                <SelectStatePost
                    onResult={function (res: string): void {
                        setState(res);
                    }}
                />

                <SelectOrderType
                    onResult={function (res: string): void {
                        setTypeOrder(res);
                    }}
                />
            </div>

            <div className="w-max flex justify-start items-center gap-6">
                <Search onChange={(val) => setKey(val)} placeholder="Tìm kiếm theo tiều đề, thể loại, ..." />
                <Button
                    onClick={() => {
                        setTags('');
                        setKey('');
                        setState('');
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
                    Thêm bài viết
                </Button>
            </div>
        </div>
    );
}

export default FilterBarPost;
