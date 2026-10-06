export interface BeatItem {
	id: string;
	title: string;
	genre: {
		es: string;
		en: string;
	};
	genreFilter: 'Trap' | 'Reggaetón' | 'Alt-pop';
	mood: {
		es: string;
		en: string;
	};
	bpm: number;
	key: {
		es: string;
		en: string;
	};
	duration: string;
	audioIndex: number;
	cover: string;
	audioSrc?: string;
}

export const BEATS_DATA: BeatItem[] = [
	{
		id: 'beat-01',
		title: 'Mañana Sí',
		genre: { es: 'Reggaetón', en: 'Reggaeton' },
		genreFilter: 'Reggaetón',
		mood: { es: 'Nocturno', en: 'Late night' },
		bpm: 96,
		key: { es: 'Fa menor', en: 'F minor' },
		duration: '1:29',
		audioIndex: 4,
		cover: '/audio/manana-si-cover.jpeg',
		audioSrc: '/audio/manana-si.mp3',
	},
	{
		id: 'beat-02',
		title: 'Humo',
		genre: { es: 'Trap', en: 'Trap' },
		genreFilter: 'Trap',
		mood: { es: 'Oscuro', en: 'Dark' },
		bpm: 140,
		key: { es: 'Do menor', en: 'C minor' },
		duration: '2:38',
		audioIndex: 5,
		cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop',
	},
	{
		id: 'beat-03',
		title: 'Vértigo',
		genre: { es: 'Pop alternativo', en: 'Alt-pop' },
		genreFilter: 'Alt-pop',
		mood: { es: 'Enérgico', en: 'Energetic' },
		bpm: 122,
		key: { es: 'Sol mayor', en: 'G major' },
		duration: '2:45',
		audioIndex: 6,
		cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop',
	},
	{
		id: 'beat-04',
		title: 'Ceniza',
		genre: { es: 'Trap', en: 'Trap' },
		genreFilter: 'Trap',
		mood: { es: 'Melancólico', en: 'Melancholic' },
		bpm: 132,
		key: { es: 'Re menor', en: 'D minor' },
		duration: '2:15',
		audioIndex: 7,
		cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop',
	},
	{
		id: 'beat-05',
		title: 'Eclipse',
		genre: { es: 'Reggaetón', en: 'Reggaeton' },
		genreFilter: 'Reggaetón',
		mood: { es: 'Sensual', en: 'Sensual' },
		bpm: 98,
		key: { es: 'La menor', en: 'A minor' },
		duration: '2:50',
		audioIndex: 8,
		cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=200&auto=format&fit=crop',
	},
	{
		id: 'beat-06',
		title: 'Cristal',
		genre: { es: 'Pop alternativo', en: 'Alt-pop' },
		genreFilter: 'Alt-pop',
		mood: { es: 'Etéreo', en: 'Ethereal' },
		bpm: 118,
		key: { es: 'Mi mayor', en: 'E major' },
		duration: '2:24',
		audioIndex: 9,
		cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=200&auto=format&fit=crop',
	},
	{
		id: 'beat-07',
		title: 'Neón',
		genre: { es: 'Trap', en: 'Trap' },
		genreFilter: 'Trap',
		mood: { es: 'Pesado', en: 'Heavy' },
		bpm: 144,
		key: { es: 'Fa# menor', en: 'F# minor' },
		duration: '2:08',
		audioIndex: 10,
		cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200&auto=format&fit=crop',
	},
	{
		id: 'beat-08',
		title: 'Gravedad',
		genre: { es: 'Reggaetón', en: 'Reggaeton' },
		genreFilter: 'Reggaetón',
		mood: { es: 'Profundo', en: 'Deep' },
		bpm: 92,
		key: { es: 'Si menor', en: 'B minor' },
		duration: '2:32',
		audioIndex: 11,
		cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=200&auto=format&fit=crop',
	},
];
