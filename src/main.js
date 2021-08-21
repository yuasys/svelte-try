import App from './App.svelte';
const sekai = {
	name: 'world',
	tel: '0123-456-789'
}
const app = new App({
	target: document.body,
	props: {
		name: sekai.name,
		tel: sekai.tel
	}
});

export default app;
