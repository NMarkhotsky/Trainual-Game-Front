/* eslint-disable react/no-unknown-property */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Label,
  Input,
  Logo,
  Title,
  ButtonWrapper,
  Link,
  Button,
  InputCheckbox,
  LabelCheckbox,
  IconWrapper,
} from './LoginPage.styled';
import logo from '../../assets/logo.png';
import { Icon } from '../../shared/components/Icon/Icon';

export const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    reset();

    navigation('/dashboard');
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo src={logo} alt="Trainual" />
        <Title> Sign in</Title>
        <Label>
          <b>Email</b>
          <Input
            type="email"
            placeholder="your@email.com"
            {...register('email', { required: true })}
          />
          <IconWrapper>
            <Icon iconName="icon-email" width="16" height="16" />
          </IconWrapper>
        </Label>
        <Label>
          <b>Password</b>
          <Input
            type="password"
            placeholder="your password"
            {...register('password', { required: true })}
          />
          <IconWrapper>
            <Icon iconName="icon-password" width="16" height="16" />
          </IconWrapper>
        </Label>
        <LabelCheckbox>
          <InputCheckbox type="checkbox" />
          Remember me
        </LabelCheckbox>
        <ButtonWrapper>
          <Link href="#">Forgot password?</Link>
          <Button type="submit">Go</Button>
        </ButtonWrapper>
      </Form>
    </>
  );
};
