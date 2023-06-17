import { z } from 'zod';

const createUserZodSchem = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
});

export const userValidation = { createUserZodSchem };
