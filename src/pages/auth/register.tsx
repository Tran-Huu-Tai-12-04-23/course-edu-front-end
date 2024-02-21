import { Breadcrumbs, BreadcrumbItem, Image, Button, Link, Input } from '@nextui-org/react';
import logo from '../../assets/img/logo.png';
import { path } from '../../enum/path';
import { MdOutlineEmail } from 'react-icons/md';
import { TbPassword } from 'react-icons/tb';

enum keyOptionLogin {
    EMAIL = 'email',
    FACEBOOK = 'facbooke',
    GITHUB = 'github',
    GOOGLE = 'google',
}
function Register() {
    return (
        <div className="max-w-2xl m-auto mt-5 select-none">
            <Breadcrumbs isDisabled>
                <BreadcrumbItem>Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>Đăng ký</BreadcrumbItem>
            </Breadcrumbs>

            <div className="flex flex-col gap-4 p-10 mt-5 rounded-lg border-solid border-second border-[1px] ">
                <div className="flex justify-start items-center gap-10 ">
                    <Image className="" isBlurred width={50} src={logo} alt="NextUI Album Cover" />
                    <h5 className="font-semibold">Đăng ký tài khoản để tiếp tục với nhiều khóa học hấp dẫn</h5>
                </div>

                <div className="flex flex-col gap-6 justify-center items-center">
                    <h5 className="font-extrabold text-2xl">Đăng ký tài khoản Course EDU👌</h5>
                    <Input
                        startContent={<MdOutlineEmail className="text-xl" />}
                        key={'outside'}
                        type="email"
                        label="Email"
                        labelPlacement={'outside'}
                        placeholder="Nhập email của bạn..."
                    />
                    <Input
                        startContent={<TbPassword className="text-xl" />}
                        key={'outside'}
                        type="password"
                        label="Mật khẩu"
                        labelPlacement={'outside'}
                        placeholder="Nhập mật khẩu của bạn..."
                    />
                    <Input
                        startContent={<TbPassword className="text-xl" />}
                        key={'outside'}
                        type="password"
                        label="Nhập lại mật khẩu"
                        labelPlacement={'outside'}
                        placeholder="Nhập lại mật khẩu của bạn..."
                    />
                    <h5 className="w-full text-sm">
                        <span className="text-primary">Gợi ý:</span> Mật khẩu ít nhất 6 ký tự,..
                    </h5>
                    <Button color="primary">Đăng ký</Button>
                    <span>
                        Bạn đã có tài khoản?
                        <Link href={path.AUTH.LOGIN} className="text-primary ml-2">
                            Đăng nhập
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
            </div>
        </div>
    );
}

export default Register;
