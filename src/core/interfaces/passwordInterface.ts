/* eslint-disable no-unused-vars */
interface IPassword {
  salt(): string;
  hash(password: string, salt: string): string;
  compare(password: string, hashedPassword: string, salt: string): boolean;
}

export default IPassword;
