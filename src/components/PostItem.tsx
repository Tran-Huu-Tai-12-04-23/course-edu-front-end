import React from 'react';
import { Card, CardBody, Image, Button, User } from '@nextui-org/react';
import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { path } from '../enum/path';

export default function PostItem() {
    const history = useNavigate();
    const [liked, setLiked] = React.useState(false);
    const topics = ['UX/UI design', 'Study English', 'SEO website', 'Other...'];

    return (
        <Card
            isBlurred
            className="cursor-pointer border-none bg-background/60 dark:bg-default-100/50 w-full"
            shadow="sm"
        >
            <CardBody
                onClick={() => {
                    history(path.POST.DETAIL + '/id');
                }}
            >
                <div className="w-full">
                    <div className="w-full flex justify-between items-center">
                        <User
                            name="Jane Doe"
                            description="Product Designer"
                            avatarProps={{
                                src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                            }}
                        />
                        <div className="flex justify-end items-start">
                            <h5 className=" dark:text-white/50 text-black/50">2 giờ trước</h5>
                            <Button
                                isIconOnly
                                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                radius="full"
                                variant="light"
                                onPress={() => setLiked((v) => !v)}
                            >
                                {!liked && <BsBookmark onClick={() => setLiked(!liked)} className="text-xl" />}
                                {liked && (
                                    <BsFillBookmarkFill
                                        onClick={() => setLiked(!liked)}
                                        className="text-xl text-primary"
                                    />
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className="w-full mt-5 flex justify-between items-start">
                        <div className="">
                            <h5 className="text-xl font-bold ">Authentication & Authorization trong ReactJS</h5>
                            <h5 className="truncate text-md dark:text-white/50 text-black/50">
                                Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm,
                                giúp chúng ta xác thực và phân quyền...
                            </h5>
                            <div className="flex  justify-start items-start gap-4 mt-5 truncate">
                                {topics.map((topic, index) => {
                                    if (index < 3) {
                                        return (
                                            <Button className="truncate" size="md" key={index}>
                                                {topic}
                                            </Button>
                                        );
                                    } else if (index === 3) {
                                        return (
                                            <Button className="truncate" size="md" key={index}>
                                                ...
                                            </Button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height={50}
                            width={200}
                            shadow="md"
                            src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png"
                        />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
