/**
 * @param {import('vscode').ExtensionContext} context 
 */
module.exports.activate = async function activate(context) {
  (await import('./register-hello-world.mjs')).activate(context);
  (await import('./register-hello-tensor.mjs')).activate(context);
}
