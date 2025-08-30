export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "xxx curvy figure pawg, thin muscular mid section body, busty, thick hips and big bubble butt. fantasy horror creature/folklore/criptid/sex temptress..",
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
