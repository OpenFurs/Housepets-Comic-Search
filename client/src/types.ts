type OptionalArray<T> = T[] | never[]

export interface HPComicItem {
  title: string
  image: string
  characters: Array<HPCharacter>
  altText: string
  datePublished: string | Date
}

export interface HPCharacter {
  name: string
  image: string
  species: string
  inChapterArcs?: Omit<HPChapterArc, "characters">
}

export interface HPChapterArc {
  title: string
  chapterNum: number
  image: string
  comics: OptionalArray<HPComicItem>
  characters: OptionalArray<HPCharacter>
}
