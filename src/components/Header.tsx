import { Button, Image } from '@nextui-org/react';
import logo from '../assets/img/logo.png';
import Search from './Search';
import { IoBookOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import UserInfo from './UserInfo';
import { PiSunLight } from 'react-icons/pi';
import { useTheme } from '../context/themeContext';
import { useNavigate } from 'react-router-dom';
import { path } from '../enum/path';
import helper from '../helper';
// import { PiCloudMoonThin } from 'react-icons/pi';

function Header() {
    const accessToken = helper.getToken();

    const history = useNavigate();
    const { toggleTheme } = useTheme();
    const isAuthenticated = accessToken !== null;

    return (
        <header className="select-none h-header border-b-[1px] border-solid dark:border-gray-900 backdrop-blur-2xl fixed z-[100000] left-0 top-0 right-0 flex justify-between items-center p-4">
            <div
                onClick={() => history(path.HOME)}
                className="cursor-pointer select-none flex justify-start items-center gap-10 w-1/3"
            >
                <Image className="m-5" isBlurred width={50} src={logo} alt="NextUI Album Cover" />
                <h5 className="font-semibold">Học Lập Trình Để Đi Làm</h5>
            </div>
            <Search />
            <div className="w-1/3 flex justify-end items-center gap-4">
                {isAuthenticated && (
                    <div className="select-none cursor-pointer hover:text-primary flex justify-start items-center gap-2 flex-shrink">
                        <IoBookOutline />
                        <h6 className="font-serif">Khóa học của tôi</h6>
                    </div>
                )}
                <Button
                    className="bg-transparent hover:text-primary"
                    onClick={toggleTheme}
                    isIconOnly
                    startContent={<PiSunLight className="text-xl hover:text-primary cursor-pointer" />}
                ></Button>

                {/* <PiCloudMoonThin /> */}
                {isAuthenticated ? (
                    <>
                        <GoBell className="text-xl hover:text-primary cursor-pointer" />
                        <UserInfo />
                    </>
                ) : (
                    <Button color="primary" onClick={() => history(path.AUTH.LOGIN)}>
                        Đăng nhập
                    </Button>
                )}
            </div>
        </header>
    );
}

export default Header;
