export const metadata = {
  title: "App Router",
};

import React from 'react';
import { Select } from '@mantine/core';
export default function Page() {
  return (
    <div>
      <h1>Welcome to next.js</h1>
      <p>
        The app router is a simple router that allows you to create a single page application (SPA) with multiple pages.
      </p>
      <p>
        The app router is a simple router that allows you to create a single page application (SPA) with multiple pages.
      </p>
      <p>
        The app router is a simple router that allows you to create a single page application (SPA) with multiple pages.
      </p>
      <p>
        The app router is a simple router that allows you to create a single page application (SPA) with multiple pages.
      </p>
      <p>
        The app router is a simple router that allows you to create a single page application (SPA) with multiple pages.
      </p>
      <p>
        The app router is a simple router that allows you to create a single page application (SPA) with multiple pages.
      </p>
      <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />

    </div>
  )
}
