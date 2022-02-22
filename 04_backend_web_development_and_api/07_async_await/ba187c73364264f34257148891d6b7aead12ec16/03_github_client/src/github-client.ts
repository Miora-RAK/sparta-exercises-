import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = async (nickname: string): Promise<string> => {
  // Code here

  const repo = await fetch(`https://api.github.com/users/${nickname}`);
  const user = await repo.json();
  if (user.message === "Not Found") {
    throw new Error("The User doesn't exist");
  } else {
    const result = await user.repos_url;
    return result;
  }
};

export const getRepos = async (url: string) => {
  // Code here
  const repo = await fetch(`${url}`);
  const repoList = await repo.json();
  console.log(repoList);
  return repoList;
};

export const printRepos = (repoArray: Repo[]) => {
  // Code here
  for (let i = 0; i < repoArray.length; i++) {
    console.log(`${i + 1} - ${repoArray[i].name}`);
  }
  return repoArray;
};

export const printRepository = (repository: Repo) => {
  // Code here
  console.log(
    `name: ${repository.name}\ndescription:${repository.description}\nsubscribers:${repository.subscribers_count}\nstars:${repository.stargazers_count}\nlanguage:${repository.language}\nrepo_url:${repository.url}`,
  );
};

export const getProjectInformations = async (url: string) => {
  // Code here
  const repo = await fetch(`${url}`);
  const repoData = await repo.json();
  console.log(repoData);
  return repoData;
};
