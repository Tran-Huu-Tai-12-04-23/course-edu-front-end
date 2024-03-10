import { Button, Select, SelectItem } from '@nextui-org/react';
import SelectCategoryBlog from '../../../components/SelectCategoryBlog';
import Search from '../../../components/Search';
import { GrPowerReset } from 'react-icons/gr';
import SelectStatePost from './SeelctStatePost';
import { useEffect, useState } from 'react';
import SelectTypeOrder from '../SelectTypeOrder';

type FilterBarPostProps = {
    onChange: (value: { tags: string; state: string; searchKey: string; typeOrder: string }) => void;
};
function FilterBarPost(props: FilterBarPostProps) {
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
            <div className="flex justify-start w-1/2 items-center gap-6">
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

                <SelectTypeOrder
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
            </div>
        </div>
    );
}

export default FilterBarPost;
