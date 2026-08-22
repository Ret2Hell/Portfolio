# Project images

Each project has its own folder:

```text
projects/
├── i18n-mcp/
├── tanilytics/
└── e-sihha/
```

## Replacing the card image

Replace `cover.jpg` in the project folder. Keeping the same filename means no code change is needed.

## Adding modal gallery images

1. Drop images into the relevant folder, for example:

   ```text
   public/assets/projects/i18n-mcp/screenshot-1.jpg
   public/assets/projects/i18n-mcp/screenshot-2.jpg
   ```

2. Add their public paths to that project's `images` array in `src/constants/index.js`:

   ```js
   images: [
     "/assets/projects/i18n-mcp/cover.jpg",
     "/assets/projects/i18n-mcp/screenshot-1.jpg",
     "/assets/projects/i18n-mcp/screenshot-2.jpg",
   ],
   ```

JPG, PNG, and WebP files are supported.
