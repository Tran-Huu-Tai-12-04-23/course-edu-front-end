import { Accordion, AccordionItem, Button, Chip, Image } from '@nextui-org/react';
import { FaCheck } from 'react-icons/fa';
import Review from '../../components/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ICourse } from '../../model/Course.model';
import { Constant } from '../../constant';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CurrencyFormatter from '../../components/CurrencyFormatter';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
// get course by id
export const getCourseById = async (id: string | number): Promise<ICourse | null> => {
    try {
        const response = await fetch(Constant.BASE_URL_API + 'course/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData: ICourse | null = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        return null;
    }
};

function SummaryCourse() {
    const { courseId } = useParams();
    const [course, setCourse] = useState<ICourse | null>(null);

    useEffect(() => {
        const intiCourseData = async () => {
            if (courseId) {
                const res = await getCourseById(courseId);
                if (res) {
                    setCourse(res);
                }
            }
        };

        courseId && intiCourseData();
    }, [courseId]);

    console.log(courseId);
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    return (
        <>
            {!course && <h1>Loading ...</h1>}
            {course && (
                <div className="max-w-screen-xl mt-5 m-auto select-none ">
                    <div className="flex justify-between items-start gap-6">
                        <div className="flex flex-col gap-4 w-2/3">
                            <h1 className="font-extrabold text-3xl">{course.title}</h1>
                            <h5>{course.description}</h5>
                            <div className="w-full">
                                <h1 className="font-bold underline">Bạn sẽ học được gì?</h1>
                                <div className="grid grid-cols-2 mt-5 gap-6">
                                    {course.target.split(',').map((rq, index) => (
                                        <div key={index} className="flex justify-start items-center gap-4">
                                            <FaCheck className="text-primary" />
                                            <span>{rq}</span>
                                        </div>
                                    ))}
                                </div>
                                <h1 className="font-bold mt-5 underline">Nội dung học tập</h1>
                                <div className="w-full">
                                    {course.groupLessons && (
                                        <Accordion>
                                            {course.groupLessons?.map((groupLesson, index) => (
                                                <AccordionItem
                                                    key={groupLesson.id}
                                                    aria-label={'Accordion ' + groupLesson.id}
                                                    title={groupLesson.index + 1 + '.' + groupLesson.title}
                                                >
                                                    {groupLesson.lessons &&
                                                        groupLesson.lessons.map((lesson, lessonIndex) => (
                                                            <div
                                                                key={lesson.id}
                                                                className="p-4 rounded-lg w-full hover:bg-primary/10"
                                                            >
                                                                {index + 1}.{lessonIndex + 1}
                                                                {'   '}
                                                                {lesson.title}
                                                            </div>
                                                        ))}
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    )}
                                </div>

                                <h1 className="font-bold mt-5 underline">Yêu cầu</h1>
                                {course.requireSkill.split(',').map((rq, index) => (
                                    <div key={index} className="flex mt-5 justify-start items-center gap-4">
                                        <FaCheck className="text-primary" />
                                        <span>{rq}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/3 flex-col gap-4 justify-center flex items-center">
                            <Image className="w-full" alt={course.title} src={course.thumbnail} />
                            {course.price !== 0 && <CurrencyFormatter amount={course.price} />}
                            {course.price === 0 && <div className=" text-orange-500">Miến phí</div>}
                            <Button color="primary">Đăng ký</Button>
                            <span className="text-center text-white/2">{course.subTitle}</span>
                        </div>
                    </div>
                    <div className="w-full mt-10 m-auto">
                        <Slider {...settings}>
                            <Review /> <Review /> <Review /> <Review /> <Review /> <Review />
                        </Slider>
                    </div>
                </div>
            )}
        </>
    );
}

export default SummaryCourse;
