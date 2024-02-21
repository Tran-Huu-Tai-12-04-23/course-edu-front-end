import { Card, Image, Button, CardFooter, CardHeader, CardBody } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { path } from '../enum/path';
function CourseItem() {
    const history = useNavigate();
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="hover:shadow-md transition-all cursor-pointer select-none overflow-hidden group border-none shadow-none  "
        >
            <CardHeader
                onClick={() => {
                    history(path.COURSE.SUMMARY + '/1');
                }}
                className="  flex-col !items-start"
            >
                <h5 className="text-2xl uppercase font-extrabold ">HTML, Css</h5>
                <h4 className=" font-medium text-md">Cho người mới bắt đầu</h4>
            </CardHeader>
            <CardBody
                onClick={() => {
                    history(path.COURSE.SUMMARY + '/1');
                }}
                className="overflow-visible py-2"
            >
                <Image
                    alt="Woman listing to music"
                    className="h-[12rem] min-w-[24rem] w-full bg-contain"
                    src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                />
            </CardBody>
            <CardFooter className="opacity-0 transition-all group-hover:opacity-100 justify-between before:bg-white/2 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-0 p-2 shadow-small  z-10">
                <p className="font-semibold flex-shrink-0 mr-4 ml-4 text-white">899.000 vnđ</p>

                <Button className="text-tiny text-white w-full bg-primary" variant="flat" color="default" radius="lg">
                    Đăng ký học
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CourseItem;
