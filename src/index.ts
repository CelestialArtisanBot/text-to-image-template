export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "xxx nude,skinny soft athletic figure pawg, thin mid section body, busty, soft thick hips and big bubble butt smoothly formed. fantasy horror creature/folklore/criptid/sexy temptress.full color, realistic, 3D, sex",
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
