import { config } from "~/config";
import { useMetadata } from "~/hooks/useMetadata";
import { api } from "~/utils/api";
import { type Application } from "~/features/applications/types";
import { useFilter } from "~/features/filter/hooks/useFilter";
import { type Filter } from "~/features/filter/types";

export function useProjectById(id: string) {
  const query = api.projects.get.useQuery(
    { ids: [id] },
    { enabled: Boolean(id) },
  );

  return { ...query, data: query.data?.[0] };
}

export function useProjectsById(ids: string[]) {
  return api.projects.get.useQuery({ ids }, { enabled: Boolean(ids.length) });
}

const seed = 0;
// const seed = Math.random();
export function useSearchProjects(filterOverride?: Partial<Filter>) {
  const { data: filter } = useFilter("projects");
  return api.projects.search.useInfiniteQuery(
    { limit: config.pageSize, seed, ...filter, ...filterOverride },
    {
      getNextPageParam: (_, pages) => pages.length,
    },
  );
}

export function useProjectMetadata(metadataPtr?: string) {
  return useMetadata<Application>(metadataPtr);
}

export function useProjectCount() {
  return api.projects.count.useQuery();
}
