# FAST

Source for the [FAST project website](https://fast-ldm.github.io/).

**FAST: Flexibly Controllable Arbitrary Style Transfer via Latent Diffusion Models**

ACM Transactions on Multimedia Computing, Communications, and Applications, 21(9), Article 268, September 2025.

[Paper](https://doi.org/10.1145/3748655) · [PDF](https://dl.acm.org/doi/pdf/10.1145/3748655) · [Code](https://github.com/wd1511/FAST)

The previously linked [arXiv:2401.05870](https://arxiv.org/abs/2401.05870) is titled **HiCAST** (2024); the website labels it as earlier work separately from the published FAST article.

## Local preview

This is a static website with no build step or external runtime dependencies.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 in a browser. GitHub Pages serves `index.html` from this repository.

## Citation

Publication metadata is checked against the [ACM article](https://dl.acm.org/doi/10.1145/3748655) and [Crossref record](https://api.crossref.org/works/10.1145/3748655).

```bibtex
@article{wang2025fast,
  title = {{FAST}: Flexibly Controllable Arbitrary Style Transfer via Latent Diffusion Models},
  author = {Wang, Hanzhang and Wang, Haoran and Yu, Zhongrui and Sun, Mingming and Jiang, Junjun and Liu, Xianming and Zhai, Deming},
  journal = {ACM Transactions on Multimedia Computing, Communications, and Applications},
  volume = {21},
  number = {9},
  articleno = {268},
  numpages = {20},
  year = {2025},
  month = sep,
  publisher = {Association for Computing Machinery},
  doi = {10.1145/3748655},
  url = {https://doi.org/10.1145/3748655}
}
```

## Figures

The images in `static/images/fast/` are Figures 1, 2, 4, 6, 7, and 8 from the published FAST paper. See [the asset notes](static/images/fast/README.md) for their source URLs. They are research results, not generated illustrations.

## Website license

Website code is licensed under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/), with attribution to the original [Nerfies website](https://nerfies.github.io/). Paper figures retain their original rights.
