import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left,
		10000
	);

	context.subscriptions.push(myStatusBarItem);

	updateStatusBar(context);
}

function updateStatusBar(context: vscode.ExtensionContext): void{
	myStatusBarItem.text = "Hello word";
	myStatusBarItem.tooltip = "hello word";
	myStatusBarItem.show();
}
