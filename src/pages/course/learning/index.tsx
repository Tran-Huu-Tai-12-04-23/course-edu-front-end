// import VideoLearning from '../../../components/learning/VideoLearning';
import { useState, useEffect } from 'react';
import OutlineLearning from '../../../components/learning/OutlineLearning';
import QuizLearning from '../../../components/learning/QuizLearning';
import { ICourse, ITypeLesson, IUserCourse } from '../../../model/Course.model';
import { changeCurrentProcessLearning, getCourseById, getUserCourse } from '../service';
import { useParams } from 'react-router-dom';
import LearningLayout from './layout';
import { useAuth } from '../../../context/authContext';
import VideoLearning from '../../../components/learning/VideoLearning';
import PostLearning from '../../../components/learning/PostLearning';

function Learning() {
   const { courseId } = useParams();
   const { user } = useAuth();
   const [course, setCourse] = useState<ICourse | null>(null);
   const [userCourse, setUserCourse] = useState<IUserCourse | null>(null);

   useEffect(() => {
      const intiCourseData = async () => {
         if (courseId) {
            const res = await getCourseById(courseId);
            if (res) {
               setCourse(res);
            }
         }
      };
      courseId && intiCourseData();
   }, [courseId]);

   useEffect(() => {
      const initUserCourseData = async () => {
         if (courseId && course && user?.id) {
            const res = await getUserCourse(user?.id, courseId);
            if (res) {
               setUserCourse(res);
               if (!course?.groupLessons || course?.groupLessons.length == 0) return;
               if (res.currentLesson == null) {
                  const currentGroupLesson = course.groupLessons[0];
                  if (!currentGroupLesson.lessons || currentGroupLesson.lessons.length == 0) return;
                  const currentLesson = currentGroupLesson.lessons[0];
                  const resUpdate = await changeCurrentProcessLearning({
                     courseId: courseId,
                     lessonId: currentLesson.id ?? '',
                  });
                  resUpdate && setUserCourse(resUpdate);
               }
            }
         }
      };
      courseId && user?.id && initUserCourseData();
   }, [user, course, courseId]);

   console.log(course);
   console.log(userCourse);

   return (
      <>
         {!course && <div>Loading....</div>}
         {course && (
            <LearningLayout data={course}>
               <div className="pt-header w-full pb-footer flex justify-between overflow-hidden">
                  <div className="flex overflow-hidden w-full justify-between">
                     {userCourse?.currentLesson && userCourse?.currentLesson.type === ITypeLesson.Quiz && (
                        <QuizLearning data={userCourse?.currentLesson} />
                     )}
                     {userCourse?.currentLesson && userCourse?.currentLesson.type === ITypeLesson.Video && (
                        <VideoLearning data={userCourse?.currentLesson} />
                     )}
                     {userCourse?.currentLesson && userCourse?.currentLesson.type === ITypeLesson.Post && (
                        <PostLearning data={userCourse?.currentLesson} />
                     )}
                     {/* <VideoLearning /> */}
                     <OutlineLearning
                        currentLesson={userCourse?.currentLesson}
                        onChangeLesson={(res: IUserCourse) => setUserCourse(res)}
                        data={course}
                     />
                  </div>
               </div>
            </LearningLayout>
         )}
      </>
   );
}

export default Learning;
