import { IUser } from './User.model';

export type IPayment = {
   id?: number;
   typePayment: string;
   paymentAt: string;
   amount: any;
   isPayment: boolean;
   user?: IUser;
};
export const examplePayments: IPayment[] = [
   {
      id: 1,
      typePayment: 'Credit Card',
      paymentAt: '2024-04-23T12:30:00Z',
      amount: 50.25,
      isPayment: true,
      user: {
         id: 1,
         email: 'example1@example.com',
         password: 'hashedPassword',
         firstName: 'John',
         lastName: 'Doe',
         avatar: 'avatar_url',
         role: 'user',
         fullName: 'John Doe',
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         verifyAt: new Date('2024-04-20T08:00:00Z'),
      },
   },
   {
      id: 2,
      typePayment: 'PayPal',
      paymentAt: '2024-04-22T15:45:00Z',
      amount: 30.5,
      isPayment: true,
      user: {
         id: 2,
         email: 'example2@example.com',
         password: 'hashedPassword',
         firstName: 'Alice',
         lastName: 'Smith',
         avatar: 'avatar_url',
         role: 'admin',
         fullName: 'Alice Smith',
         bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
         verifyAt: new Date('2024-04-18T10:00:00Z'),
      },
   },
   {
      id: 3,
      typePayment: 'Bank Transfer',
      paymentAt: '2024-04-21T09:00:00Z',
      amount: 100.0,
      isPayment: true,
      user: {
         id: 3,
         email: 'example3@example.com',
         password: 'hashedPassword',
         firstName: 'Emily',
         lastName: 'Johnson',
         avatar: 'avatar_url',
         role: 'user',
         fullName: 'Emily Johnson',
         bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         verifyAt: new Date('2024-04-19T11:30:00Z'),
      },
   },
   {
      id: 4,
      typePayment: 'Cash',
      paymentAt: '2024-04-20T18:20:00Z',
      amount: 75.0,
      isPayment: true,
      user: {
         id: 4,
         email: 'example4@example.com',
         password: 'hashedPassword',
         firstName: 'Michael',
         lastName: 'Brown',
         avatar: 'avatar_url',
         role: 'user',
         fullName: 'Michael Brown',
         bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
         verifyAt: new Date('2024-04-17T14:45:00Z'),
      },
   },
];
