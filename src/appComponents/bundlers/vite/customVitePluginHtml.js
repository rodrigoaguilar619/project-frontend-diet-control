import { createHtmlPlugin } from 'vite-plugin-html';

function customHtmlPluginVite(userOptions = {}) {

  const originalPlugin = createHtmlPlugin(userOptions);

  let newPlugin = originalPlugin.map((plugin) => ({
    ...plugin,
    name: 'custom-vite-plugin-html',
    async closeBundle() {
        console.log('customHtmlPluginVite Skipping file move and cleanup in closeBundle');
      }
  }));

  return newPlugin;
}

export default customHtmlPluginVite;
