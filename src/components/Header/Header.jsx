import s from './Header.module.css'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.headerWrapper}>
				<img src="logo.svg" className={s.logoImage} alt="logo" />
				<span className={s.logoText}>Todo</span>
			</div>
		</header>
	);
}
export default Header;