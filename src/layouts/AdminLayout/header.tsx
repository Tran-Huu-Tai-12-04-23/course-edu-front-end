import { GoBell } from 'react-icons/go';
import UserInfo from '../../components/UserInfo';
import { Button } from '@nextui-org/react';
import { useTheme } from '../../context/themeContext';
import { PiSunLight } from 'react-icons/pi';
import Search from '../../components/Search';

function Header() {
    const { toggleTheme } = useTheme();
    return (
        <div className="z-[100000] fixed right-10 flex justify-end items-center top-5 gap-4 bg-[rgba(0,0,0,0.1)]  dark:bg-[rgba(255,255,255,0.1)] backdrop-blur-3xl rounded-xl p-2 ">
            <Search className="rounded-full min-w-[30rem]" />
            <div className="w-[10rem]"></div>
            <GoBell className="text-xl hover:text-primary cursor-pointer" />
            <Button
                className="bg-transparent hover:text-primary"
                onClick={toggleTheme}
                isIconOnly
                startContent={<PiSunLight className="text-xl hover:text-primary cursor-pointer" />}
            ></Button>
            <UserInfo />
        </div>
    );
}

export default Header;
