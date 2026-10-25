# MisterBit landing pages demo

Four Hebrew landing pages, exported as a static website. Forms validate locally and display a demo confirmation only. They do not send or store personal details.

## Publish from your own GitHub session

1. Create a public, empty repository named **misterbit-demo** in the `mikaridley` account.
2. Upload the extracted contents of this source archive to the repository root, including `.github/workflows/pages.yml`. Do not upload the ZIP file itself.
3. Under **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. Under **Actions → Publish GitHub Pages demo**, choose **Run workflow** if a deployment has not started automatically.
5. Once the workflow succeeds, GitHub provides the live URL.

Expected address after successful publication: `https://mikaridley.github.io/misterbit-demo/`.
This address is not live until the deployment succeeds.

Direct program URLs end with `/trainees/`, `/trial/`, and `/experienced/`.

The repository name must match `misterbit-demo`; changing it requires updating the base path and asset paths.

## Local build

Node.js 22 or later:

```sh
npm install
npm run build
```

The `out` directory contains the deployable static website. No server, CRM, API keys, or database are required.
