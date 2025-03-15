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

// enum
enum Level {
  Junior = "Junior",
  mid = "Mid",
  Senior = "Senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};

const developer: NextLevelDeveloper = {
  name: "Steve Next",
  expertise: "JavaScript Next",
  experience: 2,
  leadershipExperience: 1,
  level: Level.Senior,
};
