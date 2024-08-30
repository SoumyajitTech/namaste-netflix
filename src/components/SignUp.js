import { useForm } from 'react-hook-form';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { BackgroundImage } from './styles/BackgroundImage.styled';
import { RedButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Grid } from './styles/Grid.styled';
import { ErrorMessage, Input } from './styles/Input.styled';
import { MainContainer, SignUp } from './styles/SignUp.styled';

const SignUpComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const onSubmit = (data) => {
		navigate({
			pathname: '/login',
			search: `?${createSearchParams({
				query: 'sign up',
			})}`,
		});
	};

	return (
		<SignUp>
			<BackgroundImage
				src='https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg'
				alt=''
			/>

			<MainContainer>
				<h1>Unlimited movies,</h1>
				<h1>TV shows and </h1>
				<h1>more </h1>
				<p>Starts at ₹149. Cancel anytime</p>
				<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

				<form onSubmit={handleSubmit(onSubmit)} className='my-6'>
					<Grid $gap='2' className='w-full'>
						<Flex $align='stretch'>
							<Input
								type='email'
								name='email'
								id='email'
								placeholder='Email address'
								className={errors.email && 'error'}
								{...register('email', {
									required: 'Email address is required.',
									pattern: {
										value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
										message: 'Please Enter a valid email address.',
									},
								})}
							/>

							<RedButton type='submit'>
								Get Started
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
									<path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
								</svg>
							</RedButton>
						</Flex>

						{errors.email && (
							<ErrorMessage>
								<img src={process.env.REACT_APP_IMAGE_BASE_PATH + 'cross.svg'} alt='' />
								{errors.email.message}
							</ErrorMessage>
						)}
					</Grid>
				</form>
			</MainContainer>
		</SignUp>
	);
};

export default SignUpComponent;
