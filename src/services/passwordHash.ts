import bcrypt from 'bcrypt';
import { InvalidCredentials } from '../models/error';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<void> {
  const passwordComparison = await bcrypt.compare(
    plainPassword,
    hashedPassword
  );
  if (!passwordComparison) {
    throw new InvalidCredentials('Invalid Credentials');
  }
}
