import { Card, Image, Link, User } from '@nextui-org/react';
import UploadImg from '../../../components/UploadImg';
import { IoMdPerson } from 'react-icons/io';
import CourseJoined from './CourseJoined';

function Profile() {
    return (
        <div className="w-full">
            <div className="w-full bg-[#15616d] relative flex rounded-b-xl justify-center items-center">
                <Image
                    className="m-auto bg-contain h-[20rem]"
                    alt="Code"
                    src="https://firebasestorage.googleapis.com/v0/b/appmapdemo-b2a39.appspot.com/o/Green%20Teal%20%26%20Navy%20Geometric%20Modern%20Computer%20Programmer%20Code%20Editor%20Quotes%20for%20Facebook%20Post.png?alt=media&token=5e69af64-97e1-4c27-901d-3ce3b4609272"
                ></Image>

                <div className="absolute bottom-3 right-3">
                    <UploadImg
                        onResult={function (res: string): void {
                            console.log(res);
                        }}
                    />
                </div>
                <Card className=" scale-150 absolute left-[5%] -bottom-[10%] p-2 pl-4 pr-4">
                    <User
                        name="Junior Garcia"
                        description={
                            <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                @jrgarciadev
                            </Link>
                        }
                        avatarProps={{
                            src: 'https://firebasestorage.googleapis.com/v0/b/appmapdemo-b2a39.appspot.com/o/Colorful%20Gradient%20Background%20Man%203D%20Avatar.png?alt=media&token=2cf30ad7-20b5-4f41-b95e-cd927c2ca44e',
                        }}
                    />
                </Card>
            </div>

            <div className="flex mt-20 justify-between items-start gap-10">
                <Card className="p-4 w-full flex flex-col gap-4">
                    <div>
                        <h5 className=" font-extrabold">Giới thiệu</h5>
                        <div className="flex justify-start items-center gap-4 mt-2">
                            <IoMdPerson className="" />
                            <h5 className=" ">Thành viên của Course EDU - Học lập trình để đi làm từ 2 năm trước</h5>
                        </div>
                    </div>

                    <div>
                        <h5 className=" font-extrabold">Hoạt động gần đây</h5>
                        <div className="flex justify-start items-center gap-4 mt-2">
                            <IoMdPerson className="" />
                            <h5 className=" ">Chưa có hoạt động nào gần đây</h5>
                        </div>
                    </div>
                </Card>

                <div className="flex flex-col gap-8 w-full">
                    <h5 className=" font-extrabold">Các khóa học đã tham gia</h5>
                    {[1, 2, 3, 4].map((i, index) => (
                        <CourseJoined key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
