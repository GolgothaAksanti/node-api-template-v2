export type CreateUserType = {
  email: string;
  username: string;
  password: string;
  phonenumber: string;
  fullname: string;
};

export type LoginUserType = {
  login: string;
  password: string;
};

export type AppSubscriptionType = {
  user_id: number;
  amount: number;
};
