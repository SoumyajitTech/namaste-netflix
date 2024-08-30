import { useState } from 'react';
import { useForm } from 'react-hook-form';
import theme from '../utils/customTheme';
import { BackgroundImage } from './styles/BackgroundImage.styled';
import { RedButton, TransperentButton } from './styles/Button.styled';
import { Grid } from './styles/Grid.styled';
import { ErrorMessage, Input } from './styles/Input.styled';
import { StyledLink } from './styles/Link.styled';
import { Login, LoginForm } from './styles/Login.styled';

const LoginComponent = () => {
	const [signInWithPassword, setSignInWithPassword] = useState(true);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleFormSubmission = (data) => {
		console.log(data);
	};

	return (
		<Login>
			<BackgroundImage
				src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_medium.jpg'
				alt='Logo'
			/>

			<LoginForm>
				<form onSubmit={handleSubmit(handleFormSubmission)}>
					<Grid>
						<h1>Sign In</h1>
						<Grid $gap='2'>
							<Input
								id='email'
								name='email'
								type='email'
								placeholder='Email of Mobile Number'
								className={errors?.email?.message ? 'error' : 'no-error'}
								autoComplete='off'
								{...register('email', {
									required: 'Please enter a valid email address or phone number.',
									pattern: {
										value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
										message: 'Please Enter a valid email address.',
									},
								})}
							/>
							{errors.email && (
								<ErrorMessage>
									<img src={process.env.REACT_APP_IMAGE_BASE_PATH + 'cross.svg'} alt='' />
									{errors.email.message}
								</ErrorMessage>
							)}
						</Grid>

						{signInWithPassword ? (
							<Grid $gap='2'>
								<Input
									id='password'
									name='password'
									type='password'
									placeholder='Password'
									className={errors?.password?.message ? 'error' : 'no-error'}
									minLength={8}
									{...register('password', {
										required: 'Password is required.',
										minLength: {
											value: 8,
											message: 'Password should be at-least 8 characters.',
										},
									})}
								/>
								{errors.password && (
									<ErrorMessage>
										<img src={process.env.REACT_APP_IMAGE_BASE_PATH + 'cross.svg'} alt='' />
										{errors.password.message}
									</ErrorMessage>
								)}
							</Grid>
						) : (
							<p className='text-xs'>Message and data rates may apply</p>
						)}
						<RedButton type='submit' $bgColor={theme.colors.red} $color={theme.colors.white}>
							{signInWithPassword ? 'Sign In' : 'Send sign-in code'}
						</RedButton>

						<p>OR</p>

						<TransperentButton
							type='button'
							$bgColor={theme.colors.transperentWhite}
							onClick={() => {
								reset();
								setSignInWithPassword(!signInWithPassword);
							}}>
							{signInWithPassword ? 'Use a sign-in code' : 'Use Password'}
						</TransperentButton>
						<StyledLink to={''}>{signInWithPassword ? 'Forgot password?' : 'Forgot email or phone number?'}</StyledLink>
					</Grid>
				</form>
				<p className='text-left mt-10'>
					New to Netflix?
					{'  '}
					<StyledLink className='font-bold  text-white' to={'/sign-up'}>
						Sign up now.
					</StyledLink>
				</p>
			</LoginForm>
		</Login>
	);
};

export default LoginComponent;
