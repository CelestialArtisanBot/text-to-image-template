export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Gothic nude model cyberpunk prostitut
wearing nothing except for gloves, boot, and makeup 
breasts exposed fully 
no bra or panties on",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
