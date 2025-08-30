export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Gothic nude nympho inserting a large carrot into her asshole penni training",
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
