
const Header = ({ title , description }) => {
	
	return (
		<header className='border-b border-white/5 shadow-2xl shadow-surface-container-lowest/50w-full'>
        <span className="font-label text-primary text-[10px] tracking-[0.2em] uppercase font-semibold mb-2 block">Central Registry</span>
        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white leading-tight">{title}</h2>
        <p className="text-slate-400 mt-2 max-w-3xl font-body text-sm leading-relaxed mb-4">
          {description}
        </p>
		</header>
	);
};
export default Header;