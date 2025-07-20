export const Loading = () => {
	return (
		<div className='flex justify-center items-center pt-4 gap-4'>
			<div className='h-4 w-4 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
			<div className='h-4 w-4 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
			<div className='h-4 w-4 bg-gray-400 rounded-full animate-bounce'></div>
		</div>
	);
};
