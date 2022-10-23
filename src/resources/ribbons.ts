import type { StageId } from './stages';
export type FundamentalAreaId = 'B' | 'C' | 'A';
export type RibbonId = `${StageId}-${FundamentalAreaId}`;

export type Ribbon = {
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
