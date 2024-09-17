// Learn more about Realm templates: https://redocly.com/docs/realm/style/how-to/custom-page-templates
import React from 'react';
import styled from 'styled-components';

import { Markdown } from '@redocly/theme/components/Markdown/Markdown';

export default function StepByStepLayout({ pageProps, children }) {
  return (
    <Wrapper>
      <Markdown>{children}</Markdown>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--spacing-xl)
`;
