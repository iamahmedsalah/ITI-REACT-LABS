import { motion } from "motion/react"
import { HugeiconsIcon } from '@hugeicons/react';


const StatCard = ({ name, icon, value, color }) => {
	return (
		<motion.div
			className='mt-4 glass-card relative overflow-hidden group shadow-lg rounded-xl border border-white/5'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<div className="py-2 flex flex-row items-center justify-between">
					<HugeiconsIcon icon={icon} size={32} className='mr-2' style={{ color }} />
					<span className='text-slate-500 font-label text-[10px] tracking-wider uppercase'>
						{name}
					</span>
				</div>
				<p className='text-3xl font-headline font-bold text-right '>{value}</p>
			</div>
		</motion.div>
	);
};
export default StatCard;
