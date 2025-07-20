import { Loading } from "../../loading";

export const SkeletonListDevices = () => {
	return (
		<div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 animate-pulse">
				<div className="h-32 rounded-lg bg-gray-300"></div>
				<div className="h-32 rounded-lg bg-gray-300"></div>
				<div className="h-32 rounded-lg bg-gray-300"></div>
				<div className="h-32 rounded-lg bg-gray-300"></div>
				<div className="h-32 rounded-lg bg-gray-300"></div>
				<div className="h-32 rounded-lg bg-gray-300"></div>
			</div>

			<Loading />
		</div>
	)
};
