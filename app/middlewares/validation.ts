import { NextRequest, NextResponse } from 'next/server';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

type Handler = (req: NextRequest) => Promise<NextResponse>;

export const withValidation = (dto: new (...args: any[]) => any, handler: Handler): Handler => {
  return async (req: NextRequest) => {
    const { method } = req;
    if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
      const reqBody = await req.json();
      const dtoInstance = plainToInstance(dto, reqBody);
      const errors = await validate(dtoInstance, {
        validationError: { target: false, value: false },
      });
      if (errors.length > 0) {
        return NextResponse.json({ errors }, { status: 400 });
      }
    }
    return handler(req);
  };
};
