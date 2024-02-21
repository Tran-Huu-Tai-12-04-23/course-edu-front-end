import CourseItem from '../components/CourseItem';
import { Button, Link } from '@nextui-org/react';
// import ListTag from '../components/ListTag';
import BannerSlide from '../components/BannerSlide';

function Home() {
    return (
        <>
            <div className="w-full mt-5 mb-10">
                <BannerSlide />
            </div>
            <div className="max-w-screen-xl mt-5 m-auto ">
                {/* <ListTag /> */}

                <div className="flex mt-5 justify-between w-full items-center  ">
                    <div className="flex justify-start items-center gap-4">
                        <h5 className="font-extrabold text-2xl">Khóa học cho front-end dev</h5>
                    </div>
                    <Link href="#" className="underline">
                        Xem tất cả
                    </Link>
                </div>
                <h5 className="text-white/2  mb-5">380.506+ người khác đã học</h5>

                <div className="grid grid-cols-3 gap-10">
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </div>
                <div className="w-full flex justify-between items-center mt-5">
                    <Button color="primary" className="m-auto" variant="light">
                        Xem thêm
                    </Button>
                </div>
                <div className="flex justify-between w-full items-center mt-10 ">
                    <div className="flex justify-start items-center gap-4">
                        <h5 className="font-extrabold text-2xl">Khóa học cho back-end dev</h5>
                    </div>
                    <Link href="#" className="underline">
                        Xem tất cả
                    </Link>
                </div>
                <h5 className="text-white/2  mb-5">3.506+ người khác đã học</h5>

                <div className="grid grid-cols-3 gap-10">
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </div>
            </div>
        </>
    );
}

export default Home;
