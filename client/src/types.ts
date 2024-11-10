export interface RouteParams<P extends object = {}> {
  params: P,
  searchParams: { [key: string]: string | string[] | undefined }
}

/** A type generic that adds an "optional" array type when no value is passed */
export type OptionalArray<T> = T[] | never[]

type StringedDate = string | Date

/** Housepets stuff */
export interface HPComicItem {
  title: string
  image: string
  imageAlt: string
  characters: Array<HPCharacter | object>
  altText: string
  datePublished: StringedDate
}

export interface HPCharacter {
  name: string
  slug: string
  image: string
  species: string
  appearances: Omit<HPChapterArc, "characters">
}

export interface HPChapterArc {
  title: string
  chapterNum: number
  dateRange: [StringedDate, StringedDate],
  comics: OptionalArray<HPComicItem | object>
  characters: OptionalArray<HPCharacter | object>
}
