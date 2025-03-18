import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';

const QUOTES = [
  // Using current Testimonials as placeholders
  {
    quote:
      '"We\'ve relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Data Grid are so worth it. Every other library I try has 80% of what I\'m looking for when it comes to complex use cases, Material UI has it all under one roof which is a huge help for our small team."',
    profile: {
      avatarSrc: 'https://avatars.githubusercontent.com/u/21114044?s=58',
      avatarSrcSet: 'https://avatars.githubusercontent.com/u/21114044?s=116 2x',
      name: 'Kyle Gill',
      role: 'Engineer & Designer',
      company: (
        <img
          src="/static/branding/companies/particl-dark.svg"
          width="90"
          height="16"
          alt="Particl logo"
          loading="lazy"
        />
      ),
      gridArea: 'one',
    },
  },
  {
    quote:
      '"Material UI looks great and lets us deliver fast, thanks to their solid API design and documentation - it\'s refreshing to use a component library where you get everything you need from their site rather than Stack Overflow. We think the upcoming version, with extra themes and customizability, will make Material UI even more of a game changer. We\'re extremely grateful to the team for the time and effort spent maintaining the project."',
    profile: {
      avatarSrc: 'https://avatars.githubusercontent.com/u/197016?s=58',
      avatarSrcSet: 'https://avatars.githubusercontent.com/u/197016?s=116 2x',
      name: 'Jean-Laurent de Morlhon',
      role: 'VP of Engineering',
      company: (
        <img
          src="/static/branding/companies/docker-blue.svg"
          width="81"
          height="21"
          alt="Docker logo"
          loading="lazy"
        />
      ),
      gridArea: 'two',
    },
  },
  {
    quote:
      '"Material UI offers a wide variety of high quality components that have allowed us to ship features faster. It has been used by more than a hundred engineers in our organization. What\'s more, Material UI\'s well architected customization system has allowed us to differentiate ourselves in the marketplace."',
    profile: {
      avatarSrc: 'https://avatars.githubusercontent.com/u/28296253?s=58',
      avatarSrcSet: 'https://avatars.githubusercontent.com/u/28296253?s=116 2x',
      name: 'Joona Rahko',
      role: 'Staff Software Engineer',
      company: (
        <img
          src="/static/branding/companies/unity-blue.svg"
          width="56"
          height="21"
          alt="Unity logo"
          loading="lazy"
        />
      ),
      gridArea: 'three',
    },
  },
  {
    quote:
      '"After much research on React component libraries, we decided to ditch our in-house library for Material UI, using its powerful customization system to implement our Design System. This simple move did a rare thing in engineering: it lowered our maintenance costs while enhancing both developer and customer experience. All of this was done without sacrificing the organization\'s branding and visual identity."',
    profile: {
      avatarSrc: 'https://avatars.githubusercontent.com/u/732422?s=58',
      avatarSrcSet: 'https://avatars.githubusercontent.com/u/732422?s=116 2x',
      name: 'Gustavo de Paula',
      role: 'Specialist Software Engineer',
      company: (
        <img
          src="/static/branding/companies/loggi-blue.svg"
          width="61"
          height="20"
          alt="Loggi logo"
          loading="lazy"
        />
      ),
      gridArea: 'four',
    },
  },
];

function Data({
  quote,
  profile,
}: {
  quote: string;
  profile: {
    avatarSrc: string;
    avatarSrcSet: string;
    name: string;
    role: string;
    gridArea: string;
    company?: React.ReactElement<unknown>;
  };
}) {
  return (
    <Box
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#FFF',
      }}
    >
      <Box sx={{ ml: '0 ' }}>{profile.company}</Box>
      <Typography variant="body1" sx={{ mb: 2, color: 'grey.200' }}>
        {quote}
      </Typography>
      <Box sx={{ ml: 'auto ' }}>
        <Avatar
          src={profile.avatarSrc}
          srcSet={profile.avatarSrcSet}
          alt={`${profile.name}'s profile picture`}
        />
      </Box>
      <div>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {profile.name}
        </Typography>
        <Typography variant="body2" sx={{ mt: 0 }}>
          {profile.role}
        </Typography>
      </div>
    </Box>
  );
}

export default function CustomerQuotes() {
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        gap: 0,
        gridTemplateColumns: '3fr 3fr 3fr',
        gridTemplateRows: '50% 50%',
        gridTemplateAreas: `
          'one two four'
          'one three four'
        `,
        backgroundColor: 'rgba(255,255,255,0.01)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      })}
    >
      {QUOTES.map((item) => (
        <Grid gridArea={item.profile.gridArea} key={item.profile.name} size={{ xs: 12, sm: 6 }}>
          <Data {...item} />
        </Grid>
      ))}
    </Box>
  );
}
