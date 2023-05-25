export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","tailwind.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.68dab9ee.js","app":"_app/immutable/entry/app.a3382741.js","imports":["_app/immutable/entry/start.68dab9ee.js","_app/immutable/chunks/index.c9c1f16e.js","_app/immutable/chunks/singletons.5c868114.js","_app/immutable/entry/app.a3382741.js","_app/immutable/chunks/index.c9c1f16e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create",
				pattern: /^\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};