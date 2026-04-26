// ─────────────────────────────────────────────
// MÓDULO 1 · PRESENTE (être / avoir / aller)
// ─────────────────────────────────────────────
export const presenteExercises = [
  {
    id: 'pr01',
    sentence: 'Je ____ à l\'école.',
    answer: 'vais',
    options: ['vais', 'suis', 'ai', 'vas'],
    hint: 'Movimiento/dirección → aller',
    explanation: 'Se usa <strong>aller</strong> para indicar que alguien va a algún lugar. "Je vais" = yo voy.',
  },
  {
    id: 'pr02',
    sentence: 'Nous ____ une maison.',
    answer: 'avons',
    options: ['avons', 'sommes', 'allons', 'ont'],
    hint: 'Posesión → avoir',
    explanation: 'Se usa <strong>avoir</strong> para posesiones. "Nous avons" = nosotros tenemos.',
  },
  {
    id: 'pr03',
    sentence: 'Tu ____ très sympa.',
    answer: 'es',
    options: ['es', 'as', 'vas', 'est'],
    hint: 'Cualidad/descripción → être',
    explanation: 'Se usa <strong>être</strong> para describir cómo es alguien. "Tu es" = tú eres.',
  },
  {
    id: 'pr04',
    sentence: 'Ils ____ au cinéma.',
    answer: 'vont',
    options: ['vont', 'sont', 'ont', 'vais'],
    hint: 'Movimiento → aller',
    explanation: 'Tercera persona del plural de <strong>aller</strong>: "ils vont" = ellos van.',
  },
  {
    id: 'pr05',
    sentence: 'J\'____ 13 ans.',
    answer: 'ai',
    options: ['ai', 'suis', 'vais', 'es'],
    hint: 'Edad en francés → avoir',
    explanation: 'En francés la edad usa <strong>avoir</strong>, no être. "J\'ai 13 ans" = tengo 13 años.',
  },
  {
    id: 'pr06',
    sentence: 'Elle ____ médecin.',
    answer: 'est',
    options: ['est', 'a', 'va', 'sont'],
    hint: 'Profesión → être',
    explanation: 'Las profesiones usan <strong>être</strong>. "Elle est médecin" = ella es médica.',
  },
  {
    id: 'pr07',
    sentence: 'Vous ____ à Paris ?',
    answer: 'êtes',
    options: ['êtes', 'avez', 'allez', 'sont'],
    hint: 'Localización/estado → être',
    explanation: '"Vous êtes" es la forma de usted/vosotros de <strong>être</strong>.',
  },
  {
    id: 'pr08',
    sentence: 'Nous ____ faim.',
    answer: 'avons',
    options: ['avons', 'sommes', 'allons', 'avez'],
    hint: 'Sensaciones físicas → avoir',
    explanation: 'Las sensaciones (faim, soif, froid...) usan <strong>avoir</strong>. "Avoir faim" = tener hambre.',
  },
  {
    id: 'pr09',
    sentence: 'Il ____ mon frère.',
    answer: 'est',
    options: ['est', 'a', 'va', 'es'],
    hint: 'Identidad → être',
    explanation: 'Para identificar a alguien se usa <strong>être</strong>. "Il est mon frère" = él es mi hermano.',
  },
  {
    id: 'pr10',
    sentence: 'Elles ____ au supermarché.',
    answer: 'vont',
    options: ['vont', 'sont', 'ont', 'allez'],
    hint: 'Movimiento → aller',
    explanation: '"Elles vont" = ellas van. Tercera persona plural de <strong>aller</strong>.',
  },
  {
    id: 'pr11',
    sentence: 'Tu ____ un vélo ?',
    answer: 'as',
    options: ['as', 'es', 'vas', 'ont'],
    hint: 'Posesión → avoir',
    explanation: '"Tu as" = tú tienes. Segunda persona singular de <strong>avoir</strong>.',
  },
  {
    id: 'pr12',
    sentence: 'Nous ____ en vacances.',
    answer: 'allons',
    options: ['allons', 'sommes', 'avons', 'vont'],
    hint: 'Movimiento → aller',
    explanation: '"Nous allons" = nosotros vamos. Primera persona plural de <strong>aller</strong>.',
  },
];

// ─────────────────────────────────────────────
// MÓDULO 2 · QUI / QUE
// ─────────────────────────────────────────────
export const quiQueExercises = [
  {
    id: 'qq01',
    before: 'La fille',
    blank: '__',
    after: 'parle est ma sœur.',
    answer: 'qui',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un verbo (parle)',
    explanation: '<strong>Qui</strong> se usa cuando después viene un verbo. Aquí "parle" es el verbo.',
  },
  {
    id: 'qq02',
    before: 'Le livre',
    blank: '__',
    after: 'j\'ai est intéressant.',
    answer: 'que',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un sujeto (j\')',
    explanation: '<strong>Que</strong> se usa cuando después viene un sujeto + verbo. Aquí "j\'ai" tiene sujeto propio.',
  },
  {
    id: 'qq03',
    before: 'Le garçon',
    blank: '__',
    after: 'joue au foot est mon ami.',
    answer: 'qui',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un verbo (joue)',
    explanation: '<strong>Qui</strong>: después viene directamente el verbo "joue".',
  },
  {
    id: 'qq04',
    before: 'La voiture',
    blank: '__',
    after: 'tu vois est rouge.',
    answer: 'que',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un sujeto (tu)',
    explanation: '<strong>Que</strong>: después viene "tu vois", que tiene sujeto propio.',
  },
  {
    id: 'qq05',
    before: 'C\'est le professeur',
    blank: '__',
    after: 'explique très bien.',
    answer: 'qui',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un verbo (explique)',
    explanation: '<strong>Qui</strong>: el verbo "explique" viene directamente después.',
  },
  {
    id: 'qq06',
    before: 'Le film',
    blank: '__',
    after: 'nous regardons est super.',
    answer: 'que',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un sujeto (nous)',
    explanation: '<strong>Que</strong>: después viene "nous regardons", con su propio sujeto.',
  },
  {
    id: 'qq07',
    before: 'La femme',
    blank: '__',
    after: 'chante est célèbre.',
    answer: 'qui',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un verbo (chante)',
    explanation: '<strong>Qui</strong>: el verbo "chante" aparece justo después.',
  },
  {
    id: 'qq08',
    before: 'Le gâteau',
    blank: '__',
    after: 'tu manges est délicieux.',
    answer: 'que',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un sujeto (tu)',
    explanation: '<strong>Que</strong>: después viene "tu manges", sujeto + verbo.',
  },
  {
    id: 'qq09',
    before: 'Les enfants',
    blank: '__',
    after: 'jouent dans le parc sont heureux.',
    answer: 'qui',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un verbo (jouent)',
    explanation: '<strong>Qui</strong>: el verbo "jouent" viene directamente tras el relativo.',
  },
  {
    id: 'qq10',
    before: 'La chanson',
    blank: '__',
    after: 'j\'aime est en français.',
    answer: 'que',
    options: ['qui', 'que'],
    hint: 'Después del hueco hay un sujeto (j\')',
    explanation: '<strong>Que</strong>: después viene "j\'aime", con sujeto propio.',
  },
];

// ─────────────────────────────────────────────
// MÓDULO 3 · COD (le / la / les / l')
// ─────────────────────────────────────────────
export const codExercises = [
  {
    id: 'cod01',
    original: 'Je vois Marie.',
    answer: 'Je la vois.',
    options: ['Je le vois.', 'Je la vois.', 'Je les vois.', 'Je l\'vois.'],
    hint: 'Marie → femenino singular',
    explanation: '<strong>la</strong> sustituye a un nombre femenino singular (Marie).',
  },
  {
    id: 'cod02',
    original: 'Je mange les pommes.',
    answer: 'Je les mange.',
    options: ['Je le mange.', 'Je la mange.', 'Je les mange.', 'Je l\'mange.'],
    hint: 'les pommes → plural',
    explanation: '<strong>les</strong> sustituye a cualquier nombre en plural.',
  },
  {
    id: 'cod03',
    original: 'Tu aimes le film ?',
    answer: 'Tu l\'aimes ?',
    options: ['Tu le aimes ?', 'Tu la aimes ?', 'Tu les aimes ?', 'Tu l\'aimes ?'],
    hint: 'le film → masculino singular + empieza por consonante... ¿o vocal?',
    explanation: '<strong>l\'</strong> se usa delante de vocal o h muda. "aimes" empieza por vocal.',
  },
  {
    id: 'cod04',
    original: 'Nous appelons les pompiers.',
    answer: 'Nous les appelons.',
    options: ['Nous le appelons.', 'Nous la appelons.', 'Nous les appelons.', 'Nous l\'appelons.'],
    hint: 'les pompiers → plural',
    explanation: '<strong>les</strong> porque "pompiers" es plural.',
  },
  {
    id: 'cod05',
    original: 'Elle lit le livre.',
    answer: 'Elle le lit.',
    options: ['Elle le lit.', 'Elle la lit.', 'Elle les lit.', 'Elle l\'lit.'],
    hint: 'le livre → masculino singular, empieza por consonante',
    explanation: '<strong>le</strong> para masculino singular. "livre" empieza por consonante, no hay elisión.',
  },
  {
    id: 'cod06',
    original: 'Il regarde la télévision.',
    answer: 'Il la regarde.',
    options: ['Il le regarde.', 'Il la regarde.', 'Il les regarde.', 'Il l\'regarde.'],
    hint: 'la télévision → femenino singular',
    explanation: '<strong>la</strong> para femenino singular (la télévision).',
  },
  {
    id: 'cod07',
    original: 'Tu connais Pierre ?',
    answer: 'Tu le connais ?',
    options: ['Tu le connais ?', 'Tu la connais ?', 'Tu les connais ?', 'Tu l\'connais ?'],
    hint: 'Pierre → masculino singular',
    explanation: '<strong>le</strong> para masculino singular. Pierre es un nombre masculino.',
  },
  {
    id: 'cod08',
    original: 'Nous mangeons l\'orange.',
    answer: 'Nous la mangeons.',
    options: ['Nous le mangeons.', 'Nous la mangeons.', 'Nous les mangeons.', 'Nous l\'mangeons.'],
    hint: 'l\'orange → femenino singular (orange es femenino)',
    explanation: '<strong>la</strong> porque "orange" es femenino singular. Antes del verbo no hay elisión.',
  },
];

// ─────────────────────────────────────────────
// MÓDULO 4 · PREGUNTAS (interrogativos)
// ─────────────────────────────────────────────
export const preguntasExercises = [
  {
    id: 'pq01',
    sentence: '____ vas-tu ?',
    answer: 'où',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta sobre un lugar',
    explanation: '<strong>Où</strong> = dónde. Se usa para preguntar por el lugar.',
  },
  {
    id: 'pq02',
    sentence: '____ est ton ami ?',
    answer: 'qui',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por una persona',
    explanation: '<strong>Qui</strong> = quién. Se usa para preguntar por personas.',
  },
  {
    id: 'pq03',
    sentence: '____ tu fais ?',
    answer: 'que',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por una acción o cosa',
    explanation: '<strong>Que</strong> = qué. Se usa para preguntar por cosas o acciones.',
  },
  {
    id: 'pq04',
    sentence: '____ tu es triste ?',
    answer: 'pourquoi',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por la causa o razón',
    explanation: '<strong>Pourquoi</strong> = por qué. Pregunta por la causa o motivo.',
  },
  {
    id: 'pq05',
    sentence: '____ arrives-tu ?',
    answer: 'quand',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta sobre el tiempo/momento',
    explanation: '<strong>Quand</strong> = cuándo. Pregunta sobre el momento.',
  },
  {
    id: 'pq06',
    sentence: '____ tu t\'appelles ?',
    answer: 'comment',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta sobre la manera o el nombre',
    explanation: '<strong>Comment</strong> = cómo. Se usa para preguntar el modo o el nombre.',
  },
  {
    id: 'pq07',
    sentence: '____ habites-tu ?',
    answer: 'où',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por un lugar de residencia',
    explanation: '<strong>Où</strong> = dónde. Preguntas sobre lugares.',
  },
  {
    id: 'pq08',
    sentence: '____ est cette femme ?',
    answer: 'qui',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por la identidad de una persona',
    explanation: '<strong>Qui</strong> = quién. Se pregunta por la identidad de alguien.',
  },
  {
    id: 'pq09',
    sentence: '____ est le concert ?',
    answer: 'quand',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por la fecha o el momento',
    explanation: '<strong>Quand</strong> = cuándo. Aquí se pregunta cuándo es el concierto.',
  },
  {
    id: 'pq10',
    sentence: '____ tu viens en vélo ?',
    answer: 'pourquoi',
    options: ['où', 'qui', 'que', 'quand', 'pourquoi', 'comment'],
    hint: 'Pregunta por la razón de una acción',
    explanation: '<strong>Pourquoi</strong> = por qué. Pregunta por el motivo de venir en bicicleta.',
  },
];

// ─────────────────────────────────────────────
// MÓDULO 5 · VOCABULARIO (medio ambiente)
// ─────────────────────────────────────────────
export const vocabularyWords = [
  { id: 'v01', fr: 'la pollution', es: 'la contaminación', example: 'La pollution est dangereuse pour la santé.' },
  { id: 'v02', fr: 'la planète', es: 'el planeta', example: 'Il faut protéger notre planète.' },
  { id: 'v03', fr: 'les animaux', es: 'los animales', example: 'Les animaux sont en danger.' },
  { id: 'v04', fr: 'la forêt', es: 'el bosque', example: 'La forêt amazonienne est très importante.' },
  { id: 'v05', fr: 'l\'eau', es: 'el agua', example: 'L\'eau est essentielle pour la vie.' },
  { id: 'v06', fr: 'le danger', es: 'el peligro', example: 'Les espèces sont en grand danger.' },
  { id: 'v07', fr: 'protéger', es: 'proteger', example: 'Nous devons protéger la nature.' },
  { id: 'v08', fr: 'disparaître', es: 'desaparecer', example: 'Certaines espèces vont disparaître.' },
  { id: 'v09', fr: 'détruire', es: 'destruir', example: 'L\'homme détruit la nature.' },
  { id: 'v10', fr: 'mourir', es: 'morir', example: 'Les coraux meurent à cause du réchauffement.' },
  { id: 'v11', fr: 'le réchauffement climatique', es: 'el calentamiento global', example: 'Le réchauffement climatique est un problème mondial.' },
  { id: 'v12', fr: 'les déchets', es: 'los residuos / la basura', example: 'Il faut trier les déchets.' },
  { id: 'v13', fr: 'recycler', es: 'reciclar', example: 'On doit recycler le plastique.' },
  { id: 'v14', fr: 'la nature', es: 'la naturaleza', example: 'La nature est magnifique.' },
  { id: 'v15', fr: 'l\'énergie renouvelable', es: 'la energía renovable', example: 'L\'énergie renouvelable est l\'avenir.' },
];

// ─────────────────────────────────────────────
// MÓDULO 6 · REDACCIÓN GUIADA
// ─────────────────────────────────────────────
export const writingTemplates = [
  {
    id: 'w01',
    title: 'Describe una foto de medio ambiente',
    prompts: [
      { label: 'Sur la photo, il y a…', placeholder: 'de la pollution / des animaux / une forêt…' },
      { label: 'Je pense que…', placeholder: 'c\'est grave / c\'est un problème important…' },
      { label: 'C\'est un problème parce que…', placeholder: 'les animaux sont en danger / la planète souffre…' },
      { label: 'Il faut…', placeholder: 'protéger la planète / recycler / arrêter la pollution…' },
    ],
    vocabularyHints: ['pollution', 'planète', 'animaux', 'forêt', 'danger', 'protéger'],
    example: `Sur la photo, il y a de la pollution dans la mer.
Je pense que c'est très grave.
C'est un problème parce que les animaux marins sont en danger.
Il faut arrêter de polluer et protéger les océans.`,
  },
];

// ─────────────────────────────────────────────
// REGLAS (mostradas en módulos)
// ─────────────────────────────────────────────
export const rules = {
  presente: [
    { title: 'ÊTRE (ser/estar)', conjugation: ['je suis', 'tu es', 'il/elle est', 'nous sommes', 'vous êtes', 'ils/elles sont'], use: 'Identidad, estado, profesión, origen, localización.' },
    { title: 'AVOIR (tener)', conjugation: ['j\'ai', 'tu as', 'il/elle a', 'nous avons', 'vous avez', 'ils/elles ont'], use: 'Posesión, edad, sensaciones (faim, soif, froid…).' },
    { title: 'ALLER (ir)', conjugation: ['je vais', 'tu vas', 'il/elle va', 'nous allons', 'vous allez', 'ils/elles vont'], use: 'Movimiento, dirección, futuro próximo.' },
  ],
  quique: [
    { title: 'QUI', rule: 'Sustituye a una persona o cosa que hace la acción. Después de QUI suele ir directamente un VERBO.', example: 'La fille qui parle → "parle" es el verbo justo después.' },
    { title: 'QUE / QU\'', rule: 'Sustituye a la persona o cosa que recibe la acción. Después de QUE suele ir un SUJETO + VERBO.', example: 'Le livre que j\'ai → "j\'ai" tiene su propio sujeto.' },
  ],
  cod: [
    { pronoun: 'le', use: 'Masculino singular (consonante)', example: 'le livre → Je le lis.' },
    { pronoun: 'la', use: 'Femenino singular (consonante)', example: 'la télé → Je la regarde.' },
    { pronoun: 'l\'', use: 'Singular (vocal o h muda)', example: 'l\'arbre → Je l\'aime.' },
    { pronoun: 'les', use: 'Plural (masc. o fem.)', example: 'les livres → Je les lis.' },
  ],
  preguntas: [
    { word: 'qui', meaning: 'quién / quiénes', example: 'Qui est-il ?' },
    { word: 'que / qu\'', meaning: 'qué', example: 'Que fais-tu ?' },
    { word: 'où', meaning: 'dónde', example: 'Où habites-tu ?' },
    { word: 'quand', meaning: 'cuándo', example: 'Quand arrives-tu ?' },
    { word: 'pourquoi', meaning: 'por qué', example: 'Pourquoi tu pleures ?' },
    { word: 'comment', meaning: 'cómo', example: 'Comment tu t\'appelles ?' },
  ],
};
