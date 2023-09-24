import {Tensor} from '@xenova/transformers';
import {vscode} from '#vscode';
/**
 * This method is called when your extension is activated, which
 * happens the very first time the command is executed.
 * @param {import('vscode').ExtensionContext} context - The context.
 */
export function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('> register extension.helloTensor');
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('extension.helloTensor', () => {
    const tensor = new Tensor("float32", [1, 2, 3, 4], [2, 2]);
    vscode.window.showInformationMessage('Hello Tensor! ' + tensor.data);
  });
  context.subscriptions.push(disposable);
}
