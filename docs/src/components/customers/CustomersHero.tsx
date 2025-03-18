import Section from 'docs/src/layouts/Section';
import * as React from 'react';
import Typography from 'docs/src/pages/premium-themes/onepirate/modules/components/Typography';
import SectionHeadline from '../typography/SectionHeadline';
import GradientText from '../typography/GradientText';

export default function CustomersHero() {
  return (
    <Section cozy noPaddingBottom>
      <SectionHeadline
        alwaysCenter
        overline="Customers"
        title={
          <Typography variant="h1" component="h1">
            Meet the
            <GradientText>&nbsp;teams</GradientText>
            <br />
            powered by
            <GradientText>&nbsp;MUI</GradientText>
          </Typography>
        }
        description="See how MUI's comprehensive suite of UI tools helps them ship better and faster"
      />
    </Section>
  );
}
