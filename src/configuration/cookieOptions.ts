export interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none' | boolean;
  expires?: Date;
  maxAge?: number;
}

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: false,
  sameSite: 'strict',
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
};
