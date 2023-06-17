export interface UserI {
  id: number;
  battleTag: string;
  email: string;
  password: string;
  newPassword?: string;
}

export interface UserCredentialsI {
  email: string;
  password: string;
}

export interface UserRegisterI {
  email: string;
  password: string;
  battleTag: string;
}
