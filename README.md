# Anything But Metric

An unnecessary conversion service: turn SI measurements into school buses, cheeseburgers, and other everyday objects, then download a novelty sign.

## Use it

1. Choose length, mass, area, volume, time, force, or pressure.
2. Enter a positive measurement and choose its unit/prefix.
3. Generate three random comparisons, or shuffle again.
4. Select a comparison, edit the heading/message, and choose a sign style.
5. Download PNG or SVG, or print the sign.

The initial 100 m example deliberately starts with buses. Subsequent conversions use randomized, scale-weighted reference selection. References remain within the selected physical dimension. Very small or large ratios use scientific notation.

## Reference values and assumptions

`engine.mjs` contains the editable reference library. Each item has a reference value in coherent SI units, an explanatory assumption, and a primary-source link where applicable. Illustrative objects (bananas, cats, buses, and so on) are explicitly labeled assumptions, not universal dimensions. Every assumption is available in the website's reference library.

Force references use `F = m × 9.80665 m/s²`. Pressure references are ratios of magnitudes, with gauge/absolute references labeled; multiple tires do not physically add their pressures. Standard atmosphere, customary-unit factors, and standard gravity follow [NIST](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9). Other linked primary references include the [U.S. Mint](https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications), [U.S. Currency Education Program](https://www.uscurrency.gov/denominations/1), [NFL field dimensions](https://operations.nfl.com/media/tvglh0mx/2023-rulebook_final.pdf), and [NASA lunar distance](https://spaceplace.nasa.gov/moon-distance/en/).

The site supports SI units and selected SI-compatible units (liters and prefixed liters). Display values use three significant figures; calculations retain full numeric precision. Signs include the approximate input measurement and a novelty label. These signs are entertainment, not official safety signage.

## Local preview

No build step, API key, server backend, or third-party runtime dependencies are required. All processing and image generation happen in the browser.

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`. Use a web server: browser security rules can block JavaScript modules when opening an HTML file directly.

## Checks

With Node.js 20 or newer:

```sh
npm test
```

Tests cover SI scale factors, dimensional arithmetic, force/pressure assumptions, invalid inputs, distinct comparisons, scientific notation, and text escaping. The GitHub Actions workflow runs these tests for pushes and pull requests.

## GitHub Pages

Publish the `main` branch, repository root, through Settings → Pages → Deploy from a branch. The `.nojekyll` file lets Pages serve the static files directly. Relative asset URLs support project-page hosting at `/anythingbutmetric/` and custom-domain hosting.

To add reference objects, edit `dimensions` in `engine.mjs`. Keep values in the dimension's base unit; include a clear assumption and primary-source URL where available.
