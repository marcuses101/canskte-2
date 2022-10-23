import {
	checkmarks,
	ribbons,
	stages,
	type CheckmarkId,
	type CompletionEntry,
	type RibbonId,
	type Skater,
	type StageId
} from 'resources';
import { faker } from '@faker-js/faker';

function reportMapper<T extends { id: CheckmarkId | RibbonId | StageId }>(input: readonly T[]) {
	return Object.fromEntries(
		input.map(({ id }) => {
			const isComplete = faker.datatype.boolean();
			const completionEntry: CompletionEntry = {
				isComplete,
				completionDate: isComplete ? faker.date.past() : null
			};
			return [id, completionEntry];
		})
	);
}
function randomSkater(): Skater {
	const skaterCheckmarks = reportMapper(checkmarks) as Skater['checkmarks'];
	const skaterRibbons = reportMapper(ribbons) as Skater['ribbons'];
	const skaterStages = reportMapper(stages) as Skater['stages'];
	const newSkater: Skater = {
		id: crypto.randomUUID(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		sex: faker.helpers.arrayElement(['male', 'female']),
		checkmarks: skaterCheckmarks,
		ribbons: skaterRibbons,
		stages: skaterStages
	};
	return newSkater;
}

export async function generateSkaters(number: number) {
	const parentFolder = import.meta.dir.split('/').at(-1);
	const path = `${import.meta.dir}/${parentFolder}.json`;
	const skaters = [...Array(number)].map(randomSkater);
	Bun.write(path, JSON.stringify(skaters));
}
const num = parseInt(process.argv[2]);
await generateSkaters(num);
