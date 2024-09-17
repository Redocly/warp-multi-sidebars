// Learn how to build your own Markdoc tags: https://redocly.com/docs/realm/extend/tutorials/build-markdoc-tags
import type { Schema } from '@markdoc/markdoc';

export const tags: Record<string, Schema> = {
  'split': {
    render: 'Split',
  },
}