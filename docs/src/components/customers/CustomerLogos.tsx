import * as React from 'react';
import dynamic from 'next/dynamic';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Section from 'docs/src/layouts/Section';
import Grid from '@mui/material/Grid2';
import {
  CORE_CUSTOMERS,
  ADVANCED_CUSTOMERS,
  DESIGNKITS_CUSTOMERS,
  TEMPLATES_CUSTOMERS,
} from './LogosGrid';

const LogosGrid = dynamic(() => import('./LogosGrid'));

export default function CustomersLogos({
  companies,
}: {
  companies:
    | typeof CORE_CUSTOMERS
    | typeof ADVANCED_CUSTOMERS
    | typeof DESIGNKITS_CUSTOMERS
    | typeof TEMPLATES_CUSTOMERS;
}) {
  const [clicked, setClicked] = React.useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <Section>
      <Stack direction="row" sx={{ display: 'flex', gap: 1.5 }}>
        <Chip label="Material UI" onClick={handleClick} color={clicked ? 'primary' : 'secondary'} />
        <Chip label="Base UI" onClick={handleClick} color={clicked ? 'primary' : 'secondary'} />
        <Chip label="Joy UI" onClick={handleClick} color={clicked ? 'primary' : 'secondary'} />
      </Stack>
      <Grid>
        <LogosGrid data={companies} />
      </Grid>
    </Section>
  );
}
