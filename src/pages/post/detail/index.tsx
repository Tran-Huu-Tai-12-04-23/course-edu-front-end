import { useEffect, useState } from 'react';
import BlogView from '../../../components/PostView';
import { IPostItem } from '../../../model/Post.model';
import { getDetailPostById } from '../service';
import { useParams } from 'react-router-dom';
import { Button, Progress } from '@nextui-org/react';
import CommentBox from '../../../components/CommentBox';
import { FaCommentAlt } from 'react-icons/fa';

function DetailPost() {
   const { postId } = useParams();
   const [post, setPost] = useState<IPostItem | null>(null);
   const [isCommentBox, setIsCommentBox] = useState(false);

   useEffect(() => {
      const initData = async () => {
         if (!postId) return;
         const res = await getDetailPostById(postId);

         res && setPost(res);
      };

      initData();
   }, []);
   return (
      <>
         {!post && (
            <div className="h-screen w-screen flex justify-center items-center">
               <div>
                  Loading....
                  <Progress size="sm" isIndeterminate aria-label="Loading..." className="max-w-3xl" color="primary" />
               </div>
            </div>
         )}

         <Button
            className="fixed  left-4 top-24"
            startContent={<FaCommentAlt />}
            isIconOnly
            color="secondary"
            variant="flat"
            onClick={() => setIsCommentBox(true)}
         />

         {post && (
            <>
               <BlogView data={post}></BlogView>
               {isCommentBox && (
                  <CommentBox
                     onCLose={function (): void {
                        setIsCommentBox(false);
                     }}
                  />
               )}
            </>
         )}
      </>
   );
}

export default DetailPost;
