Array.from(document.querySelectorAll(".contact")).forEach((e) => {
  const imgs = Array.from(e.querySelectorAll("img"));
  new hoverEffect({
    parent: e,
    intensity: 0.3,
    image1: imgs[0].getAttribute("src"),
    image2: imgs[1].getAttribute("src"),
    displacementImage: "./images/displacement/6.jpg",
  });
});
