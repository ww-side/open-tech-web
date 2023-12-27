// Core
import { type FC, useState } from 'react';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Controller,
  type FieldValues,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { TailSpin } from 'react-loader-spinner';
import cx from 'classnames';

// Components
import {
  Button,
  CustomModal,
  Input,
  RadioButton,
  Text,
  TextArea,
  Title,
} from '@/components/ui';

// Hooks
import { useModalOpen } from '@/hooks/useModalOpen';

// Services
import FormService from '@/services/FormService';

// Utils
import { config } from '@/components/common/Forms/SubmitForm/config';
import { formServices } from '@/data/formServices';
import 'dotenv/config';
import 'animate.css';

interface SubmitFormProps {
  color?: 'white' | 'blue';
}

export const SubmitForm: FC<SubmitFormProps> = ({ color = 'white' }) => {
  const { handleOpenModal, isModalOpen } = useModalOpen();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(config),
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      service: formServices[0].value,
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true);
    const { name, service, email, message } = data;
    const serviceLabel = formServices.find(s => s.value === service)?.label;

    const payload = {
      name,
      service: serviceLabel || 'Not known service',
      email,
      message,
    };

    const res = await FormService.sendEmail(payload);

    if (res?.status === 200) {
      handleOpenModal();

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submit',
        });
      }
    }

    reset();
    setIsLoading(false);
  };

  const inputColor = color === 'white' ? 'gray' : 'white';
  const textColor = color === 'white' ? 'text-black' : 'text-white';
  const bgColor = color === 'white' ? 'bg-white' : 'bg-steel-blue';
  const formClasses = cx(
    'rounded-[30px] px-14 pt-14 pb-10 max-sm:p-5 shadow-md',
    bgColor,
    {
      'animate__animated animate__slideInLeft opacity-100': inView,
      'opacity-0': !inView,
    }
  );

  return (
    <form ref={ref} className={formClasses} onSubmit={handleSubmit(onSubmit)}>
      <section className="flex max-lg:flex-wrap max-sm:flex-col gap-3 mb-10">
        {formServices.map(formService => (
          <Controller
            render={({ field: { onChange, value } }) => (
              <RadioButton
                name="service"
                value={formService.value}
                selectedValue={value}
                onChange={onChange}
                variant={color === 'white' ? 'blue' : 'white'}
              >
                {formService.label}
              </RadioButton>
            )}
            name="service"
            control={control}
            key={formService.value}
          />
        ))}
      </section>
      <Title className={`text-4xl mb-5 ${textColor}`} tag="h3">
        Let us know what you want.
      </Title>
      <section className="flex max-xl:flex-col gap-20 max-xl:gap-2">
        <section className="w-8/12 max-xl:w-full">
          <section className="flex max-sm:flex-col gap-11 max-sm:gap-2 mb-5">
            <section className="flex-1">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <div className="relative flex flex-col pb-6">
                    <Input
                      {...field}
                      type="text"
                      placeholder="Name"
                      variant={inputColor}
                    />
                    {errors.name && (
                      <span className="text-red-600 text-sm absolute bottom-0">
                        <>{errors.name.message}</>
                      </span>
                    )}
                  </div>
                )}
              />
            </section>
            <section className="flex-1">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div className="relative flex flex-col pb-6">
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      variant={inputColor}
                    />
                    {errors.email && (
                      <span className="text-red-600 text-sm absolute bottom-0">
                        <>{errors.email.message}</>
                      </span>
                    )}
                  </div>
                )}
              />
            </section>
          </section>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <div className="relative flex flex-col pb-6">
                <TextArea
                  {...field}
                  variant={inputColor}
                  placeholder="Briefly describe your project"
                />
                {errors.message && (
                  <span className="text-red-600 text-sm absolute bottom-0">
                    <>{errors.message.message}</>
                  </span>
                )}
              </div>
            )}
          />
        </section>
        <section className="flex flex-col w-5/12 max-xl:w-full max-xl:flex-col max-xl:gap-5">
          <Text
            className={`flex-grow text-lg max-sm:hidden ${textColor}`}
            tag="p"
          >
            {`Our contact form is your direct line to us. Whether you have questions, feedback, or 
            inquiries, this form makes it easy to reach out. Fill in any useful details about your 
            project and we'll get back to you promptly.  Don't hesitate to connect with us today.`}
          </Text>
          <Button
            className="w-max animate-pound hover:animate-none mb-6 max-xl:mb-0 max-sm:mt-3"
            type="submit"
            size="large"
            shape="ellipse"
            color={color === 'white' ? 'blue' : 'transparent'}
            disabled={isLoading}
          >
            {isLoading ? (
              <TailSpin
                height="28"
                width="130"
                color="#76bff6"
                ariaLabel="tail-spin-loading"
                radius="2"
                visible={true}
              />
            ) : (
              'Get in touch'
            )}
          </Button>
        </section>
      </section>
      <CustomModal isOpen={isModalOpen} handleClose={handleOpenModal}>
        <Title className="text-steel-blue text-5xl" tag="h2">
          Thank you!
        </Title>
        <hr />
        <section className="flex max-lg:flex-col max-lg:gap-5 items-center justify-center mb-5 max-sm:mb-0">
          <Text
            className="font-light text-xl max-lg:text-lg max-[800px]:text-base mr-5"
            tag="p"
          >
            {`Your message has been successfully
              submitted. Our team is now hard at work, reviewing your inquiry and
              preparing a personalized response. Rest assured, your input is
              valuable to us, and we'll get back to you as swiftly as possible. In
              the meantime, feel free to explore our website, discover our
              offerings. We appreciate your patience and look forward to
              assisting you further.`}
          </Text>
          <Image
            className="max-[800px]:w-[250px] max-sm:hidden"
            src="/img/modal-pic.svg"
            alt="modal-img"
            width="300"
            height="300"
          />
        </section>
      </CustomModal>
    </form>
  );
};
