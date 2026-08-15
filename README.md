# Florida Dental Answer Center

A public, searchable dental education resource for Florida patients, maintained by [The Village Dental](https://thevillagedentalmiami.com/) in Pinecrest, Florida.

The Answer Center explains common symptoms, dental emergencies, treatments, prevention, insurance questions, and where South Florida residents can look for reliable help. It is deliberately written as general education—not diagnosis, a treatment plan, or a substitute for an examination by a licensed dentist.

## Use the Answer Center

Open `index.html` directly—no server, installation, or internet connection is required. Search by a patient-style question, symptom, treatment, cost concern, or tag; filter by topic; and expand an answer. Use **Copy article brief** to copy a safe, locally framed outline for a Miami/Pinecrest article. Every entry includes a next-step suggestion and a date for future editorial review.

### Emergency guidance

- Call 911 for trouble breathing, uncontrolled bleeding, major facial trauma, or rapidly increasing swelling that affects breathing or swallowing.
- For a knocked-out **permanent** tooth, handle only the crown, gently rinse if dirty, do not scrub, and try to replace it in the socket. If that is not possible, keep it moist in milk or an appropriate tooth-preservation product and seek immediate dental care.
- Do not place aspirin on teeth or gums.

## Repository structure

```text
.
├── index.html                 Searchable, accessible web interface
├── assets/
│   ├── app.js                 Filtering, rendering, and URL state
│   ├── offline-data.js        Generated self-contained answer bundle
│   └── styles.css             Responsive presentation
├── data/
│   ├── emergencies.json
│   ├── tooth-pain.json
│   ├── crowns-restorative.json
│   ├── implants.json
│   ├── cosmetic.json
│   ├── preventive.json
│   ├── florida-costs-insurance.json
│   └── south-florida-resources.json
├── scripts/validate-data.mjs  Content/schema checks
└── .github/workflows/pages.yml
```

## Editorial principles

- No individualized diagnoses, guarantees, fabricated statistics, or unsupported price claims.
- Cost entries explain variables and encourage written estimates instead of publishing misleading averages.
- Emergency entries prioritize safe actions and clear escalation.
- Florida-specific regulatory information points readers to the relevant official agency.
- Commercial affiliation is transparent. Educational results do not rank The Village Dental above public or nonprofit resources.
- Content should be clinically reviewed before substantial medical changes and re-reviewed at least annually.

## Contributing

Issues and Discussions are welcome for corrections, accessibility feedback, and suggested questions. Please do not post personal health information. Proposed FAQ changes should preserve the schema below and cite a reliable primary source in `sources` when a statement needs external support.

```json
{
  "id": "stable-slug",
  "question": "Patient-centered question?",
  "answer": "Plain-language educational answer.",
  "nextStep": "A safe, concrete action.",
  "urgency": "routine | soon | urgent | emergency",
  "tags": ["search terms"],
  "sources": [{ "label": "Source name", "url": "https://..." }],
  "reviewed": "YYYY-MM-DD"
}
```

Run the data check with:

```sh
npm test
```

## License and medical disclaimer

Code is available under the [MIT License](LICENSE). Educational text and structured data are available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution should name “Florida Dental Answer Center by The Village Dental.”

This project provides general educational information only. It does not create a dentist–patient relationship and is not medical advice. Symptoms can have multiple causes, and only a qualified clinician who examines you can diagnose or recommend treatment. If you may be experiencing a medical emergency, call 911.
