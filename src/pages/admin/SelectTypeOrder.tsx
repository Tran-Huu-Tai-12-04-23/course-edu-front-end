import { Select, SelectItem } from '@nextui-org/react';
import { TbSelector } from 'react-icons/tb';
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';
import { useState } from 'react';

enum TypeOrder {
    ASCENDING,
    DECREASING,
}
export type IOrder = {
    id: any;
    nameOrder: string;
    value: TypeOrder;
};

type SelectTypeOrderProps = {
    onResult: (res: string) => void;
    label?: string;
};

function SelectTypeOrder(props: SelectTypeOrderProps) {
    const categories: IOrder[] = [
        {
            id: 1,
            nameOrder: 'Tăng dần',
            value: TypeOrder.ASCENDING,
        },
        {
            id: 2,
            nameOrder: 'Giảm dần',
            value: TypeOrder.DECREASING,
        },
    ];
    const [value, setValue] = useState<string>('');
    return (
        <Select
            onChange={(val) => {
                setValue(val.target.value);
                props.onResult(val.target.value);
            }}
            startContent={
                value === TypeOrder.DECREASING.toString() ? (
                    <ImSortAlphaDesc className="text-xl" />
                ) : (
                    <ImSortAlphaAsc className="text-xl" />
                )
            }
            labelPlacement="outside"
            disableSelectorIconRotation
            placeholder="Chọn"
            label={props.label ? props.label : 'Sắp xếp bài viết theo'}
            className="max-w-[14rem]"
            selectorIcon={<TbSelector className="text-xl" />}
        >
            {categories.map((category: IOrder) => (
                <SelectItem key={category.id} value={category.value} variant="flat" color="secondary">
                    {category.nameOrder}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SelectTypeOrder;
