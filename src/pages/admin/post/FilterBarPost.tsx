import { Button, Select, SelectItem } from '@nextui-org/react';
import SelectCategoryBlog from '../../../components/SelectCategoryBlog';
import Search from '../../../components/Search';
import { GrPowerReset } from 'react-icons/gr';

function FilterBarPost() {
    return (
        <div className="flex mt-10 justify-between items-center gap-10 rounded-xl shadow-xl bg-light-sidebar backdrop-blur-xl dark:bg-dark-sidebar w-full p-4">
            <div className="flex justify-start w-full  items-center gap-6">
                <SelectCategoryBlog
                    onResult={function (res: string): void {
                        throw new Error('Function not implemented.');
                    }}
                />

                <Select
                    label="Favorite Animal"
                    placeholder="Select an animal"
                    selectionMode="multiple"
                    className="max-w-xs"
                >
                    {['1', '2'].map((animal) => (
                        <SelectItem key={animal} value={animal}>
                            {animal}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            <div className="w-full flex justify-end items-center gap-6">
                <Search />
                <Button startContent={<GrPowerReset className="text-xl" />} variant="flat" color="primary">
                    Làm mới lọc
                </Button>
            </div>
        </div>
    );
}

export default FilterBarPost;
