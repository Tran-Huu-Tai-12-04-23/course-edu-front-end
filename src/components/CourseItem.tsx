import { Card, Image, Button, CardFooter, CardHeader, CardBody } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { path } from '../enum/path';
import { ICourse } from '../model/Course.model';

type CourseItemProps = {
    data: ICourse;
};
function CourseItem(props: CourseItemProps) {
    const history = useNavigate();
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="relative hover:shadow-md transition-all cursor-pointer select-none overflow-hidden group border-none shadow-none  "
        >
            <CardHeader
                onClick={() => {
                    history(path.COURSE.SUMMARY + '/' + props.data.id);
                }}
                className="  flex-col !items-start"
            >
                <h5 className="text-2xl uppercase font-extrabold max-w-full truncate">{props.data.title}</h5>
                <h4 className=" font-medium text-md  max-w-[90%] truncate">{props.data.description}</h4>
            </CardHeader>
            <CardBody
                onClick={() => {
                    history(path.COURSE.SUMMARY + '/' + props.data.id);
                }}
                className="overflow-visible py-2"
            >
                <Image
                    alt={props.data.title}
                    className="h-[12rem] min-w-[24rem] w-full bg-contain"
                    src={props.data.thumbnails}
                />
            </CardBody>
            <CardFooter className="opacity-0 transition-all group-hover:opacity-100 justify-between before:bg-white/2 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-0 p-2 shadow-small  z-10">
                <p className="font-semibold flex-shrink-0 mr-4 ml-4 text-white">{props.data.price} vnđ</p>

                <Button className="text-tiny text-white w-full bg-primary" variant="flat" color="default" radius="lg">
                    Đăng ký học
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CourseItem;
