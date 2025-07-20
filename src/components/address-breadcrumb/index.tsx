interface AddressBreadcrumbProps {
	address: {
		street: string
		number: string | null
		complement: string | null
		district: string
		city: string
		zipCode: string
	};
}

export const AddressBreadcrumb = ({ address }: AddressBreadcrumbProps) => {
	return (
		<div className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
			{/* Ícone de localização */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="size-6 text-green-500 flex-shrink-0"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M12 2C8.13 2 5 5.13 5 9c0 5 7 12 7 12s7-7 7-12c0-3.87-3.13-7-7-7z"></path>
				<circle cx="12" cy="9" r="2"></circle>
			</svg>

			{/* Texto do endereço */}
			<p className="text-sm text-gray-700 leading-tight flex-1 break-words">
				{address.street}, {address.number} - {address.district}, {address.city} - {address.zipCode}
				{address.complement && `, ${address.complement}`}
			</p>
		</div>
	);

};
