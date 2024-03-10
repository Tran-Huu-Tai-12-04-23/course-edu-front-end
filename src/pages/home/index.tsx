import CourseItem from '../../components/CourseItem';
import { Link } from '@nextui-org/react';
// import ListTag from '../components/ListTag';
import BannerSlide from '../../components/BannerSlide';
import { useEffect, useState } from 'react';
import { useLoading } from '../../context/loadingContext';
import { IHomeResponse } from '../../model/Common.model';
import Skeleton from './skeleton';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { decodeUserInfoFromJWT, fetchLoginWithGoogle } from '../../services/auth.service';
import toast from 'react-hot-toast';
import { path } from '../../enum/path';
import helper from '../../helper';
import { useNavigate } from 'react-router-dom';

const fetchData = async (): Promise<IHomeResponse | null> => {
    try {
        const response = await fetch('http://localhost:8081/api/home');
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
    const history = useNavigate();

    useGoogleOneTapLogin({
        onSuccess: async (credentialResponse) => {
            console.log(credentialResponse);

            if (credentialResponse.credential) {
                const userInfo = decodeUserInfoFromJWT(credentialResponse.credential);

                if (!userInfo) return;

                loading.startLoading();
                const response = await fetchLoginWithGoogle(userInfo);
                loading.stopLoading();

                if (response.status === 200) {
                    toast.success(response.message);
                    response.data && helper.login(response.data);
                    history(path.HOME);
                } else {
                    toast.error(response.message);
                }
            }
        },
        onError: () => {
            console.log('Login Failed');
        },
    });
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
    return loading.isLoading ? (
        <Skeleton />
    ) : (
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
