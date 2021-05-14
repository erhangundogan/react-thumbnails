react-thumbnails
================

[![License][license-src]][license-href]

![Screenshot][ss-href]

React components to show thumbnails with various on-screen options.

[live example][online-example-href]

# Install

```bash
npm install react-thumbnails
```

# Develop

```bash
git clone https://github.com/erhangundogan/react-thumbnails
cd react-thumbnails
npm install
npm run watch
# browse http://localhost:5000
```
There are optional components such as `URLEditor` and `ErrorProvider`.
Please see [example][examples-href] below. Check out [type definitions][types-href] for further options.

```jsx
<ImagesProvider
  options={{ maxImagesCount: 9 }}
  urls={[
    'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=634&q=80',
    'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=800&q=80',
    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=658&q=80'
  ]}
>
  <URLEditor />
  <ThumbnailOptionsProvider
    showOptions={new Set(['autoSize', 'size', 'shape', 'shadow', 'border', 'showUrl'])}
    defaults={{ size: 'medium', shape: 'circle', shadow: true, border: true }}
  >
    <Thumbnails />
  </ThumbnailOptionsProvider>
</ImagesProvider>
```

[license-src]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[license-href]: LICENSE.md
[ss-href]: https://imagemarker.s3.eu-central-1.amazonaws.com/react-thumbnails/react-thumbnails.png
[examples-href]: src/examples/index.tsx
[types-href]: src/providers/ImagesProvider/ImageProvider.types.ts
[online-example-href]: https://codesandbox.io/s/react-thumbnails-demo-stqyp?file=/src/App.tsx
