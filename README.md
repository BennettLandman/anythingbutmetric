# Anything But Metric

The opening tagline randomly selects one of 146 examples on each page load: two
for every measurement category, plus two for Celsius. Each starts with a tidy,
even SI amount and calculates the relatable equivalent from the same reference
catalog used by the converter. Converting or shuffling does not change it.

An unnecessary conversion service: turn SI measurements into school buses, cheeseburgers, and other everyday objects, then download a novelty sign.

## Use it

1. Choose a measurement from the grouped menu: motion, matter, heat, electricity, magnetism, light, or radiation/sunshine.
2. Enter a measurement and choose its unit/prefix. Magnitudes are positive; temperature additionally accepts zero kelvin and negative Celsius values down to absolute zero.
3. Generate three random comparisons, or shuffle again.
4. Select a comparison, edit the heading/message, and choose a sign style. The original National park, Caution yellow, and Blueprint blue are joined by Roadside diner, Park postcard, Dramatic warning, and Bureau of guesswork. “Surprise me” picks another style without changing your measurement or custom text.
5. Download PNG or SVG, or print the sign.

The initial 100 m example deliberately starts with buses. Subsequent conversions use randomized reference selection with a guaranteed nearby comparison when available. The 551-reference library covers 72 distinct measurement categories and 268 offered unit/scale choices. References remain within the selected physical dimension. Very small or large ratios use scientific notation.

## Reference values and assumptions

`engine.mjs` contains the editable reference library. Each item has a reference value in coherent SI units, an explanatory assumption, and a primary-source link where applicable. Illustrative objects (bananas, cats, buses, and so on) are explicitly labeled assumptions, not universal dimensions. Every assumption is available in the website's reference library.

Modern U.S. quarter coins are available in the random pool for mass (5.670 g per coin), weight under standard gravity, and length: 24.26 mm per coin placed edge to edge, or 1.75 mm per coin stacked flat. Coin specifications come from the U.S. Mint reference linked below.

T. rex comparisons use an illustrative 12 m head-to-tail length and 8,000 kg adult mass, with body weight computed under standard gravity. References link to the American Museum of Natural History; fossil reconstructions and mass estimates vary. The 🦖 emoji appears on cards and exported signs.

Force references use `F = m × 9.80665 m/s²`. Pressure references are ratios of magnitudes, with gauge/absolute references labeled; multiple tires do not physically add their pressures. Standard atmosphere, customary-unit factors, and standard gravity follow [NIST](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9). Other linked primary references include the [U.S. Mint](https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications), [U.S. Currency Education Program](https://www.uscurrency.gov/denominations/1), [NFL field dimensions](https://operations.nfl.com/media/tvglh0mx/2023-rulebook_final.pdf), and [NASA lunar distance](https://spaceplace.nasa.gov/moon-distance/en/).

## Scale coverage

Every offered unit/prefix has at least one reference within a factor of ten of **one unit at that scale**. For Celsius, the reference check follows conversion to absolute kelvin. The same guarantee holds continuously between the smallest and largest offered multiplicative scales, not just at prefix endpoints. `coverageFor()` checks endpoints and the exact geometric midpoint of every adjacent reference gap, where the worst ratio occurs. Examples: one nanometer through one kilometer for length; one picoampere through one megaampere for current.

Each batch reserves one of its three positions for a nearby reference (a ratio from 0.1 to 10), randomizing among eligible objects. Shuffling can change the other comparisons while retaining coverage. Measurements beyond the covered range are still converted, using the nearest available reference plus two alternatives. There is no claim of close references at arbitrarily small or large magnitudes.

## Complete table coverage

`unit-coverage.mjs` explicitly maps the seven base units, all 22 specially named derived units, and every row in both supplied compound-unit tables to comparison pools. The website exposes this same manifest under **Which SI units are covered?** Automated tests fail on missing rows, missing quantities, unsupported symbols, scale gaps, or missing emoji.

The expanded catalog is split into `named-units.mjs`, `derived-units.mjs`, and `radiation.mjs`, using the reference-model helpers in `catalog-helpers.mjs`. Most new comparisons are explicitly hypothetical or illustrative physical models with their numerical assumptions and formulas stated. They are not universal product ratings, clinical measurements, or material-property guarantees. Prefix choices cover practical reference ranges; arbitrary values outside them still convert using the closest available examples.

Quantities with identical dimensions have distinct pools where their meanings differ: torque versus energy, entropy versus heat capacity, bulk density versus solute concentration, frequency versus radioactive activity, and the separate radiation and photometric/radiometric quantities. Speed and angular quantities use positive magnitudes rather than vector direction. Lens strength uses positive focusing-power examples in air. Entropy examples specify positive changes and reversible model paths rather than absolute entropy.

Temperature accepts Celsius with **K = °C + 273.15**. Zero and negative Celsius therefore work; absolute temperatures below 0 K are rejected. Celsius values are converted before any comparison, so ratios never divide Celsius readings directly.

## Radiation, bananas, scans, and sunshine

- **Radioactivity — Bq:** decays per second. A model banana contains 0.5 g natural potassium at a rounded 31 Bq/g, giving 15.5 Bq. The [potassium-40 activity research](https://pubmed.ncbi.nlm.nih.gov/9044422/) gives the underlying activity range; the banana mass and potassium content are explicit assumptions.
- **Radiation dose — Sv:** approximate effective-dose comparisons. The informal banana-equivalent dose is 0.1 µSv, following the [EPA’s educational example](https://www.epa.gov/radtown/natural-radioactivity-food). It is not an additive dietary-dose or individual risk model: the body regulates potassium.
- Typical adult imaging examples from [RadiologyInfo (ACR/RSNA)](https://www.radiologyinfo.org/en/info/safety-xray) include dental X-ray 0.005 mSv, chest X-ray 0.1 mSv, brain CT 1.6 mSv, chest CT 6.1 mSv, and abdomen/pelvis CT 7.7 mSv. Actual dose depends on patient and protocol; values are scale references, not exam-specific estimates.
- **Absorbed dose — Gy:** absorbed ionizing-radiation energy per mass, with water-phantom models and a labeled local radiotherapy example. **Kerma — Gy** has its own pool for initial charged-particle kinetic energy transferred; it need not equal local absorbed dose. See [IAEA definitions](https://www-pub.iaea.org/MTCD/Publications/PDF/P074_scr.pdf).
- **Tissue dose equivalent — Sv:** explicit radiation-weighting models, distinct from effective dose’s tissue weighting. The models label photon factor 1 and alpha factor 20 using [OSHA’s radiation-background explanation](https://www.osha.gov/ionizing-radiation/background).
- **Radiation exposure in air — C/kg** and **absorbed dose rate — Gy/s** also have separate model pools.
- **Sunshine (UV exposure) — J/m²:** erythemally weighted UV exposure under a specified constant UV Index. The [NASA UV relation](https://avdc.gsfc.nasa.gov/pub/DSCOVR/Web_EPIC/Erythemal_UV.html) gives irradiance = UVI × 0.025 W/m²; multiply by seconds. One hour at UVI 6 is 540 J/m². It is not a CT/X-ray equivalent or an estimate of personal sunburn time. Shade, orientation, clothing, weather, and changing UV are not modeled.

Radiation/UV context is retained on exported signs, not just in the website’s reference notes. Radioactivity, exposure, absorbed dose, kerma, equivalent dose, effective dose, and UV exposure are never silently interconverted.

## Selected physical-quantity details

- **Current:** picoamperes through megaamperes; device-current examples state operating assumptions. Transient lightning peaks are labeled separately from continuous loads.
- **Temperature:** nanokelvin through megakelvin, plus Celsius; ratios use absolute kelvin temperatures. Zero kelvin is allowed, as are Celsius values at or above −273.15 °C. Fahrenheit reference examples and Celsius input are converted to kelvin before ratios; ratios do not imply perceived hotness or additive heating.
- **Amount of substance:** picomoles through megamoles. One mole counts exactly 6.02214076 × 10²³ specified entities. Every reference names its molecules or formula units. Water models assume density 1 g/mL and molar mass 18.01528 g/mol; sucrose 342.2965 g/mol; NaCl 58.44277 g/mol. These are illustrative compositional models, not statements that equal moles have equal mass.
- **Luminous intensity:** microcandela through megacandela. References specify viewing direction or an explicit beam model. Uniform light uses I = Φ/(4π); conical beams use I = Φ/[2π(1−cos(half-angle))]. Lumens and candela are distinct quantities.
- **Energy/work:** picojoules through gigajoules. Mechanical examples use mgh or ½mv²; batteries use V × Ah × 3,600; a thermochemical food Calorie is 4,184 J. Each comparison states the event or stored-energy model.

Definitions and constants follow the [BIPM SI defining constants](https://www.bipm.org/en/measurement-units/si-defining-constants), [kelvin definition](https://www.bipm.org/en/si-base-units/kelvin), [mole definition](https://www.bipm.org/en/si-base-units/mole), and [candela definition](https://www.bipm.org/en/si-base-units/candela). Astronomical temperature examples reference [NASA](https://spdf.gsfc.nasa.gov/pub/documents/old/websites/sunearthday.nasa.gov/2008/TTT/58_hotcorona.php). Other device and object values are explicitly illustrative assumptions.

The menu uses the shorter labels **Current, Temperature, Amount, Brightness, and Energy**. The explanatory notes retain the exact physical meanings, including amount of substance and luminous intensity.

## Emoji signs

The new sign personalities add checkerboard diner trim, a sunset postcard scene, dramatic hazard stripes, or mock bureau stamps. All seven styles keep editable headings, emoji objects, conversions, and download formats. The SVG renderer in `signs.mjs` grows with the text so that long comparisons remain readable.

Each sign uses the selected reference object's colorful emoji artwork, matching its comparison card. Artwork is embedded directly as SVG data in both the preview and downloaded SVG/PNG, so exports need no fonts, external image server, or internet connection. Artwork attribution appears on the sign, on the website, and here.

Emoji artwork: **Twemoji v14.0.2**, copyright Twitter, Inc and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). [Original artwork and contributors](https://github.com/twitter/twemoji/tree/v14.0.2); full license in `EMOJI-LICENSE.txt`. Artwork is included unmodified and scaled to fit the signs. `tools/sync-emoji.py` reproducibly vendors only the emoji used by the catalog into `assets/emoji-art.mjs`. If new objects introduce new emoji, run that helper with Python 3 and Node.js before testing.

The site supports all seven SI base units, all 22 specially named coherent derived units, the supplied compound-unit quantities, and selected SI-compatible units (liters and prefixed liters). Practical compound prefixes such as pF/m or nC/kg remain valid representations of their coherent units. Display values use three significant figures; calculations retain full numeric precision. Signs include the approximate input measurement and a novelty label. These signs are entertainment, not official safety signage.

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

The 20 automated tests cover complete SI-table coverage, Celsius offsets, distinct same-dimension quantities, compound denominator prefixes, banana/medical/UV models, sign context, SI scale factors, dimensional arithmetic, force/pressure assumptions, new-quantity models, absolute-temperature validation, exact scale-coverage extrema, repeated random shuffling with guaranteed scale matches, complete embedded emoji artwork, scientific notation, and text escaping. The GitHub Actions workflow runs these tests for pushes and pull requests.

## GitHub Pages

Publish the `main` branch, repository root, through Settings → Pages → Deploy from a branch. The `.nojekyll` file lets Pages serve the static files directly. Relative asset URLs support project-page hosting at `/anythingbutmetric/` and custom-domain hosting.

To add reference objects, edit the appropriate catalog module (`library.mjs`, `named-units.mjs`, `derived-units.mjs`, or `radiation.mjs`) or the original `dimensions` in `engine.mjs`. Add new quantity rows to `unit-coverage.mjs`. Keep values in the dimension's base unit; include a clear assumption and primary-source URL where available.
