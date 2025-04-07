import { Step2 } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/__auth/itinerary/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Step2 />;
}
