import fs from 'node:fs';
import path from 'node:path';

console.log('--- [Test Harness] Validando especificaciones y assets de audio ---');

const projectRoot = process.cwd();
let hasErrors = false;

// 1. Validar existencia de archivos de audio
const requiredMedia = [
	'public/audio/manana-si.mp3',
	'public/jared-prod.jpg',
	'public/MañanaSi_jared.wav',
	'public/MañanaSi_jared.jpeg',
	'public/audio/manana-si-cover.jpeg'
];

for (const file of requiredMedia) {
	const fullPath = path.join(projectRoot, file);
	if (fs.existsSync(fullPath)) {
		const stat = fs.statSync(fullPath);
		const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
		console.log(`✓ Asset encontrado: ${file} (${sizeMB} MB)`);
	} else {
		console.error(`✗ ERROR: Falta el archivo requerido: ${file}`);
		hasErrors = true;
	}
}

// 2. Verificar reglas no negociables de texto en los componentes
const componentsDir = path.join(projectRoot, 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.astro'));

const forbiddenPatterns = [
	{ regex: /\u2014/, label: 'em-dash (—)' },
	{ regex: /\u2013/, label: 'en-dash (–)' },
	{ regex: /Book a session/i, label: 'Book a session (prohibido)' },
	{ regex: /#ff6b3d/i, label: 'Color naranja heredado' }
];

for (const f of files) {
	const content = fs.readFileSync(path.join(componentsDir, f), 'utf-8');
	for (const pattern of forbiddenPatterns) {
		if (pattern.regex.test(content)) {
			console.error(`✗ ERROR en ${f}: Contiene patrón prohibido "${pattern.label}"`);
			hasErrors = true;
		}
	}
}

if (hasErrors) {
	console.error('\n✗ La validación del arnés ha fallado con errores.');
	process.exit(1);
} else {
	console.log('\n✓ Todos los assets y reglas de especificaciones pasaron la verificación exitosamente.');
}
