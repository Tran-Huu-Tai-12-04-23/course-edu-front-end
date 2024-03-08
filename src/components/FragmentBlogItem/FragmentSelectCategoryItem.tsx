import { Select, SelectItem } from '@nextui-org/react';

function FragmentSelectCategoryItem() {
    return (
        <Select label="Select an animal" className="max-w-xs">
            {['1', '2', '3'].map((animal, index) => (
                <SelectItem key={animal} value={animal}>
                    {animal}
                </SelectItem>
            ))}
        </Select>
    );
}

export default FragmentSelectCategoryItem;
