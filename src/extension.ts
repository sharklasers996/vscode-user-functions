import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let jumpDown5 = vscode.commands.registerCommand('userFunctions.jumpDown5', () => {
		for (let i = 0; i < 5; i++) {
			vscode.commands.executeCommand('emacs.cursorDown');
		}
	});

	context.subscriptions.push(jumpDown5);

	let jumpUp5 = vscode.commands.registerCommand('userFunctions.jumpUp5', () => {
		for (let i = 0; i < 5; i++) {
			vscode.commands.executeCommand('emacs.cursorUp');
		}
	});

	context.subscriptions.push(jumpUp5);

	let scrollUp = vscode.commands.registerCommand('userFunctions.scrollUp', () => {
		for (let i = 0; i < 5; i++) {
			vscode.commands.executeCommand('editorScroll', { to: 'up', by: 'line' });
		}
	});

	context.subscriptions.push(scrollUp);

	let scrollDown = vscode.commands.registerCommand('userFunctions.scrollDown', () => {
		for (let i = 0; i < 5; i++) {
			vscode.commands.executeCommand('editorScroll', { to: 'down', by: 'line' });
		}
	});

	context.subscriptions.push(scrollDown);
}

export function deactivate() { }
