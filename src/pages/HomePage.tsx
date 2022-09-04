import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('Tim');
  console.log('🚀 ~ data', data);
  return <div>HomePage</div>;
}
