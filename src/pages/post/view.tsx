import { Button } from '@nextui-org/react';
import BlogItem from '../../components/BlogItem';

function ViewPost() {
    const topics = ['UX/UI design', 'Study English', 'SEO website', 'Other...'];
    return (
        <div className="pl-32 pr-32 mt-5 w-full">
            <h5 className="text-3xl font-extrabold">Bài viết mới nhất</h5>
            <h5 className="">
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
            </h5>
            <div className=" flex justify-between items-start mt-5 w-full gap-10">
                <div className="flex flex-col gap-4 w-full">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>

                <div className="relative w-2/5 ">
                    <h5 className="text-xl font-bold dark:text-white/50  text-black/50">CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h5>
                    <div className="grid grid-cols-3 gap-4 mt-5">
                        {topics.map((topic, index) => (
                            <Button size="md" key={index}>
                                {topic}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewPost;