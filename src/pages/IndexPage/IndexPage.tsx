import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

import { SocialPlatform } from '@/yt/SocialPlatform';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <SocialPlatform/>
    </Page>
  );
};
