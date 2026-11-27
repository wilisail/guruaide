# Standalone dependencies and MVP

## Relationship to the earlier five-rank inventory

| Earlier family | Performance module | Allowance module |
| --- | --- | --- |
| 1. Assessment/reporting | Optional aggregate evidence of classroom work; pupil names/individual gradebooks unnecessary | Usually unnecessary |
| 2. Lesson planning | An existing plan may provide observation context; no planner needs to be built | Usually unnecessary; an assignment/timetable is a different input |
| 3. Personnel/assignment records | Small profile: role, school context, period and selected focus | Relevant employment/assignment and reported validation statuses |

Neither module needs the full products for 1–3. Minimal information can be entered manually or supplied as a redacted excerpt from an existing record.

## Shared profile

- School level and public/private ownership; public SD/SMP is the pilot scope.
- Province/district and teacher role; school name is optional at first.
- Employment status, including an explicit unknown choice.
- For allowance cases, the actual reported benefit scheme/route and period, recorded separately from employment status.
- Current performance stage or exact case status.
- Source/check date.

Do not infer a benefit route purely from an ASN flag: the retrieved 2026 non-ASN FAQ also refers to eligible PPPK Paruh Waktu. S5.

## Performance entry point

1. Choose the current document/stage.
2. Enter the selected focus and existing factual notes.
3. Separate intentions from completed actions and observed results.
4. Map content to the fields; show unanswered questions.
5. Review and copy/download the draft.

Value to test: less effort preparing an acceptable draft, including correction time. For selected options, show a checklist using teacher-confirmed current option labels. Do not invent official option IDs.

## Allowance entry point

1. Select the benefit route or explicitly leave it unknown.
2. Enter the current status/error, relevant dates and steps already tried.
3. Record whether identity, certification, assignment and account statuses are known.
4. Show the issue category, missing information, source reference and proposed next contact.
5. Prepare a factual correction/inquiry request and update the case after the teacher receives a response.

Value to test: clarity about the next actionable step and fewer incomplete or misrouted requests. Final payment depends on institutions outside the application.

## Proposed initial case coverage

These are engineering proposals to validate, not a definitive eligibility engine:

- A documented source-data discrepancy: prepare an operator/office correction request.
- An identity or school/organisation mismatch in performance synchronisation: follow S3's responsible-party distinction.
- A non-ASN decision issued but payment status unclear: request the missing payment-stage information under S6.
- An account issue: prepare the appropriate inquiry using the program's official guidance.
- An unknown route, conflicting status, or unsupported error: collect the missing information and send the case for human review.

## Initial technical scope

Two standalone mobile-friendly screens, a small versioned reference registry, a template mapper, a rules-based case navigator, and copy/text-download outputs. Synthetic examples support demonstrations before real teacher documents arrive.

The first implementation can run without model access or teacher-account credentials. Language-model assistance can later improve extraction and phrasing under a disclosed budget. Official connectors require verified documentation, authorisation and an appropriate integration route; they are not a prerequisite for the first prototype.

For early testing, process redacted inputs and avoid retaining uploaded documents by default. Full identity numbers are not necessary for a drafting interview. If exact comparison is later needed, design local comparison so model prompts receive match/mismatch results rather than full identifiers.
