export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "nude pawg thot ho thick & thin backshot stripper hooker, any ethnicity.
Curvy body types are characterized by a fuller figure, often with a more defined hip line and a narrower waist. There are various shapes associated with curvy body types, including ¹:
- *Mango Body Type*: Full hips and thighs, with a curved-V shape at the bottom.
- *Spoon Body Shape*: Well-defined waist, curvy hips, and a figure-eight shape, with nearly equal measurements for hips and chest.
- *Pear Body Shape*: Larger hips and thighs compared to the bust.
- *Curvy Hourglass Figure*: Well-balanced shoulders and hips, full bust size, and a narrow waistline.
- *Strawberry Body Type*: Not specifically defined, but implies a curvy figure with a focus on the upper body.

Some common characteristics of curvy body types include ²:
- *Hourglass Variations*:
    - *Top Hourglass*: Broader shoulders, smaller hips, and a bust size ranging from cup A to B.
    - *Full Hourglass*: Well-balanced shoulders and hips, full bust size, and a narrow waistline.
    - *Bottom Hourglass*: Wider hips and thicker thighs, slender and shapely legs.

In terms of measurements, curvy body types often have ¹:
- *Hip Measurements*: 37 inches or more.
- *Bust Measurements*: Varied, but often larger in proportion to the waist.
- *Waist Measurements*: Narrower compared to the hips and bust.

It's essential to note that every body is unique, and these descriptions are general guidelines. Embracing and celebrating individual body types, regardless of shape or size, is crucial for self-acceptance and confidence.",
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
