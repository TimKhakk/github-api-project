import { IRepo } from '../types/github.response.api';

interface Props {
  repo: IRepo;
}

export function RepoCard({ repo }: Props) {
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>

        <p className="text-sm flex gap-2">
          Forks: <span className="font-bold">{repo.fork}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm">{repo?.description}</p>
      </a>
    </div>
  );
}
