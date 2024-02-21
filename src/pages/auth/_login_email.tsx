import { Button, Input, Link } from '@nextui-org/react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { TbPassword } from 'react-icons/tb';
import { path } from '../../enum/path';

type LoginWithEmailProps = {
    onBack: () => void;
};
function LoginWithEmail(props: LoginWithEmailProps) {
    return (
        <div className="flex flex-col gap-4 justify-center w-full items-start">
            <Button onClick={props.onBack} isIconOnly className="bg-transparent">
                <IoIosArrowBack className="text-xl" />
            </Button>
            <div className="flex w-full flex-col gap-6 justify-center items-center">
                <h5 className="font-extrabold text-2xl">Đăng nhập bằng email</h5>
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
                <Button color="primary">Đăng nhập</Button>
                <span className="text-center text-sm">
                    Việc bạn tiếp tục sử dụng trang web, đồng nghĩa bạn đồng ý với
                    <Link href={path.AUTH.REGISTER} className="underline text-gray-500 ml-2 mr-2">
                        điều khoản sử dụng
                    </Link>
                    của chúng tôi
                </span>
            </div>
        </div>
    );
}

export default LoginWithEmail;
