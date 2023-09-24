import {add} from '#customImport';
import {vscode} from '#vscode';
/**
 * This method is called when your extension is activated, which
 * happens the very first time the command is executed.
 * @param {import('vscode').ExtensionContext} context - The context.
 */
export function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('> register extension.helloWorld');
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage(`Hello World! add(10, 20) is ${add(10, 20)}`);
  });
  context.subscriptions.push(disposable);
}
