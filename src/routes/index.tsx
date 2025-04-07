import { Landing } from '@/pages';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Landing,
});

/*


export const Route = createFileRoute('/')({
  component: RootComponent,
});

function RootComponent() {
  return <Landing />;
}



*/
