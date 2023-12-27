// Core
import emailjs from '@emailjs/browser';
import { FieldValues } from 'react-hook-form';
import toast from 'react-hot-toast';

class FormService {
  async sendEmail(data: FieldValues) {
    try {
      return await emailjs.send(
        `${process.env.NEXT_PUBLIC_FORM_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_FORM_TEMPLATE_ID}`,
        data,
        `${process.env.NEXT_PUBLIC_FORM_PUBLIC_KEY}`
      );
    } catch (error: any) {
      if (error.status >= 400 && error.status < 500) {
        toast.error('SubmitForm not sent.');
      }
    }
  }
}

const formService = new FormService();

export default formService;
