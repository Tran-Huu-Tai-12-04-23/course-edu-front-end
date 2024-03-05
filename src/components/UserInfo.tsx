import { Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react';
import helper from '../helper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { path } from '../enum/path';
type UserActionItem = {
    name: string;
    path: string;
    action?: () => void;
};

function UserInfo() {
    const history = useNavigate();
    const userAction: UserActionItem[][] = [
        [
            {
                name: 'Trang cá nhân',
                path: '',
            },
        ],
        [
            {
                name: 'Viết blog',
                path: '',
            },
            {
                name: 'Bài viết của tôi',
                path: '',
            },
        ],
        [
            {
                name: 'Bài viết đã lưu',
                path: '',
            },
        ],
        [
            {
                name: 'Cài đặt',
                path: '',
            },
            {
                name: 'Đăng xuất ',
                path: '',
                action: () => {
                    helper.logout();
                    toast.success('Đăng xuất thành công!');
                    history(path.AUTH.LOGIN);
                },
            },
        ],
    ];
    return (
        <Popover placement={'bottom-end'}>
            <PopoverTrigger>
                <User
                    className="select-none  cursor-pointer hover:text-primary"
                    name=""
                    description=""
                    avatarProps={{
                        src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                    }}
                />
            </PopoverTrigger>
            <PopoverContent className=" light:text-black border-none w-[15rem] p-4 rounded-lg">
                <div className="flex  flex-col w-full justify-center items-start">
                    <User
                        className="select-none mb-4 cursor-pointer  hover:text-primary"
                        name="Huu tai tran"
                        description="@huutaitran"
                        avatarProps={{
                            src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                        }}
                    />
                    <div className="w-full border-b-[1px] border-solid border-second mb-2"></div>
                    {userAction.map((actions, index) => {
                        return (
                            <div key={index} className="flex flex-col w-full">
                                {actions.map((ac, index) => (
                                    <div
                                        onClick={ac.action}
                                        key={index}
                                        className="text-black/2 h-[2rem] hover:text-primary cursor-pointer"
                                    >
                                        {ac.name}
                                    </div>
                                ))}
                                {index < userAction.length - 1 && (
                                    <div className="w-full border-b-[1px] border-solid border-second mb-2 mt-2"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default UserInfo;
