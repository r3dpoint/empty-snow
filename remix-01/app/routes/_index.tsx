import type { MetaFunction } from '@remix-run/node';
import { IconAdd, List, MonthPicker } from 'braid-design-system';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome!</h1>
      <List>
        <IconAdd />
      </List>
      <MonthPicker />
    </div>
  );
}
