import { Breadcrumbs, BreadcrumbItem, Image, Button, Link } from '@nextui-org/react';
import logo from '../../assets/img/logo.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { TiSocialFacebook } from 'react-icons/ti';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { path } from '../../enum/path';
import { useState } from 'react';
import LoginWithEmail from './_login_email';

enum keyOptionLogin {
    EMAIL = 'email',
    FACEBOOK = 'facbooke',
    GITHUB = 'github',
    GOOGLE = 'google',
}
function Login() {
    const [typeLogin, setTypeLogin] = useState<keyOptionLogin | -1>(-1);
    const optionLogin = [
        {
            name: 'Sử dụng email',
            icon: <BsFillPersonFill className="text-xl" />,
            key: keyOptionLogin.EMAIL,
        },
        {
            name: 'Sử dụng facbooke',
            icon: <TiSocialFacebook className="text-xl text-blue-700" />,
            key: keyOptionLogin.FACEBOOK,
        },
        {
            name: 'Sử dụng google',
            icon: <FcGoogle className="text-xl " />,
            key: keyOptionLogin.GOOGLE,
        },
        {
            name: 'Sử dụng github',
            icon: <FaGithub className="text-xl" />,
            key: keyOptionLogin.GITHUB,
        },
    ];
    return (
        <div className="max-w-2xl m-auto mt-5 select-none">
            <Breadcrumbs isDisabled>
                <BreadcrumbItem>Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>Đăng nhập</BreadcrumbItem>
            </Breadcrumbs>

            <div className="flex flex-col gap-4 p-10 mt-5 rounded-lg border-solid border-second border-[1px] ">
                {typeLogin === -1 && (
                    <>
                        <div className="flex justify-start items-center gap-10 ">
                            <Image className="" isBlurred width={50} src={logo} alt="NextUI Album Cover" />
                            <h5 className="font-semibold">Đăng nhập để tiếp tục với nhiều khóa học hấp dẫn</h5>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h5 className="font-extrabold text-2xl">Đăng nhập vào Course EDU👌</h5>

                            {optionLogin.map((bt, index) => (
                                <Button
                                    onClick={() => setTypeLogin(bt.key)}
                                    className="w-1/2"
                                    key={index}
                                    startContent={bt.icon}
                                >
                                    {bt.name}
                                </Button>
                            ))}
                            <span>
                                Bạn chưa có tài khoản?
                                <Link href={path.AUTH.REGISTER} className="text-primary ml-2">
                                    Đăng ký
                                </Link>
                            </span>
                            <span className="text-center text-sm">
                                Việc bạn tiếp tục sử dụng trang web, đồng nghĩa bạn đồng ý với
                                <Link href={path.AUTH.REGISTER} className="underline text-gray-500 ml-2 mr-2">
                                    điều khoản sử dụng
                                </Link>
                                của chúng tôi
                            </span>
                        </div>
                    </>
                )}
                {typeLogin === keyOptionLogin.EMAIL && <LoginWithEmail onBack={() => setTypeLogin(-1)} />}
            </div>
        </div>
    );
}

export default Login;
