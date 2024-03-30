import { IGroupLesson } from './../../../../../model/Course.model';
import { ICourse } from '../../../../../model/Course.model';

export const updateCourseById = async (id: string | number, updateCourse: any): Promise<ICourse | null> => {
    try {
        const response = await fetch('https://localhost:7005/api/course/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateCourse),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData: ICourse | null = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        return null;
    }
};

// export const addNewGroupLesson = async (
//     courseId: string | number,
//     newGroupLesson: IGroupLesson,
// ): Promise<ICourse | null> => {
//     try {
//         const response = await fetch('https://localhost:7005/api/course/' + id, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updateCourse),
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const responseData: ICourse | null = await response.json();
//         return responseData;
//     } catch (error) {
//         console.error('Error during registration:', error);
//         return null;
//     }
// };

export const getCourseById = async (id: string | number): Promise<ICourse | null> => {
    try {
        const response = await fetch('https://localhost:7005/api/course/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData: ICourse | null = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during registration:', error);
        return null;
    }
};
