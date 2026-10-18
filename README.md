# Anything But Metric

An unnecessary conversion service: turn SI measurements into school buses, cheeseburgers, and other everyday objects, then download a novelty sign.

## Use it

1. Choose length, mass, area, volume, time, force, pressure, electric current, thermodynamic temperature, amount of substance, luminous intensity, or energy/work.
2. Enter a positive measurement and choose its unit/prefix.
3. Generate three random comparisons, or shuffle again.
4. Select a comparison, edit the heading/message, and choose a sign style. The original National park, Caution yellow, and Blueprint blue are joined by Roadside diner, Park postcard, Dramatic warning, and Bureau of guesswork. “Surprise me” picks another style without changing your measurement or custom text.
5. Download PNG or SVG, or print the sign.

The initial 100 m example deliberately starts with buses. Subsequent conversions use randomized reference selection with a guaranteed nearby comparison when available. The 172-reference library covers all 12 measurement types. References remain within the selected physical dimension. Very small or large ratios use scientific notation.

## Reference values and assumptions

`engine.mjs` contains the editable reference library. Each item has a reference value in coherent SI units, an explanatory assumption, and a primary-source link where applicable. Illustrative objects (bananas, cats, buses, and so on) are explicitly labeled assumptions, not universal dimensions. Every assumption is available in the website's reference library.

Force references use `F = m × 9.80665 m/s²`. Pressure references are ratios of magnitudes, with gauge/absolute references labeled; multiple tires do not physically add their pressures. Standard atmosphere, customary-unit factors, and standard gravity follow [NIST](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9). Other linked primary references include the [U.S. Mint](https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications), [U.S. Currency Education Program](https://www.uscurrency.gov/denominations/1), [NFL field dimensions](https://operations.nfl.com/media/tvglh0mx/2023-rulebook_final.pdf), and [NASA lunar distance](https://spaceplace.nasa.gov/moon-distance/en/).

## Scale coverage

Every offered unit/prefix has at least one reference within a factor of ten of **one unit at that scale**. The same guarantee holds continuously between the smallest and largest offered scales, not just at prefix endpoints. `coverageFor()` checks endpoints and the exact geometric midpoint of every adjacent reference gap, where the worst ratio occurs. Examples: one nanometer through one kilometer for length; one picoampere through one megaampere for current.

Each batch reserves one of its three positions for a nearby reference (a ratio from 0.1 to 10), randomizing among eligible objects. Shuffling can change the other comparisons while retaining coverage. Measurements beyond the covered range are still converted, using the nearest available reference plus two alternatives. There is no claim of close references at arbitrarily small or large magnitudes.

## Additional physical quantities

- **Current:** picoamperes through megaamperes; device-current examples state operating assumptions. Transient lightning peaks are labeled separately from continuous loads.
- **Temperature:** nanokelvin through megakelvin; ratios use absolute kelvin temperatures. Zero is allowed; negative kelvin is rejected for this thermodynamic-temperature model. Fahrenheit/Celsius reference points are converted to kelvin before ratios; ratios do not imply perceived hotness or additive heating.
- **Amount of substance:** picomoles through megamoles. One mole counts exactly 6.02214076 × 10²³ specified entities. Every reference names its molecules or formula units. Water models assume density 1 g/mL and molar mass 18.01528 g/mol; sucrose 342.2965 g/mol; NaCl 58.44277 g/mol. These are illustrative compositional models, not statements that equal moles have equal mass.
- **Luminous intensity:** microcandela through megacandela. References specify viewing direction or an explicit beam model. Uniform light uses I = Φ/(4π); conical beams use I = Φ/[2π(1−cos(half-angle))]. Lumens and candela are distinct quantities.
- **Energy/work:** picojoules through gigajoules. Mechanical examples use mgh or ½mv²; batteries use V × Ah × 3,600; a thermochemical food Calorie is 4,184 J. Each comparison states the event or stored-energy model.

Definitions and constants follow the [BIPM SI defining constants](https://www.bipm.org/en/measurement-units/si-defining-constants), [kelvin definition](https://www.bipm.org/en/si-base-units/kelvin), [mole definition](https://www.bipm.org/en/si-base-units/mole), and [candela definition](https://www.bipm.org/en/si-base-units/candela). Astronomical temperature examples reference [NASA](https://spdf.gsfc.nasa.gov/pub/documents/old/websites/sunearthday.nasa.gov/2008/TTT/58_hotcorona.php). Other device and object values are explicitly illustrative assumptions.

The menu uses the shorter labels **Current, Temperature, Amount, Brightness, and Energy**. The explanatory notes retain the exact physical meanings, including amount of substance and luminous intensity.

## Emoji signs

The new sign personalities add checkerboard diner trim, a sunset postcard scene, dramatic hazard stripes, or mock bureau stamps. All seven styles keep editable headings, emoji objects, conversions, and download formats. The SVG renderer in `signs.mjs` grows with the text so that long comparisons remain readable.

Each sign uses the selected reference object's colorful emoji artwork, matching its comparison card. Artwork is embedded directly as SVG data in both the preview and downloaded SVG/PNG, so exports need no fonts, external image server, or internet connection. Artwork attribution appears on the sign, on the website, and here.

Emoji artwork: **Twemoji v14.0.2**, copyright Twitter, Inc and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). [Original artwork and contributors](https://github.com/twitter/twemoji/tree/v14.0.2); full license in `EMOJI-LICENSE.txt`. Artwork is included unmodified and scaled to fit the signs. `tools/sync-emoji.py` reproducibly vendors only the emoji used by the catalog into `assets/emoji-art.mjs`. If new objects introduce new emoji, run that helper with Python 3 and Node.js before testing.

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

Tests cover SI scale factors, dimensional arithmetic, force/pressure assumptions, new-quantity models, absolute-temperature validation, exact scale-coverage extrema, repeated random shuffling with guaranteed scale matches, complete embedded emoji artwork, scientific notation, and text escaping. The GitHub Actions workflow runs these tests for pushes and pull requests.

## GitHub Pages

Publish the `main` branch, repository root, through Settings → Pages → Deploy from a branch. The `.nojekyll` file lets Pages serve the static files directly. Relative asset URLs support project-page hosting at `/anythingbutmetric/` and custom-domain hosting.

To add reference objects, edit `dimensions` in `engine.mjs` or the additions/new quantities in `library.mjs`. Keep values in the dimension's base unit; include a clear assumption and primary-source URL where available.
