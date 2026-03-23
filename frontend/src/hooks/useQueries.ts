// This file is intentionally minimal as the backend only provides blob storage
// All content for the static pages is hardcoded in the components
import { useActor } from './useActor';

// Placeholder hook structure for future backend integration
export function useBackendReady() {
  const { actor, isFetching } = useActor();
  return { isReady: !!actor && !isFetching };
}
