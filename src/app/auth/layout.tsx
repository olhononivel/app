interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className="@container relative min-h-screen max-w-screen flex items-center justify-center bg-radial-[ellipse_at_top] from-blue-50 via-white to-purple-50 overflow-hidden">
			{/* Background decorativo moderno */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-10 right-10 w-72 h-72 bg-conic-[from_blue-300] rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-10 left-10 w-64 h-64 bg-linear-45/oklch from-purple-300 to-pink-300 rounded-full blur-2xl animate-pulse"></div>
				<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-radial from-cyan-200 to-blue-300 rounded-full blur-xl transform-3d rotate-z-45"></div>
			</div>

			{/* Efeito de partículas */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
				<div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
				<div className="absolute bottom-60 right-40 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-3000"></div>
			</div>

			{/* Container principal */}
			<div className="relative z-10 w-full flex items-center justify-center p-4">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;