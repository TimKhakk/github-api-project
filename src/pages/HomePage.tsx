import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('Tim');
  return <div>HomePage</div>;
}
