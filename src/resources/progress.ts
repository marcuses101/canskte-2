type BadgeId = '1' | '2' | '3' | '4' | '5' | '6';
type FundamentalAreaId = 'B' | 'C' | 'A';
type RibbonId = `${BadgeId}-${FundamentalAreaId}`;
type CheckmarkId = `${RibbonId}-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;

export const badges: { id: BadgeId; ribbons: RibbonId[] }[] = [
	{ id: '1', ribbons: ['1-B', '1-C', '1-A'] },
	{ id: '2', ribbons: ['2-B', '2-C', '2-A'] },
	{ id: '3', ribbons: ['3-B', '3-C', '3-A'] },
	{ id: '4', ribbons: ['4-B', '4-C', '4-A'] },
	{ id: '5', ribbons: ['5-B', '5-C', '5-A'] },
	{ id: '6', ribbons: ['6-B', '6-C', '6-A'] }
];

export const ribbons: { id: RibbonId; requiredCheckmarks: number; totalCheckmarks: number }[] = [
	{ id: '1-B', requiredCheckmarks: 4, totalCheckmarks: 4 },
	{ id: '1-C', requiredCheckmarks: 3, totalCheckmarks: 3 },
	{ id: '1-A', requiredCheckmarks: 3, totalCheckmarks: 3 },
	{ id: '2-B', requiredCheckmarks: 4, totalCheckmarks: 4 },
	{ id: '2-C', requiredCheckmarks: 3, totalCheckmarks: 4 },
	{ id: '2-A', requiredCheckmarks: 3, totalCheckmarks: 4 },
	{ id: '3-B', requiredCheckmarks: 5, totalCheckmarks: 5 },
	{ id: '3-C', requiredCheckmarks: 5, totalCheckmarks: 5 },
	{ id: '3-A', requiredCheckmarks: 5, totalCheckmarks: 5 },
	{ id: '4-B', requiredCheckmarks: 5, totalCheckmarks: 7 },
	{ id: '4-C', requiredCheckmarks: 5, totalCheckmarks: 6 },
	{ id: '4-A', requiredCheckmarks: 5, totalCheckmarks: 6 },
	{ id: '5-B', requiredCheckmarks: 5, totalCheckmarks: 7 },
	{ id: '5-C', requiredCheckmarks: 5, totalCheckmarks: 7 },
	{ id: '5-A', requiredCheckmarks: 6, totalCheckmarks: 7 },
	{ id: '6-B', requiredCheckmarks: 6, totalCheckmarks: 8 },
	{ id: '6-C', requiredCheckmarks: 6, totalCheckmarks: 8 },
	{ id: '6-A', requiredCheckmarks: 6, totalCheckmarks: 8 }
];

export const checkmarks: CheckmarkId[] = [
	'1-B-1',
	'1-B-2',
	'1-B-3',
	'1-B-4',
	'1-C-1',
	'1-C-2',
	'1-C-3',
	'1-A-1',
	'1-A-2',
	'1-A-3',
	'2-B-1',
	'2-B-2',
	'2-B-3',
	'2-B-4',
	'2-C-1',
	'2-C-2',
	'2-C-3',
	'2-C-4',
	'2-A-1',
	'2-A-2',
	'2-A-3',
	'2-A-4',
	'3-B-1',
	'3-B-2',
	'3-B-3',
	'3-B-4',
	'3-C-1',
	'3-C-2',
	'3-C-3',
	'3-C-4',
	'3-C-5',
	'3-A-1',
	'3-A-2',
	'3-A-3',
	'3-A-4',
	'3-A-5',
	'4-B-1',
	'4-B-2',
	'4-B-3',
	'4-B-4',
	'4-B-5',
	'4-C-1',
	'4-C-2',
	'4-C-3',
	'4-C-4',
	'4-C-5',
	'4-C-6',
	'4-C-7',
	'4-A-1',
	'4-A-2',
	'4-A-3',
	'4-A-4',
	'4-A-5',
	'4-A-6',
	'5-B-1',
	'5-B-2',
	'5-B-3',
	'5-B-4',
	'5-B-5',
	'5-B-6',
	'5-B-7',
	'5-C-1',
	'5-C-2',
	'5-C-3',
	'5-C-4',
	'5-C-5',
	'5-C-6',
	'5-C-7',
	'5-A-1',
	'5-A-2',
	'5-A-3',
	'5-A-4',
	'5-A-5',
	'5-A-6',
	'5-A-7',
	'6-B-1',
	'6-B-2',
	'6-B-3',
	'6-B-4',
	'6-B-5',
	'6-B-6',
	'6-B-7',
	'6-C-1',
	'6-C-2',
	'6-C-3',
	'6-C-4',
	'6-C-5',
	'6-C-6',
	'6-C-7',
	'6-A-1',
	'6-A-2',
	'6-A-3',
	'6-A-4',
	'6-A-5',
	'6-A-6',
	'6-A-7'
];
