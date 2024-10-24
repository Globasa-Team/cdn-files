// Respond to OPTIONS method
export const onRequestOptions: PagesFunction = async () => {
	return new Response(null, {
		status: 204,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Max-Age': '86400',
		},
	});
};

export const onRequest: PagesFunction = async ({ next }) => {
	const response = await next();
	// Set CORS to all /api responses
	response.headers.set('Access-Control-Allow-Origin', '*');
	response.headers.set('Access-Control-Max-Age', '86400');

	// URIPorts.com reporting
	response.headers.set('Report-To', '{"group":"default","max_age":10886400,"endpoints":[{"url":"https://f3krgt39.uriports.com/reports"}],"include_subdomains":true}');
	response.headers.set('Reporting-Endpoints', 'default="https://f3krgt39.uriports.com/reports"');
	response.headers.set('NEL', '{"report_to":"default","max_age":2592000,"include_subdomains":true,"failure_fraction":1.0}');
	response.headers.set('Content-Security-Policy-Report-Only', "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-ancestors 'self'; report-uri https://f3krgt39.uriports.com/reports/report; report-to default"');
	response.headers.set('Permissions-Policy-Report-Only', 'microphone=();report-to=default, camera=(self "https://cdn.globasa.net");report-to=default, fullscreen=*;report-to=default, payment=self;report-to=default');
	response.headers.set('Cross-Origin-Embedder-Policy-Report-Only', 'require-corp; report-to="default"');
	response.headers.set('Cross-Origin-Opener-Policy-Report-Only', 'same-origin; report-to="default"');

	return response;
};
