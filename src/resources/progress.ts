export type StageId = '1' | '2' | '3' | '4' | '5' | '6';
export type FundamentalAreaId = 'B' | 'C' | 'A';
export type RibbonId = `${StageId}-${FundamentalAreaId}`;
export type PossibleCheckmarks = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type CheckmarkId = `${RibbonId}-${PossibleCheckmarks}`;

type Stage = { id: StageId };
export const stages: Stage[] = [
	{ id: '1' },
	{ id: '2' },
	{ id: '3' },
	{ id: '4' },
	{ id: '5' },
	{ id: '6' }
];

type Ribbon = {
	id: RibbonId;
	stageId: StageId;
	fundamentalAreaId: FundamentalAreaId;
	requiredCheckmarks: number;
	totalCheckmarks: number;
};

export const ribbons: Ribbon[] = [
	{ id: '1-B', stageId: '1', fundamentalAreaId: 'B', requiredCheckmarks: 4, totalCheckmarks: 4 },
	{ id: '1-C', stageId: '1', fundamentalAreaId: 'C', requiredCheckmarks: 3, totalCheckmarks: 3 },
	{ id: '1-A', stageId: '1', fundamentalAreaId: 'A', requiredCheckmarks: 3, totalCheckmarks: 3 },
	{ id: '2-B', stageId: '2', fundamentalAreaId: 'B', requiredCheckmarks: 4, totalCheckmarks: 4 },
	{ id: '2-C', stageId: '2', fundamentalAreaId: 'C', requiredCheckmarks: 3, totalCheckmarks: 4 },
	{ id: '2-A', stageId: '2', fundamentalAreaId: 'A', requiredCheckmarks: 3, totalCheckmarks: 4 },
	{ id: '3-B', stageId: '3', fundamentalAreaId: 'B', requiredCheckmarks: 5, totalCheckmarks: 5 },
	{ id: '3-C', stageId: '3', fundamentalAreaId: 'C', requiredCheckmarks: 5, totalCheckmarks: 5 },
	{ id: '3-A', stageId: '3', fundamentalAreaId: 'A', requiredCheckmarks: 5, totalCheckmarks: 5 },
	{ id: '4-B', stageId: '4', fundamentalAreaId: 'B', requiredCheckmarks: 5, totalCheckmarks: 7 },
	{ id: '4-C', stageId: '4', fundamentalAreaId: 'C', requiredCheckmarks: 5, totalCheckmarks: 6 },
	{ id: '4-A', stageId: '4', fundamentalAreaId: 'A', requiredCheckmarks: 5, totalCheckmarks: 6 },
	{ id: '5-B', stageId: '5', fundamentalAreaId: 'B', requiredCheckmarks: 5, totalCheckmarks: 7 },
	{ id: '5-C', stageId: '5', fundamentalAreaId: 'C', requiredCheckmarks: 5, totalCheckmarks: 7 },
	{ id: '5-A', stageId: '5', fundamentalAreaId: 'A', requiredCheckmarks: 6, totalCheckmarks: 7 },
	{ id: '6-B', stageId: '6', fundamentalAreaId: 'B', requiredCheckmarks: 6, totalCheckmarks: 8 },
	{ id: '6-C', stageId: '6', fundamentalAreaId: 'C', requiredCheckmarks: 6, totalCheckmarks: 8 },
	{ id: '6-A', stageId: '6', fundamentalAreaId: 'A', requiredCheckmarks: 6, totalCheckmarks: 8 }
];
export type Checkmark = {
	id: CheckmarkId;
	stageId: StageId;
	fundamentalAreaId: FundamentalAreaId;
	ribbonId: RibbonId;
};
export const checkmarks: Checkmark[] = [
	{ id: '1-B-1', stageId: '1', fundamentalAreaId: 'B', ribbonId: '1-B' },
	{ id: '1-B-2', stageId: '1', fundamentalAreaId: 'B', ribbonId: '1-B' },
	{ id: '1-B-3', stageId: '1', fundamentalAreaId: 'B', ribbonId: '1-B' },
	{ id: '1-B-4', stageId: '1', fundamentalAreaId: 'B', ribbonId: '1-B' },
	{ id: '1-C-1', stageId: '1', fundamentalAreaId: 'C', ribbonId: '1-C' },
	{ id: '1-C-2', stageId: '1', fundamentalAreaId: 'C', ribbonId: '1-C' },
	{ id: '1-C-3', stageId: '1', fundamentalAreaId: 'C', ribbonId: '1-C' },
	{ id: '1-A-1', stageId: '1', fundamentalAreaId: 'A', ribbonId: '1-A' },
	{ id: '1-A-2', stageId: '1', fundamentalAreaId: 'A', ribbonId: '1-A' },
	{ id: '1-A-3', stageId: '1', fundamentalAreaId: 'A', ribbonId: '1-A' },
	{ id: '2-B-1', stageId: '2', fundamentalAreaId: 'B', ribbonId: '2-B' },
	{ id: '2-B-2', stageId: '2', fundamentalAreaId: 'B', ribbonId: '2-B' },
	{ id: '2-B-3', stageId: '2', fundamentalAreaId: 'B', ribbonId: '2-B' },
	{ id: '2-B-4', stageId: '2', fundamentalAreaId: 'B', ribbonId: '2-B' },
	{ id: '2-C-1', stageId: '2', fundamentalAreaId: 'C', ribbonId: '2-C' },
	{ id: '2-C-2', stageId: '2', fundamentalAreaId: 'C', ribbonId: '2-C' },
	{ id: '2-C-3', stageId: '2', fundamentalAreaId: 'C', ribbonId: '2-C' },
	{ id: '2-C-4', stageId: '2', fundamentalAreaId: 'C', ribbonId: '2-C' },
	{ id: '2-A-1', stageId: '2', fundamentalAreaId: 'A', ribbonId: '2-A' },
	{ id: '2-A-2', stageId: '2', fundamentalAreaId: 'A', ribbonId: '2-A' },
	{ id: '2-A-3', stageId: '2', fundamentalAreaId: 'A', ribbonId: '2-A' },
	{ id: '2-A-4', stageId: '2', fundamentalAreaId: 'A', ribbonId: '2-A' },
	{ id: '3-B-1', stageId: '3', fundamentalAreaId: 'B', ribbonId: '3-B' },
	{ id: '3-B-2', stageId: '3', fundamentalAreaId: 'B', ribbonId: '3-B' },
	{ id: '3-B-3', stageId: '3', fundamentalAreaId: 'B', ribbonId: '3-B' },
	{ id: '3-B-4', stageId: '3', fundamentalAreaId: 'B', ribbonId: '3-B' },
	{ id: '3-C-1', stageId: '3', fundamentalAreaId: 'C', ribbonId: '3-C' },
	{ id: '3-C-2', stageId: '3', fundamentalAreaId: 'C', ribbonId: '3-C' },
	{ id: '3-C-3', stageId: '3', fundamentalAreaId: 'C', ribbonId: '3-C' },
	{ id: '3-C-4', stageId: '3', fundamentalAreaId: 'C', ribbonId: '3-C' },
	{ id: '3-C-5', stageId: '3', fundamentalAreaId: 'C', ribbonId: '3-C' },
	{ id: '3-A-1', stageId: '3', fundamentalAreaId: 'A', ribbonId: '3-A' },
	{ id: '3-A-2', stageId: '3', fundamentalAreaId: 'A', ribbonId: '3-A' },
	{ id: '3-A-3', stageId: '3', fundamentalAreaId: 'A', ribbonId: '3-A' },
	{ id: '3-A-4', stageId: '3', fundamentalAreaId: 'A', ribbonId: '3-A' },
	{ id: '3-A-5', stageId: '3', fundamentalAreaId: 'A', ribbonId: '3-A' },
	{ id: '4-B-1', stageId: '4', fundamentalAreaId: 'B', ribbonId: '4-B' },
	{ id: '4-B-2', stageId: '4', fundamentalAreaId: 'B', ribbonId: '4-B' },
	{ id: '4-B-3', stageId: '4', fundamentalAreaId: 'B', ribbonId: '4-B' },
	{ id: '4-B-4', stageId: '4', fundamentalAreaId: 'B', ribbonId: '4-B' },
	{ id: '4-B-5', stageId: '4', fundamentalAreaId: 'B', ribbonId: '4-B' },
	{ id: '4-C-1', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-C-2', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-C-3', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-C-4', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-C-5', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-C-6', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-C-7', stageId: '4', fundamentalAreaId: 'C', ribbonId: '4-C' },
	{ id: '4-A-1', stageId: '4', fundamentalAreaId: 'A', ribbonId: '4-A' },
	{ id: '4-A-2', stageId: '4', fundamentalAreaId: 'A', ribbonId: '4-A' },
	{ id: '4-A-3', stageId: '4', fundamentalAreaId: 'A', ribbonId: '4-A' },
	{ id: '4-A-4', stageId: '4', fundamentalAreaId: 'A', ribbonId: '4-A' },
	{ id: '4-A-5', stageId: '4', fundamentalAreaId: 'A', ribbonId: '4-A' },
	{ id: '4-A-6', stageId: '4', fundamentalAreaId: 'A', ribbonId: '4-A' },
	{ id: '5-B-1', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-B-2', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-B-3', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-B-4', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-B-5', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-B-6', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-B-7', stageId: '5', fundamentalAreaId: 'B', ribbonId: '5-B' },
	{ id: '5-C-1', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-C-2', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-C-3', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-C-4', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-C-5', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-C-6', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-C-7', stageId: '5', fundamentalAreaId: 'C', ribbonId: '5-C' },
	{ id: '5-A-1', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '5-A-2', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '5-A-3', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '5-A-4', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '5-A-5', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '5-A-6', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '5-A-7', stageId: '5', fundamentalAreaId: 'A', ribbonId: '5-A' },
	{ id: '6-B-1', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-B-2', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-B-3', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-B-4', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-B-5', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-B-6', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-B-7', stageId: '6', fundamentalAreaId: 'B', ribbonId: '6-B' },
	{ id: '6-C-1', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-C-2', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-C-3', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-C-4', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-C-5', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-C-6', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-C-7', stageId: '6', fundamentalAreaId: 'C', ribbonId: '6-C' },
	{ id: '6-A-1', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' },
	{ id: '6-A-2', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' },
	{ id: '6-A-3', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' },
	{ id: '6-A-4', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' },
	{ id: '6-A-5', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' },
	{ id: '6-A-6', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' },
	{ id: '6-A-7', stageId: '6', fundamentalAreaId: 'A', ribbonId: '6-A' }
];

export function getRibbonsByStageId(id: StageId): Ribbon[] {
	return ribbons.filter(({ stageId: ribbonStageId }) => ribbonStageId === id);
}

export function getCheckmarksByRibbonId(id: RibbonId): Checkmark[] {
	return checkmarks.filter(({ ribbonId: checkmarkRibbonId }) => checkmarkRibbonId === id);
}
