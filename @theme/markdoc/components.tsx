// Learn how to build your own Markdoc tags: https://redocly.com/docs/realm/extend/tutorials/build-markdoc-tags
import * as React from 'react';
import styled from 'styled-components';

export function Split({ children }: { children: React.ReactNode[] }) {
  const childs = React.Children.toArray(children);
  const hrIndex = childs.findIndex(child => React.isValidElement(child) && child.type === 'hr');

  const left = hrIndex === -1 ? childs : childs.slice(0, hrIndex);
  const right = hrIndex === -1 ? [] : childs.slice(hrIndex + 1);

  return (
    <SplitWrapper>
      <div>{left}</div>
      <div>{right}</div>
    </SplitWrapper>
  );
}

const SplitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: var(--spacing-xl);

  & > h1:first-child, & > h2:first-child, & > h3:first-child {
    margin-top: 0;
  }

  & > div {
    flex: 1;
    min-width: 0;
    & > h1:first-child, & > h2:first-child, & > h3:first-child {
      margin-top: 0;
    }
  }

  & > div:last-child {
    padding: var(--spacing-sm) var(--spacing-xl);
    border-left: 1px solid var(--border-color-primary);
  }

  /* hotfix, remove when fixed in the theme */
  & div:has(> [data-component-name='JsonViewer/JsonViewer']) {
    padding: 0;
  }
  .openapi-wrap:first-child {
    margin-top: 0;
  }
`;
