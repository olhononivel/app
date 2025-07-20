export const generatingCodeDevice = (name:  string) => {
	const initials = name.split(" ").map((word) => word[0].toUpperCase()).join("");
	const randomNumbers = Math.floor(Math.random() * 100000);
	const code = `${initials}${randomNumbers}`;

	return code;
};
