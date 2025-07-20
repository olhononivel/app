import Image from 'next/image';
import contactsIcon from '../../../public/icons/contacts.svg';
import perfilIcon from '../../../public/icons/person-profile.svg';
import saveOrDraw from '../../../public/icons/reorder.svg';
import party from '../../../public/icons/party.svg';

export function Steps() {
	const text = {
		title: "Organize seu sorteio de amigo secreto em 4 passos",
		description: "Como funciona",
		steps: [
			{
				id: 1,
				icon: perfilIcon,
				title: "Crie uma conta",
				description: "Com Google esse processo leva poucos segundos."
			},
			{
				id: 2,
				icon: contactsIcon,
				title: "Reúna os Participantes",
				description: "Adicione os participantes a um grupo."
			},
			{
				id: 3,
				icon: saveOrDraw,
				title: "Salve ou Sorteie",
				description: "Agora que montou o grupo, pode salvar ou sortear, para que todos recebam seu amigo secreto."
			},
			{
				id: 4,
				icon: party,
				title: "Festeje",
				description: "Deixamos o ultimo passo para você, festeje com seus amigos."
			}
		]
	};

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-center flex flex-col">
			<div className="text-center max-w-3xl">
				<p className="text-sm md:text-xl font-bold uppercase tracking-widest text-red-700">
					{text.description}
				</p>
				<h2 className="mt-6 text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
					{text.title}
				</h2>
			</div>
			<ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
				{text.steps.map(({ description, icon, id, title }) => (
					<li key={id} className="flex-start group relative flex lg:flex-col">
						{id < 4 && (
							<span
								className="absolute left-[40px] top-[90px] h-[calc(100%_-_60px)] w-px bg-gray-300 lg:-right-6 lg:left-auto lg:top-[40px] lg:h-px lg:w-[calc(100%_-_72px)]"
								aria-hidden="true">
							</span>
						)}
						<div
							className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-500 group-hover:border-gray-900 group-hover:bg-red-50">
							<Image alt='Amigo secreto' src={icon} width={40} height={40} className="w-10 h-10" />
						</div>
						<div className="ml-6 lg:ml-0 lg:mt-6">
							<h3
								className="text-xl font-bold text-green-950 before:mb-2 before:block before:font-mono before:text-sm before:text-green-950">
								{title}
							</h3>
							<h4 className="mt-2 text-base text-green-950">
								{description}
							</h4>
						</div>
					</li>
				))}

				{/* <li className="flex-start group relative flex lg:flex-col">
					<span
						className="absolute left-[40px] top-[90px] h-[calc(100%_-_60px)] w-px bg-gray-300 lg:-right-6 lg:left-auto lg:top-[40px] lg:h-px lg:w-[calc(100%_-_72px)]"
						aria-hidden="true"></span>
					<div
						className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-500 group-hover:border-gray-900 group-hover:bg-red-50">
						<Image alt='Amigo secreto' src={contactsIcon} width={40} height={40} className="w-10 h-10" />
					</div>
					<div className="ml-6 lg:ml-0 lg:mt-6">
						<h3
							className="text-xl font-bold text-green-950 before:mb-2 before:block before:font-mono before:text-sm before:text-green-950">
							Reúna os Participantes
						</h3>
						<h4 className="mt-2 text-base text-green-950">
							Adicione os participantes a um grupo.
						</h4>
					</div>
				</li>

				<li className="flex-start group relative flex lg:flex-col">
					<span
						className="absolute left-[40px] top-[90px] h-[calc(100%_-_60px)] w-px bg-gray-300 lg:-right-6 lg:left-auto lg:top-[40px] lg:h-px lg:w-[calc(100%_-_72px)]"
						aria-hidden="true"></span>
					<div
						className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-500 group-hover:border-gray-900 group-hover:bg-red-50">
						<Image alt='Amigo secreto' src={saveOrDraw} width={40} height={40} className="w-10 h-10" />
					</div>
					<div className="ml-6 lg:ml-0 lg:mt-6">
						<h3
							className="text-xl font-bold text-green-950 before:mb-2 before:block before:font-mono before:text-sm before:text-green-950">
							Salve ou Sorteie
						</h3>
						<h4 className="mt-2 text-base text-green-950">
							Agora que montou o grupo, pode salvar ou sortear, para que todos recebam seu amigo secreto.
						</h4>
					</div>
				</li>

				<li className="flex-start group relative flex lg:flex-col">
					<div
						className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-500 group-hover:border-gray-900 group-hover:bg-red-50">
						<Image alt='Amigo secreto' src={party} width={40} height={40} className="w-10 h-10" />
					</div>
					<div className="ml-6 lg:ml-0 lg:mt-6">
						<h3
							className="text-xl font-bold text-green-950 before:mb-2 before:block before:font-mono before:text-sm before:text-green-950">
							Festeje
						</h3>
						<h4 className="mt-2 text-base text-green-950">
							Deixamos o ultimo passo para você, festeje com seus amigos.
						</h4>
					</div>
				</li> */}
			</ul>
		</div>
	)
};