import { Accordion, AccordionItem, Button, Image } from '@nextui-org/react';
import { FaCheck } from 'react-icons/fa';
import Review from '../../components/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function SummaryCourse() {
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8081/api/course-summaries/by-course/1')
            .then(response => response.json())
            .then(data => setCourseData(data))
            .catch(error => console.error('Error fetching course data:', error));
    }, []);

    if (!courseData) {
        return <div>Loading...</div>;
    }

    const { title, description, details, course } = courseData;
    return (
        <div className="max-w-screen-xl mt-5 m-auto select-none ">
            <div className="flex justify-between items-start gap-6">
                <div className="flex flex-col gap-4 w-2/3">
                    <h1 className="font-extrabold text-3xl">{title}</h1>
                    <h5>{description}</h5>
                    <div className="w-full">
                        <h1 className="font-bold underline">Bạn sẽ học được gì?</h1>
                        <div className="grid grid-cols-2 mt-5 gap-6">
                            {details.map((detail, index) => (
                                <div key={index} className="flex justify-start items-center gap-4">
                                    <FaCheck className="text-primary" />
                                    <span>{detail.target}</span>
                                </div>
                            ))}
                        </div>
                        <h1 className="font-bold mt-5 underline">Nội dung học tập</h1>
                        <div className="w-full">
                            <Accordion>
                                {details.map((detail, index) => (
                                    <AccordionItem key={index} aria-label={`Accordion ${index}`} title={`Accordion ${index}`}>
                                        {detail.contentOutline}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <h1 className="font-bold mt-5 underline">Yêu cầu</h1>
                        <div className="flex flex-col">
                            {details.map((detail, index) => (
                                <div key={index} className="flex items-center gap-4 mb-4">
                                    <FaCheck className="text-primary" />
                                    <span>{detail.requirements}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="w-1/3 flex-col gap-4 justify-center flex items-center">
                    <Image className="w-full" alt="Course Image" src={course.thumbnails} />
                    <h5 className="text-3xl text-primary">{course.price}</h5>
                    <Button color="primary">Đăng ký</Button>
                    <span className="text-center text-white/2">{course.description}</span>
                </div>
            </div>
            <div className="w-full mt-10 m-auto">
                <Slider {...settings}>
                    <Review /> <Review /> <Review /> <Review /> <Review /> <Review />
                </Slider>
            </div>
        </div>
    );
}

export default SummaryCourse;
