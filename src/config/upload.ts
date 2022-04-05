import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(req, file, callback) {
      const numberHash = 10;
      const fileHash = crypto.randomBytes(numberHash).toString('hex');
      const filename = `${fileHash}-upload-${file.originalname}`;
      callback(null, filename);
    },
  }),
};
