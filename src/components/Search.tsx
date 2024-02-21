import { Input } from '@nextui-org/react';
import { IoSearchOutline } from 'react-icons/io5';

function Search() {
    return (
        <>
            <Input
                className="max-w-[25rem] select-none w-1/3"
                label=""
                placeholder="Tìm kiếm khóa học, bài viết , video,..."
                labelPlacement="outside"
                startContent={<IoSearchOutline />}
            />
        </>
    );
}

export default Search;
