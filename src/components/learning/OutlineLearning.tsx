import { Accordion, AccordionItem } from '@nextui-org/react';
import { ICourse, IGroupLesson } from '../../model/Course.model';

type OutlineLearningProps = {
   data: ICourse;
};
function OutlineLearning(props: OutlineLearningProps) {
   const groupLessons: IGroupLesson[] = props.data.groupLessons ?? [];

   return (
      <div
         style={{
            height: 'calc(100vh - 10rem)',
         }}
         className="scroll-custom overflow-auto max-w-[30rem] w-[30rem] border-l-[1px] border-solid dark:border-gray-900"
      >
         {groupLessons.length > 0 && (
            <Accordion className="max-w-[30rem] p-0 m-0 px-0">
               {groupLessons.map((gr: IGroupLesson, index: number) => (
                  <AccordionItem
                     key={index}
                     className="p-2"
                     aria-label={gr.title}
                     subtitle="50% hoàn thành"
                     title={gr.title}
                  >
                     {gr.lessons.map((les, indexChild) => (
                        <div key={index} className="p-2 rounded-lg hover:bg-primary/10 cursor-pointer">
                           {index + 1} .{indexChild + 1}. {les.title}
                        </div>
                     ))}
                  </AccordionItem>
               ))}
            </Accordion>
         )}
      </div>
   );
}

export default OutlineLearning;
