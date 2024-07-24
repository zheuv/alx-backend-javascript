import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const signUpUser = signUpUser(firstname, lastName);
	const uploadPhoto = uploadPhoto(fileName);

	return Promise.allSettled([signUpUser, uploadPhoto])
	.then((results) => {
		return results.map((result) => {
			if (result.status === "fulfilled") {
				return {
					status: "fulfilled",
					value: result.value,
				};
			} else {
				return {
					status: "rejected",
					value: result.reason,
				};
			}
		});
	});
}
