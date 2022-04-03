const initErro = 400;
class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  constructor(message: string, statusCode = initErro) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
