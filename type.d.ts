interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface pageInfo extends SanityBody {
  _type: "pageInfo";
  backgroundInformation: string;
  email: string;
  role: string;
  heroIMG: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  title: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}
export interface Social extends SanityBody {
  _type: string;
  title: string;
  url: string;
}
