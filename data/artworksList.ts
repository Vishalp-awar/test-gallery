// data/artworksList.ts

export interface Artwork {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  artist: string;
  creationDate: string;
  medium: string;
  reviews?: string[];
}

const artworksList: Artwork[] = [
  {
    id: 1,
    title: 'Starry Night',
    image: 'https://www.wallpaperflare.com/static/996/707/653/painting-vincent-van-gogh-abstract-the-starry-night-wallpaper.jpg',
    description: 'A beautiful painting by Vincent van Gogh...',
    price: 500000,
    artist: 'Vincent van Gogh',
    creationDate: '1889',
    medium: 'Oil on canvas',
    reviews: ['Amazing artwork!', 'Truly a masterpiece.', 'A breathtaking piece of art.']
  },
  {
    id: 2,
    title: 'Mona Lisa',
    image: 'https://i.ytimg.com/vi/EF23VQcj01E/maxresdefault.jpg',
    description: 'A portrait painting by Leonardo da Vinci...',
    price: 780000,
    artist: 'Leonardo da Vinci',
    creationDate: '1503',
    medium: 'Oil on poplar panel',
    reviews: ['An iconic piece of history.', 'The most famous painting in the world.', 'Leonardo\'s genius at its best.']
  },
  {
    id: 3,
    title: 'The Persistence of Memory',
    image: 'https://www.merchfuse.com/wp-content/uploads/2023/02/Why-did-Salvador-Dali-paint-The-Persistence-of-Memory-1-1400x788.jpeg',
    description: 'A surreal painting by Salvador Dalí...',
    price: 350000,
    artist: 'Salvador Dalí',
    creationDate: '1931',
    medium: 'Oil on canvas',
    reviews: ['Mind-bending artwork!', 'A true masterpiece of surrealism.', 'Dalí at his best.']
  },
  {
    id: 4,
    title: 'The Scream',
    image: 'https://tse2.mm.bing.net/th?id=OIP.otIIAzZ7WudGAQZqzVxR7wHaKd&pid=Api&P=0&h=180',
    description: 'An expressionist painting by Edvard Munch...',
    price: 600000,
    artist: 'Edvard Munch',
    creationDate: '1893',
    medium: 'Oil, tempera, and pastel on cardboard',
    reviews: ['Haunting and beautiful.', 'A powerful piece of art.', 'Munch\'s genius captured.']
  },
  {
    id: 5,
    title: 'Girl with a Pearl Earring',
    image: 'https://d7hftxdivxxvm.cloudfront.net/?height=801&quality=1&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxTjEaFg2Gi-9U4u9-ZrArw%2Fsmall.jpg&width=801',
    description: 'A famous painting by Johannes Vermeer...',
    price: 450000,
    artist: 'Johannes Vermeer',
    creationDate: '1665',
    medium: 'Oil on canvas',
    reviews: ['Incredibly lifelike.', 'A timeless masterpiece.', 'Vermeer\'s talent on display.']
  },
  {
    id: 6,
    title: 'The Night Watch',
    image: 'https://ychef.files.bbci.co.uk/1280x720/p070wbmx.jpg',
    description: 'A masterpiece by Rembrandt van Rijn...',
    price: 550000,
    artist: 'Rembrandt van Rijn',
    creationDate: '1642',
    medium: 'Oil on canvas',
    reviews: ['Astonishing detail!', 'Rembrandt\'s best work.', 'A grand and captivating piece.']
  },
  {
    id: 7,
    title: 'Guernica',
    image: 'https://m.media-amazon.com/images/I/51asK62iY+L._AC_UF1000,1000_QL80_.jpg',
    description: 'A powerful painting by Pablo Picasso...',
    price: 700000,
    artist: 'Pablo Picasso',
    creationDate: '1937',
    medium: 'Oil on canvas',
    reviews: ['A moving depiction of war.', 'Picasso\'s most impactful work.', 'Emotionally powerful.']
  },
  {
    id: 8,
    title: 'The Birth of Venus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg',
    description: 'A famous painting by Sandro Botticelli...',
    price: 650000,
    artist: 'Sandro Botticelli',
    creationDate: '1486',
    medium: 'Tempera on canvas',
    reviews: ['Stunning and beautiful.', 'Botticelli\'s masterpiece.', 'A timeless classic.']
  },
  {
    id: 9,
    title: 'The Kiss',
    image: '/images/the-kiss1.jpg',
    description: 'A romantic painting by Gustav Klimt...',
    price: 500000,
    artist: 'Gustav Klimt',
    creationDate: '1907',
    medium: 'Oil and gold leaf on canvas',
    reviews: ['Sensual and elegant.', 'Klimt\'s best work.', 'A beautiful piece of art.']
  },
  {
    id: 10,
    title: 'American Gothic',
    image: '/images/american-gothic1.jpg',
    description: 'A classic painting by Grant Wood...',
    price: 300000,
    artist: 'Grant Wood',
    creationDate: '1930',
    medium: 'Oil on beaverboard',
    reviews: ['Iconic and unforgettable.', 'A symbol of American art.', 'Wood\'s finest work.']
  },
  {
    id: 11,
    title: 'The Last Supper',
    image: 'https://m.media-amazon.com/images/I/51asK62iY+L._AC_UF1000,1000_QL80_.jpg',
    description: 'A famous mural by Leonardo da Vinci...',
    price: 800000,
    artist: 'Leonardo da Vinci',
    creationDate: '1498',
    medium: 'Tempera on gesso',
    reviews: ['A monumental work.', 'Da Vinci\'s brilliance.', 'A powerful religious piece.']
  },
  {
    id: 12,
    title: 'Las Meninas',
    image: '/images/las-meninas1.jpg',
    description: 'A complex painting by Diego Velázquez...',
    price: 600000,
    artist: 'Diego Velázquez',
    creationDate: '1656',
    medium: 'Oil on canvas',
    reviews: ['Intriguing and detailed.', 'Velázquez at his best.', 'A masterpiece of Spanish art.']
  },
  {
    id: 13,
    title: 'The Arnolfini Portrait',
    image: '/images/arnolfini-portrait1.jpg',
    description: 'A famous painting by Jan van Eyck...',
    price: 550000,
    artist: 'Jan van Eyck',
    creationDate: '1434',
    medium: 'Oil on oak panel',
    reviews: ['Remarkably detailed.', 'Van Eyck\'s finest work.', 'A captivating portrait.']
  },
  {
    id: 14,
    title: 'The Creation of Adam',
    image: '/images/creation-of-adam1.jpg',
    description: 'A fresco by Michelangelo...',
    price: 750000,
    artist: 'Michelangelo',
    creationDate: '1512',
    medium: 'Fresco',
    reviews: ['Awe-inspiring.', 'Michelangelo\'s genius.', 'A masterpiece of the Renaissance.']
  },
  {
    id: 15,
    title: 'The Hay Wain',
    image: '/images/the-hay-wain1.jpg',
    description: 'A landscape painting by John Constable...',
    price: 350000,
    artist: 'John Constable',
    creationDate: '1821',
    medium: 'Oil on canvas',
    reviews: ['Beautiful and serene.', 'Constable\'s best work.', 'A picturesque scene.']
  },
  {
    id: 16,
    title: 'The Garden of Earthly Delights',
    image: '/images/garden-of-earthly-delights1.jpg',
    description: 'A triptych by Hieronymus Bosch...',
    price: 800000,
    artist: 'Hieronymus Bosch',
    creationDate: '1505',
    medium: 'Oil on oak panel',
    reviews: ['Intricate and detailed.', 'Bosch\'s masterpiece.', 'A surreal and captivating piece.']
  },
  {
    id: 17,
    title: 'Whistler\'s Mother',
    image: '/images/whistlers-mother1.jpg',
    description: 'A famous painting by James McNeill Whistler...',
    price: 400000,
    artist: 'James McNeill Whistler',
    creationDate: '1871',
    medium: 'Oil on canvas',
    reviews: ['Elegant and somber.', 'Whistler\'s finest work.', 'A timeless portrait.']
  },
  {
    id: 18,
    title: 'The School of Athens',
    image: '/images/school-of-athens1.jpg',
    description: 'A fresco by Raphael...',
    price: 700000,
    artist: 'Raphael',
    creationDate: '1511',
    medium: 'Fresco',
    reviews: ['Brilliant and inspiring.', 'Raphael\'s masterpiece.', 'A tribute to philosophy.']
  },
  {
    id: 19,
    title: 'The Son of Man',
    image: '/images/son-of-man1.jpg',
    description: 'A surreal painting by René Magritte...',
    price: 450000,
    artist: 'René Magritte',
    creationDate: '1964',
    medium: 'Oil on canvas',
    reviews: ['Mysterious and thought-provoking.', 'Magritte\'s best work.', 'A surreal masterpiece.']
  },
  {
    id: 20,
    title: 'Impression, Sunrise',
    image: 'https://m.media-amazon.com/images/I/51asK62iY+L._AC_UF1000,1000_QL80_.jpg',
    description: 'A painting by Claude Monet...',
    price: 500000,
    artist: 'Claude Monet',
    creationDate: '1872',
    medium: 'Oil on canvas',
    reviews: ['Beautiful and evocative.', 'Monet\'s defining work.', 'A landmark in art history.']
  },
  {
    id: 21,
    title: 'Mona Lisa',
    image: 'https://i.ytimg.com/vi/EF23VQcj01E/maxresdefault.jpg',
    description: 'A portrait painting by Leonardo da Vinci...',
    price: 780000,
    artist: 'Leonardo da Vinci',
    creationDate: '1503',
    medium: 'Oil on poplar panel',
    reviews: ['An iconic piece of history.', 'The most famous painting in the world.', 'Leonardo\'s genius at its best.']
  },
  {
    id: 22,
    title: 'Starry Night',
    image: 'https://m.media-amazon.com/images/I/51asK62iY+L._AC_UF1000,1000_QL80_.jpg',
    description: 'A beautiful painting by Vincent van Gogh...',
    price: 500000,
    artist: 'Vincent van Gogh',
    creationDate: '1889',
    medium: 'Oil on canvas',
    reviews: ['Amazing artwork!', 'Truly a masterpiece.', 'A breathtaking piece of art.']
  },
  {
    id: 23,
    title: 'Starry Night',
    image: 'https://m.media-amazon.com/images/I/51asK62iY+L._AC_UF1000,1000_QL80_.jpg',
    description: 'A beautiful painting by Vincent van Gogh...',
    price: 500000,
    artist: 'Vincent van Gogh',
    creationDate: '1889',
    medium: 'Oil on canvas',
    reviews: ['Amazing artwork!', 'Truly a masterpiece.', 'A breathtaking piece of art.']
  },
];

export default artworksList;
