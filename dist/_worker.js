export default {
  async fetch(request, env) {
    try {
      // First, try to fetch the static asset requested by the user
      const response = await env.ASSETS.fetch(request);
      
      // If the static asset is found, return it
      if (response.status < 400) {
        return response;
      }
      
      // If it's a 404, intercept it and return our custom 404.html page
      if (response.status === 404) {
        const url = new URL(request.url);
        // Fetch the 404.html file from the static assets
        const notFoundResponse = await env.ASSETS.fetch(new Request(url.origin + "/404.html"));
        
        // Return the 404.html content, but strictly with a 404 HTTP status code
        return new Response(notFoundResponse.body, {
          status: 404,
          headers: notFoundResponse.headers
        });
      }
      
      // For any other error (like 500), just return the original response
      return response;
      
    } catch (e) {
      return new Response("An error occurred.", { status: 500 });
    }
  }
};
