function tasks(arr){
    return arr.join(" && ");
}

module.exports = {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
};