import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BackgroundImage } from '../Components/styles/BackgroundImage.styled';
import { RedButton, TransperentButton } from '../Components/styles/Button.styled';
import { Grid } from '../Components/styles/Grid.styled';
import { ErrorMessage, Input } from '../Components/styles/Input.styled';
import { StyledLink } from '../Components/styles/Link.styled';
import { Login, LoginForm } from '../Components/styles/Login.styled';
import theme from '../Utils/customTheme';
import { auth } from '../Utils/firebase.config';

const LoginComponent = () => {
	const [signInWithPassword, setSignInWithPassword] = useState(true);
	const [loginParam, setLoginParam] = useSearchParams();
	const navigate = useNavigate();
	const isSignUpPage = loginParam.get('query') === 'sign up';

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleFormSubmission = (data) => {
		if (isSignUpPage) {
			signUpUser(data.email, data.password);
		} else {
			loginUser(data.email, data.password);
		}
	};

	const signUpUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				navigate('/browse');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + ' ' + errorMessage);
			});
	};

	const loginUser = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				navigate('/browse');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + ' ' + errorMessage);
			});
	};

	const loadSignUp = (param = 'sign in') => {
		if (window.history.pushState) {
			const updateParam = new URLSearchParams();
			updateParam.set('query', param);
			setLoginParam(updateParam);
			reset();
		}
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
						<h1>{isSignUpPage ? 'Sign Up' : 'Sign In'}</h1>
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

						{isSignUpPage && (
							<>
								<Grid $gap='2'>
									<Input
										id='firstName'
										name='firstName'
										type='text'
										placeholder='First Name'
										className={errors?.firstName ? 'error' : 'no-error'}
										autoComplete='off'
										{...register('firstName', {
											required: 'First name is required',
										})}
									/>
									{errors.firstName && (
										<ErrorMessage>
											<img src={process.env.REACT_APP_IMAGE_BASE_PATH + 'cross.svg'} alt='' />
											{errors.firstName.message}
										</ErrorMessage>
									)}
								</Grid>
								<Grid $gap='2'>
									<Input
										id='lastName'
										name='lastName'
										type='text'
										placeholder='Last Name'
										className={errors?.lastName ? 'error' : 'no-error'}
										autoComplete='off'
										{...register('lastName', {
											required: 'Last name is required',
										})}
									/>
									{errors.lastName && (
										<ErrorMessage>
											<img src={process.env.REACT_APP_IMAGE_BASE_PATH + 'cross.svg'} alt='' />
											{errors.lastName.message}
										</ErrorMessage>
									)}
								</Grid>
							</>
						)}

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

						{!isSignUpPage && (
							<>
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
							</>
						)}
					</Grid>
				</form>
				<p className='text-left mt-10'>
					{isSignUpPage ? 'Have an account already?' : 'New to Netflix?'}
					{'  '}
					{isSignUpPage ? (
						<StyledLink
							className='font-bold  text-white'
							onClick={() => {
								loadSignUp();
							}}>
							Sign in.
						</StyledLink>
					) : (
						<StyledLink className='font-bold  text-white' to={'/sign-up'}>
							Sign up now.
						</StyledLink>
					)}
				</p>
			</LoginForm>
		</Login>
	);
};

export default LoginComponent;
