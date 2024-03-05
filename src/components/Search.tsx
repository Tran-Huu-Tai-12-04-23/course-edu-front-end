import { Input } from '@nextui-org/react';
import { IoSearchOutline } from 'react-icons/io5';

type SearchProps = {
    className?: string;
};
function Search(props: SearchProps) {
    return (
        <Input
            className={`${props.className} max-w-[25rem] select-none w-1/3`}
            label=""
            placeholder="Tìm kiếm khóa học, bài viết , video,..."
            labelPlacement="outside"
            startContent={<IoSearchOutline />}
        />
    );
}

export default Search;
