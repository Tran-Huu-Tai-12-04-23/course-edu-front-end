import { Select, SelectItem } from '@nextui-org/react';
import { TbSelector } from 'react-icons/tb';
import { MdCategory } from 'react-icons/md';

export type ICategory = {
    id: any;
    nameCategory: string;
};

type SelectCategoryCourseProps = {
    onResult: (res: string) => void;
};
function SelectCategoryCourse(props: SelectCategoryCourseProps) {
    const categories: ICategory[] = [
        {
            id: 1,
            nameCategory: 'Tech nololgy',
        },
        {
            id: 2,
            nameCategory: 'PHP',
        },
        {
            id: 3,
            nameCategory: 'Self-study',
        },
    ];
    return (
        <Select
            onChange={(val) => {
                props.onResult(val.target.value);
            }}
            startContent={<MdCategory className="text-xl" />}
            labelPlacement="outside"
            disableSelectorIconRotation
            placeholder="Chọn"
            label="Khóa học thuộc danh mục nào"
            className="max-w-[14rem]"
            selectorIcon={<TbSelector className="text-xl" />}
        >
            {categories.map((category: ICategory) => (
                <SelectItem key={category.id} value={category.id} variant="flat" color="secondary">
                    {category.nameCategory}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SelectCategoryCourse;
