import type { Stage, StageId } from './stages';
import { stages } from './stages';
import type { FundamentalAreaId, Ribbon, RibbonId } from './ribbons';
import { ribbons } from './ribbons';
import type { CheckmarkId, Checkmark } from './checkmarks';
import { checkmarks } from './checkmarks';

export function getRibbonsByStageId(id: StageId): Ribbon[] {
	return ribbons.filter(({ stageId: ribbonStageId }) => ribbonStageId === id);
}

export function getCheckmarksByRibbonId(id: RibbonId): Checkmark[] {
	return checkmarks.filter(({ ribbonId: checkmarkRibbonId }) => checkmarkRibbonId === id);
}

export interface CompletionEntry {
	isComplete: boolean;
	completionDate: Date | null;
}

export interface Skater {
	id: string;
	firstName: string;
	lastName: string;
	sex: 'male' | 'female';
	checkmarks: Record<CheckmarkId, CompletionEntry>;
	ribbons: Record<RibbonId, CompletionEntry>;
	stages: Record<StageId, CompletionEntry>;
}

export type { Stage, StageId, FundamentalAreaId, Ribbon, RibbonId, Checkmark, CheckmarkId };
export { stages, ribbons, checkmarks };
