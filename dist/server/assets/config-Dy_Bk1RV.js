var difficultyLevel = /* @__PURE__ */ ((difficultyLevel2) => {
  difficultyLevel2["EASY"] = "EASY";
  difficultyLevel2["MEDIUM"] = "MEDIUM";
  difficultyLevel2["HARD"] = "HARD";
  return difficultyLevel2;
})(difficultyLevel || {});
const difficultyConfig = {
  EASY: {
    color: "bg-green-100 text-green-800 border-green-200",
    label: "Easy"
  },
  MEDIUM: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    label: "Medium"
  },
  HARD: {
    color: "bg-red-100 text-red-800 border-red-200",
    label: "Hard"
  }
};
export {
  difficultyLevel as a,
  difficultyConfig as d
};
