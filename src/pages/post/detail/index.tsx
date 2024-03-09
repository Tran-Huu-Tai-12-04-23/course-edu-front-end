import BlogView from '../../../components/BlogView';

function DetailPost() {
    const data = {
        thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/get-tech-eco.appspot.com/o/images%2Fnhatho21498818668_TJCC.jpg.webp?alt=media&token=49687793-837d-426e-9ea4-677818a9cac4',
        tags: 'Tech nololgy,PHP',
        title: 'What is love',
        description:
            'Love is complicated. Romance is a mystery. Get to the heart of the matter with Forky in this special look at “What Is Love?” from Forky Asks a Question, now streaming on Disney+',
        items: [
            {
                id: 'd86e5807-c6ed-429e-874b-351325dd1365',
                index: 0,
                typeItem: 0,
                content: 'The second title ',
            },
            {
                id: '5c97bb30-f9b5-4da3-8709-5df057703297',
                index: 1,
                typeItem: 1,
                urlImg: 'https://firebasestorage.googleapis.com/v0/b/get-tech-eco.appspot.com/o/images%2FGemini_Generated_Image.jfif?alt=media&token=1383e0a9-7e66-4d57-b07c-a976ccbe279f',
                link: '',
                alt: '',
            },
            {
                id: '707d2852-ee44-486d-bdbf-c1111087540d',
                index: 2,
                typeItem: 4,
                link: 'https://www.facebook.com/groups/375816444755897/?hoisted_section_header_type=recently_seen&multi_permalinks=604201161917423',
            },
            {
                id: 'e5b0cfe5-cfd6-4062-b135-2e715b48c6aa',
                index: 3,
                typeItem: 0,
                content: 'The end post',
            },
            {
                id: '0e873ba4-1898-4d6c-bbcf-1fcff72d229c',
                index: 4,
                typeItem: 3,
                content:
                    '<h2 class="ql-align-justify"><strong style="color: rgb(54, 54, 54);">Samsung Galaxy Z Fold5 12GB 256GB - Hiệu năng vượt trội, thiết kế mỏng nhẹ hơn</strong></h2><ol><li class="ql-align-justify"><strong style="color: rgb(54, 54, 54);">Samsung Galaxy Z Fold5</strong>&nbsp;là phân khúc smartphone gập đáng được mong chờ nhất trong năm 2023 khi sở hữu thiết kế đột phá cùng nhiều tính năng ấn tượng. Với màn hình gập mở linh hoạt, Z Fold5 mang tới cho bạn trải nghiệm sử dụng của cả điện thoại thông minh lẫn máy tính bảng. Bên cạnh đó, máy còn đi kèm với nhiều tính năng công nghệ hàng đầu, sẵn sàng phục vụ được những yêu cầu sử dụng phức tạp của người dùng.</li></ol><h3 class="ql-align-justify"><strong style="color: rgb(54, 54, 54);">Nâng tầm khả năng quay chụp với cụm camera lên tới 50M</strong></h3><ol><li class="ql-align-justify">Samsung Galaxy Z Fold5 nổi bật với khả năng quay chụp siêu sắc nét thông qua hệ thống máy ảnh với độ phân giải lên tới 50MP. Cụ thể, smartphone gập mới này được trang bị cụm 3 camera với độ sắc nét lần lượt là 50 + 10 + 12MP.&nbsp;</li></ol><p><br></p>',
            },
            {
                id: 'bc488504-7ea0-482d-ac9f-1b24759dbcc7',
                index: 5,
                typeItem: 5,
                link: 'https://www.facebook.com/groups/375816444755897/?hoisted_section_header_type=recently_seen&multi_permalinks=604201161917423',
            },
            {
                id: 'f93f8851-6483-45b6-bab9-0d42fb207fcf',
                index: 6,
                typeItem: 2,
                content:
                    "Forky is a fictional character in the Toy Story franchise created by Disney and Pixar. His first appearance is in Toy Story 4, which was released in June 2019. In the Toy Story universe, he was made by Bonnie, who stuck googly eyes and red pipe cleaner onto a spork. He is also the main character of the series of shorts Forky Asks a Question on Disney+.\n\nForky is first seen during the orientation at Bonnie's kindergarten class, where he was created with the help of Woody who scavenged parts from the trash bin for a craft project. As he and Woody came back home while inside Bonnie's backpack, Forky comes to life. Woody presents Forky to the rest of the gang; Forky, convinced that he is more of a piece of trash than a toy, doggedly tries to find solace in the nearest trash bin.",
            },
            {
                id: '2ea7a182-3b39-4b9f-8b95-d15e7264dee9',
                index: 7,
                typeItem: 1,
                urlImg: 'https://firebasestorage.googleapis.com/v0/b/get-tech-eco.appspot.com/o/images%2FGreen%20Modern%20Course%20Banner.png?alt=media&token=f93e6274-12fc-42b0-8199-ccf50a40efe6',
                link: '',
                alt: '',
            },
            {
                id: '47e18cc6-53f4-484e-bf91-a18939fe67e6',
                index: 8,
                typeItem: 2,
                content: 'asdasd\nasd\nasd\nasd\nasd\nasd\nasd\nasd\nasd\nasd\nasd',
            },
            {
                id: '1f5c292e-f131-45c2-b091-ec2fcc13b6af',
                index: 9,
                typeItem: 2,
                content: '',
            },
            {
                id: '2ff6d98d-94b6-46f8-b757-da1fff36ce5b',
                index: 10,
                typeItem: 1,
                urlImg: 'https://firebasestorage.googleapis.com/v0/b/get-tech-eco.appspot.com/o/images%2Fnhatho21498818668_TJCC.jpg.webp?alt=media&token=e692d6c3-f03a-4642-b9ff-24f0cf7548a3',
                link: '',
                alt: '',
            },
            {
                id: 'b1d2842e-8b8c-483c-838b-ca54231cf9dd',
                index: 11,
                typeItem: 1,
                urlImg: 'https://firebasestorage.googleapis.com/v0/b/get-tech-eco.appspot.com/o/images%2FScreenshot%202023-12-26%20132823.png?alt=media&token=e202c7a8-8389-4482-ab3a-97d798d1d8b0',
                link: '',
                alt: '',
            },
            {
                id: '894c9fd2-4cb6-448e-bcca-8c6568ab2db7',
                index: 12,
                typeItem: 1,
                urlImg: 'https://firebasestorage.googleapis.com/v0/b/get-tech-eco.appspot.com/o/images%2Fimage_processing20190913-27240-1olakko.png?alt=media&token=8a1eed3b-53cb-4a64-9072-841eb152f5af',
                link: '',
                alt: '',
            },
        ],
    };
    return <BlogView data={data}></BlogView>;
}

export default DetailPost;
