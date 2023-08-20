const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	title: "VSportfolio",
	createNote: (data) => ipcRenderer.invoke('create-file', data)
})