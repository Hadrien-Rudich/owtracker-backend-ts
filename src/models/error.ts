class CustomError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends CustomError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'BadRequestError';
    this.message = 'Invalid Request';
  }
}

class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message, 200);
    this.name = 'NotFoundError';
    this.message = 'Could not find entry';
  }
}

class InternalServerError extends CustomError {
  constructor(message: string) {
    super(message, 500);
    this.name = 'InternalServerError';
    this.message = 'Internal Server Error';
  }
}

export { BadRequestError, NotFoundError, InternalServerError, CustomError };
