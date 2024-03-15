import { Button } from '@nextui-org/react';
import { IoIosSave } from 'react-icons/io';
import { TypeItemPost } from '../../../../../components/FragmentBlogItem/FragmentBlogItem.type';
import Editor from '../../../../post/create/Editor';

function FormAddPost() {
    return (
        <div>
            <Editor onResult={function (result: TypeItemPost[]): void {}} />
            <div className="flex justify-center gap-4 mt-10 items-center right-1/2 z-50 translate-x-1/2 mb-20 fixed -bottom-16 shadow-2xl">
                <Button onClick={() => {}} startContent={<IoIosSave />} color="success" className="text-white">
                    Lưu lại
                </Button>
            </div>
        </div>
    );
}

export default FormAddPost;
