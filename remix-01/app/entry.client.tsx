import 'braid-design-system/reset'; // <-- Must be first
import { RemixBrowser } from '@remix-run/react';
import { BraidProvider } from 'braid-design-system';
import apacTheme from 'braid-design-system/themes/apac';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <BraidProvider theme={apacTheme}>
        <RemixBrowser />
      </BraidProvider>
    </StrictMode>,
  );
});
