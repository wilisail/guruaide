# Build plan and success measures

## Current implementation status — 27 November 2026

The initial prototype is implemented and live at https://guruaide.vercel.app/. Both the performance-document drafting flow and the allowance-case navigator work without paid APIs or account credentials. Syntax checks, all six existing automated tests, and the static build passed again during release recovery. Live browser checks confirmed editable performance output with a missing-time warning and the synthetic SKTP/payment inquiry.

Teacher validation, participant recruitment, media posting, and Zoom sessions are still pending. Repository publication and automatic GitHub-to-Vercel deployment are separate release tasks; see [release status](release-status.md). Examples from teachers are needed to validate the live fields and usability, not to invent project scope from nothing.

## Original implementation estimates

The estimates below are planning judgments for a template/rules prototype, not delivery commitments. They exclude official connectors, live-model integration, recruitment delays and later feedback iterations.

| Block | Owner | Deliverable | Estimated effort |
| --- | --- | --- | --- |
| Field registry and stage checks | Builder | Versioned fields, source links and missing-input/prerequisite handling | 3–4 hours |
| Performance drafting screen | Builder | Guided inputs, reusable notes, field mapping and editable copy/download output | 5–7 hours |
| Allowance case navigator | Builder | Route-aware case intake, source references and a correction/inquiry draft | 4–6 hours |
| Verification and public-alpha packaging | Builder | Representative scenario checks, readable mobile layout, README/demo and feedback entry point | 4–7 hours |
| Recruitment and teacher context | Project owner with participating teachers | Real workflows, redacted examples and consented sessions | Calendar-dependent; 30 minutes per interview |

Original indicative prototype effort: 16–24 development hours. This is a planning estimate, not a measured work log or a claim that those development blocks are still outstanding.

## Smallest useful real-world input set

- Two redacted performance examples: one current blank field set and one completed activity/reflection example.
- Three allowance cases with exact statuses, route, dates, actions already tried and what eventually resolved the issue, if known.
- One operator and one principal/reviewer willing to check the relevant routes/outputs.
- Contact/booking and Zoom details for recruitment.

Publish the source as a development project with an accurate status. Publish an alpha-demo announcement when the advertised flow works. Public source code does not establish that the administrative guidance has been validated by teachers.

## What to measure

| Stage | Measure |
| --- | --- |
| Media interest | Views where available; interest-form completions; relevant teacher contacts |
| Task commitment | Participants who supply a real task, attend a session, and try a workflow |
| Performance document | Total minutes including corrections; missing fields; unsupported claims; teacher/reviewer acceptance |
| Allowance case | Correct issue category/recipient; request completeness; missing information; next action actually taken |
| Continued value | Voluntary return for another real task; follow-up response or resolution evidence |

A payment or promotion outcome may take longer and depends on other actors. Measure immediate usefulness separately from eventual official outcomes. Avoid claiming that a successful draft caused a payment or promotion.

## Meaningful verification scenarios

- A planned action must not become a completed activity in a reflection.
- An absent observation/follow-up must remain a missing prerequisite.
- An issued SKTP with unclear payment status must not trigger irrelevant lesson-plan rewrites.
- An unknown allowance route must not receive a definitive route-specific deadline.
- An incomplete case must show what is missing rather than an eligibility verdict.
- A performance identity/organisation mismatch must point to the correct source-data owner, using the reference registry.

The implemented checks are in `tests/logic.test.mjs`. The six automated tests cover factual wording, missing prerequisites, route/period separation, payment-stage inquiries, source-data/account errors, and amount disputes. Passing synthetic checks does not establish acceptance by teachers or official services.
