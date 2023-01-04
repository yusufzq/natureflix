import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Logo from '../logo/Logo';
import styles from './Navigation.module.css';

function Navigation({ userName }) {
	const router = useRouter();
	const [showDropDown, setShowDropDown] = useState(false);

	const onHomeClick = event => {
		// event.preventDefault();
		router.push('/');
	};

	const onListClick = event => {
		// event.preventDefault();
		router.push('/browse/list');
	};

	return (
		<nav className={classNames(styles.container, styles.wrapper)}>
			<Logo />
			<ul className={styles.items}>
				<li className={styles.item1} onClick={onHomeClick}>Home</li>
				<li className={styles.item2} onClick={onListClick}>List</li>
			</ul>
			<div className={styles.dropDownContainer}>
				<div>
					<button className={styles.button} onClick={() => {setShowDropDown(!showDropDown)}}>
						<span className={styles.userName}>{userName}</span>
						<Image src='/chevronDown.svg' alt='toggle dropDown' width={24} height={24} />
					</button>
					{showDropDown && (
						<div className={styles.dropDown}>
							<Link className={styles.logOut} href='/logIn'>Log Out</Link>
							<div className={styles.lineWrapper}></div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;