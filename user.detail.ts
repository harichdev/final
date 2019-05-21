// export class User {
//   role: string;
//   companyName: string;
//   firstName: string;
//   lastName: string;
//   id: string;
//   address: string;
//   email: string;
//   mobile: string;
//   companyID: string
// }

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class UserDetail {
  role: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  id: string;
  password: string;
  companyID: string;
  address: {
      country: string;
      state: string;
      city: string;
      location: string;
      zipcode: string;
      };
  isTemporaryPass: string;
  status: string;
  createdBy: string
}


// {
//   "_id": ObjectId("5a082cc9aae33f8ad312d8fd");
//   "role": "appAdmin";
//   "companyName": "VG Software";
//   "firstName": "Durga";
//   "lastName": "Prasad";
//   "email": "prasaddurga244@gmail.com";
//   "mobile": "9573613011";
//   "id": "admin";
//   "password": "0d8adbb0207575793e";
//   "companyID": "IDO";
//   "address": {
//       "country": "IND";
//       "state": "Telangana";
//       "city": "Hyderabad";
//       "location": "Punjagutta";
//       "zipcode": "500072"
//       };
//   "isTemporaryPass": "false";
//   "status": "Active";
//   "createdBy": "9573613011"
//   }
