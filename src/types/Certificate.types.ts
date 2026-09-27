export default interface Certificate {
  key: string;
  provider: string;
  date: string;
  certificateId?: string;
  previewUrl: string;
  verificationUrl: string;
}
