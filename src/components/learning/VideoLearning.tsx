function VideoLearning() {
    return (
        <div
            style={{
                height: 'calc(100vh - 10rem)',
            }}
            className="select-none scroll-custom overflow-auto w-full "
        >
            <div className="w-full bg-black  border-b-[1px] border-solid dark:border-gray-900 ">
                <div className="w-full max-w-5xl m-auto ">
                    <iframe
                        allowFullScreen={true}
                        className="overflow-hidden max-h-[40rem]"
                        width="100%"
                        src="https://www.youtube.com/embed/7Y0ii_QjlKM?si=hOxjPFulRacutQLR"
                        title=""
                        allow=" autoplay; encrypted-media; picture-in-picture"
                    ></iframe>
                </div>
            </div>

            <div className=" p-10 ">
                <h5 className="text-3xl font-extrabold">Thuộc tính padding (đệm)</h5>
                <h5 className="text-lg text-white/50">Cập nhật vào ngày 12/04/2003</h5>

                <br />
                <div>
                    Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️
                    <br />
                    Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️
                </div>
            </div>
        </div>
    );
}

export default VideoLearning;
