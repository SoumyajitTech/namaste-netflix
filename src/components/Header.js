import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Utils/firebase.config';
import { RedButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Header, Logo } from './styles/Header.styled';

const HeaderComponent = () => {
	const [isSignUpForm] = useState(window.location.pathname === '/sign-up');
	const loggedInUser = useSelector((store) => store.user);
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate('/');
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
			});
	};

	return (
		<Header className='bg-gradient-to-b from-black'>
			<Flex>
				<Link to={'sign-up'}>
					<Logo src={process.env.REACT_APP_IMAGE_BASE_PATH + 'logo.svg'} alt='Logo' />
				</Link>
				{!loggedInUser && isSignUpForm && (
					<RedButton>
						<Link to={'login'}>Sign In</Link>
					</RedButton>
				)}
				{loggedInUser && (
					<img
						alt='User'
						src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
						className='inline-block h-9 w-9 rounded-md ring-1 ring-red-500 cursor-pointer'
						onClick={() => handleSignOut()}
					/>
				)}
			</Flex>
		</Header>
	);
};

export default HeaderComponent;
