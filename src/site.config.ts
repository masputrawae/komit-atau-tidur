interface SiteParams{
  title: string;
  author: string;
  tagline: string;
  twitter: string;
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
  author: 'Putra Jaya',
  tagline: 'Manusia Biasa',
  twitter: '@Masputrawae',

  /**
   * Used for default Parameters 
   * Place assets in public or cloud 
   * */
  logo: '/logo.webp',
  image: '/thumbnail.webp',

  /** 
   * Site description
   * Site tags and for fallback of content without tags
   */
  description: 'Do magna non duis nulla excepteur enim ipsum excepteur cillum consectetur.',
  tags: ['Hallo', 'world', 'testing', 'astro'],

  /**
   * Github Link
   */
  github: 'https://github.com/masputrawae',
  repo: 'masputrawae/READMEnya-ada-nanti',
  branch: 'main'
}