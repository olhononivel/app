interface StatusPumpProps {
	on: boolean;
}

export const StatusPump = ({ on }: StatusPumpProps) => {
	if (on) {
		return (
			<div className="flex items-center justify-center">
				<span className="text-slate-800 mr-4">Ligada</span>

				<div className="flex items-center justify-center">
					<div className="w-4 h-4 absolute bg-green-400 rounded-full flex justify-center items-center z-10" />
					<div className="relative w-6 h-6 bg-green-200 rounded-full animate-ping" />
				</div>
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center">
			<span className="text-slate-800 mr-4">Desligada</span>

			<div className="flex items-center justify-center">
				<div className="w-4 h-4 absolute bg-red-600 rounded-full flex justify-center items-center z-10" />
				<div className="relative w-4 h-4 bg-red-400 rounded-full animate-ping" />
			</div>
		</div>
	);
};
