import { defineBoot } from '#q-app/wrappers';
import { PiniaColada } from '@pinia/colada';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default defineBoot(({ app }) => {
  app.use(PiniaColada);
});
