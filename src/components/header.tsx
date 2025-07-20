"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<div>
			<nav className="bg-white dark:bg-gray-800 shadow py-4 ">
				<div className="px-8 mx-auto max-w-7xl">
					<div className="flex items-center justify-between h-16">
						<div className=" flex items-center">
							<Link className="flex-shrink-0" href="/">
								<Image width={60} height={60} className="w-8 h-8" src="https://www.tailwind-kit.com/icons/rocket.svg" alt="Workflow" />
							</Link>
							<div className="hidden md:block">
								<div className="flex items-baseline ml-10 space-x-4">
									<Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
										Home
									</Link>
									<Link className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
										Gallery
									</Link>
									<Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
										Content
									</Link>
									<Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className="block">
							<div className="flex -mr-2 md:block">
								<form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
									<div className=" relative ">
										<Link href="#" className="relative block">
											<Image width={60} height={60} alt="profile" src="https://images.pexels.com/photos/27987921/pexels-photo-27987921/free-photo-of-roberta-faria-alves.jpeg" className="mx-auto object-cover rounded-full h-10 w-10 " />
										</Link>
									</div>

									<button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
										Entrar
									</button>
								</form>
							</div>
							<div className="flex items-center ml-4 md:ml-6">
							</div>
						</div>
						<div className="flex -mr-2 md:hidden">
							<button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
								<svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
									<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
									</path>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
							Home
						</Link>
						<Link className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
							Gallery
						</Link>
						<Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
							Content
						</Link>
						<Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
							Contact
						</Link>
					</div>
					<div className="flex p-2">
						<form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
							<div className=" relative ">
								<Link href="#" className="relative block">
									<Image width={60} height={60} alt="profile" src="https://images.pexels.com/photos/27987921/pexels-photo-27987921/free-photo-of-roberta-faria-alves.jpeg" className="mx-auto object-cover rounded-full h-10 w-10 " />
								</Link>
							</div>

							<button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200" type="submit">
								Fazer Login
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	)
}