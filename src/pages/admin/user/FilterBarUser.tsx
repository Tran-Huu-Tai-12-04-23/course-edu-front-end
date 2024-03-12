import { Button } from '@nextui-org/react';
import Search from '../../../components/Search';
import { GrPowerReset } from 'react-icons/gr';
import SelectOrderType from '../SelectOrderType';
import SelectRole from './SelectRole';

function FilterBarUser() {
    return (
        <div className="flex mt-10 justify-between items-end gap-10 rounded-xl shadow-xl bg-light-sidebar backdrop-blur-xl dark:bg-dark-sidebar w-full p-4">
            <div className="flex justify-start w-full  items-center gap-6">
                <SelectOrderType
                    label="Sắp xếp theo"
                    onResult={function (res: string): void {
                        throw new Error('Function not implemented.');
                    }}
                />
                <SelectRole
                    onResult={function (res: string): void {
                        throw new Error('Function not implemented.');
                    }}
                />
            </div>

            <div className="w-full flex justify-end items-center gap-6">
                <Search placeholder="Tìm kiếm theo tên, email, ..." />
                <Button startContent={<GrPowerReset className="text-xl" />} variant="flat" color="primary">
                    Làm mới lọc
                </Button>
            </div>
        </div>
    );
}

export default FilterBarUser;
