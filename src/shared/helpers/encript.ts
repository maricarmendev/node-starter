import bcryptjs from 'bcryptjs';
const rounds = 10;

type Hash10 = (plainText: string) => Promise<string>;
export const hash10: Hash10 = async (plainText) => {
  return await bcryptjs.hash(plainText, rounds);
};

type CompareHash = (plainText: string, hashText: string) => Promise<boolean>;
export const compareHash: CompareHash = async (plainText, hashText) => {
  return await bcryptjs.compare(plainText, hashText);
};
