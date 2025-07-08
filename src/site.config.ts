interface SiteParams{
  title: string;
  author: string;
  tagline: string;
  logo: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
  repo: string;
  branch: string;
}

export const SITE_PARAMS: SiteParams = {
  /**
   * Site title
   * Default author can be for site owner and for 
   * default parameter if content does not have author parameter.
   */
  title: 'Astro Test',
  author: 'Astro Test',
  tagline: 'Manusia Biasa',

  /**
   * Used for default Parameters 
   * Place assets in public or cloud 
   * */
  logo: '/favicon.svg',
  image: 'https://picsum.photos/100/300',

  /** 
   * Site description
   * Site tags and for fallback of content without tags
   */
  description: 'Do magna non duis nulla excepteur enim ipsum excepteur cillum consectetur.',
  tags: ['Hallo', 'world'],

  /**
   * Github Link
   */
  github: 'https://github.com/masputrawae',
  repo: 'masputrawae/READMEnya-ada-nanti',
  branch: 'main'
}