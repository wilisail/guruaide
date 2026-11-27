# Official forms and case records

Checked 27 November 2026. Reference IDs below resolve in `data/source-registry.json`. This is an implementation inventory; exact live options, character limits, and role permissions still need checking against a participating teacher's current screen.

## Performance module: four teacher-facing documents

| Document | Inputs to map | Draft output |
| --- | --- | --- |
| Perencanaan Kinerja | Assigned additional duties; practice-improvement focus; competency focus; work-behaviour choices | Selection checklist and a plan summary |
| Diskusi Persiapan | Intended behaviour and efforts; observation timing; school level, class and subject | Observation-preparation draft |
| Rencana Tindak Lanjut | Difficulties; learning choice; goals; actions; timing; requested support | Follow-up draft |
| Refleksi dan Evaluasi Tindak Lanjut | Insights; progress; barriers; improvements actually achieved | Reflection draft with links to teacher-provided evidence |

Sources: S1 for planning; S2 for execution. Their retrieved update dates are 26 November 2025 and 14 July 2026 respectively.

Official stages have prerequisites. Preparation depends on the agreed plan; follow-up uses an actual observation; reflection concerns completed follow-up. Selected options and narrative responses require different interface controls. In our software, planned actions must remain distinguishable from completed activities.

The school-level Rapor Pendidikan used to inform an improvement focus is different from individual pupil report cards in e-Rapor. A teacher can supply the selected focus without importing a whole school dashboard. S1.

Performance data already flows between Ruang GTK and BKN e-Kinerja. We have not verified a public third-party write API. A copy/export workflow can stand alone. Identity and school/organisation mismatches require correction by the responsible source-data owners. S3.

## Allowance module: source records and correction requests

There is not one universal teacher-written TPG claim form in this inventory. Info GTK displays data drawn from source systems; SKTP is an official decision issued after validation. Our own intake worksheet is a preparation tool, not a replacement for that process. S4/S5.

| Record or request | Relevant information | Normal role boundary |
| --- | --- | --- |
| Teacher/assignment records in Dapodik | Employment, assignment and teaching-load status; school/class/subject context | Teacher checks; operator handles authorised source updates |
| Identity reconciliation through Verval PTK and related records | Whether relevant identity/employee records match | Operator/Dinas handles the official update |
| Certification record issue | Reported certificate/registration status and the exact unresolved message | Identify source and owner; resolve through the relevant official route |
| Account/payment inquiry | Account status, SKTP/SP2D status, period and dates | Responsibility depends on program and payment stage |
| Correction/support request | Discrepancy, chronology, earlier actions, requested next step and selected supporting evidence | Teacher sends through an appropriate official channel |

Source anchors: S3 for reconciliation; S4/S5 for allowance records and validation; S6 for non-ASN payment-stage/account issues; S7 for a specific certification-identity mapping example.

For non-ASN cases, the official FAQ distinguishes pre-SKTP validation from later payment administration involving KPPN and the bank. A published decision therefore does not mean money has already reached the account. Use that routing only within the source's scope. S6.

## Output boundaries

Our software produces a draft, a discrepancy list, a case chronology, or a request ready for review. It does not create an official SKTP, a principal's evaluation, or evidence that an activity happened. Existing valid records may require monitoring rather than another form submission. S4.

Program-specific dates must be versioned. Retrieved general Info GTK guidance and non-ASN guidance describe different schedules; do not apply one universal monthly cutoff to every teacher. S4/S5.
