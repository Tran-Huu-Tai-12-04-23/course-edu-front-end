import CourseItem from '../components/CourseItem';
import { Link } from '@nextui-org/react';
// import ListTag from '../components/ListTag';
import BannerSlide from '../components/BannerSlide';
import { useEffect, useState } from 'react';
import { useLoading } from '../context/loadingContext';
import { IHomeResponse } from '../model/Common.model';

const fetchData = async (): Promise<IHomeResponse | null> => {
    try {
        const response = await fetch('https://localhost:7005/api/home');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: IHomeResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

function Home() {
    const [homeData, setHomeData] = useState<IHomeResponse | null>();
    const loading = useLoading();

    // init data
    useEffect(() => {
        const getCourse = async () => {
            loading.startLoading();
            const data = await fetchData();
            loading.stopLoading();
            if (data === null) return;
            setHomeData(data);
        };
        getCourse();
    }, []);
    return (
        <>
            <div className="w-full mt-5 mb-10">{homeData?.banners && <BannerSlide data={homeData?.banners} />}</div>
            <div className="max-w-screen-xl mt-5 m-auto ">
                {/* <ListTag /> */}
                {homeData &&
                    homeData.courseRes.map((cour, index) => {
                        return (
                            <div className="w-full" key={index}>
                                <div className="flex mt-5 justify-between w-full items-center  ">
                                    <div className="flex justify-start items-center gap-4">
                                        <h5 className="font-extrabold text-2xl">
                                            {JSON.stringify(cour.typeCourse.typeName)}
                                        </h5>
                                    </div>
                                    <Link href="#" className="underline">
                                        Xem tất cả
                                    </Link>
                                </div>
                                <h5 className="text-white/2  mb-5">380.506+ người khác đã học</h5>

                                <div className="grid grid-cols-3 gap-10">
                                    {cour.courses.map((c, index) => (
                                        <CourseItem key={index} data={c} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}

export default Home;
