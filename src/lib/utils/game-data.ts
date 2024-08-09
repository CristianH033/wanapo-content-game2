import img1 from '@/assets/img/tiles/1.webp'
import img2 from '@/assets/img/tiles/2.webp'
import img3 from '@/assets/img/tiles/3.webp'
import img4 from '@/assets/img/tiles/4.webp'
import img5 from '@/assets/img/tiles/5.webp'
import img6 from '@/assets/img/tiles/6.webp'
import img7 from '@/assets/img/tiles/7.webp'
import img8 from '@/assets/img/tiles/8.webp'
import img9 from '@/assets/img/tiles/9.webp'
import img10 from '@/assets/img/tiles/10.webp'
import img11 from '@/assets/img/tiles/11.webp'
import img12 from '@/assets/img/tiles/12.webp'

export interface RawTile {
  matchValue: number
  image: string
  isRevealed: boolean
  isMatched: boolean
}

export interface Tile extends RawTile {
  id: string
}

export const tilesData: RawTile[] = [
  { matchValue: 1, image: img1, isRevealed: false, isMatched: false },
  { matchValue: 1, image: img1, isRevealed: false, isMatched: false },
  { matchValue: 2, image: img2, isRevealed: false, isMatched: false },
  { matchValue: 2, image: img2, isRevealed: false, isMatched: false },
  { matchValue: 3, image: img3, isRevealed: false, isMatched: false },
  { matchValue: 3, image: img3, isRevealed: false, isMatched: false },
  { matchValue: 4, image: img4, isRevealed: false, isMatched: false },
  { matchValue: 4, image: img4, isRevealed: false, isMatched: false },
  { matchValue: 5, image: img5, isRevealed: false, isMatched: false },
  { matchValue: 5, image: img5, isRevealed: false, isMatched: false },
  { matchValue: 6, image: img6, isRevealed: false, isMatched: false },
  { matchValue: 6, image: img6, isRevealed: false, isMatched: false },
  { matchValue: 7, image: img7, isRevealed: false, isMatched: false },
  { matchValue: 7, image: img7, isRevealed: false, isMatched: false },
  { matchValue: 8, image: img8, isRevealed: false, isMatched: false },
  { matchValue: 8, image: img8, isRevealed: false, isMatched: false },
  { matchValue: 9, image: img9, isRevealed: false, isMatched: false },
  { matchValue: 9, image: img9, isRevealed: false, isMatched: false },
  { matchValue: 10, image: img10, isRevealed: false, isMatched: false },
  { matchValue: 10, image: img10, isRevealed: false, isMatched: false },
  { matchValue: 11, image: img11, isRevealed: false, isMatched: false },
  { matchValue: 11, image: img11, isRevealed: false, isMatched: false },
  { matchValue: 12, image: img12, isRevealed: false, isMatched: false },
  { matchValue: 12, image: img12, isRevealed: false, isMatched: false }
]
