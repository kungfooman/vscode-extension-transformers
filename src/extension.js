/**
 * @param {import('vscode').ExtensionContext} context - The context.
 */
async function activate(context) {
  (await import('./register-hello-world.mjs')).activate(context);
  (await import('./register-hello-tensor.mjs')).activate(context);
}
module.exports.activate = activate;
