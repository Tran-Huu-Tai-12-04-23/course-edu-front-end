import { Image, Accordion, AccordionItem } from '@nextui-org/react';
import logo from '../../assets/img/logo.png';
import { GiOpenBook } from 'react-icons/gi';
import { BiBookContent } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import { MdSpaceDashboard } from 'react-icons/md';
import { path } from '../../enum/path';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
    const { pathname } = useLocation();
    const history = useNavigate();
    const navs = [
        {
            name: 'Dashboard',
            icon: <MdSpaceDashboard className="text-xl" />,
            key: 1,
            path: path.ADMIN.DASHBOARD,
        },
        {
            name: 'Courses',
            icon: <GiOpenBook className="text-xl" />,
            key: 2,
            path: path.ADMIN.COURSE,
            subNav: [
                {
                    name: 'Hello',
                },
            ],
        },
        {
            name: 'Posts',
            icon: <BiBookContent className="text-xl" />,
            key: 3,
            path: path.ADMIN.POST,
            subNav: [
                {
                    name: 'Hello',
                },
            ],
        },
        {
            name: 'Users',
            icon: <BsPersonFill className="text-xl" />,
            key: 4,
            path: path.ADMIN.USER,
            subNav: [
                {
                    name: 'Hello',
                },
            ],
        },
    ];
    return (
        <div className="fixed z-[100000] dark:bg-dark-sidebar border-r-[1px] border-solid border-second shadow-xl bg-white backdrop-blur-3xl flex justify-start max-h-screen top-0 left-0 bottom-0 items-start flex-col">
            <div className="flex justify-center items-center w-full border-b-[1px] border-solid border-second pb-5 mb-5">
                <Image className="scale-[200%] mt-5" isBlurred width={50} src={logo} alt="Course Edut" />
            </div>
            <Accordion className="m-0 p-0">
                {navs.map((nav) => (
                    <AccordionItem
                        key={nav.key}
                        hideIndicator={!nav?.subNav}
                        className={`hover:text-primary pl-4 pr-4  ${nav.path === pathname ? 'text-primary' : ''}`}
                        startContent={
                            <div
                                onClick={() => history(nav.path)}
                                className="flex justify-start items-center gap-4 w-[10rem]"
                            >
                                {nav.icon}
                                <h5>{nav.name}</h5>
                            </div>
                        }
                    >
                        {nav.subNav && nav.subNav.map((subNav, index) => <div key={index}>{subNav.name}</div>)}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default Sidebar;
