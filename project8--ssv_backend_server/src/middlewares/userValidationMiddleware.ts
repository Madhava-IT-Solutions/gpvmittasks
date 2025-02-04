import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateUserRegistration = [
  check('username').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  check('phone')
    .isLength({ min: 10 })
    .withMessage('phone must be at least 10 characters'),
];

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((error: any) => ({
      field: error.param,
      message: error.msg,
    }));

    res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: formattedErrors,
    });
  } else {
    next();
  }
};
