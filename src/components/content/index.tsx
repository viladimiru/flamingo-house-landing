import { useRef, useEffect, useState, useMemo } from 'react';
import Typed from 'typed.js';
import './index.css';

export function Content() {
	const headerRef = useRef<HTMLHeadingElement | null>(null);
	const [isTyped, setTyped] = useState(false);
	useEffect(() => {
		const typed = new Typed(headerRef.current!, {
			strings: ['Flamingo house', 'Flamingo projects'],
			startDelay: 1000,
			typeSpeed: 50,
			backSpeed: 100,
			showCursor: true,
			cursorChar: '',
			onComplete() {
				setTyped(true);
			},
		});
		return () => {
			typed.destroy();
		};
	}, []);
	const blockClass = useMemo(() => {
		const classes = ['fl'];
		if (isTyped) {
			classes.push('fl--typed');
		}
		return classes.join(' ');
	}, [isTyped]);

	return (
		<section className={blockClass}>
			<div className='fl__header'>
				<h1 ref={headerRef}></h1>
			</div>
			<div className='fl__content'>
				<div className='fl__logo'>
					<img
						className='fl__logo-img'
						src='/assets/flamingo.png'
						alt='flamingo logo'
					/>
					<div className="fl__logo-waves"></div>
					<div className="fl__logo-clouds"></div>
					<div className="fl__logo-clouds-2"></div>
				</div>
				<nav className='fl__nav'>
					<a
						className='fl__nav-link'
						href='https://t.me/OBinancePriceBot'
						target='_blank'
					>
						<li className='fl__nav-item'>Telegram bot</li>
					</a>
					<a
						className='fl__nav-link'
						href='https://github.com/viladimiru'
						target='_blank'
					>
						<li className='fl__nav-item'>Github profile</li>
					</a>
				</nav>
			</div>
		</section>
	);
}
