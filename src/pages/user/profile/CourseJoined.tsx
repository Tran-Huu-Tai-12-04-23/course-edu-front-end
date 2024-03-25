import { Card, Image } from '@nextui-org/react';

function CourseJoined() {
    return (
        <Card className="p-4 rounded-lg  gap-4 flex justify-start items-start cursor-pointer" isHoverable>
            <Image src="https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png" className="w-1/2" />

            <h5 className="font-extrabold text-xl">Lập trình C++ cơ bản, nâng cao</h5>
            <h5>
                Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm
                giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh
                phục con đường trở thành một lập trình
            </h5>
        </Card>
    );
}

export default CourseJoined;
