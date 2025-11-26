// ============================ CONFIG & GLOBALS ============================
let boids = []; // Array with all particles
let NUM_BOIDS = 1350; // Default starting number of dots for the swarm
const MIN_BOIDS = 100; // Minimum allowed dots
const MAX_BOIDS = 2500; // Maximum allowed dots

// High-detail toggle (bigger off-screen buffer + smaller dots)
let highDetailMode = false; // false = standard detail, true = high detail

// UI buttons for adding/removing boids
let addButton;   // "+ Dots" button
let removeButton; // "- Dots" button

// UI visibility master toggle
let uiVisible = true; // Whether UI elements (buttons/labels/help) are shown - GPT

// Discrete rainbow hues (red → violet) for cleaner rainbow bands
const RAINBOW_HUES = [0, 30, 60, 120, 180, 240, 300]; // HSB hue degrees used for dots

// Re-usable palettes
const CAMO_SWATCHES = [ // Camouflage greens/browns palette
  [35, 50, 50],  // Tan
  [90, 60, 45],  // Olive green
  [110, 55, 35], // Dark green
  [25, 65, 35]   // Brown
]; //

const OC_SWATCHES = [ // Orlando City SC (purple/gold/white)
  [275, 80, 95],  // Purple
  [45, 100, 95],  // Gold
  [0, 0, 100]     // White
]; //

const MAGIC_SWATCHES = [ // Orlando Magic (blue/black/silver/white)
  [210, 100, 100], // Bright blue
  [0, 0, 0],       // Black
  [210, 20, 90],   // Silver-ish blue
  [0, 0, 100]      // White
]; //

// Orlando-themed words kept as labels (not rendered now, but stored per boid)
const WORDS = [
  'DTO',  // Downtown Orlando
  'ART',  // Arts scene
  'TECH', // Tech scene
  'ORL',  // Orlando abbreviation
  'UCF',  // University of Central Florida
  'MAGIC',// Orlando Magic
  'EOLA', // Lake Eola
  'LAKE', // Lakes around Orlando
  'LYNX', // LYNX bus system
  'SUN',  // Sunshine State vibe
  '407'   // Area code
]; // Orlando-relevant labels for the swarm

// Words / icons that the swarm will form as big dot shapes
const SHAPES = [
  '407',
  'LOVE',
  'EOLA',
  'DTO',
  'UCF',       // UCF word with black-gold-white palette
  'EPIC',      // Epic Universe nod
  'PRIDE',     // PRIDE word with per-letter colors
  'VALOR',     // Valor with camo scheme
  'VAMOS',     // Vamos (Orlando City)
  'ORLANDO',
  'MAGIC',     // Orlando Magic logo-style icon + palette
  'LAKE',
  'SUNRAIL',
  'MICKEY',    // Mickey three-circle icon
  'UNIVERSAL', // Universal Studios globe icon
  'FLAG',      // USA flag silhouette (auto USA colors)
  'CASTLE',    // Cinderella’s Castle silhouette
  'EPCOT',     // Epcot ball silhouette
  'EYE'        // Orlando Eye wheel silhouette
]; // Sequence of shapes
let currentShapeIndex = 0; // Index in SHAPES for current formation
let currentShapeText = SHAPES[0]; // Currently active word/shape token

// ... remainder of file unchanged ...
