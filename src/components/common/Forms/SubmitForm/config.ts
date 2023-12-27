// Core
import { z } from 'zod';

export const config = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name can be up to 30 characters'),
  service: z.string(),
  email: z.string().email(),
  message: z.string().min(1, 'This field is required'),
});
