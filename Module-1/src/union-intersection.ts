// Union type

type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

// Intersection type
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

const newDevelper: NoobDeveloper | JuniorDeveloper = {
  name: "Steve",
  expertise: "JavaScript",
  experience: 1,
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
};

const developer: NextLevelDeveloper = {
  name: "Steve Next",
  expertise: "JavaScript Next",
  experience: 2,
  leadershipExperience: 1,
};
