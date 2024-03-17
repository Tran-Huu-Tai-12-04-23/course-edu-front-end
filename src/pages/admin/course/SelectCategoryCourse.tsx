import { Select, SelectItem } from '@nextui-org/react';
import { TbSelector } from 'react-icons/tb';
import { MdCategory } from 'react-icons/md';
import { ICategoryCourse } from '../../../model/Common.model';
import { useEffect, useState } from 'react';

export type ICategory = {
    id: any;
    nameCategory: string;
};

type SelectCategoryCourseProps = {
    onResult: (res: number) => void;
};

const getAllCategoryCourse = async (): Promise<ICategoryCourse[] | null> => {
    try {
        const response = await fetch('https://localhost:7005/api/category-course', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData: ICategoryCourse[] = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        return null;
    }
};

function SelectCategoryCourse(props: SelectCategoryCourseProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categories, setCategories] = useState<ICategoryCourse[]>([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await getAllCategoryCourse();
            setIsLoading(false);

            if (res) {
                setCategories([...res]);
            }
        };
        getData();
    }, []);
    return (
        <Select
            onChange={(val) => {
                props.onResult(+val.target.value);
            }}
            startContent={<MdCategory className="text-xl" />}
            labelPlacement="outside"
            disableSelectorIconRotation
            placeholder="Chọn"
            label="Khóa học thuộc danh mục nào"
            className="max-w-[14rem]"
            selectorIcon={<TbSelector className="text-xl" />}
        >
            {categories.map((category: ICategoryCourse, index: number) => (
                <SelectItem key={index} value={category.id} variant="flat" color="secondary">
                    {category.categoryName}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SelectCategoryCourse;
