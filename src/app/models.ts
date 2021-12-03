export interface Planet {
    id: number,
    letter: string,
    pl_controvflag: number,
    pl_orbper: number,
    pl_orbsmax: number,
    pl_orbeccen: number,
    pl_orbincl: number,
    pl_bmassj: number,
    pl_rade: number,
    pl_publ_date: string,
    pl_pelink: string,
    pl_locale: string,
    pl_mnum: number,
    pl_disc: string,
    pl_bmasse: number,
    statusId: number,
    discoveryMethodId: number,
    systemId: number,
    telescopeId: number,
    createdAt: string,
    updatedAt: string,
  }

export interface StarSystem{
  id: number,
  Name: string,
  st_dist: number,
  st_teff: number,
  st_mass: number,
  st_rad: number,
  st_age: number,
  st_vsini: number,
  ra: number,
  dec: number,
  createdAt: string,
  updatedAt: string,

  exoplanets: Array<Planet>,

}

  
  export interface APIResponse<T> {
      results: Array<T>;
  }
  
  interface Genre {
    name: string;
  }
  
  interface ParentPlatform {
    platform: {
      name: string;
      slug: string
    };
  }
  
  interface Publishers {
    name: string;
  }
  
  interface Rating {
    id: number;
    count: number;
    title: string;
  }
  
  interface Screenshots {
    image: string;
  }
  
  interface Trailer {
    data: {
      max: string;
    };
  }
  