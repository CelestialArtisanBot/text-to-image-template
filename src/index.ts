export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "xxx no clothes on,thin soft athletic figure pawg, thin muscular mid section body, busty, thick hips and big bubble butt. fantasy horror creature/folklore/criptid/sexy temptress.
full color, realistic, 3D, photoshoot",
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
