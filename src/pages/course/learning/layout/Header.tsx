import { Image, Button } from '@nextui-org/react';
import logo from '../../../../assets/img/logo.png';
import { Progress } from '@nextui-org/react';
import { useTheme } from '../../../../context/themeContext';
import { PiSunLight } from 'react-icons/pi';
import { SlNotebook } from 'react-icons/sl';
import { MdContactSupport } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../../enum/path';
import { ICourse } from '../../../../model/Course.model';
import { useCallback } from 'react';

type HeaderProps = {
   data: ICourse;
};
function Header(props: HeaderProps) {
   const history = useNavigate();
   const { toggleTheme } = useTheme();

   const totalLesson = useCallback(() => {
      const totalLess = props.data.groupLessons?.reduce((acc, item) => acc + item.lessons.length, 0);
      return totalLess;
   }, [props.data]);
   return (
      <header className="h-header border-b-[1px] border-solid dark:border-gray-900 border-second backdrop-blur-2xl fixed z-[100000] left-0 top-0 right-0 flex justify-between items-center p-4">
         <div
            className=" hover:text-primary cursor-pointer select-none flex justify-start items-center gap-10 w-1/3"
            onClick={() => history(path.HOME)}
         >
            <div className="flex justify-center items-center">
               <IoIosArrowBack className="text-xl" />
               <Image className="m-5" isBlurred width={50} src={logo} alt="Course EDU" />
            </div>
            <h5 className="font-extrabold">{props.data.title}</h5>
         </div>

         <div className="w-1/3 flex justify-center gap-10 select-none items-end">
            <Progress
               size="md"
               radius="sm"
               classNames={{
                  base: 'max-w-md',
                  track: 'drop-shadow-md border border-default',
                  indicator: 'bg-gradient-to-r from-pink-500 to-yellow-500',
                  label: 'tracking-wider font-medium text-default-600',
                  value: 'text-foreground/60',
               }}
               label={`1/${totalLesson()} bài học`}
               value={65}
               showValueLabel={true}
            />
            {/* <span className="text-primary cursor-pointer font-extrabold">Xem huy hiệu</span> */}
         </div>
         <div className="w-1/3 flex justify-end items-center gap-4">
            <Button
               className="bg-transparent hover:text-primary"
               onClick={toggleTheme}
               isIconOnly
               startContent={<PiSunLight className="text-xl hover:text-primary cursor-pointer" />}
            ></Button>
            <Button className="bg-transparent hover:text-primary" startContent={<SlNotebook className="text-xl" />}>
               Xem lại ghi chú
            </Button>
            <Button
               className="bg-transparent hover:text-primary"
               startContent={<MdContactSupport className="text-xl" />}
            >
               Xem hướng dẫn
            </Button>
         </div>
      </header>
   );
}

export default Header;
