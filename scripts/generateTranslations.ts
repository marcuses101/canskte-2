import { ribbons } from '../src/resources/progress';
const checkmarkIds = ribbons.flatMap(({ id, totalCheckmarks }) => {
	return [...Array(totalCheckmarks)].map((_, index) => `${id}-${index + 1}`);
});

const checkmarkMap = new Map();
checkmarkIds.forEach((id) => {
	checkmarkMap.set(id, '');
});
const checkmarkObject = Object.fromEntries(checkmarkMap.entries());
const translations = {
	en: checkmarkObject,
	fr: checkmarkObject
};
await Bun.write('./src/resources/translations.json', JSON.stringify(translations));
