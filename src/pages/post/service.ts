import { Constant } from '../../constant';
import { IPostItem } from '../../model/Post.model';

// get all post when approve = true
export const getAllPostApprove = async (): Promise<IPostItem[]> => {
   try {
      const response = await fetch(Constant.BASE_URL_API + 'post/approve', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: IPostItem[] = await response.json();
      return responseData;
   } catch (error) {
      console.error('Error during registration:', error);
      return [];
   }
};

//get post detail
export const getDetailPostById = async (postId: string | number): Promise<IPostItem | null> => {
   try {
      const response = await fetch(Constant.BASE_URL_API + 'post/' + postId, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: IPostItem = await response.json();
      return responseData;
   } catch (error) {
      console.error('Error during registration:', error);
      return null;
   }
};
