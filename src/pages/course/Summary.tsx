import { Accordion, AccordionItem, Button, Image } from '@nextui-org/react';
import { FaCheck } from 'react-icons/fa';
import Review from '../../components/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function SummaryCourse() {
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return (
        <div className="max-w-screen-xl mt-5 m-auto select-none ">
            <div className="flex justify-between items-start gap-6">
                <div className="flex flex-col gap-4 w-2/3">
                    <h1 className="font-extrabold text-3xl">Kiến Thức Nhập Môn IT</h1>
                    <h5>
                        Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này
                        trước nhé.
                    </h5>
                    <div className="w-full">
                        <h1 className="font-bold underline">Bạn sẽ học được gì?</h1>
                        <div className="grid grid-cols-2 mt-5 gap-6">
                            <div className="flex justify-start items-center gap-4">
                                <FaCheck className="text-primary" />
                                <span>Các kiến thức cơ bản, nền móng của ngành IT</span>
                            </div>
                            <div className="flex justify-start items-center gap-4">
                                <FaCheck className="text-primary" />
                                <span>Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng</span>
                            </div>
                            <div className="flex justify-start items-center gap-4">
                                <FaCheck className="text-primary" />
                                <span>Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng</span>
                            </div>
                            <div className="flex justify-start items-center gap-4">
                                <FaCheck className="text-primary" />
                                <span>Hiểu hơn về cách internet và máy vi tính hoạt động</span>
                            </div>
                        </div>
                        <h1 className="font-bold mt-5 underline">Nội dung học tập</h1>
                        <div className="w-full">
                            <Accordion>
                                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                    {defaultContent}
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <h1 className="font-bold mt-5 underline">Yêu cầu</h1>
                        <div className="flex justify-start items-center gap-4">
                            <FaCheck className="text-primary" />
                            <span>Hoàn thành khóa học Javascript cơ bản tại F8 hoặc đã nắm chắc Javascript cơ bản</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex-col gap-4 justify-center flex items-center">
                    <Image
                        className="w-full"
                        alt="NextUI hero Image"
                        src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                    />

                    <h5 className="text-3xl text-primary">Miễn phí</h5>
                    <Button color="primary">Đăng ký</Button>
                    <span className="text-center text-white/2">
                        F8 duqc nhåc tdi d moi ndi, d dåu c6 cd håi viéc låm cho nghé IT vå c6 nhüng con ngudi yéu thich
                        lap trinh F8 sé d d6.
                    </span>
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
